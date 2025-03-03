# Personal Finance Coach Chatbot 💸📊

## 🚀 Project Overview
This chatbot helps users create budgets, track expenses, save money, and get investment tips. Built using Python, Flask, React.js, and Rasa, the chatbot provides financial assistance through a conversational interface.

---

## 📂 Project Structure
```
finance-chatbot/
├── chatbot/             # Rasa chatbot logic
│   ├── data/           # Training data (nlu, stories, rules)
│   ├── actions/        # Custom actions (API calls, database integration)
│   ├── models/        # Trained chatbot models
├── backend/           # Flask API for database & chatbot logic
│   ├── app.py         # Runs backend server
│   ├── database.py    # Database setup & expense tracking
├── frontend/          # Web-based UI for chatbot interaction
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── BudgetForm.js  # UI for budget entry
│   │   ├── App.js             # Chatbot interface
│   ├── package.json          # Frontend dependencies
├── .gitignore
├── README.md
├── requirements.txt   # Python dependencies
└── config.yml         # Rasa pipeline configuration
```

---

## 🛠 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/emmawhang/finance-chatbot.git
cd finance-chatbot
```

### 2️⃣ Backend Setup (Python & Rasa)
```bash
cd backend
pip install -r requirements.txt
rasa train
rasa run --enable-api --cors "*"
```

### 3️⃣ Chatbot Action Server Setup
```bash
rasa run actions
```

### 4️⃣ Frontend Setup (React.js)
```bash
cd frontend
npm install
npm start
```

---

## 🌍 Deployment
### 1️⃣ Deploy Backend (Rasa) on Render
1. Push your code to GitHub.
2. Go to **[Render.com](https://dashboard.render.com/)** and create a **new web service**.
3. Select your **GitHub repo** and configure:
   - **Build Command:**
     ```bash
     pip install -r requirements.txt && rasa train
     ```
   - **Start Command:**
     ```bash
     rasa run --enable-api --cors "*"
     ```
4. Click **Deploy**. Your chatbot API will be available at:
   ```
   https://finance-chatbot.onrender.com
   ```

### 2️⃣ Deploy Frontend (Web Chat UI) on GitHub Pages
1. Modify `frontend/index.html`:
   ```js
   socketUrl: "https://finance-chatbot.onrender.com",
   ```
2. Commit and push changes to GitHub:
   ```bash
   git add .
   git commit -m "Deploy frontend"
   git push origin main
   ```
3. Enable **GitHub Pages** in repository **Settings > Pages**.
4. Your chatbot UI will be available at:
   ```
   https://your-username.github.io/finance-chatbot/
   ```

---

## 🚀 Features
✔️ **Conversational Budgeting** – Users can set budgets based on income & expenses.  
✔️ **Expense Tracking** – Users can log daily expenses.  
✔️ **Investment Tips** – Provides financial advice based on user goals.  
✔️ **Database Integration** – Stores expense records using SQLite.  
✔️ **Web Chat UI** – Users can chat from a website interface.  
✔️ **Cloud Deployment** – Accessible from anywhere using **Render & GitHub Pages**.  

---

## 🔗 API Endpoints
### Send a Message to Chatbot
```bash
POST https://finance-chatbot.onrender.com/webhooks/rest/webhook
```
#### Example Request:
```json
{
  "sender": "user123",
  "message": "I spent $30 on coffee"
}
```
#### Example Response:
```json
[
  {
    "recipient_id": "user123",
    "text": "Got it! Your expense has been recorded."
  }
]
```

---

## ✅ Contribution Guidelines
- Follow the **branching strategy**.
- Write **clear commit messages**.
- Document any changes in **README.md**.
- Use **GitHub Issues** for bug tracking.

---

## 📋 License
MIT License

---
