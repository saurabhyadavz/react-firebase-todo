import React, { useState } from 'react';
import './App.css';

function App() {
   const [todos, setTodos] = useState(['Take something out','Take garbage out']);

  return (
    <div className="App">
      <h1>Hello world</h1>
      <input/>
      <button>Add todo</button>
    </div>
  );
}

export default App;