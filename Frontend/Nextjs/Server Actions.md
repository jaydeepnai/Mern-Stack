# Server Actions — Next.js App Router

## Question
> Handle form submission using `'use server'` — save data directly to DB without creating an API route. Add server-side validation too.

---

## Solution

```tsx
// app/posts/page.tsx

// Server Action — defined inline
async function createPost(formData: FormData) {
  'use server';

  const title = formData.get('title') as string;
  const body  = formData.get('body') as string;

  // Server-side validation
  if (!title || title.length < 3) {
    throw new Error('Title must be at least 3 characters');
  }

  // Direct DB call — no API route needed
  await db.posts.create({ title, body });

  // Refresh the page data
  revalidatePath('/posts');
}

// Server Component — uses the action
export default function NewPostPage() {
  return (
    <form action={createPost}>
      <input name="title" placeholder="Title" />
      <textarea name="body" placeholder="Body" />
      <button type="submit">Create Post</button>
    </form>
  );
}
```

---

## With useFormState — show errors in UI

```tsx
'use client';
import { useFormState } from 'react-dom';

async function createPost(prevState: any, formData: FormData) {
  'use server';

  const title = formData.get('title') as string;

  if (!title) {
    return { error: 'Title is required' }; // return error
  }

  await db.posts.create({ title });
  revalidatePath('/posts');
  return { error: null };
}

function NewPostForm() {
  const [state, action] = useFormState(createPost, { error: null });

  return (
    <form action={action}>
      <input name="title" />
      {state.error && <p style={{ color: 'red' }}>{state.error}</p>}
      <button type="submit">Create</button>
    </form>
  );
}
```

---

## Key points

```
'use server'     → marks function as Server Action
formData.get()   → read form fields
revalidatePath() → refresh cached data after mutation
No API route     → Server Action IS the endpoint
Works with JS disabled → progressive enhancement
```

---

## One-liner for interviews

> "Server Actions are async functions marked with `'use server'` — they run on the server, can call the DB directly, and are used as form `action` props. No API route needed. Use `revalidatePath` to refresh stale cache after a mutation, and `useFormState` to show server validation errors in the UI."

---

*Next.js Hard Set — Question 3/10*