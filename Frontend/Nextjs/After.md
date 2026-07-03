 # after() API — Next.js 16

## Question
> Run code AFTER a response is sent to the user — without blocking it. Use case: logging, analytics, cleanup.

---

## What is `after()`?

```
Normal way:
  Request → do work → send response
  If work is slow → user waits!

after():
  Request → send response immediately
            → THEN do slow work in background
  User gets response fast!
```

---

## Solution

```ts
// app/api/checkout/route.ts
import { after } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();

  // Main work — user waits for this
  const order = await createOrder(body);

  // after() — runs AFTER response is sent
  after(async () => {
    await sendConfirmationEmail(order);  // slow — don't block!
    await updateAnalytics(order);        // slow — don't block!
    await notifyWarehouse(order);        // slow — don't block!
  });

  // Response sent immediately — user doesn't wait for email/analytics
  return Response.json({ orderId: order.id });
}
```

---

## In Server Components

```tsx
// app/product/[id]/page.tsx
import { after } from 'next/server';

export default async function ProductPage({ params }) {
  const product = await fetchProduct(params.id);

  // Track view AFTER page is sent to user
  after(async () => {
    await trackPageView(params.id);
    await updateViewCount(params.id);
  });

  return <ProductDetails product={product} />;
}
```

---

## Key points

```
after()   → runs after response is flushed
            does NOT block the response
            good for: logging, analytics, emails, cleanup
            NOT for: data the user needs to see
```

---

## One-liner

> "`after()` in Next.js 16 schedules a callback to run after the response has been sent — so slow tasks like analytics, emails, and logging don't delay the user. Import from `next/server` and call it inside Route Handlers or Server Components."
