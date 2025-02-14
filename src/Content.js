import { useRef, useState, useEffect } from "react";
// Lưu các giá trị qua một tha chiếu bên ngoài
//function component

function Content() {
  const [count, setCount] = useState(60);

  const timerID = useRef();
  const preCount = useRef();
  const h1ref = useRef();
  useEffect(() => {
    preCount.current = count;
  }, [count]);
  useEffect(() => {
    const rect = h1ref.current.getBoundingClientRect();
    console.log(rect);
  });
  const handleStart = () => {
    timerID.current = setInterval(() => {
      setCount((pre) => pre - 1);
    }, 1000);
  };
  const handleStop = () => {
    clearInterval(timerID.current);
  };
  console.log(count, preCount.current);

  return (
    <div>
      <h1 ref={h1ref}>{count}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default Content;
