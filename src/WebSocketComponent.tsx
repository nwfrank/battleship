import React, { useEffect, useRef, useState } from "react";

function WebSocketComponent() {
  const [message, setMessage] = useState("");
  const [receivedMessages, setReceivedMessages] = useState([]);
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080"); // Replace with your WebSocket server URL
    wsRef.current = ws;

    ws.onopen = () => {
      console.log("WebSocket connected");
    };

    ws.onmessage = (event: { data: any }): void => {
      setReceivedMessages(
        (prevMessages) => [...prevMessages, event.data] as any
      );
    };

    ws.onclose = () => {
      console.log("WebSocket disconnected");
    };

    ws.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    return () => {
      ws.close(); // Clean up on component unmount
    };
  }, []);

  const sendMessage = () => {
    if (wsRef.current && wsRef.current.readyState === WebSocket.OPEN) {
      wsRef.current.send(message);
      setMessage("");
    } else {
      console.warn("WebSocket is not open");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <div>
        <h3>Received Messages:</h3>
        <ul>
          {receivedMessages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default WebSocketComponent;
