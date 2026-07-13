# use() with Context - React 19

## Question
> In React 19, `use()` can read Context too - not just Promises. What is the advantage over `useContext()`?

---

## Solution

```jsx
import { use, createContext } from 'react';

const ThemeContext = createContext('light');

// React 18 - useContext only at top level
function Button() {
  const theme = useContext(ThemeContext); // must be at top level
  return <button className={theme}>Click</button>;
}

// React 19 - use() works anywhere, even conditionally!
function Button({ showTheme }) {
  if (showTheme) {
    const theme = use(ThemeContext); // ✓ inside condition!
    return <button className={theme}>Click</button>;
  }
  return <button>Click</button>;
}
```

---

## Key advantage - works inside conditions and loops

```jsx
// ❌ React 18 - Rules of Hooks: no conditions
function Component({ isAdmin }) {
  if (isAdmin) {
    const user = useContext(UserContext); // ERROR - hook in condition!
  }
}

// ✅ React 19 - use() is not a hook, no restrictions
function Component({ isAdmin }) {
  if (isAdmin) {
    const user = use(UserContext); // Works!
    return <AdminPanel user={user} />;
  }
  return <PublicView />;
}
```

---

## use() reads both - Promise AND Context

```jsx
function UserDashboard({ userPromise }) {
  // Read a Promise
  const user = use(userPromise);

  // Read Context
  const theme = use(ThemeContext);

  return (
    <div className={theme}>
      Welcome {user.name}
    </div>
  );
}
```

---

## useContext vs use()

| | `useContext` | `use()` |
|---|---|---|
| Works in conditions | ❌ | ✅ |
| Works in loops | ❌ | ✅ |
| Reads Promise | ❌ | ✅ |
| Reads Context | ✅ | ✅ |
| React version | All | React 19+ |

---

## One-liner

> "`use()` in React 19 can read both Promises and Context - unlike `useContext`, it's not bound by Rules of Hooks so it can be called inside conditions and loops. Use `use(MyContext)` when you need context conditionally, and `use(promise)` for data fetching with Suspense."