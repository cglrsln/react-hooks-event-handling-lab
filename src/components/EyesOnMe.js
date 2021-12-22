import React from "react";

function EyesOnMe() {
  function handleClick() {
    console.log(`Button was clicked`);
  }

  return (
    <>
      <button
        onFocus={(e) => {
          console.log("Good!");
        }}
        onBlur={(e) => {
          console.log("Hey! Eyes on me!");
        }}
        placeholder="focus and blur"
        onClick={() => handleClick(1)}
      >
        Eyes on me
      </button>
    </>
  );
}

export default EyesOnMe;
