# instrumentation.ts - Next.js 16

## Question
> What is `instrumentation.ts` in Next.js? How do you use it for monitoring and tracing with OpenTelemetry?

---

## What is it?

```
instrumentation.ts runs ONCE when the server starts
Perfect for:
  - Setting up monitoring (Datadog, Sentry, New Relic)
  - OpenTelemetry tracing
  - Logging setup
  - DB connection pool warmup
```

---

## Basic setup

```ts
// instrumentation.ts (root of project)
export async function register() {
  // Runs once on server startup
  console.log('Server starting...');

  // Setup your monitoring here
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Node.js runtime only
    await setupMonitoring();
  }
}

// New in Next.js 16 - onRequestError hook
export async function onRequestError(
  error: Error,
  request: { path: string; method: string },
  context: { routeType: string }
) {
  // Called on every unhandled request error
  await logErrorToSentry(error, { request, context });
}
```

---

## With OpenTelemetry

```ts
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const { NodeSDK } = await import('@opentelemetry/sdk-node');
    const { getNodeAutoInstrumentations } = await import(
      '@opentelemetry/auto-instrumentations-node'
    );

    const sdk = new NodeSDK({
      instrumentations: [getNodeAutoInstrumentations()],
    });

    sdk.start();
  }
}
```

---

## With Sentry

```ts
// instrumentation.ts
export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    const Sentry = await import('@sentry/nextjs');
    Sentry.init({
      dsn: process.env.SENTRY_DSN,
      tracesSampleRate: 1.0,
    });
  }
}

// onRequestError - send every error to Sentry
export async function onRequestError(error: Error) {
  const Sentry = await import('@sentry/nextjs');
  Sentry.captureException(error);
}
```

---

## Enable in config

```ts
// next.config.ts
export default {
  experimental: {
    instrumentationHook: true, // Next.js 15
    // Next.js 16 - enabled by default, no config needed!
  },
};
```

---

## Key points

```
register()        → runs once on server start
onRequestError()  → runs on every unhandled error (Next.js 16)
NEXT_RUNTIME      → 'nodejs' or 'edge' - check before Node APIs
Use for           → monitoring, tracing, logging setup
NOT for           → per-request logic (use proxy.ts instead)
```

---

## One-liner

> "`instrumentation.ts` runs once when the Next.js server starts - ideal for setting up OpenTelemetry, Sentry, or any monitoring tool. Next.js 16 added `onRequestError` which fires on every unhandled request error, making it easy to capture and report errors to your monitoring service without wrapping every route handler."
