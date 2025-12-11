import React from "react";
import "./ConditionalRendering.css";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div className="Condition">
      {/* ternary operator */}
      {user ? <p>welcome back...!</p> : <p>Please login....!</p>}

      {/* logical operator */}
      {user && (
        <p style={{ backgroundColor: "orange", color: "#fff" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure
          maiores harum minus molestiae possimus quibusdam quaerat delectus
          quasi voluptas? Numquam a quis provident at tempore corporis.
          Consequuntur, eos exercitationem?
        </p>
      )}
    </div>
  );
}
