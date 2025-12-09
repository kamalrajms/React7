import React from "react";

export default function ConditionalRendering() {
  const user = true;
  return (
    <div>
      {/* ternary operator */}
      {user ? <p>welcome back...!</p> : <p>Please login....!</p>}

      {/* logical operator */}
      {user && (
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia iure
          maiores harum minus molestiae possimus quibusdam quaerat delectus
          quasi voluptas? Numquam a quis provident at tempore corporis.
          Consequuntur, eos exercitationem?
        </p>
      )}
    </div>
  );
}
