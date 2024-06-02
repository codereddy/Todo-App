import React from 'react';
import './App.css';
import Todo from './components/Todo';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Manage Your Todos
      </header>
      <Todo/>
    </div>
  );
}

export default App;
