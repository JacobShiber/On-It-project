import { createContext, useState } from "react";

export const themeContext = createContext();

let Themes = {
  lightPurpleTheme: {
    backgroundColor: "#9932CC",
    color: "white",
  },

  lightCyanTheme: {
    backgroundColor: "cornflowerblue",
    color: "white",
  },

  purpleButton: {
    backgroundColor: "#9932CC",
    color: "white",
    border: "none",
  },

  cyanButton: {
    backgroundColor: "cornflowerblue",
    color: "white",
    border: "none",
  },

  cyanSelect: {
    border: "3px solid cornflowerblue",
  },

  purpleSelect: {
    border: "3px solid #9932CC",
  },
};

const ThemeProvider = ({ children }) => {
  let [themeColor, setThemeColor] = useState(Themes);
  let [purpleMode, setPurpleMode] = useState(true);
  return (
    <themeContext.Provider value={{ themeColor, setThemeColor, purpleMode, setPurpleMode }}>
      {children}
    </themeContext.Provider>
  );
};

export default ThemeProvider;
