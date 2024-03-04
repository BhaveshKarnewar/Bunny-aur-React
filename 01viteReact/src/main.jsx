import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Custom c React!</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://www.google.com",
//     target: "_blank",
//   },
//   children: "Click here for google",
// };

// let anotherElement = (
//   <a href="https://www.google.com" target="_blank">
//     click here now bro
//   </a>
// );

let reactElement = React.createElement(
  "a",
  { href: "https://www.google.com", target: "_blank" },
  "click me baby"
);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
