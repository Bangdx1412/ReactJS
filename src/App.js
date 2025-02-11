import { useState } from "react";

function App() {
  // One way byding
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };

  return (
    <div style={{ padding: "20px" }}>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
