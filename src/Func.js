import { useState } from "react";

function Func(props) {
  const [value, setValue] = useState("Submit the Form to see this text change");
  const [input, setInput] = useState("");

  function handleInput(evt) {
    setInput(evt.target.value);
  }

  return (
    <div>
      <h2>{value}</h2>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          setValue(input);
        }}
      >
        <input type="text" onChange={handleInput} value={input} />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Func;
