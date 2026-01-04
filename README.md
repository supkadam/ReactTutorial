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

## 2. useCallback

- useCallback is a React Hook that remembers a function, so the function doesn’t get recreated on every render unless its dependencies change. This helps avoid unnecessary re-renders in child components.

------------------------------------------------------------------------

## 🔍 Why is `useCallback` Needed?

In React, every time a component re-renders, all functions defined
inside it are recreated.\
Most of the time that's fine, but it becomes a problem when:

1.  **You pass a function to a memoized child component**
    (`React.memo`).
    -   If the function changes identity on every render, the child
        re-renders unnecessarily.
2.  **The function is used as a dependency in another hook** (like
    `useEffect` or `useMemo`).
    -   Without memoization, the effect or memo would run every render.

`useCallback` helps by giving you a **stable function instance** across
renders.

------------------------------------------------------------------------

## 🧩 How It Works

``` jsx
const memoizedFn = useCallback(() => {
  // logic here
}, [dependency1, dependency2]);
```

-   React returns the **same function reference** unless dependencies
    change.
-   If a dependency changes, React creates a **new** function.

------------------------------------------------------------------------

## 📝 Simple Example

### Without `useCallback`

The child re-renders every time because the parent creates a new
function:

``` jsx
function Parent() {
  const handleClick = () => console.log('clicked');

  return <Child onClick={handleClick} />;
}
```

### With `useCallback`

Child won't re-render unless the dependencies change:

``` jsx
function Parent() {
  const handleClick = useCallback(() => {
    console.log('clicked');
  }, []);

  return <Child onClick={handleClick} />;
}
```

------------------------------------------------------------------------

## 🎯 When to Use (and Not Use) `useCallback`

### ✔️ Use it when:

-   Passing callbacks to **memoized children** (`React.memo`)
-   Preventing unnecessary reruns of **useEffect**
-   Working with heavy functions you don't want to recreate often

### ❌ Avoid it when:

-   The function is cheap and not passed down
-   The component doesn't re-render often
-   You're adding `useCallback` everywhere "just in case" --- it can
    hurt performance too

------------------------------------------------------------------------

## 💡 Analogy

Think of `useCallback` as saying:

> "Only make me a new version of this function **when these specific
> values change**. Otherwise, reuse the old one."


---------------------------------------------------------------------------------

# `useId` Hook

## Overview
`useId` is a React Hook (introduced in React 18) that generates **stable, unique IDs** for components.  
It is mainly used for **accessibility** and **form elements**, especially in apps using **server-side rendering (SSR)**.

---

## When to Use
- Linking `<label>` and `<input>`
- Accessibility attributes (`aria-describedby`, `aria-labelledby`)
- Reusable components that need unique IDs

---

## When NOT to Use
- As a `key` in lists
- As a database or persistent ID

---

## Example

```jsx
import { useId } from "react";

function LoginForm() {
  const id = useId();

  return (
    <form>
      <label htmlFor={`${id}-email`}>Email</label>
      <input id={`${id}-email`} type="email" />

      <label htmlFor={`${id}-password`}>Password</label>
      <input id={`${id}-password`} type="password" />
    </form>
  );
}

export default LoginForm;
```
------------------------------------------------------------------

## Export all components from one single file i.e index.js 

1. create index.js file inside src/components folder
2. inside index.js import any component like below.
```js
import InputBox from "./InputBox";

export {InputBox};
```
3. Now in App.jsx file import it as below
```js
  import { InputBox } from './components'
```


## React Router DOM

### To install 
- Go inside project folder
- Then hit command ```npm install react-router-dom```

### Link Tag in React

- The `Link` component in React is used for **client-side navigation** in applications that use **React Router**.
- It allows navigation between pages without refreshing the browser, improving performance and user experience.

### Importing Link

```js
import { Link } from "react-router-dom";
```

### Basic Usage

```jsx
<Link to="/about">About</Link>
```

### Example
```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

### NavLink Tag in React

- `NavLink` is a special version of `Link` from **react-router-dom** that allows styling based on whether the link matches the current URL.

## Example

```jsx
import { NavLink } from "react-router-dom";

<NavLink
  to="/home"
  className={({ isActive }) => (isActive ? "active" : "")}
>
  Home
</NavLink>
```

## Active Styling with style
```jsx
<NavLink
  to="/profile"
  style={({ isActive }) => ({
    color: isActive ? "green" : "black",
  })}
>
  Profile
</NavLink>
```

## Exact Route Matching (end)
```jsx
<NavLink to="/" end>
  Home
</NavLink>
```
Note - Using end prevents / from being active on nested routes like /about.

## Route States

```jsx
<NavLink
  to="/dashboard"
  className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "active" : ""
  }
>
  Dashboard
</NavLink>

```
- isActive: true when route matches URL
- isPending: true while route is loading

## NavLink vs Link

- Link: basic navigation
- NavLink: navigation with active state support

## There are 2 ways to create routes
- shown in `main.jsx` file under project `react_router5`

## createBrowserRouter (React Router)

`createBrowserRouter` is a modern React Router API used to define application routes using a configuration-based approach. It supports data loading, mutations, and error handling.

## To access parameters from the URL
# useParams 
- `useParams` is a React Router hook used to access **dynamic URL parameters** from the current route.

# Eg.
```jsx.  
main.jsx

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

```

```jsx.  
User.jsx

import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const { userid } = useParams();
  return (
    <div className="bg-gray-600 text-white text-3xl p-4">User: {userid}</div>
  );
}

export default User;
```

## useLoaderData

- `useLoaderData` is a React Router hook used to access data returned by a route `loader` function.

### Eg. (see Github.jsx and main.jsx under react_router5 project)


### Context API - (to handle prop drilling situations)















