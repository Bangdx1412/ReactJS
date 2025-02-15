import { useReducer, useRef } from "react";
import reducer, { initState } from "./reducer";
import { addJob, setJOB, deleteJob } from "./actions";
import logger from "./logger";

function App() {
  const inputRef = useRef();
  const [state, Dispatch] = useReducer(logger(reducer), initState);
  const { job, jobs } = state;
  const handleSubmit = () => {
    Dispatch(addJob(job));
    Dispatch(setJOB(""));
    inputRef.current.focus();
  };
  return (
    <div style={{ padding: 32 }}>
      <h3>Todo</h3>
      <input
        ref={inputRef}
        value={job}
        onChange={(e) => {
          Dispatch(setJOB(e.target.value));
        }}
        placeholder="Enter todo"
      />
      <button onClick={handleSubmit}>Add</button>
      <ul>
        {jobs.map((job, index) => (
          <li key={index}>
            {job}
            <span onClick={() => Dispatch(deleteJob(index))}>X</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
