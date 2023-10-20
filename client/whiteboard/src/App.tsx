import React, { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((e) => console.error(e));
  }, []);

  return (
    <>
      {users.map((user) => (
        <p>{user}</p>
      ))}
    </>
  );
};

export default App;
