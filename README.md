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

# Virtual DOM in React

The **Virtual DOM (VDOM)** is a lightweight copy of the real DOM used by React to improve performance.

## How it works
1. When the UI changes, React updates the Virtual DOM instead of the real DOM immediately.
2. React compares the updated Virtual DOM with the previous version (a process called **diffing**).
3. Only the parts of the actual DOM that changed are updated (called **reconciliation**).

## Why it’s fast
- Updating the real DOM is slow.
- Updating the Virtual DOM is fast because it's just JavaScript objects.
- By batching and minimizing real DOM updates, React makes UI rendering more efficient.

## Summary
> The Virtual DOM allows React to efficiently update only what’s necessary, making apps faster and smoother.

# Reconciliation
> Reconciliation is React’s smart process of figuring out what changed in the UI and efficiently updating only those parts in the real DOM.
> Diffing is the algorithm used during reconciliation.

## 🔧 How Reconciliation Works

1. **React creates a new Virtual DOM**  
   When data changes, React generates a new Virtual DOM tree that reflects the updated UI.

2. **Diffing (comparison of trees)**  
   React compares the new Virtual DOM with the previous one — node by node.
   - If elements are the same, React leaves them as-is.
   - If something changed, React marks it for update.

3. **Efficient DOM updates (real DOM changes)**  
   React updates *only the parts of the real DOM that changed*, instead of re-rendering the whole UI.

---

# Diffing Algorithm (React)

- The diffing algorithm is the method React uses to compare the old Virtual DOM with the new Virtual DOM to detect what has changed.

## Key Assumptions

- Different element types → replace the entire subtree.

- Keys in lists help React identify which items were added, removed, or moved.

> The diffing algorithm quickly finds changed elements in the Virtual DOM so React only updates those parts in the real DOM, boosting performance.




# Hooks 
- funtions or utilities which reacts uses to ease things that seems difficult in javascript

## 1. useState

- Use to manage variables or states
- use to update value of state or variables
- with useState updating variable values at multiple locations in DOM becomes easier, because in js if same variable is shown at multiple locations then while updating its value at every locations we need to use code like document.getElementById etc wherever that variable is used in the DOM.
- Hence useState hook updates the value of variable everywhere in the DOM at one glance

