import { useState } from "react";

// Response tu API tra ve
const courses = [
  { id: 1, name: "HTML,CSS" },
  { id: 2, name: "Js" },
  { id: 3, name: "Reactjs" },
];
function App() {
  // One way byding
  const [checked, setChecked] = useState(2);

  const handleSubmit = () => {};
  console.log(checked);

  return (
    <div style={{ padding: "20px" }}>
      {courses.map((cour) => (
        <div key={cour.id}>
          <input
            type="radio"
            checked={checked === cour.id}
            onChange={() => setChecked(cour.id)}
          />
          {cour.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
