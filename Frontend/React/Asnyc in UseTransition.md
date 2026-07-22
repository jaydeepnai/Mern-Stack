# Async startTransition — React 19

## Question
> In React 19, `startTransition` accepts async functions. How is this different from React 18? What problem does it solve?

---

## React 18 — startTransition was sync only

```jsx
// React 18 — only sync functions!
startTransition(() => {
  setResults(filter(items, query)); // sync only
});

// ❌ Async didn't work properly
startTransition(async () => {
  const data = await fetchResults(query); // broken in React 18!
  setResults(data);
});
```

---

## React 19 — async startTransition works!

```jsx
import { startTransition, useTransition } from 'react';

function SearchPage() {
  const [results, setResults] = useState([]);
  const [isPending, startTransition] = useTransition();

  function handleSearch(query) {
    // React 19 — async works perfectly!
    startTransition(async () => {
      const data = await fetchResults(query); // await inside!
      setResults(data);
      // isPending = true while awaiting
      // isPending = false when done
    });
  }

  return (
    <div>
      <input onChange={e => handleSearch(e.target.value)} />
      {isPending && <p>Searching...</p>}
      <ResultsList results={results} />
    </div>
  );
}
```

---

## What isPending covers now

```
React 18:
  isPending = true  → while sync state update runs
  isPending = false → immediately after

React 19:
  isPending = true  → while ENTIRE async function runs
                      (including all awaits!)
  isPending = false → when async function completes
```

---

## Real world — form submit with navigation

```jsx
function CheckoutForm() {
  const [isPending, startTransition] = useTransition();

  function handleSubmit(formData) {
    startTransition(async () => {
      // Step 1 — validate
      await validateOrder(formData);

      // Step 2 — save to DB
      const order = await createOrder(formData);

      // Step 3 — navigate
      router.push(`/orders/${order.id}`);

      // isPending = true for ALL 3 steps!
    });
  }

  return (
    <form action={handleSubmit}>
      <input name="card" />
      <button disabled={isPending}>
        {isPending ? 'Processing...' : 'Pay Now'}
      </button>
    </form>
  );
}
```

---

## Combines with useOptimistic

```jsx
function LikeButton({ post }) {
  const [isPending, startTransition] = useTransition();
  const [optimisticLikes, addOptimistic] = useOptimistic(
    post.likes,
    (state, n) => state + n
  );

  function handleLike() {
    startTransition(async () => {
      addOptimistic(1);          // instant UI
      await likePost(post.id);   // background API
    });
  }

  return (
    <button onClick={handleLike} disabled={isPending}>
      ❤️ {optimisticLikes}
    </button>
  );
}
```

---

## One-liner

> "React 19 makes `startTransition` async-aware — `isPending` stays `true` for the entire duration of the async function including all `await` calls, not just the synchronous part. This enables clean patterns for multi-step async workflows like form submission → DB save → navigation, all with a single pending state."

*React 19 Hard — New Question*