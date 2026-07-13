# cacheTag + cacheLife - Next.js 16

## Question
> How do you tag cached data and invalidate it on demand in Next.js 16? What is `cacheLife`?

---

## Solution

```ts
// app/posts/[id]/page.tsx
import { unstable_cacheTag as cacheTag, unstable_cacheLife as cacheLife } from 'next/cache';

async function getPost(id: string) {
  'use cache';

  cacheTag('posts', `post-${id}`); // tag this cache entry
  cacheLife('hours');               // revalidate after hours

  return await db.posts.findUnique({ where: { id } });
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);
  return <article>{post.content}</article>;
}
```

---

## Invalidate by tag - on demand

```ts
// app/api/revalidate/route.ts
import { revalidateTag } from 'next/cache';

export async function POST(request: Request) {
  const { tag } = await request.json();

  revalidateTag(tag); // invalidate all cache with this tag

  return Response.json({ revalidated: true });
}

// Usage - when post is updated:
await fetch('/api/revalidate', {
  method: 'POST',
  body: JSON.stringify({ tag: 'post-123' })
});
```

---

## cacheLife presets

```ts
'use cache';

cacheLife('seconds');  // revalidate every few seconds
cacheLife('minutes');  // revalidate every few minutes
cacheLife('hours');    // revalidate every few hours
cacheLife('days');     // revalidate every few days
cacheLife('weeks');    // revalidate every few weeks
cacheLife('max');      // cache as long as possible

// Custom
cacheLife({
  stale: 60,        // serve stale for 60s
  revalidate: 3600, // revalidate after 1hr
  expire: 86400,    // expire after 1 day
});
```

---

## Real world example - CMS blog

```ts
// Cache posts tagged by category
async function getPostsByCategory(category: string) {
  'use cache';
  cacheTag('posts', `category-${category}`);
  cacheLife('hours');

  return await db.posts.findMany({ where: { category } });
}

// When editor publishes new post:
// Invalidate only that category's cache
revalidateTag(`category-${category}`);
// All other categories stay cached ✓
```

---

## Key points

```
cacheTag()   → label cache entries for targeted invalidation
cacheLife()  → set how long cache is valid
revalidateTag() → bust cache by tag on demand
'use cache'  → opt this function into caching
```

---

## One-liner

> "`cacheTag` labels cached data so you can invalidate specific entries with `revalidateTag` - useful when a CMS post updates and you only want to bust that post's cache. `cacheLife` sets the cache duration using presets like `'hours'` or `'days'`, or a custom object with `stale`, `revalidate`, and `expire` values."
