import "./App.css";
import { useState } from "react";
import { getResponse } from "./service/model-service";
import { save, search } from "./service/data-store-service";

function App() {
  const [messageElements, setMessageElements] = useState([]);

  const getMessageElement = (message) => {
    return (
      <div
        key={Math.random()}
        className={
          "message " + (message.isUserMessage ? "user-message" : "ai-message")
        }
      >
        {message.text}
      </div>
    );
  };

  const [userMessage, setUserMessage] = useState("");

  const addMessage = (messageText, isUserMessage) => {
    console.log(messageElements.length);
    const message = { text: messageText, isUserMessage: isUserMessage };
    setMessageElements((currentMessageElements) => [
      ...currentMessageElements,
      getMessageElement(message),
    ]);
  };

  const addUserMessage = () => {
    addMessage(userMessage, true);
    setUserMessage("");
    getResponse(userMessage).then((response) => {
      addMessage(response, false);
      save(userMessage, response);
    });
  };

  return (
    <div className="chat-container">
      <div className="chat-header">Jarvis</div>
      <div className="messages" id="messages">
        {messageElements}
      </div>
      <div className="input-container">
        <input
          type="text"
          id="user-input"
          placeholder="Type your message..."
          value={userMessage}
          onChange={(event) => setUserMessage(event.target.value)}
        ></input>
        <button id="send-button" onClick={() => addUserMessage()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default App;
