# dynamicIO + Caching — Next.js 16

## Question
> What is `dynamicIO` in Next.js 16? How does the new caching model work compared to Next.js 14/15?

---

## What changed?

```
Next.js 14/15:
  fetch() is cached by default
  You had to OPT OUT of caching
  cache: 'no-store' to disable

Next.js 16 (dynamicIO):
  fetch() is NOT cached by default
  You have to OPT IN to caching
  use() + Suspense for dynamic data
  Much more predictable!
```

---

## Enable dynamicIO

```ts
// next.config.ts
export default {
  experimental: {
    dynamicIO: true,
  },
};
```

---

## Next.js 14 vs Next.js 16 caching

```ts
// Next.js 14 — cached by default (confusing!)
const data = await fetch('/api/posts');
// ↑ cached forever — stale data bug!

// Had to explicitly opt out:
const data = await fetch('/api/posts', {
  cache: 'no-store'
});

// Next.js 16 (dynamicIO) — NOT cached by default
const data = await fetch('/api/posts');
// ↑ always fresh — no surprise stale data!
```

---

## Opt IN to caching in Next.js 16

```ts
import { unstable_cache } from 'next/cache';

// Cache this function's result
const getPosts = unstable_cache(
  async () => {
    const posts = await db.posts.findMany();
    return posts;
  },
  ['posts'],           // cache key
  { revalidate: 60 }  // revalidate every 60s
);

export default async function PostsPage() {
  const posts = await getPosts(); // cached!
  return <PostList posts={posts} />;
}
```

---

## use cache directive — Next.js 16

```ts
// New 'use cache' directive — even simpler
async function getPosts() {
  'use cache'; // ← cache this function

  return await db.posts.findMany();
}

// With revalidation
async function getPost(id: string) {
  'use cache';
  cacheLife('hours'); // revalidate after hours

  return await db.posts.findUnique({ where: { id } });
}
```

---

## Summary

| | Next.js 14/15 | Next.js 16 (dynamicIO) |
|---|---|---|
| Default fetch | Cached | Not cached |
| Opt out | `cache: 'no-store'` | Not needed |
| Opt in | Default | `unstable_cache` or `'use cache'` |
| Predictable? | ❌ Confusing | ✅ Clear |

---

## One-liner

> "Next.js 16's `dynamicIO` flips the caching default — `fetch()` is no longer cached by default, eliminating surprise stale data bugs. Use the new `'use cache'` directive or `unstable_cache` to explicitly opt into caching. This makes data fetching behavior much more predictable than Next.js 14/15."