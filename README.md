# Personal Finance Coach Chatbot 💸📊

## Project Overview
This chatbot helps users create budgets, track expenses, save money, and get investment tips. Built using Python, Flask, React.js, and Rasa.

---

## 📂 Project Structure
```
├── chatbot
│   ├── data
│   │   ├── nlu.yml
│   │   ├── stories.yml
│   │   └── domain.yml
│   ├── actions.py
│   └── config.yml
├── backend
│   ├── app.py
│   └── database.py
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   │   └── BudgetForm.js
│   │   └── App.js
│   └── package.json
├── .gitignore
├── README.md
└── requirements.txt
```

---

## 🗂️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR-USERNAME/personal-finance-chatbot.git
cd personal-finance-chatbot
```

### 2. Backend Setup (Python)
```bash
cd backend
pip install -r requirements.txt
python app.py
```

### 3. Chatbot Setup (Rasa)
```bash
cd chatbot
rasa train
rasa run
```

### 4. Frontend Setup (React.js)
```bash
cd frontend
npm install
npm start
```

---

## 💾 Example Code

### `backend/app.py`
```python
from flask import Flask, request, jsonify
app = Flask(__name__)

@app.route('/add_expense', methods=['POST'])
def add_expense():
    data = request.get_json()
    return jsonify({"message": "Expense added: " + str(data)})

if __name__ == '__main__':
    app.run(port=5000)
```

### `frontend/src/components/BudgetForm.js`
```jsx
import React, { useState } from 'react';

const BudgetForm = () => {
    const [income, setIncome] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        alert(`Income: $${income}`);
    };
    return (
        <form onSubmit={handleSubmit}>
            <label>Monthly Income:</label>
            <input type="number" value={income} onChange={(e) => setIncome(e.target.value)} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default BudgetForm;
```

### `chatbot/data/nlu.yml`
```yaml
nlu:
- intent: create_budget
  examples: |
    - I want to create a budget
    - Help me set up my budget
- intent: track_expense
  examples: |
    - I spent $50 on groceries
    - Log an expense for transportation
```

---

## 🗃️ GitHub Workflow

### Branching Strategy
- **Main Branch:** Production-ready code.
- **Feature Branches:** One per feature (e.g., `backend-expenses`, `frontend-ui`).

### Basic Commands
```bash
git clone https://github.com/YOUR-USERNAME/personal-finance-chatbot.git
git branch feature-branch
git checkout feature-branch
git add .
git commit -m "Added expense tracking feature"
git push origin feature-branch
```

---

## ✅ Deployment
- Deploy the backend using **Heroku** or **AWS Lambda**.
- Host the frontend using **GitHub Pages** or **Netlify**.
- Use **GitHub Actions** for CI/CD.

---

## 📢 Contribution Guidelines
- Follow the branching strategy.
- Write clear commit messages.
- Document your code and update the `README.md`.

---

## 🙌 Team Roles
- **Project Manager:** Coordinates tasks, merges branches.
- **Backend Developer:** Builds Flask API and database.
- **Frontend Developer:** Designs React.js interface.
- **Chatbot Developer:** Configures Rasa for conversations.
- **Tester & Documenter:** Ensures functionality, writes documentation.

---

## 📋 License
MIT License

---

Now you're ready to collaborate and build your finance coach chatbot! 🚀
