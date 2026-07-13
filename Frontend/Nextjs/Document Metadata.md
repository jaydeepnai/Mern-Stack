# Document Metadata - React 19

## Question
> In React 19, how do you set `<title>`, `<meta>`, and `<link>` tags directly from components? No more next/head or react-helmet needed.

---

## Solution - React 19 built-in

```jsx
// Any component - even deeply nested!
function ProductPage({ product }) {
  return (
    <>
      {/* React 19 hoists these to <head> automatically */}
      <title>{product.name} - MyShop</title>
      <meta name="description" content={product.description} />
      <meta property="og:image" content={product.image} />
      <link rel="canonical" href={`/products/${product.id}`} />

      {/* Normal JSX below */}
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </>
  );
}
```

---

## React 18 vs React 19

```jsx
// React 18 - needed next/head (Next.js) or react-helmet
import Head from 'next/head';

function ProductPage({ product }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
        <meta name="description" content={product.description} />
      </Head>
      <h1>{product.name}</h1>
    </>
  );
}

// React 19 - built in, no library needed!
function ProductPage({ product }) {
  return (
    <>
      <title>{product.name}</title>
      <meta name="description" content={product.description} />
      <h1>{product.name}</h1>
    </>
  );
}
```

---

## Nested components - last one wins

```jsx
function App() {
  return (
    <>
      <title>My App</title>          {/* overridden */}
      <ProductPage product={p} />    {/* this title wins */}
    </>
  );
}

function ProductPage({ product }) {
  return (
    <>
      <title>{product.name}</title>  {/* ← this wins */}
      <h1>{product.name}</h1>
    </>
  );
}
```

---

## Stylesheet priority - React 19

```jsx
// precedence prop controls load order
function Component() {
  return (
    <>
      <link rel="stylesheet" href="/base.css" precedence="low" />
      <link rel="stylesheet" href="/theme.css" precedence="high" />
      {/* high loads after low - correct cascade order */}
      <div>Content</div>
    </>
  );
}
```

---

## One-liner

> "React 19 supports `<title>`, `<meta>`, and `<link>` tags directly in any component - React automatically hoists them to `<head>`. No more `next/head` or `react-helmet` needed. When multiple components set the same tag, the most specific (deepest) component wins."
