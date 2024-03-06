import { useState } from "react";

import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);
  // let counter = 5;

  function addVal() {
    if (counter < 50) {
      setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // setCounter(counter + 1);
      // still the output will be same, because the are processed in batches & to do the actual change you need to use callback for prevCounter
      console.log("clicked", counter);
    }
  }

  function remVal() {
    if (counter > 0) {
      setCounter(counter - 1);
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
