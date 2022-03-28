import React from "react";
import "./App.css";
import PageRouting from "./components/Routing/PageRouting";
import ThemeProvider from "./context/theme-context/theme-context";
import { LoadingContextProvider } from "./context/loading/loading-context";
import { UsersContextProvider } from "./context/users-context/users-context";
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';



function App() {
  return (
    <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:wght@500&display=swap');
</style>
      <header className="App-header">
        <ThemeProvider>
        <UsersContextProvider>
          <LoadingContextProvider>
          <PageRouting/>
          </LoadingContextProvider>
        </UsersContextProvider>
        </ThemeProvider> 
      </header>
    </div>
  );
}

export default App;
