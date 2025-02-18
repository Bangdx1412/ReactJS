import { useContext } from "react";
import Contex from "./Context";

export const useStore = () => {
  const [state, Dispatch] = useContext(Contex);
  return [state, Dispatch];
};
