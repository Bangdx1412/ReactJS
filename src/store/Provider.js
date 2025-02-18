import { useReducer } from "react";
import Contex from "./Context";
import reducer, { initState } from "./reducer";

function Provider({ children }) {
  const [state, Dispatch] = useReducer(reducer, initState);

  return (
    <Contex.Provider value={[state, Dispatch]}>{children}</Contex.Provider>
  );
}
export default Provider;
