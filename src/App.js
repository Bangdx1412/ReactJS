// import Content from "./Content";
import { useState } from "react";
// const gifts = ["CPU1", "adb", "hehe"];

// Response tu API tra ve
const courses = [
  { id: 1, name: "HTML,CSS" },
  { id: 2, name: "Js" },
  { id: 3, name: "Reactjs" },
];
function App() {
  // const [gift, setGift] = useState();
  // const randomGift = () => {
  //   const index = Math.floor(Math.random() * gifts.length);
  //   setGift(gifts[index]);
  // };

  // One way byding
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    console.log({ name, email });
  };
  // console.log(name);

  return (
    <div style={{ padding: "20px" }}>
      {/* <h1>{gift || "Chua co phan thuong"}</h1>
      <button onClick={randomGift}>Lay thuong</button> */}
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
