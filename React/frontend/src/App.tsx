import React from 'react';
import './App.css';
import Dog from "./components/Dog/Dog";

const App = () => {
  return (
    <div className="App">
        <header><h1>Velg den søteste:</h1></header>
        <Dog/>
    </div>
  );
}

export default App;
