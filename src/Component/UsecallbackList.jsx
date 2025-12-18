import React, { useState, useEffect } from "react";

export default function UsecallbackList({ getItem }) {
  const [item, setItem] = useState([]);
  useEffect(() => {
    setItem(getItem());
    console.log("updating items");
  }, [getItem]);

  return (
    <div>
      {item.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
}
