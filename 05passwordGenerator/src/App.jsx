import { useCallback, useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  let [length, setLength] = useState(7);
  let [numberAllowed, setNum] = useState(false);
  let [charAllowed, setChar] = useState(false);
  let [password, setPass] = useState("");

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()~{}[]";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPass(pass);
  }, [length, numberAllowed, charAllowed, setPass]);

  // use ref
  let passwordRef = useRef(null);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 15);

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passGenerator();
  }, [length, numberAllowed, charAllowed, passGenerator]);

  return (
    <>
      <h1 className="text-white text-center text-2xl mt-[20px]">
        Password generator
      </h1>
      <div className="min-w-[300px] h-40 w-100 mt-10 mx-5 bg-gray-700 text-orange-500 rounded-3xl flex flex-col justify-center items-center gap-[30px]">
        <div className="rounded-full w-[75%] overflow-hidden">
          <input
            className="p-4 w-[80%]"
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClipboard}
            className=" p-4 w-[20%] bg-blue-500 text-white"
          >
            copy
          </button>
        </div>

        <div className="flex gap-[30px]">
          <input
            type="range"
            min={6}
            max={16}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>length({length})</label>
          <input
            type="checkbox"
            value={numberAllowed}
            onChange={() => {
              setNum((prev) => !prev);
            }}
          />
          <label>number</label>
          <input
            type="checkbox"
            value={charAllowed}
            onChange={() => {
              setChar((prev) => !prev);
            }}
          />
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;

for (let i = 0; i < 27; i++) {
  let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  console.log(`${i}:${str.charAt(i)}`);
}
