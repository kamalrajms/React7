import React, { useState } from "react";

export default function ChatApp() {
  const [message, setMesssage] = useState("");
  const [delay, setDelay] = useState(5);
  const [isSending, setIsSending] = useState(false);
  const [timerID, setTimerID] = useState(null);
  const [sendMessage, setSendMesaage] = useState("");

  const handleSend = () => {
    setIsSending(true);
    const id = setTimeout(() => {
      setSendMesaage(message);
      setMesssage("");
      setIsSending(false);
    }, delay * 1000);
    setTimerID(id);
  };
  const handlecancel = () => {
    if (timerID) clearTimeout(timerID);
    setIsSending(false);
  };
  return (
    <div className="chatApp">
      <div className="chat">
        <h2>DM Delay Buttom</h2>
        <textarea
          placeholder="enter a message"
          value={message}
          onChange={(e) => setMesssage(e.target.value)}
        ></textarea>
        <input
          type="number"
          value={delay}
          onChange={(e) => setDelay(e.target.value)}
        />
        {!isSending ? (
          <button onClick={handleSend}>send with delay</button>
        ) : (
          <button onClick={handlecancel}>Cancel Sending</button>
        )}
        {sendMessage && (
          <div>
            <h3>Received message</h3>
            <h4>{sendMessage}</h4>
          </div>
        )}
      </div>
    </div>
  );
}
