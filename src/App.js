import { useState } from "react";

// Response tu API tra ve
const courses = [
  { id: 1, name: "HTML,CSS" },
  { id: 2, name: "Js" },
  { id: 3, name: "Reactjs" },
];
function App() {
  // One way byding
  const [checked, setChecked] = useState([]);

  const handleSubmit = () => {
    console.log({ ids: checked });
  };
  console.log(checked);
  const handleCheck = (id) => {
    setChecked((prev) => {
      const isChecked = checked.includes(id);
      if (isChecked) {
        // Uncheck
        return checked.filter((item) => item !== id);
      } else {
        return [...prev, id];
      }
    });
  };
  return (
    <div style={{ padding: "20px" }}>
      {courses.map((cour) => (
        <div key={cour.id}>
          <input
            type="checkbox"
            checked={checked.includes(cour.id)}
            onChange={() => handleCheck(cour.id)}
          />
          {cour.name}
        </div>
      ))}
      <button onClick={handleSubmit}>Register</button>
    </div>
  );
}

export default App;
