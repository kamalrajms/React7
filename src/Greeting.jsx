import React from "react";

export default function Greeting(props) {
  return (
    <div className="Greeting">
      <h1>
        React class--{props.FirstName}---{props.age}
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem fuga
        commodi atque sequi. Natus, recusandae nemo accusantium rerum voluptas
        doloribus nostrum et sapiente odio consectetur, excepturi cumque. Velit,
        ab nobis.
      </p>
    </div>
  );
}
