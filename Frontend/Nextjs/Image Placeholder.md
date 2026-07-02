# Image Optimization — Blur Placeholder

## Question
> Use `next/image` to generate a blur placeholder at build time. Improve LCP score.

---

## Solution

```tsx
// app/page.tsx
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

// Server Component — runs at build/request time
async function HeroImage() {
  const src = '/hero.jpg';

  // Generate blur placeholder at build time
  const { base64 } = await getPlaiceholder(src);

  return (
    <Image
      src={src}
      width={1200}
      height={600}
      alt="Hero image"
      placeholder="blur"
      blurDataURL={base64}  // ← tiny base64 image shown while loading
      priority              // ← LCP image: load immediately
    />
  );
}
```

---

## Install plaiceholder

```bash
npm install plaiceholder sharp
```

---

## With remote images

```tsx
import Image from 'next/image';
import { getPlaiceholder } from 'plaiceholder';

async function RemoteImage({ url }: { url: string }) {
  // Fetch remote image and generate blur
  const buffer = await fetch(url)
    .then(res => res.arrayBuffer())
    .then(buf => Buffer.from(buf));

  const { base64 } = await getPlaiceholder(buffer);

  return (
    <Image
      src={url}
      width={800}
      height={400}
      alt="Remote image"
      placeholder="blur"
      blurDataURL={base64}
    />
  );
}
```

---

## Without plaiceholder — manual base64

```tsx
// Simple static blur — good enough for most cases
<Image
  src="/hero.jpg"
  width={1200}
  height={600}
  alt="Hero"
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/..."
  // ↑ tiny 10x10 blurred version of the image
/>
```

---

## next.config.ts — allow remote domains

```ts
// next.config.ts
const config = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default config;
```

---

## Key props for performance

```tsx
<Image
  src="/hero.jpg"
  width={1200}
  height={600}
  alt="Hero"
  placeholder="blur"      // show blur while loading
  blurDataURL={base64}    // the blur image (base64 string)
  priority                // preload — use on LCP image only
  quality={85}            // compress (default 75)
  sizes="100vw"           // responsive hint for browser
/>
```

---

## Why this improves LCP

```
Without blur placeholder:
  Page loads → white empty space → image pops in
  Layout shift → bad CLS score
  User sees blank area → bad UX

With blur placeholder:
  Page loads → blurred version shows instantly (tiny base64)
  Real image loads → smooth fade in
  No layout shift → good CLS + LCP score
```

---

## One-liner for interviews

> "`next/image` with `placeholder='blur'` shows a tiny base64 blurred version of the image while the real one loads — eliminating layout shift and improving LCP. Use `plaiceholder` to generate the `blurDataURL` at build time on the server. Add `priority` on above-the-fold images so the browser preloads them immediately."

---