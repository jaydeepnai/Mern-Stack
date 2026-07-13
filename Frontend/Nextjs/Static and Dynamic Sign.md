# Static Route Indicator + Dev Tools - Next.js 16

## Question
> What new developer tools did Next.js 16 introduce? What is the Static Route Indicator?

---

## Static Route Indicator

```
Next.js 16 dev mode shows an indicator on each page:

  ⚡ Static  → page is statically rendered (fast!)
  λ Dynamic  → page is dynamically rendered (server)

Bottom left corner of browser in dev mode
Helps you instantly know rendering mode without checking code
```

---

## How it looks

```
Page with no dynamic data:
  ┌─────────────────────┐
  │   Blog Post         │
  │   Content here...   │
  │                     │
  └──────────────────⚡─┘  ← Static indicator

Page with connection() / cookies():
  ┌─────────────────────┐
  │   Dashboard         │
  │   User data here... │
  │                     │
  └──────────────────λ──┘  ← Dynamic indicator
```

---

## Disable it

```ts
// next.config.ts
export default {
  devIndicators: {
    position: 'bottom-right', // move position
    // or disable completely:
    appIsrStatus: false,
  },
};
```

---

## Next.js 16 Dev Overlay improvements

```
Improved error overlay:
  - Better stack traces
  - Source maps more accurate
  - Shows exactly which line caused the error
  - Hydration errors show diff (server vs client HTML)
  - Faster error recovery
```

---

## Hydration error diff - Next.js 16

```
Before (Next.js 14/15):
  "Hydration failed because server HTML didn't match client"
  (no details - confusing!)

After (Next.js 16):
  Shows exact diff:
  Server: <div class="light">
  Client: <div class="dark">
  ↑ Instantly see what's different!
```

---

## One-liner

> "Next.js 16 added a Static Route Indicator in dev mode - a ⚡ or λ badge showing whether a page is static or dynamic at a glance. The dev overlay also got major improvements including a visual diff for hydration errors, making it easy to see exactly what mismatched between server and client HTML."