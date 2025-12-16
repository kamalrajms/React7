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
  //eg3

  const [newProductImg, setNweProductImg] = useState(true);
  const [imgURL, setImgURL] = useState("");
  const ImGRef = useRef(0);

  const HandleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const Preview = URL.createObjectURL(file);
      setImgURL(Preview);
      setNweProductImg(false);
    }
  };
  // console.log(imgURL);

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
        {/* eg3 */}
      </div>
      <input
        type="file"
        ref={ImGRef}
        accept="image/*"
        onChange={HandleImage}
        hidden
      />
      {newProductImg ? (
        <div
          className="Img-Container"
          onClick={() => {
            ImGRef.current.click();
          }}
        >
          upLoading image...!
        </div>
      ) : (
        <img
          onClick={() => {
            ImGRef.current.click();
          }}
          className="image"
          src={imgURL}
        />
      )}
    </div>
  );
}
