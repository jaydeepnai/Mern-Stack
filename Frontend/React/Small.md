# Question
> Generate unique IDs for accessibility attributes (htmlFor, aria-describedby) that are stable across server and client renders. Why can't you use Math.random() or a counter?

---

## Why not Math.random() or counter?

```jsx
// ❌ Math.random() — different on server and client
const id = Math.random(); // server: 0.123, client: 0.456 → hydration mismatch!

// ❌ Global counter — breaks with SSR and concurrent rendering
let counter = 0;
const id = ++counter; // server: 1, client: 1 (but resets!) → mismatch
```

## One-liner for interviews

> "`useId` generates a stable unique ID that matches between server and client renders — solving the hydration mismatch problem that `Math.random()` or global counters cause. Use it for accessibility attributes like `htmlFor`, `aria-labelledby`, and `aria-describedby`. Never use it for list keys."

---

# Question
> Fetch data inside a component using the `use()` hook. Show a loading state with Suspense.

---

## Solution

```jsx
import { use, Suspense } from 'react';

// Pass a Promise directly to use()
function UserProfile({ userPromise }) {
  const user = use(userPromise); // suspends until resolved
  return <h1>{user.name}</h1>;
}

// Parent — wrap in Suspense
function App() {
  const userPromise = fetch('/api/user').then(r => r.json());

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <UserProfile userPromise={userPromise} />
    </Suspense>
  );
}
```

---

## use() vs useEffect for fetching

```
useEffect:           use():
  fetch on mount       suspend until ready
  manage loading state Suspense handles loading
  manage error state   ErrorBoundary handles errors
  more boilerplate     clean and simple
```

---

## One-liner

> "`use()` reads a Promise inside a component — it suspends rendering until the Promise resolves. `Suspense` shows the fallback while waiting, and `ErrorBoundary` catches rejections."

------



