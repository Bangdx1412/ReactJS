import { useState, createContext } from "react";
import Content from "./Content";
import "./App.css";

// Context
// 1.Create context
// 2.Provider
// 3.Cunsumer

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <button onClick={toggleTheme}>Toggle theme</button>
        <Content theme={theme} />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
