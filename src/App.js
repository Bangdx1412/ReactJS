import { useReducer, useRef } from "react";
// useReducer
// 1.Init state:
const initState = {
  job: "",
  jobs: [],
};

// 2.Actions:
const SET_JOB = "set_job";
const ADD_JOB = "add_job";
const DELETE_JOB = "delete_job";

const setJOB = (payload) => {
  return {
    type: SET_JOB,
    payload,
  };
};

const addJob = (payload) => {
  return {
    type: ADD_JOB,
    payload,
  };
};
const deleteJob = (payload) => {
  return {
    type: DELETE_JOB,
    payload,
  };
};

// 3.Reducer
const reducer = (state, action) => {
  switch (action.type) {
    case SET_JOB:
      return {
        ...state,
        job: action.payload,
      };
    case ADD_JOB:
      return {
        ...state,
        jobs: [...state.jobs, action.payload],
      };
    case DELETE_JOB:
      const newJobs = [...state.jobs];
      console.log(newJobs);
      newJobs.splice(action.payload, 1);
      return {
        ...state,
        jobs: newJobs,
      };

    default:
      return "INVALID ";
  }
};

// 4.Dispatch (kich hoat)

function App() {
  const inputRef = useRef();
  const [state, Dispatch] = useReducer(reducer, initState);
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
