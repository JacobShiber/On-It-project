import React from 'react';
import './App.css';
import PageRouting from './components/Routing/PageRouting';
import { UsersContextProvider } from './context/users-context/users-context';
import GradesTable from "./components/pages/grades-table/grades-table"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Mochiy+Pop+One&family=Poppins:wght@500&display=swap');
        </style>
        <UsersContextProvider>
          <GradesTable />
          {/* <Footer /> */}
          {/* <Navbar /> */}
          <PageRouting/>
        </UsersContextProvider>

      </header>
    </div>
  );
}

export default App;
