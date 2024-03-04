import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  function addVal() {
    if (counter < 20) {
      counter += 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  }

  function remVal() {
    if (counter > 0) {
      counter -= 1;
      setCounter(counter);
      console.log("clicked", counter);
    }
  }

  return (
    <>
      <h1>counter project</h1>
      <h2>counter val: {counter} </h2>

      <button onClick={addVal}>add val</button>
      <br />
      <br />
      <button onClick={remVal}>remove val</button>
    </>
  );
}

export default App;
