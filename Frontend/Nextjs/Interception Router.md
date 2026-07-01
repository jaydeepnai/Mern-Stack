# Intercepting Routes — Modal Pattern

## Question
> Build a photo gallery — clicking a photo changes the URL but shows a modal. Navigating directly to the URL shows the full page.

---

## Folder Structure

```
app/
  photos/
    [id]/
      page.tsx          ← direct URL → full page
  @modal/
    (.)photos/
      [id]/
        page.tsx        ← intercepted → modal
  layout.tsx            ← renders both
  page.tsx              ← gallery grid
```

---

## Intercept syntax

```
(.)   → same level
(..)  → one level up
(...) → root level
```

---

## layout.tsx — render modal slot

```tsx
// app/layout.tsx
export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        {modal} {/* modal renders on top */}
      </body>
    </html>
  );
}
```

---

## Gallery page — normal links

> **How does clicking open the modal?**
> The `<Link>` just navigates to `/photos/1` — that's it. Next.js sees that
> `@modal/(.)photos/[id]` exists and **automatically intercepts** the navigation.
> It renders the modal version instead of the full page — no `onClick` needed.
> This only happens on client-side navigation (clicking a Link).
> Direct URL or refresh → no interception → full page renders instead.

```tsx
// app/page.tsx
import Link from 'next/link';

export default function Gallery() {
  const photos = [1, 2, 3, 4, 5];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
      {photos.map(id => (
        // Just a normal Link — Next.js intercepts it automatically
        // because @modal/(.)photos/[id]/page.tsx exists
        <Link key={id} href={`/photos/${id}`}>
          <img src={`/photo-${id}.jpg`} alt={`Photo ${id}`} />
        </Link>
      ))}
    </div>
  );
}
```

---

## Intercepted route — shows modal

```tsx
// app/@modal/(.)photos/[id]/page.tsx
import { PhotoModal } from '@/components/PhotoModal';

export default function InterceptedPhoto({
  params,
}: {
  params: { id: string };
}) {
  return <PhotoModal id={params.id} />;
}
```

---

## Modal component

```tsx
// components/PhotoModal.tsx
'use client';
import { useRouter } from 'next/navigation';

export function PhotoModal({ id }: { id: string }) {
  const router = useRouter();

  return (
    <div
      style={{
        position: 'fixed', inset: 0,
        background: 'rgba(0,0,0,0.8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center'
      }}
      onClick={() => router.back()} // close on backdrop click
    >
      <img src={`/photo-${id}.jpg`} alt={`Photo ${id}`} />
    </div>
  );
}
```

---

## Direct URL — full page

```tsx
// app/photos/[id]/page.tsx
export default function PhotoPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Photo {params.id}</h1>
      <img src={`/photo-${params.id}.jpg`} alt="Photo" />
    </div>
  );
}
```

---

## How it works

### Case 1 — Clicking a photo inside the app

```
1. User clicks <Link href="/photos/1"> in gallery

2. Next.js checks — is there an intercepting route?
   @modal/(.)photos/[id] exists → YES, intercept!

3. Next.js renders TWO things at the same time:
   - children  = gallery page (stays in background)
   - modal     = @modal/(.)photos/[id]/page.tsx (renders on top)

4. Layout puts them together:
   <body>
     {children}  ← gallery still visible in background
     {modal}     ← PhotoModal renders on top (fixed position)
   </body>

5. URL becomes /photos/1 — but gallery is still mounted
   User sees: gallery + modal overlay
```

### Case 2 — Refresh or direct URL visit

```
1. User visits /photos/1 directly (or refreshes)

2. Next.js checks — is this a client-side navigation?
   NO → interception does NOT apply

3. Next.js renders normally:
   app/photos/[id]/page.tsx → full page photo view

4. No gallery in background — just the photo page
   modal slot = null → nothing renders in {modal}
```

### Why does this happen?

```
Interception ONLY works on client-side navigation (Link clicks)
         ↓
Because Next.js router knows WHERE you came from
         ↓
"You came from the gallery → show modal"
"You came from a direct URL → show full page"

Refresh = direct URL visit = no interception
```

### Visual flow

```
Gallery Page (/):
┌─────────────────────────┐
│  📷  📷  📷             │
│  📷  📷  📷  ← click   │
└─────────────────────────┘
         ↓ Link click
┌─────────────────────────┐
│  📷  📷  📷             │  ← gallery still here
│  📷  📷  📷             │
│  ┌───────────────────┐  │
│  │   PhotoModal      │  │  ← modal on top
│  │   🖼️ big photo   │  │
│  │   click to close  │  │
│  └───────────────────┘  │
└─────────────────────────┘
URL = /photos/1

Direct visit to /photos/1:
┌─────────────────────────┐
│  Photo 1                │  ← full page, no gallery
│  🖼️ big photo          │
└─────────────────────────┘
```

---

## One-liner for interviews

> "Intercepting Routes use `(.)folder` syntax to intercept navigation — when clicked from within the app, the modal version renders. When navigating directly to the URL (refresh or share), the full page renders. The layout receives a `@modal` slot where the intercepted component renders on top of the current page."

---

*Next.js Hard Set — Question 4/10*