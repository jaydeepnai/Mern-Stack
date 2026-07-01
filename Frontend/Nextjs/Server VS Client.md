# Server Component vs Client Component — Next.js App Router

## Simple Rule

```
No interactivity needed?  → Server Component
useState / useEffect?     → Client Component
Event handlers?           → Client Component
DB / API calls?           → Server Component (faster, secure)
```

---

## Server Component (default in App Router)

```jsx
// app/dashboard/page.tsx
// No 'use client' = Server Component by default

async function Dashboard() {
  // Direct DB call — no API route needed!
  const data = await db.query('SELECT * FROM users');

  return (
    <div>
      <h1>Dashboard</h1>
      <ClientChart data={data} /> {/* pass to client */}
    </div>
  );
}
```

---

## Client Component

```jsx
'use client'; // ← this line makes it a Client Component

import { useState } from 'react';

function ClientChart({ data }) {
  const [filter, setFilter] = useState('all');

  return (
    <div>
      <button onClick={() => setFilter('active')}>Filter</button>
      <Chart data={data} filter={filter} />
    </div>
  );
}
```

---

## Key differences

| | Server Component | Client Component |
|---|---|---|
| Directive | none (default) | `'use client'` at top |
| useState / useEffect | ❌ | ✅ |
| DB / fetch | ✅ direct | ❌ needs API |
| Bundle size | 0kb added | added to JS bundle |
| SEO | ✅ great | ❌ needs extra work |

---

## One-liner for interviews

> "Server Components run only on the server — they can call DB directly, have zero client JS, and are great for SEO. Client Components run in the browser — they support hooks and event handlers. In App Router, everything is a Server Component by default; add `'use client'` only when you need interactivity."

---
