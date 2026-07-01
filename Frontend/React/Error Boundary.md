# Error Boundary — React 19 Update

## What changed in React 19?

React 19 introduced a new prop: **`onCaughtError`** on `createRoot` and a new built-in way to handle errors — but **Error Boundaries are still class components**. However, React 19 added better error reporting and new recovery options.

---

## React 18 way (still works in React 19)

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback || <h2>Something went wrong.</h2>;
    }
    return this.props.children;
  }
}
```

---

## React 19 — new additions

### 1. `onCaughtError` on `createRoot`

```jsx
// React 19 — root level error handling
const root = createRoot(document.getElementById('root'), {
  onCaughtError(error, errorInfo) {
    // fires when ErrorBoundary catches an error
    console.error('Caught by boundary:', error);
    logToSentry(error, errorInfo.componentStack);
  },
  onUncaughtError(error, errorInfo) {
    // fires when NO boundary catches it
    console.error('Uncaught:', error);
  },
  onRecoverableError(error, errorInfo) {
    // fires for errors React recovered from automatically
    console.warn('Recovered:', error);
  }
});

root.render(<App />);
```

### 2. `reset()` — let user retry

```jsx
class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    console.error(error, info.componentStack);
  }

  // React 19 — reset the boundary
  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Something went wrong.</h2>
          <p>{this.state.error?.message}</p>
          {/* Let user retry */}
          <button onClick={this.reset}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}
```

### 3. Works seamlessly with `use()` and Suspense

```jsx
// React 19 — use() hook can throw promises AND errors
function UserProfile({ userId }) {
  // use() throws if promise rejects
  const user = use(fetchUser(userId));
  return <div>{user.name}</div>;
}

// ErrorBoundary catches the error from use()
// Suspense catches the loading state
<ErrorBoundary fallback={<p>Failed to load user.</p>}>
  <Suspense fallback={<p>Loading...</p>}>
    <UserProfile userId={1} />
  </Suspense>
</ErrorBoundary>
```

### 4. Server Component errors — React 19

```jsx
// React 19 — Server Component that throws
async function ServerCard() {
  const data = await fetchData(); // can throw
  return <div>{data.title}</div>;
}

// Client boundary catches server errors too
<ErrorBoundary fallback={<p>Server error.</p>}>
  <ServerCard />
</ErrorBoundary>
```

---

## Still does NOT catch

```
✅ Catches — render errors, lifecycle errors
✅ NEW — errors from use() hook
✅ NEW — Server Component errors (with client boundary)
❌ Misses  — event handlers (use try/catch)
❌ Misses  — async code / setTimeout (use try/catch)
```

---

## Full production-ready example (React 19)

```jsx
import { createRoot } from 'react-dom/client';
import { Component, use, Suspense } from 'react';

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // React 19 — info.componentStack is more detailed
    logToMonitoring(error, info.componentStack);
  }

  reset = () => this.setState({ hasError: false, error: null });

  render() {
    if (this.state.hasError) {
      return (
        <div>
          <h2>Oops! Something went wrong.</h2>
          <button onClick={this.reset}>Try again</button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Root — React 19 error hooks
const root = createRoot(document.getElementById('root'), {
  onCaughtError(error) {
    logToSentry(error); // boundary caught it
  },
  onUncaughtError(error) {
    logToSentry(error); // nothing caught it — serious
  },
});

root.render(
  <ErrorBoundary>
    <Suspense fallback={<p>Loading...</p>}>
      <App />
    </Suspense>
  </ErrorBoundary>
);
```

---

## Summary — React 18 vs React 19

| Feature | React 18 | React 19 |
|---|---|---|
| Class component required | ✅ Yes | ✅ Yes (no change) |
| `getDerivedStateFromError` | ✅ | ✅ |
| `componentDidCatch` | ✅ | ✅ |
| `onCaughtError` on root | ❌ | ✅ New |
| `onUncaughtError` on root | ❌ | ✅ New |
| `onRecoverableError` on root | ❌ | ✅ New |
| Catches `use()` errors | ❌ | ✅ New |
| Catches Server Component errors | ❌ | ✅ New |

---

## One-liner for interviews

> "Error Boundaries are still class components in React 19 — that hasn't changed. But React 19 added `onCaughtError`, `onUncaughtError`, and `onRecoverableError` callbacks on `createRoot` for better monitoring. Boundaries now also catch errors thrown by the new `use()` hook and Server Component errors — making them much more powerful than in React 18."

---

*React 19 Updated — Question 10/10 ✅*