import React, { useContext, useEffect, useState } from "react";
import { socket } from "./socket";

const App = () => {
  useEffect(() => {
    socket.connect();

    return () => socket.disconnect();
  }, []);
  const [message, setMessage] = useState("");

  return (
    <>
      <input value={message} onChange={(e) => setMessage(e.target.value)} />
      <button
        onClick={() => {
          console.log("sending message...");
          socket.emit('message', message)
        }}
      >
        Send message
      </button>
    </>
  );
};

export default App;
