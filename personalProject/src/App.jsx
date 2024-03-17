import { useState } from "react";
import "./App.css";
import Greet from "./Greet";

function App() {
  const [fname, setFname] = useState("bhau");

  function change() {
    setFname(Math.random());
  }
  return (
    <>
      <h1>welcome</h1>
      <Greet name="bhavesh" roll="5" id="008" />
      <Greet name="hghjh" roll="SOXLbx" id="ahvhv" />
      <Greet />
    </>
  );
}

export default App;
