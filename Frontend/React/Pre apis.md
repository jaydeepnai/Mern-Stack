# Resource Preloading APIs — React 19

## Question
> React 19 added built-in APIs for preloading resources. What are `preload`, `preinit`, `prefetchDNS`, and `preconnect`? When do you use each?

---

## The Problem

```html
<!-- Old way — manually add to <head> -->
<head>
  <link rel="preload" href="/font.woff2" as="font" />
  <link rel="dns-prefetch" href="https://api.example.com" />
  <link rel="preconnect" href="https://cdn.example.com" />
</head>
<!-- Hard to manage dynamically from components! -->
```

---

## React 19 — from any component

```jsx
import {
  preload,
  preinit,
  prefetchDNS,
  preconnect,
} from 'react-dom';

function App() {
  // Call these anywhere — React hoists to <head>
  prefetchDNS('https://api.example.com');
  preconnect('https://cdn.example.com');
  preload('/font.woff2', { as: 'font' });
  preinit('/critical.js', { as: 'script' });

  return <div>Content</div>;
}
```

---

## Each API explained

### prefetchDNS — resolve DNS early
```jsx
import { prefetchDNS } from 'react-dom';

// DNS lookup happens early — saves ~100ms
prefetchDNS('https://api.example.com');

// Generates: <link rel="dns-prefetch" href="..." />
```

### preconnect — full connection early
```jsx
import { preconnect } from 'react-dom';

// DNS + TCP + TLS handshake early
preconnect('https://cdn.example.com');

// Generates: <link rel="preconnect" href="..." />
```

### preload — download resource early
```jsx
import { preload } from 'react-dom';

// Download but don't execute yet
preload('/font.woff2', { as: 'font', crossOrigin: 'anonymous' });
preload('/hero.jpg', { as: 'image' });
preload('/data.json', { as: 'fetch' });

// Generates: <link rel="preload" href="..." as="..." />
```

### preinit — download AND execute early
```jsx
import { preinit } from 'react-dom';

// Download AND run immediately
preinit('/analytics.js', { as: 'script' });
preinit('/critical.css', { as: 'style' });

// Generates: <link rel="stylesheet" /> or <script />
```

---

## When to use which

```
prefetchDNS   → you'll fetch from a domain soon
               cheapest hint — just DNS resolution

preconnect    → you'll definitely fetch from domain soon
               DNS + TCP + TLS — stronger hint

preload       → you'll need a resource soon (font, image)
               downloads but doesn't execute

preinit       → you need a script/style NOW
               downloads AND executes immediately
```

---

## Real world — product page

```jsx
async function ProductPage({ params }) {
  const product = await getProduct(params.id);

  // Hint the browser about upcoming resources
  preconnect('https://images.cdn.com');
  preload(product.heroImage, { as: 'image' });
  prefetchDNS('https://reviews-api.com');

  return (
    <div>
      <img src={product.heroImage} />
      <Reviews productId={product.id} />
    </div>
  );
}
```

---

## One-liner

> "React 19's resource preloading APIs (`prefetchDNS`, `preconnect`, `preload`, `preinit`) let you hint the browser about upcoming resources from any component — React automatically hoists them to `<head>`. Use `prefetchDNS` for early DNS resolution, `preconnect` for full early connections, `preload` to download resources early, and `preinit` to download AND execute scripts/styles immediately."