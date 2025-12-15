import React, { useState, useEffect } from "react";

export default function UseeffectTimer() {
  const [sec, setSec] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;
    if (isRunning) {
      intervalID = setInterval(() => {
        setSec((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(intervalID);
  }, [isRunning]);

  const handleStart = () => {
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
  };
  const handleReset = () => {
    setSec(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h1>Timer:{sec}</h1>
      <button onClick={handleStart}>start</button>
      <button onClick={handleStop}>stop</button>
      <button onClick={handleReset}>reset</button>
    </div>
  );
}
