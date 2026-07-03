# Hydration Error — What it is and How to Fix

## Question
> What causes a hydration mismatch in React? Show 3 common causes and how to fix each.

---

## What is Hydration?

```
Server renders HTML → sent to browser
React "hydrates" → attaches event listeners
If server HTML ≠ client HTML → Hydration Error!
```

---

## Cause 1 — Date/Time

```jsx
// ❌ Server and client render different times
function Clock() {
  return <p>{new Date().toLocaleString()}</p>;
}

// ✅ Fix — useEffect (runs only on client)
function Clock() {
  const [time, setTime] = useState('');
  useEffect(() => {
    setTime(new Date().toLocaleString());
  }, []);
  return <p>{time}</p>;
}
```

---

## Cause 2 — localStorage / window

```jsx
// ❌ window doesn't exist on server
function Theme() {
  return <div>{localStorage.getItem('theme')}</div>;
}

// ✅ Fix — check inside useEffect
function Theme() {
  const [theme, setTheme] = useState('');
  useEffect(() => {
    setTheme(localStorage.getItem('theme') || 'light');
  }, []);
  return <div>{theme}</div>;
}
```

---

## Cause 3 — Math.random() / unique IDs

```jsx
// ❌ Different value on server vs client
function Avatar() {
  return <div id={Math.random()}>JD</div>;
}

// ✅ Fix — useId hook
function Avatar() {
  const id = useId();
  return <div id={id}>JD</div>;
}
```

---

## React 19 — suppressHydrationWarning

```jsx
// When mismatch is intentional (e.g. browser extensions)
<div suppressHydrationWarning>
  {new Date().toLocaleDateString()}
</div>
// Suppresses the warning — use sparingly
```

---

## One-liner

> "Hydration errors happen when server-rendered HTML differs from what React renders on the client. Common causes: time/date values, browser-only APIs like `localStorage`, and random IDs. Fix by moving browser-only code to `useEffect` or using `useId` for stable IDs."