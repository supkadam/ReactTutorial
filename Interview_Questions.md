# counter question
- if there is code like below

```js
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./assets/css/App.css";

function App() {
  const [counter, setCounter] = useState(10);


  const increaseCounter = () => {

      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
      setCounter(counter + 1);
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
```

## What will happen in above scenario on click of Increase button, what will be the value of counter

 ### ✅ What the code intends to do

The function `increaseCounter` calls `setCounter(counter + 1)` **five times**, so it looks like the counter should increase by **+5** every time the button is clicked.

---

### ❗ What actually happens

The counter only increases by **+1**, not +5.

---

### 🧠 Why?

React **batches state updates**. Since each `setCounter(counter + 1)` uses the same snapshot of `counter`, React treats the five updates as a **single update**, not five separate ones.

When React processes them, they all effectively become:

```js
setCounter(counter + 1)
```

So the counter increases only once.

---

### ✅ Correct way (using functional update)

To update based on the previous state value, use:

```js
const increaseCounter = () => {
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
  setCounter((prev) => prev + 1);
};
```

Now each call receives the updated value (`prev`), so the counter increases by **+5** as expected.

---

### 📌 Interview-friendly answer

> React batches state updates. Calling `setCounter(counter + 1)` multiple times in the same function uses the same stale state value and results in only one increment. To update correctly based on the previous state, use the functional update form: `setCounter(prev => prev + 1)`.

