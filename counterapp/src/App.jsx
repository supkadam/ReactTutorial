import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/css/App.css";

function App() {
  const [counter, setCounter] = useState(10);
  const [error, setError] = useState("");

  const increaseCounter = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      setError("");
    }else{
      document.getElementById('error').innerHTML = '* Max limit is reached';
      setError("* Max limit is reached");
    }
  };

  const decreaseCounter = () => {
    if (counter > 10) {
      setCounter(counter - 1);
      setError("");
    }else{
      document.getElementById('error').innerHTML = '* Min limit is reached';
      setError("* Min limit is reached");
    }
  };

  return (
    <>
      <p id="error">{error}</p>
      <div className="container">
        <h1>Counter App</h1>
        <h2>Counter : {counter}</h2>
        <button onClick={increaseCounter}>Increase</button>
        <button onClick={decreaseCounter}>Decrease</button>
      </div>
    </>
  );
}

export default App;
