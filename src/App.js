import { useState } from "react";

function App() {
  const [list, setList] = useState("");
  const [lists, setLists] = useState(() => {
    // json.parse để chuyển thành mảng
    const localLists = JSON.parse(localStorage.getItem("list"));
    return localLists ?? [];
  });

  const handleSubmit = () => {
    setLists((prev) => {
      const newLists = [...prev, list];
      //  chuyển thành chuỗi json và lưu vào localStorage
      const jsonList = JSON.stringify(newLists);
      localStorage.setItem("list", jsonList);

      return newLists;
    });
    setList("");
  };
  const handleDelete = (id) => {
    setLists((prev) => {
      const updatedLists = prev.filter((_, i) => i !== id);
      localStorage.setItem("list", JSON.stringify(updatedLists));
      return updatedLists;
    });
  };
  return (
    <div style={{ padding: 32 }}>
      <input value={list} onChange={(e) => setList(e.target.value)} />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {lists.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDelete(index)}>Xoa</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
