/* eslint-disable react/prop-types */
import { useState } from "react";

const ChatbotPopup = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { sender: "bot", text: "Hello! How can I help you today?" },
  ]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") return;

    // Append user message to chat history
    setChatHistory([...chatHistory, { sender: "user", text: message }]);

    // Simulate a bot response (Replace this with your AI integration)
    setTimeout(() => {
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { sender: "bot", text: "I'm here to help! Tell me more." },
      ]);
    }, 500);

    setMessage("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chatbot-popup-container">
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header" style={{ background: theme }}>
            <div className="chatbot-info">
              <img className="chatbot-img" src="/robot.jpg" alt="" />
              <span>Chatbot</span>
            </div>
            <button onClick={togglePopup} className="close-btn">
              &times;
            </button>
          </div>
          <div className="chatbot-body">
            {chatHistory.map((chat, index) => (
              <div key={index} className={`chat-message ${chat.sender}`}>
                {chat.text}
              </div>
            ))}
          </div>
          <div className="chatbot-footer">
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <button onClick={handleSendMessage}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                style={{ color: theme }}
              >
                <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480l0-83.6c0-4 1.5-7.8 4.2-10.8L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
              </svg>
            </button>
          </div>
        </div>
      )}
      {/* Toggle Button */}
      <button
        onClick={togglePopup}
        className={isOpen ? "hidden" : "chatbot-toggle"}
      >
        <img src="/robot.jpg" className="toggle-icon" alt="" />
      </button>
    </div>
  );
};

export default ChatbotPopup;
