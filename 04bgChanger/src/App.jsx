import { useState } from "react";

function App() {
  let [color, setColor] = useState("white");

  // function red() {
  //   color = "red";
  //   setColor(color);
  // }
  // function blue() {
  //   color = "blue";
  //   setColor(color);
  // }
  // function green() {
  //   color = "green";
  //   setColor(color);
  // }
  // function yellow() {
  //   color = "yellow";
  //   setColor(color);
  // }
  // function pink() {
  //   color = "pink";
  //   setColor(color);
  // }
  // function orange() {
  //   color = "orange";
  //   setColor(color);
  // }

  return (
    <>
      <div
        style={{ backgroundColor: color }} //main part
        className="h-screen w-full flex justify-center items-center"
      >
        <div
          className="mt-[400px] bg-white h-[100px] w-[800px] flex justify-around items-center rounded-3xl 
drop-shadow-xl"
        >
          <button
            onClick={() => setColor("red")} //main part
            className="p-3 bg-red-500 text-white rounded-2xl"
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="p-3 bg-green-500 text-white rounded-2xl"
          >
            green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="p-3 bg-blue-500 text-white rounded-2xl"
          >
            blue
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="p-3 bg-yellow-500 text-white rounded-2xl"
          >
            yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="p-3 bg-pink-500 text-white rounded-2xl"
          >
            pink
          </button>
          <button
            onClick={() => setColor("orange")}
            className="p-3 bg-orange-500 text-white rounded-2xl"
          >
            orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
