import { useEffect, useRef } from "react";
import Video from "./Video";
function App() {
  const videoRef = useRef();

  const handlePay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  };
  return (
    <div style={{ padding: "20px" }}>
      <Video ref={videoRef} />

      <button onClick={handlePay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </div>
  );
}
export default App;
