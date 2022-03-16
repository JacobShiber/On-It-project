import React from 'react';
import './App.css';
import PageRouting from './components/Routing/PageRouting';
import {UsersContextProvider} from './context/users-context/users-context';
// import UsersGrades from './components/features/user-grades-table/user-grade-table';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UsersContextProvider>
          {/* <UsersGrades/> */}
          <PageRouting/>
          
        </UsersContextProvider>
      </header>
    </div>
  );
}

export default App;
