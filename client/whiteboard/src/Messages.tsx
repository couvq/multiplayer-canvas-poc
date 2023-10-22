import React, { useEffect, useState } from "react";
import { socket } from "./socket";

const Messages = () => {
  useEffect(() => {
      const handleNewMessage = (message: string) => {
        setMessages(prevMessages => [...prevMessages, message])
      }
      socket.on('message', handleNewMessage)

      return () => socket.off('message', handleNewMessage)
  }, []);
  const [messages, setMessages] = useState<string[]>([]);

  return (
    <>
      {messages.map((message) => (
        <p id="message">{message}</p>
      ))}
    </>
  );
};

export default Messages;
