import React from "react";

function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
    console.log(`${event.target.name}: ${event.target.value}`);
  }

  return (
    <>
      <input type="password" onChange={handleChange} />
    </>
  );
}

export default Keypad;
