import { useStore, actions } from "./store";
function App() {
  const [state, Dispatch] = useStore();
  const { todos, todoInput } = state;
  console.log(todoInput);
  const handleSubmit = () => {
    Dispatch(actions.addTodo(todoInput));
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        value={todoInput}
        onChange={(e) => {
          Dispatch(actions.setTodoInput(e.target.value));
        }}
      />
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
}
export default App;
