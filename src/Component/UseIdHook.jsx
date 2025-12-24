import React, { useId } from "react";

export default function UseIdHook() {
  const id = useId();
  console.log(id);
  const email = useId();
  console.log(email);
  const age = useId();
  console.log(age);

  return (
    <div>
      <h2>UseID hook</h2>
      <nav>
        <label htmlFor={id}>Name</label>
        <input type="text" id={id} />
      </nav>
      <nav>
        <label htmlFor={email}>email</label>
        <input type="text" id={email} />
      </nav>
      <nav>
        <label htmlFor={`${age}-age`}>age</label>
        <input type="text" id={`${age}-age`} />
      </nav>
    </div>
  );
}
