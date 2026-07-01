# Proxy (Auth + Redirect) — Next.js 16

## Question
> Write a proxy that redirects unauthenticated users to `/login`. Allow public routes. Validate token from cookies.

---

## What changed in Next.js 16?

```
Next.js 15:  middleware.ts  (Edge Runtime — no Node.js APIs)
Next.js 16:  proxy.ts      (Node.js Runtime — full Node.js support)

What to do: rename middleware.ts → proxy.ts
            rename exported function to proxy
            logic stays the same
```

---

## Solution — proxy.ts (Next.js 16)

```ts
// proxy.ts (root of project — next to app/)
import { NextRequest, NextResponse } from 'next/server';

// Public routes — no auth needed
const PUBLIC_ROUTES = ['/', '/login', '/register', '/about'];

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  // Allow static files and Next.js internals
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/public') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check token from cookie
  const token = request.cookies.get('token')?.value;

  if (!token) {
    // Not logged in → redirect to login
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname); // save original path
    return NextResponse.redirect(loginUrl);
  }

  // Token exists → allow through
  return NextResponse.next();
}

// Which routes proxy runs on
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
```

---

## With JWT verification — Node.js crypto (Next.js 16 advantage)

```ts
// proxy.ts
// Next.js 16 runs on Node.js — can use Node.js crypto directly!
import { NextRequest, NextResponse } from 'next/server';
import { jwtVerify } from 'jose'; // or use native Node.js crypto

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const PUBLIC_ROUTES = ['/login', '/register'];
  if (PUBLIC_ROUTES.includes(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get('token')?.value;

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  try {
    await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET)
    );
    return NextResponse.next();
  } catch {
    // Invalid or expired token → redirect
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }
}
```

---

## Redirect back after login

```ts
// proxy.ts — save where user was going
const loginUrl = new URL('/login', request.url);
loginUrl.searchParams.set('from', pathname);
return NextResponse.redirect(loginUrl);

// app/login/page.tsx — redirect back after success
const from = searchParams.get('from') || '/dashboard';
router.push(from);
```

---

## Next.js 15 vs Next.js 16 comparison

| | Next.js 15 (middleware.ts) | Next.js 16 (proxy.ts) |
|---|---|---|
| File name | `middleware.ts` | `proxy.ts` |
| Export name | `export function middleware` | `export default function proxy` |
| Runtime | Edge (limited) | Node.js (full support) |
| Node.js APIs | ❌ Not available | ✅ Available |
| `fs`, `crypto` | ❌ | ✅ |
| Logic changes | — | None — same logic |

---

## Key points

```
proxy.ts         → must be in root (next to app/)
Node.js Runtime  → can use any Node.js API now
NextRequest      → request with cookies, headers, url
NextResponse.redirect()  → send to another URL
NextResponse.next()      → allow through
config.matcher   → which routes to run on
```

---

## One-liner for interviews

> "In Next.js 16, `middleware.ts` was replaced by `proxy.ts` — the exported function is renamed to `proxy` but the logic stays identical. The big improvement is that `proxy.ts` runs on the Node.js runtime instead of the Edge runtime, so you can use full Node.js APIs like `fs` and native `crypto`. For auth, read the token from `request.cookies`, verify it, and either call `NextResponse.next()` to allow through or `NextResponse.redirect()` to send to login."

---

*Next.js Hard Set — Question 5/10*