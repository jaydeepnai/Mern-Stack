# What is a Sitemap?

## Simple explanation

A sitemap is a **menu card for Google**.

It tells Google: *"These pages exist on my website — please index them."*

---

## Without sitemap

```
Google visits your site
Follows links one by one
Might miss some pages
New pages can take weeks to show in search
```

## With sitemap

```
Google reads sitemap.xml
Instantly knows ALL your pages
New pages indexed much faster
Better SEO
```

---

## What it looks like

```xml
<!-- https://example.com/sitemap.xml -->

<urlset>
  <url>
    <loc>https://example.com/</loc>        ← home page
    <priority>1.0</priority>               ← most important
  </url>

  <url>
    <loc>https://example.com/posts/1</loc> ← blog post
    <priority>0.8</priority>
  </url>

  <url>
    <loc>https://example.com/about</loc>   ← about page
    <priority>0.5</priority>
  </url>
</urlset>
```

---

## Priority values

```
1.0 → Most important  (home page)
0.8 → Important       (blog posts, products)
0.5 → Normal          (about, contact)
0.3 → Less important  (old pages)
```

---

## In Next.js — automatic!

```ts
// app/sitemap.ts
// Create this file → Next.js generates /sitemap.xml automatically

export default async function sitemap() {
  const posts = await db.posts.findMany();

  return [
    { url: 'https://example.com', priority: 1.0 },
    { url: 'https://example.com/about', priority: 0.5 },

    // Dynamic pages from DB
    ...posts.map(post => ({
      url: `https://example.com/posts/${post.id}`,
      lastModified: post.updatedAt,
      priority: 0.8,
    })),
  ];
}
// Visit /sitemap.xml → XML is auto generated!
```

---

## How to submit to Google

```
1. Create sitemap.ts in Next.js
2. Deploy your site
3. Go to Google Search Console
4. Submit: https://yoursite.com/sitemap.xml
5. Google indexes all your pages faster
```

---

## One-liner

> A sitemap is an XML file that lists all your website's pages so Google can find and index them faster. In Next.js, just create `app/sitemap.ts` and return an array of URLs — Next.js generates the XML automatically.