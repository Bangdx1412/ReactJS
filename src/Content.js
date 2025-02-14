import { memo } from "react";

function Content({ onIncrease }) {
  console.log("Render");

  return (
    <>
      <h2>Hi</h2>
      <button onClick={onIncrease}>Click me!</button>
    </>
  );
}

export default memo(Content);
