import React from "react";
import Widget from "rasa-webchat";

function App() {
    return (
        <div>
            <h1>🚀 Personal Finance Chatbot</h1>
            <p>Chat with me to track expenses and get financial tips!</p>

            <Widget
                initPayload="/greet"
                socketUrl="http://localhost:5005"
                socketPath="/socket.io/"
                customData={{ language: "en" }}
                title="Finance Bot"
                subtitle="Track expenses & get investment tips"
                showCloseButton={true}
                fullScreenMode={false}
            />
        </div>
    );
}

export default App;
