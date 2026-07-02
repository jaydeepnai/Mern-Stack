# ISR — Incremental Static Regeneration

## Question
> Statically generate blog posts at build time, but regenerate them in the background every 60 seconds without a full rebuild.

---

## Solution

```tsx
// app/posts/[id]/page.tsx

// Generate popular posts at build time
export async function generateStaticParams() {
  const posts = await fetchPopularPosts();
  return posts.map(post => ({ id: String(post.id) }));
}

// Fetch with ISR — revalidate every 60 seconds
async function getPost(id: string) {
  const res = await fetch(`https://api.example.com/posts/${id}`, {
    next: { revalidate: 60 } // ← ISR magic
  });
  return res.json();
}

export default async function PostPage({
  params,
}: {
  params: { id: string };
}) {
  const post = await getPost(params.id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </article>
  );
}
```

---

## How it works

```
Build time:
  generateStaticParams() → popular posts pre-built as HTML

First request after 60s:
  Serve stale page immediately (fast!)
  Background: fetch fresh data → rebuild page
  Next request: gets fresh page

New post (not in generateStaticParams):
  First request → generate on demand → cache it
  After 60s → revalidate in background
```

---

## On-demand revalidation (Next.js 16)

```ts
// Revalidate specific post when content changes
import { revalidatePath, revalidateTag } from 'next/cache';

// By path
revalidatePath('/posts/1');

// By tag — revalidate all posts at once
const res = await fetch(`/api/posts/${id}`, {
  next: { tags: ['posts'] }
});
revalidateTag('posts'); // invalidates all tagged fetches
```

---

## Key points

```
revalidate: 60    → rebuild every 60 seconds in background
revalidate: 0     → always dynamic (no cache)
revalidate: false → cache forever (until manual revalidation)
generateStaticParams → pre-build known routes at build time
```

---

## One-liner for interviews

> "ISR combines static generation and dynamic data — pages are pre-built at deploy time via `generateStaticParams`, then automatically regenerated in the background after the `revalidate` interval. Stale pages are served immediately while fresh ones are built, giving you both performance and up-to-date content."

---