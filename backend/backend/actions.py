import sqlite3
from rasa_sdk import Action
from rasa_sdk.executor import CollectingDispatcher
from rasa_sdk.events import SlotSet

class ActionLogExpense(Action):
    def name(self):
        return "action_log_expense"

    def run(self, dispatcher, tracker, domain):
        amount = tracker.get_slot("amount")
        category = tracker.get_slot("category")

        if not amount or not category:
            dispatcher.utter_message(text="Please provide both the amount and category.")
            return []

        # Connect to the SQLite database
        conn = sqlite3.connect("backend/finance.db")
        cursor = conn.cursor()
        cursor.execute("INSERT INTO expenses (amount, category) VALUES (?, ?)", (amount, category))
        conn.commit()
        conn.close()

        dispatcher.utter_message(text=f"Your expense of ${amount} for {category} has been recorded.")
        return [SlotSet("amount", None), SlotSet("category", None)]
