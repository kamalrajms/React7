import React, { useEffect, useRef, useState } from "react";

export default function UseRefHook() {
  const inputRef = useRef();

  //   eg1
  const focusInput = () => {
    inputRef.current.focus();
  };
  //   eg2

  const [sec, setSec] = useState(0);
  const interRef = useRef();
  useEffect(() => {
    interRef.current = setInterval(() => {
      setSec((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interRef.current);
  }, []);
  
  return (
    <div>
      {/* eg1 */}
      <div>
        <input type="text" placeholder="enter data" ref={inputRef} />
        <button onClick={focusInput}>Focus input</button>
      </div>
      {/* eg2 */}
      <div>
        <p>timer:{sec}</p>
        <button onClick={() => clearInterval(interRef.current)}>stop</button>
      </div>
    </div>
  );
}
