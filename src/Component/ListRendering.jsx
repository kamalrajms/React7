import React from "react";

export default function ListRendering() {
  const fruites = ["apple", "mango", "orange", "orange", "grapees"];

  const users = [
    { id: 1, name: "kumar" },
    { id: 2, name: "arun" },
    { id: 3, name: "hari" },
  ];
  return (
    <div>
      <h2>fruits data</h2>
      <ul>
        {fruites.map((name, ind) => (
          <li key={ind}>{name}</li>
        ))}
      </ul>
      <h2>User data</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.id}.{user.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
// user:{id: 1, name: "kumar" }
// user:{id: 2, name: "arun" }
