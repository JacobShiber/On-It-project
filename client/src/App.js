import React from "react";
import "./App.css";
import PageRouting from "./components/Routing/PageRouting";
import { LoadingContextProvider } from "./context/loading/loading-context";
import { UsersContextProvider } from "./context/users-context/users-context";


function App() {
  return (
    <div className="App">
      <style>
@import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:wght@500&display=swap');
</style>
      <header className="App-header">
        <UsersContextProvider>
          <LoadingContextProvider>
          <PageRouting/>
          </LoadingContextProvider>
          {/* <GradesTable/> */}
        </UsersContextProvider>
      </header>
    </div>
  );
}

export default App;
