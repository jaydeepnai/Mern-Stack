# Webpack vs Turbopack — Key Differences

## Core Difference — How They Work

### Webpack — rebuilds everything on change

```
You change one file
        ↓
Webpack processes the entire app again
"Check everything — what changed?"
        ↓
5 seconds later — update appears
```

### Turbopack — only rebuilds what changed

```
You change one file
        ↓
Turbopack processes only that file
"Only this file changed — rest is the same"
        ↓
100ms later — update appears
```

This is called **incremental compilation** — Turbopack's core advantage.

---

## Technical Comparison

| | Webpack | Turbopack |
|---|---|---|
| Language | JavaScript | Rust (10-100x faster) |
| Strategy | Full rebuild on change | Incremental — changed files only |
| Caching | Basic | Aggressive — persists to disk |
| HMR speed | 2–5 seconds | 50–300ms |
| Cold start | 8–15 seconds | 1–3 seconds |
| Released | 2012 (mature, proven) | 2022 (Next.js 16 default) |

---

## Real Numbers (1000 file project)

```
Cold start:
  Webpack:    12 seconds
  Turbopack:  1.5 seconds   ← 8x faster

File change → HMR:
  Webpack:    3 seconds
  Turbopack:  100ms         ← 30x faster

Memory usage:
  Webpack:    High (processes everything)
  Turbopack:  Lower (processes only what's needed)
```

---

## Config Difference

```js
// Webpack — next.config.js
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

// Turbopack — next.config.ts (Next.js 16)
export default {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};
```

---

## When to Use Which

```
Turbopack ✓
  New Next.js 16 projects (it's the default)
  Fast development iteration
  Large projects where rebuild speed matters

Webpack ✓
  Legacy projects with complex custom config
  Loaders not yet supported by Turbopack
  Non-Next.js projects (Vite, CRA, etc.)
```

---

## Next.js 16 — Turbopack is Default

```bash
# Next.js 16 — Turbopack runs automatically
next dev    # Turbopack
next build  # Turbopack

# Opt out if needed
next dev --no-turbopack
```

---

## One-liner for interviews

> "Webpack bundles the entire app on every change — reliable but slow. Turbopack is written in Rust and uses incremental compilation — only changed files are reprocessed, giving 5-10x faster cold starts and near-instant HMR. In Next.js 16, Turbopack is the default bundler for both dev and production builds."

---

*Next.js — Turbopack vs Webpack*