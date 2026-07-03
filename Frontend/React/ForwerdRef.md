# forwardRef — React

## Question
> Build a reusable Input component that forwards its ref to the underlying DOM element so the parent can call `.focus()` directly.

---

## Solution

```jsx
import { forwardRef, useRef } from 'react';

// Child — forward ref to input DOM element
const Input = forwardRef((props, ref) => {
  return (
    <input
      ref={ref}   // ← parent ka ref yahan attach hota hai
      {...props}
    />
  );
});

// Parent — ref se directly .focus() call karo
function LoginForm() {
  const inputRef = useRef(null);

  return (
    <div>
      <Input ref={inputRef} placeholder="Email" />
      <button onClick={() => inputRef.current.focus()}>
        Focus Input
      </button>
    </div>
  );
}
```

---

## React 19 — ref as a prop (no forwardRef needed!)

```jsx
// React 19 — forwardRef is gone!
// ref is just a normal prop now

function Input({ ref, ...props }) {
  return <input ref={ref} {...props} />;
}

// Usage — same as before
function LoginForm() {
  const inputRef = useRef(null);
  return <Input ref={inputRef} placeholder="Email" />;
}
```

---

## Key points

```
React 18:  forwardRef(fn)  → wrap component
React 19:  ref as prop     → no wrapper needed
Both:      parent gets direct DOM access via ref
```

---

## One-liner

> "`forwardRef` lets a parent pass its `ref` through to a child's DOM element. In React 19, `forwardRef` is deprecated — `ref` is now just a regular prop, making the pattern much simpler."
