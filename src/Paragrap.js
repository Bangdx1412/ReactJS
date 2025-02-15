import { useContext } from "react";
import { ThemeContext } from "./App";
function Paragrap() {
  const theme = useContext(ThemeContext);

  return (
    <p className={theme}>
      Khi nao ban can may ao giap sat den ngay pho hang dong nhe
      {/* <span>{theme}</span> */}
    </p>
  );
}
export default Paragrap;
