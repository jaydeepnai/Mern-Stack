# useLocalStorage — Interview Question + Solution

## Question

> Build a custom hook that behaves like `useState`, but persists the value in `localStorage`. Close the tab, come back — the value should still be there.

**Tags:** `localStorage` `useState` `SSR safe`

### Requirement
```jsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
setTheme('dark'); // also saved in localStorage automatically
```

---

## Concept — understand first

`useState` resets every time the component unmounts or the page reloads. `localStorage` is a browser API that persists data even after closing the tab.

The hook needs to do two things:
1. **On first render** — read the value from `localStorage` (or fall back to a default)
2. **On every update** — write the new value to `localStorage`, just like `setState`

```
Page loads
   ↓
Read from localStorage → if found, use it
                        → if not found, use default value
   ↓
User changes value
   ↓
setState updates React state
   ↓
Also write to localStorage
   ↓
Tab closed → reopened
   ↓
Read from localStorage again → value is still there!
```

---

## Solution — full code

```jsx
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {

  // STEP 1 — lazy initializer: only runs once, on first render
  const [value, setValue] = useState(() => {

    // SSR safety — localStorage doesn't exist on the server
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      // localStorage only stores strings — parse it back
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error('useLocalStorage read error:', error);
      return initialValue;
    }
  });

  // STEP 2 — custom setter that writes to localStorage too
  const setStoredValue = (newValue) => {
    try {
      // Support functional updates, like normal setState
      const valueToStore =
        newValue instanceof Function ? newValue(value) : newValue;

      setValue(valueToStore);

      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error('useLocalStorage write error:', error);
    }
  };

  return [value, setStoredValue];
}
```

---

## Usage examples

```jsx
// Example 1 — theme toggle
function App() {
  const [theme, setTheme] = useLocalStorage('theme', 'light');

  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
        Toggle theme
      </button>
    </div>
  );
}

// Example 2 — functional update works too
const [count, setCount] = useLocalStorage('count', 0);
setCount(prev => prev + 1); // works just like useState

// Example 3 — storing objects/arrays
const [user, setUser] = useLocalStorage('user', { name: '', loggedIn: false });
setUser({ name: 'Jd', loggedIn: true });
```

---

## Edge cases to mention in an interview

| Edge case | Why it matters | Fix |
|---|---|---|
| SSR (Next.js) | `window` doesn't exist on server | `typeof window === 'undefined'` check |
| Invalid JSON in storage | `JSON.parse` can throw | wrap in `try/catch` |
| Multiple tabs out of sync | Tab A updates, Tab B doesn't know | listen to the `storage` event |
| Quota exceeded | `localStorage` has a ~5–10MB limit | catch the error, fail gracefully |

### Bonus — syncing across tabs

```jsx
useEffect(() => {
  const handleStorageChange = (e) => {
    if (e.key === key) {
      setValue(e.newValue ? JSON.parse(e.newValue) : initialValue);
    }
  };
  window.addEventListener('storage', handleStorageChange);
  return () => window.removeEventListener('storage', handleStorageChange);
}, [key]);
```
The `storage` event only fires in *other* tabs, not the tab that made the change — which is exactly what you want.

---

## One-liner for interviews

> "`useLocalStorage` wraps `useState` with a lazy initializer that reads from `localStorage` on mount, and a custom setter that writes to `localStorage` on every update. We use `JSON.stringify`/`parse` since `localStorage` only stores strings, wrap reads/writes in `try/catch` for safety, and check `typeof window` for SSR compatibility."

---

*React Hooks Hard Set — Question 7/10*