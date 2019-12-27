import React, {useState} from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState(false)
  const getData = async () => {
    const data = await fetch("/api/v1")
    console.log(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        hello
      </header>
      <button onClick={getData}>Data</button>
    </div>
  );
}

export default App;
