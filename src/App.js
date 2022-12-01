
import React from 'react';
import './App.css';
import CreateBook from './components/CreateBook';
import UpdateBook from './components/UpdateBook';




function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CreateBook/>
      <UpdateBook/>
    
      </header>
    </div>
  );

}

export default App;
