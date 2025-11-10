# ReactTutorial

# React Basics

## What is React?
- React is a **JavaScript library** for building **user interfaces**.
- Developed by **Facebook**.
- It allows **component-based architecture**, making UI reusable and manageable.
- Works with a **virtual DOM** for faster rendering.

---

## Key Concepts

### 1. Components
- **Components** are the building blocks of a React application.
- Two types:
  1. **Functional Components**:
     ```jsx
     function Greeting() {
       return <h1>Hello, World!</h1>;
     }
     ```
  2. **Class Components**:
     ```jsx
     class Greeting extends React.Component {
       render() {
         return <h1>Hello, World!</h1>;
       }
     }
     ```

### 2. JSX (JavaScript XML)
- JSX allows writing **HTML inside JavaScript**.
- Example:
  ```jsx
  const element = <h1>Hello, JSX!</h1>;

# Babel Notes

## What is Babel?
- **Babel** is a **JavaScript compiler**.
- It allows developers to write **modern JavaScript** (ES6+) and **JSX** that can run in **older browsers**.
- Converts code into **browser-compatible JavaScript**.

---

## Why Use Babel?
- Not all browsers support **latest JavaScript features**.
- React uses **JSX**, which browsers cannot understand natively.
- Babel **transpiles** JSX and modern JS syntax into standard JavaScript.

---

## Key Features
1. **JSX Transpiling**
   - Converts JSX into `React.createElement()` calls.
   ```jsx
   const element = <h1>Hello, JSX!</h1>;



# Hooks 
- funtions or utilities which reacts uses to ease things that seems difficult in javascript

## 1. useState

- Use to manage variables or states
- use to update value of state or variables
- with useState updating variable values at multiple locations in DOM becomes easier, because in js if same variable is shown at multiple locations then while updating its value at every locations we need to use code like document.getElementById etc wherever that variable is used in the DOM.
- Hence useState hook updates the value of variable everywhere in the DOM at one glance