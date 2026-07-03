# Context Performance Optimization

## Question
> Context re-renders ALL consumers when value changes. How do you prevent unnecessary re-renders?

---

## The Problem

```jsx
const AppContext = createContext();

function App() {
  const [user, setUser] = useState({ name: 'Jd' });
  const [theme, setTheme] = useState('light');

  return (
    // ❌ Both change together — ALL consumers re-render
    // even if they only need user OR theme
    <AppContext.Provider value={{ user, theme, setUser, setTheme }}>
      <Navbar />      {/* only needs theme */}
      <Profile />     {/* only needs user */}
      <Settings />    {/* needs both */}
    </AppContext.Provider>
  );
}
```

---

## React 19 — React Compiler handles it automatically

```
React 19 ships with the React Compiler (previously "React Forget")
It automatically memoizes components, values, and callbacks
No more manual memo(), useMemo(), useCallback() needed!

The compiler detects:
  - Which consumers use which context values
  - Skips re-renders automatically if used value didn't change
```

```jsx
// React 19 — just write normal code, compiler optimizes
function App() {
  const [user, setUser] = useState({ name: 'Jd' });
  const [theme, setTheme] = useState('light');

  return (
    <AppContext.Provider value={{ user, theme, setUser, setTheme }}>
      <Navbar />    {/* compiler skips re-render if theme didn't change */}
      <Profile />   {/* compiler skips re-render if user didn't change */}
    </AppContext.Provider>
  );
}
// No memo, useMemo, useCallback needed!
```

---

## But BEST practice is still — Split Contexts

```jsx
// Even with React Compiler — split contexts is cleaner architecture
const UserContext  = createContext();
const ThemeContext = createContext();

function App() {
  const [user, setUser]   = useState({ name: 'Jd' });
  const [theme, setTheme] = useState('light');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navbar />    {/* only subscribes to ThemeContext */}
        <Profile />   {/* only subscribes to UserContext */}
      </ThemeContext.Provider>
    </UserContext.Provider>
  );
}
```

---

## React 18 vs React 19

| Fix | React 18 | React 19 |
|---|---|---|
| Split contexts | ✅ Manual | ✅ Still best practice |
| `useMemo` on value | ✅ Required | ❌ Compiler does it |
| `memo` on consumer | ✅ Required | ❌ Compiler does it |
| `useCallback` | ✅ Required | ❌ Compiler does it |
| React Compiler | ❌ | ✅ Automatic |

---

## Enable React Compiler (React 19)

```bash
npm install babel-plugin-react-compiler
```

```js
// babel.config.js
module.exports = {
  plugins: ['babel-plugin-react-compiler'],
};
```

---

## When to still use Zustand/Redux

```
Context — good for:
  Low frequency updates (theme, auth, language)
  Simple global state

Zustand/Redux — better for:
  High frequency updates (real-time data, animations)
  Complex state with many slices
  Fine-grained subscriptions (only re-render what changed)
```

---

## One-liner

> "In React 19, the React Compiler automatically memoizes components and values — so `memo`, `useMemo`, and `useCallback` are no longer needed manually. The best practice is still to split contexts by concern (user/theme/auth separately) for clean architecture. For high-frequency updates, Zustand or Redux are still better choices as they support granular subscriptions."
