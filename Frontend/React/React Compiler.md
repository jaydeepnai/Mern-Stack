# React Compiler — React 19

## Question
> What does the React Compiler do? What code does it replace? What are its limitations?

---

## What it does

```
React Compiler automatically adds memoization
You write normal code — compiler optimizes it

Replaces:
  memo()        → automatic
  useMemo()     → automatic
  useCallback() → automatic
```

---

## Before vs After Compiler

```jsx
// React 18 — manual memoization
const ExpensiveList = memo(function ExpensiveList({ items, onDelete }) {
  const sorted = useMemo(
    () => items.sort((a, b) => a.name.localeCompare(b.name)),
    [items]
  );
  const handleDelete = useCallback(
    (id) => onDelete(id),
    [onDelete]
  );
  return sorted.map(item => (
    <Item key={item.id} item={item} onDelete={handleDelete} />
  ));
});

// React 19 — compiler handles it, write normally!
function ExpensiveList({ items, onDelete }) {
  const sorted = items.sort((a, b) => a.name.localeCompare(b.name));
  return sorted.map(item => (
    <Item key={item.id} item={item} onDelete={onDelete} />
  ));
}
// Compiler adds memoization automatically ✓
```

---

## How to enable

```bash
npm install babel-plugin-react-compiler
```

```js
// babel.config.js
module.exports = {
  plugins: ['babel-plugin-react-compiler'],
};

// next.config.ts (Next.js 16 — already included)
export default {
  experimental: {
    reactCompiler: true,
  },
};
```

---

## Limitations — compiler can NOT optimize

```jsx
// 1. Mutating props or state directly
function Bad({ items }) {
  items.push('new'); // mutation — compiler skips!
  return <List items={items} />;
}

// 2. Rules of Hooks violations
function Bad({ condition }) {
  if (condition) {
    const [x] = useState(0); // conditional hook — skips!
  }
}

// 3. Using non-React state (class instances, globals)
let globalCount = 0; // compiler can't track this
function Bad() {
  globalCount++; // skips!
  return <p>{globalCount}</p>;
}
```

---

## Opt out a specific component

```jsx
// If compiler causes issues — opt out
function MyComponent() {
  'use no memo'; // ← opt out directive
  // compiler skips this component
}
```

---

## Key points

```
Compiler replaces:   memo, useMemo, useCallback
Does NOT replace:    useEffect, useState, useRef
Requires:            Pure components, no mutations
Opt out:             'use no memo' directive
Next.js 16:          reactCompiler: true in config
```

---

## One-liner

> "The React Compiler automatically memoizes components and values — replacing manual `memo`, `useMemo`, and `useCallback`. It works by analyzing your code at build time and adding optimizations where safe. It skips components that mutate props/state directly or violate Rules of Hooks. Use `'use no memo'` to opt a specific component out."

*React 19 Hard — New Question*