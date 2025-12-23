import React, { useState, useEffect } from "react";

export default function APIintegration() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        setLoading(true);
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          throw new Error("failed to featch data");
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <div>
      <h2>user List</h2>
      {user.map((user) => (
        <div
          key={user.id}
          style={{
            border: "1px solid black",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{user.name}</h3>
          <p>
            <strong>Email:</strong>
            {user.email}
          </p>
        </div>
      ))}
    </div>
  );
}
