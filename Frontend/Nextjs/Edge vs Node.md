# Edge Runtime vs Node.js Runtime

## Question
> When do you choose Edge Runtime over Node.js? What are the limitations? Detect user's country using Edge Runtime.

---

## Key Difference

```
Node.js Runtime (default):
  Full Node.js — fs, crypto, DB drivers, npm packages
  Runs on server — single region
  Slower cold start

Edge Runtime:
  Runs at CDN edge — closest to user
  Faster cold start, globally distributed
  BUT — no Node.js APIs, limited packages
  Max bundle size: 1MB
```

---

## Solution — Geolocation on Edge

```ts
// app/api/location/route.ts
export const runtime = 'edge'; // ← opt in to Edge

export function GET(request: Request) {
  // Vercel injects geo headers automatically
  const country = request.headers.get('x-vercel-ip-country');
  const city    = request.headers.get('x-vercel-ip-city');
  const region  = request.headers.get('x-vercel-ip-country-region');

  return Response.json({ country, city, region });
}
```

---

## Show different content by country

```ts
// app/api/pricing/route.ts
export const runtime = 'edge';

export function GET(request: Request) {
  const country = request.headers.get('x-vercel-ip-country') || 'US';

  const prices: Record<string, number> = {
    IN: 999,   // India — ₹999
    US: 29,    // USA — $29
    GB: 19,    // UK — £19
  };

  const price = prices[country] ?? prices['US'];

  return Response.json({ country, price });
}
```

---

## When to use which

```
Edge Runtime ✓:
  Geolocation / country detection
  A/B testing
  Auth token validation (proxy.ts)
  Redirects
  Simple API responses
  Personalization based on headers

Node.js Runtime ✓:
  Database calls (Prisma, Mongoose)
  File system (fs)
  Heavy npm packages
  Image processing (sharp)
  Long running tasks
  Anything needing full Node.js
```

---

## Set runtime per route

```ts
// Force Edge
export const runtime = 'edge';

// Force Node.js (default — no need to set)
export const runtime = 'nodejs';
```

---

## Next.js 16 update

```
Next.js 16 — proxy.ts runs on Node.js runtime by default
Previously middleware.ts ran on Edge Runtime

This means:
  proxy.ts → full Node.js → can use DB, crypto, fs
  No more Edge limitations for request interception!
```

---

## Limitations of Edge Runtime

```
❌ No fs (file system)
❌ No Node.js built-ins (path, buffer etc.)
❌ No Prisma / Mongoose
❌ Bundle size limit: 1MB
❌ No native Node.js crypto (use Web Crypto API instead)
✅ fetch API
✅ Web Crypto API
✅ Request/Response APIs
✅ TextEncoder/TextDecoder
```

---

## One-liner for interviews

> "Edge Runtime runs at CDN edge nodes closest to the user — great for geolocation, redirects, and A/B testing with near-zero latency. But it has no Node.js APIs, so for DB calls or heavy packages use the Node.js runtime. In Next.js 16, `proxy.ts` moved to Node.js runtime by default, removing the Edge limitations that `middleware.ts` had."

---

*Next.js Hard Set — Question 8/10*