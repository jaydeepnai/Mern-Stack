# Partial Prerendering (PPR) — Next.js 16

## Question
> What is Partial Prerendering? How does it combine static and dynamic content on the same page?

---

## What is PPR?

```
Old way — you had to choose ONE:
  Static  → whole page is static (fast but stale)
  Dynamic → whole page is dynamic (fresh but slow)

PPR — best of both:
  Static shell → served instantly from CDN
  Dynamic parts → streamed in as they load
  Same page!
```

---

## How it works

```jsx
// next.config.ts — enable PPR (Next.js 16)
export default {
  experimental: {
    ppr: true,
  },
};
```

```jsx
// app/dashboard/page.tsx
import { Suspense } from 'react';

// Static — pre-rendered at build time
function StaticHeader() {
  return <h1>Dashboard</h1>; // no async = static
}

// Dynamic — streamed in at request time
async function DynamicStats() {
  const stats = await fetchLiveStats(); // async = dynamic
  return <StatsChart data={stats} />;
}

export default function DashboardPage() {
  return (
    <div>
      {/* Static — in the prerendered shell */}
      <StaticHeader />
      <nav>...</nav>

      {/* Dynamic — streamed in via Suspense */}
      <Suspense fallback={<p>Loading stats...</p>}>
        <DynamicStats />
      </Suspense>
    </div>
  );
}
```

---

## What gets prerendered vs streamed

```
Build time (static shell):
  ✓ <StaticHeader />
  ✓ <nav>
  ✓ <Suspense fallback={<p>Loading...</p>}> ← fallback included!

Request time (streamed):
  ✓ <DynamicStats /> → replaces fallback when ready
```

---

## PPR vs old approaches

```
SSG (Static):     Whole page static   → fast, stale
SSR (Dynamic):    Whole page dynamic  → slow, fresh
ISR:              Whole page, timed   → ok, sometimes stale
PPR:              Shell static +      → fast + fresh
                  dynamic streamed
```

---

## One-liner

> "Partial Prerendering pre-renders the static shell of a page at build time (served instantly from CDN) while dynamic parts are streamed in at request time via Suspense. It's the best of SSG and SSR on the same page — no tradeoff needed. Enable with `ppr: true` in `next.config.ts`."