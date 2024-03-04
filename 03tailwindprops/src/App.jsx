import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  let randomTxt = "matata";

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 border rounded-full mb-4">
        hello v world
      </h1>
      <Card username="bhavesh" btnText="hit me" />
      <Card username="bunny" btnText={randomTxt} />
    </>
  );
}

export default App;
