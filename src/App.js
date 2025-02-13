// Mounted / Unmounted
import { useState } from "react";
import Content from "./Content";
function App() {
  const [show, setShow] = useState(false);
  return (
    <div style={{ padding: 32 }}>
      <button onClick={() => setShow(!show)}>Tonggo</button>
      {show && <Content />}
    </div>
  );
}

export default App;
