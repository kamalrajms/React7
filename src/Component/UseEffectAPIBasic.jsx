import React, { useState, useEffect } from "react";

export default function UseEffectAPIBasic() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        // console.log(data);
      });
  }, []);
  console.log(users);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}--{user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}
// users=[{},{},{}...]
