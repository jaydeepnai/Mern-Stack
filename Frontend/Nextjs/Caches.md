# Native Fetch + Cache Headers — Next.js 16

## Question
> How does Next.js 16 handle fetch caching with native HTTP cache headers? How is it different from Next.js 14?

---

## What changed?

```
Next.js 14:
  Custom fetch cache (not standard HTTP)
  next: { revalidate: 60 } — Next.js specific
  Often confusing — behaved differently from browser fetch

Next.js 16 (with dynamicIO):
  Respects standard HTTP Cache-Control headers
  More predictable — works like normal HTTP caching
  'use cache' directive for explicit caching
```

---

## Solution

```ts
// Next.js 16 — respects standard Cache-Control
async function getProducts() {
  const res = await fetch('https://api.example.com/products', {
    // Standard HTTP headers — Next.js 16 respects these!
    headers: {
      'Cache-Control': 'max-age=3600', // cache 1 hour
    },
  });
  return res.json();
}

// OR — use 'use cache' directive (recommended)
async function getProducts() {
  'use cache';
  cacheLife('hours');

  const res = await fetch('https://api.example.com/products');
  return res.json();
}
```

---

## Old next: {} vs new 'use cache'

```ts
// Next.js 14 — next: {} option
const res = await fetch('/api/data', {
  next: {
    revalidate: 60,        // revalidate every 60s
    tags: ['products'],    // tag for revalidateTag()
  },
});

// Next.js 16 — 'use cache' + cacheTag/cacheLife
async function getData() {
  'use cache';
  cacheTag('products');  // tag
  cacheLife('minutes'); // revalidate

  const res = await fetch('/api/data');
  return res.json();
}
```

---

## No cache — always fresh

```ts
// Next.js 14
const res = await fetch('/api/data', {
  cache: 'no-store',
});

// Next.js 16 (dynamicIO) — no-store is DEFAULT!
// Just fetch normally — already uncached
const res = await fetch('/api/data');
// OR be explicit:
const res = await fetch('/api/data', {
  cache: 'no-store',
});
```

---

## Summary

| | Next.js 14 | Next.js 16 |
|---|---|---|
| Default | Cached | Not cached (dynamicIO) |
| Opt out | `cache: 'no-store'` | Not needed |
| Opt in | default | `'use cache'` directive |
| Tags | `next: { tags }` | `cacheTag()` |
| Revalidate | `next: { revalidate }` | `cacheLife()` |
| HTTP headers | Partially | Fully respected |

---

## One-liner

> "Next.js 16 with `dynamicIO` makes `fetch()` uncached by default and fully respects standard HTTP `Cache-Control` headers. Caching is now explicit — use the `'use cache'` directive with `cacheTag` and `cacheLife` instead of the old `next: { revalidate, tags }` option. This makes caching behavior predictable and aligned with standard HTTP."