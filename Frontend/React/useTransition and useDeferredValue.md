# useDeferredValue — Interview Question + Solution

## Question

> Defer a slow chart component while keeping the input fast.
> Explain the difference between `useTransition` and `useDeferredValue`.

**Tags:** `useDeferredValue` `concurrent` `defer`

### Requirement
```jsx
const deferredQuery = useDeferredValue(query);
<SlowChart data={deferredQuery} />
// input always stays fast, chart is deferred
```

---

## Concept — understand first

Both `useTransition` and `useDeferredValue` keep the UI smooth, but they apply to different situations:

| | `useTransition` | `useDeferredValue` |
|---|---|---|
| Controls | Your own state update | A value coming from outside |
| How | Wrap with `startTransition(fn)` | Create a deferred copy of a value |
| `isPending` | Available | Not available |
| Use when | You call `setState` yourself | You need to defer props/external value |

### Analogy
- `useTransition` — you're the driver: "I'll do this work later"
- `useDeferredValue` — you're the passenger: "whatever value comes in, I'll use it a bit later"

---

## Solution — full code

```jsx
import { useState, useDeferredValue, memo } from 'react';

function SearchPage() {
  const [query, setQuery] = useState('');

  // Create a "deferred copy" of query
  const deferredQuery = useDeferredValue(query);
  // This lags slightly behind query
  // If the user types fast, query updates immediately
  // deferredQuery catches up afterward

  const isStale = query !== deferredQuery;
  // true when the two differ — deferred value is still catching up

  return (
    <div>
      {/* Input — uses query — always the latest */}
      <input
        value={query}
        onChange={e => setQuery(e.target.value)}
      />

      {/* Chart — uses deferredQuery — deferred */}
      <div style={{ opacity: isStale ? 0.5 : 1 }}>
        <SlowChart data={deferredQuery} />
      </div>
    </div>
  );
}

// memo — only re-render when data actually changes
const SlowChart = memo(({ data }) => {
  const items = processData(data); // heavy computation
  return <div>{items}</div>;
});
```

---

## How `isStale` works

```jsx
const isStale = query !== deferredQuery;

// User is typing "react":
// query         = "react"   (latest)
// deferredQuery = "reac"    (still catching up)
// isStale       = true      → dim the UI

// Once caught up:
// query         = "react"
// deferredQuery = "react"
// isStale       = false     → show normally
```

---

## When to use which

```
useTransition:
  setQuery(val);
  startTransition(() => {
    setResults(filter(items, val));
  });

useDeferredValue:
  function Search({ query }) {  // comes from props
    const deferredQuery = useDeferredValue(query);
    return <SlowChart data={deferredQuery} />;
  }
```

---

## One-liner for interviews

> "`useDeferredValue` creates a deferred copy of a value — the input always shows the latest value, while the slow component receives the deferred one. Use `isStale` to dim the UI while it catches up. The difference from `useTransition`: use `useTransition` when you control the state update yourself, and `useDeferredValue` when the value comes from outside (props/external)."

---

*React Hooks Hard Set — Question 6/10*