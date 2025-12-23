import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCustomAPI from "../Component/useCustomAPI";

export default function Home() {
  const {
    data: user,
    error,
    loading,
  } = useCustomAPI("https://jsonplaceholder.typicode.com/users");
  const page = useNavigate();

  const [count, setCount] = useState(0);
  useEffect(() => {
    if (count >= 5) {
      page("/Service");
    }
  }, [count]);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h3>userDAta</h3>
      {user.map((user) => (
        <h4 key={user.id}>{user.name}</h4>
      ))}

      <h1>Home component</h1>
      <button onClick={() => page("/Service")}> Move to service</button>

      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}
