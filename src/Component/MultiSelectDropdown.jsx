import React, { useState } from "react";

export default function MultiSelectDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [select, setSelect] = useState([]);

  const options = [
    { id: 1, lable: "React" },
    { id: 2, lable: "Angular" },
    { id: 3, lable: "js" },
  ];

  const handleChange = (option) => {
    setSelect((perv) =>
      perv.includes(option)
        ? perv.filter((item) => item !== option)
        : [...perv, option]
    );
  };
  return (
    <div style={{ width: "250px", position: "relative" }}>
      {/* select box */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        style={{
          border: "1px solid black",
          padding: "10px",
          cursor: "pointer",
        }}
      >
        {select.length > 0 ? select.join(", ") : "selet technologies"}
      </div>
      {/* dropDown */}
      {isOpen && (
        <div
          style={{
            border: "1px solid black",
            position: "absolute",
            width: "100%",
            background: "#fff",
            zIndex: 1,
          }}
        >
          {options.map((opt) => (
            <label key={opt.id} style={{ display: "block", padding: "10px" }}>
              <input
                type="checkbox"
                checked={select.includes(opt.lable)}
                onChange={() => handleChange(opt.lable)}
              />
              {opt.lable}
            </label>
          ))}
        </div>
      )}
    </div>
  );
}
