import sqlite3

def create_tables():
    conn = sqlite3.connect("finance.db")  # Path to the SQLite database
    cursor = conn.cursor()

    # Create a table for expense tracking
    cursor.execute("""
    CREATE TABLE IF NOT EXISTS expenses (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        amount FLOAT NOT NULL,
        category TEXT NOT NULL,
        timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
    )
    """)

    conn.commit()
    conn.close()

if __name__ == "__main__":
    create_tables()
    print("Database initialized successfully!")
