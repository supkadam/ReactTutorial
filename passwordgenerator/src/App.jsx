import { use, useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+=-[]`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);

  const passwordRef = useRef()

  const copyPasswordToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    //passwordRef.current?.setSelectionRange(0,4)  //to select part of password till given index
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },
    [length, numberAllowed, charAllowed, passwordGenerator]
  )

  return (
    <>
      <div className="flex flex-wrap items-center justify-center py-10 px-5">
        <div className="bg-gray-700 w-full max-w-3xl max-auto shadow-md px-4 py-4 text-orange-500 rounded-lg text-center flex items-center flex-wrap justify-center gap-y-5">
          <h2 className="font-semibold text-2xl">Password Generator</h2>

          <div className="flex w-xl">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-1 px-3 bg-white rounded-lg text-xl"
              placeholder="password"
              ref={passwordRef}
              readOnly
            />
            <button className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer rounded-lg" onClick={copyPasswordToClipBoard}>
              copy
            </button>
          </div>

          <div className="flex gap-x-15 flex-wrap">
            <div className="flex items-center gap-x-1">
              <input
                type="range"
                min={6}
                max={100}
                value={length}
                className="cursor-pointer"
                onChange={(e) => {
                  setLength(e.target.value);
                }}
              />
              <label>Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-1">
              <input type="checkbox" 
              checked={numberAllowed} 
              id="numberInput"
              onChange={()=>{setNumberAllowed(prev=>!prev)}} />
              <label htmlFor="numberInput">Numbers</label>
            </div>
            

            <div className="flex items-center gap-x-1">
              <input type="checkbox" 
              checked={charAllowed} 
              id="charInput"
              onChange={()=>{setcharAllowed(prev=>!prev)}} />
              <label htmlFor="charInput">Characters</label>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
