import React, {useState, useEffect} from 'react';
import './App.css';

function App() {
  const [test, setTest] = useState(false)
  
  useEffect(() => {
    console.log("this mounted")
    const getData = async () => {
      const data = await fetch("/api/v1")
      console.log(data, "this is the mounted data")
    }
    getData()
  })

  
  return (
    <div className="App">
      <header className="App-header">
        hello
      </header>
    </div>
  );
}

export default App;
