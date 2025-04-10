const express = require('express');
const router = express.Router();
const financeService = require('../services/financeService');

// Chatbot endpoint
router.post('/chat', (req, res) => {
    const { message } = req.body; // User's input message
    let response;

    try {
        // Example: Handle budget-related questions
        if (message.includes('budget')) {
            const income = 5000; // Example income (replace with dynamic input)
            const expenses = 3000; // Example expenses (replace with dynamic input)
            const budget = financeService.calculateBudget(income, expenses);
            response = `Your budget is ${financeService.formatCurrency(budget)}.`;
        }
        // Example: Handle savings goal questions
        else if (message.includes('savings')) {
            const currentSavings = 2000; // Example current savings
            const targetSavings = 10000; // Example target savings
            const savingsGoal = financeService.getSavingsGoal(currentSavings, targetSavings);
            response = `You need ${financeService.formatCurrency(savingsGoal)} more to reach your savings goal.`;
        }
        // Example: Handle debt-to-income ratio questions
        else if (message.includes('debt')) {
            const debt = 15000; // Example debt
            const income = 60000; // Example income
            const ratio = financeService.calculateDebtToIncomeRatio(debt, income);
            response = `Your debt-to-income ratio is ${ratio.toFixed(2)}%.`;
        }
        // Default fallback response
        else {
            response = "I'm sorry, I didn't understand your question. I can help with budgeting, savings goals, or debt-to-income ratio.";
        }

        res.json({ response });
    } catch (error) {
        console.error('Error generating response:', error);
        res.status(500).json({ response: 'An error occurred while processing your request.' });
    }
});

module.exports = router;