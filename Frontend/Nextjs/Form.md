# <Form> Component — Next.js 16

## Question
> Next.js 16 has a built-in `<Form>` component. How is it different from a plain HTML `<form>`?

---

## What is it?

```
Plain HTML <form>:
  Full page reload on submit
  No prefetching
  No loading UI

Next.js <Form>:
  Client-side navigation on submit (no reload!)
  Prefetches the action route on hover
  Works with Suspense loading states
  Extends HTML <form> — same API
```

---

## Solution

```tsx
// app/search/page.tsx
import Form from 'next/form';

export default function SearchPage() {
  return (
    <Form action="/search">
      {/*   ↑ Next.js Form — not HTML form */}
      <input name="query" placeholder="Search..." />
      <button type="submit">Search</button>
    </Form>
  );
}

// When submitted:
// URL → /search?query=react
// Client-side navigation — no full reload!
// Prefetched on hover — instant!
```

---

## With Server Action

```tsx
import Form from 'next/form';

async function searchAction(formData: FormData) {
  'use server';
  const query = formData.get('query');
  redirect(`/search?q=${query}`);
}

export default function SearchPage() {
  return (
    <Form action={searchAction}>
      <input name="query" placeholder="Search..." />
      <button type="submit">Search</button>
    </Form>
  );
}
```

---

## HTML form vs Next.js Form

| | HTML `<form>` | Next.js `<Form>` |
|---|---|---|
| Submit behavior | Full page reload | Client-side navigation |
| Prefetch on hover | ❌ | ✅ |
| Loading state | ❌ | ✅ via Suspense |
| Server Actions | ✅ | ✅ |
| Progressive enhancement | ✅ | ✅ |
| API | HTML form API | Same + enhanced |

---

## With loading state

```tsx
// app/search/loading.tsx — shown during navigation
export default function SearchLoading() {
  return <p>Searching...</p>;
}

// app/search/page.tsx
import Form from 'next/form';

export default function Page() {
  return (
    <Form action="/search">
      <input name="query" />
      <button type="submit">Search</button>
      {/* Submit → shows loading.tsx → shows results */}
    </Form>
  );
}
```

---

## One-liner

> "Next.js `<Form>` extends HTML `<form>` with client-side navigation on submit (no full page reload), automatic prefetching of the action route on hover, and Suspense-based loading states. Use it as a drop-in replacement for `<form>` in App Router — same API, much better UX."