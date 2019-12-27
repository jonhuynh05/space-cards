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
    <div className="container">
        <div className="header">
            Get Ready To Learn About Space!
        </div>
        <div className="description">
            CosmoCards is here to help you learn about all things space. Pick one of the categories below to start going through flashcards!
        </div>
        <div>
            Select A Category
        </div>
    </div>
  );
}

export default App;
