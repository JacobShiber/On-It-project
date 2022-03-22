import React from "react";
import "./App.css";
import PageRouting from "./components/Routing/PageRouting";
import { UsersContextProvider } from "./context/users-context/users-context";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersContextProvider>
          {/* <GradesTable/> */}
          <PageRouting/>
        </UsersContextProvider>

      </header>
    </div>
  );
}

export default App;
