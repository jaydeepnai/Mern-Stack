# React 18 Batching + flushSync — Interview Question + Solution

## Question

> Explain what automatic batching is in React 18.
> Show the difference from React 17.
> Show how to opt out using `flushSync`.

**Tags:** `batching` `React 18` `flushSync`

---

## What is Batching?

When you call multiple `setState` functions one after another, React groups them into a **single re-render** instead of re-rendering after each call. This is called **batching**.

```jsx
function handleClick() {
  setCount(c => c + 1); // does NOT re-render yet
  setFlag(f => !f);     // does NOT re-render yet
  // React processes both, then re-renders ONCE
}
```

Without batching → 2 setState calls = 2 re-renders.
With batching    → 2 setState calls = 1 re-render. Better performance.

---

## React 17 vs React 18 — the key difference

### React 17 — batching ONLY inside React event handlers

```jsx
// ✅ Batched — inside React event handler
function handleClick() {
  setA(1);
  setB(2);
  // 1 re-render
}

// ❌ NOT batched — inside setTimeout
setTimeout(() => {
  setA(1); // re-render 1
  setB(2); // re-render 2
  // 2 re-renders!
}, 0);

// ❌ NOT batched — inside Promise.then
fetchData().then(() => {
  setA(1); // re-render 1
  setB(2); // re-render 2
  // 2 re-renders!
});

// ❌ NOT batched — inside native event listener
document.addEventListener('click', () => {
  setA(1); // re-render 1
  setB(2); // re-render 2
  // 2 re-renders!
});
```

### React 18 — automatic batching EVERYWHERE

```jsx
// ✅ Batched — setTimeout
setTimeout(() => {
  setA(1);
  setB(2);
  // 1 re-render ✓
}, 0);

// ✅ Batched — Promise.then
fetchData().then(() => {
  setA(1);
  setB(2);
  // 1 re-render ✓
});

// ✅ Batched — native event listener
document.addEventListener('click', () => {
  setA(1);
  setB(2);
  // 1 re-render ✓
});

// ✅ Batched — async/await
async function handleSubmit() {
  await saveData();
  setLoading(false);
  setData(result);
  // 1 re-render ✓
}
```

---

## Prove it with code — render counter

```jsx
import { useState } from 'react';

let renderCount = 0;

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  renderCount++;

  // React 18 — batched even in setTimeout → 1 re-render
  const handleTimeout = () => {
    setTimeout(() => {
      setCount(c => c + 1);
      setFlag(f => !f);
      // renderCount increments by 1 only
    }, 0);
  };

  return (
    <div>
      <p>Renders: {renderCount}</p>
      <p>Count: {count} | Flag: {String(flag)}</p>
      <button onClick={handleTimeout}>
        Test batching in setTimeout
      </button>
    </div>
  );
}
```

---

## flushSync — opt out of batching

Sometimes you need the DOM to update **immediately** — before the next line of code runs. Use `flushSync` for this.

```jsx
import { flushSync } from 'react-dom';

function handleClick() {
  // STEP 1 — force immediate re-render
  flushSync(() => {
    setCount(c => c + 1);
  });
  // DOM is already updated here

  // STEP 2 — read updated DOM right now
  console.log(divRef.current.textContent); // shows new value

  // STEP 3 — second flushSync = second separate re-render
  flushSync(() => {
    setFlag(f => !f);
  });
  // Total: 2 re-renders (one per flushSync)
}
```

### Real use cases for `flushSync`

```jsx
// Use case 1 — scroll to bottom after adding a message
function addMessage(msg) {
  flushSync(() => {
    setMessages(prev => [...prev, msg]);
  });
  // DOM updated — now safe to scroll
  listRef.current.scrollTop = listRef.current.scrollHeight;
}

// Use case 2 — third party library needs latest DOM
function handleChange(val) {
  flushSync(() => {
    setValue(val);
  });
  thirdPartyLib.update(inputRef.current); // needs updated DOM
}
```

---

## Summary table

| Scenario | React 17 | React 18 |
|---|---|---|
| React event handler | ✅ Batched | ✅ Batched |
| `setTimeout` | ❌ Not batched | ✅ Batched |
| `Promise.then` | ❌ Not batched | ✅ Batched |
| Native event listener | ❌ Not batched | ✅ Batched |
| `async/await` | ❌ Not batched | ✅ Batched |
| `flushSync` | Sync (opt-out) | Sync (opt-out) |

---

## One-liner for interviews

> "React 18 introduced automatic batching — state updates are grouped into a single re-render everywhere: `setTimeout`, `Promise.then`, native event listeners, `async/await` — not just inside React event handlers like in React 17. To opt out and force a synchronous update, use `flushSync` from `react-dom` — useful when you need to read the updated DOM immediately after a state change."

---

*React Hooks Hard Set — Question 8/10*