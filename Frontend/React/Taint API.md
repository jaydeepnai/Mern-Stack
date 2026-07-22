# Taint API — React 19 (Security)

## Question
> What is React's Taint API? How does it prevent sensitive data from accidentally being sent to the client?

---

## The Problem

```jsx
// Server Component — fetches user data
async function UserProfile() {
  const user = await db.users.findOne({ id: 1 });
  // user = { name: 'Jd', email: 'jd@test.com', password: 'hash123' }

  // Accidentally pass whole object to client!
  return <ClientProfile user={user} />;
  //                          ↑
  // password hash sent to browser — security risk!
}
```

---

## Solution — taintObjectReference

```jsx
import { experimental_taintObjectReference as taintObjectReference } from 'react';

async function UserProfile() {
  const user = await db.users.findOne({ id: 1 });

  // Mark entire object as tainted
  taintObjectReference(
    'Do not pass user object to client — contains password!',
    user
  );

  // Now if you try to pass user to a Client Component:
  return <ClientProfile user={user} />;
  //                          ↑
  // React throws an error at COMPILE/RENDER time!
  // "Do not pass user object to client — contains password!"
}
```

---

## taintUniqueValue — for specific values

```jsx
import { experimental_taintUniqueValue as taintUniqueValue } from 'react';

async function Dashboard() {
  const apiKey = process.env.SECRET_API_KEY;

  // Taint the specific value
  taintUniqueValue(
    'API key must not be sent to client!',
    process, // object that holds it (for GC)
    apiKey
  );

  // If apiKey accidentally reaches a Client Component:
  // React throws immediately!
  return <ClientDashboard secretKey={apiKey} />; // ERROR!
}
```

---

## Safe pattern — only pass what client needs

```jsx
import { experimental_taintObjectReference as taintObjectReference } from 'react';

async function UserProfile() {
  const user = await db.users.findOne({ id: 1 });

  // Taint the full object
  taintObjectReference('Sensitive user data!', user);

  // Only pass safe fields
  const safeUser = {
    name: user.name,
    email: user.email,
    // password NOT included
  };

  return <ClientProfile user={safeUser} />; // ✓ safe!
}
```

---

## Two taint functions

```
taintObjectReference(message, object)
  → Taints entire object
  → Error if object is passed to Client Component

taintUniqueValue(message, lifetime, value)
  → Taints a specific value (string, number etc.)
  → Error if that exact value reaches client
  → lifetime = object for GC reference
```

---

## Key points

```
experimental_  → still experimental in React 19
Server only    → only works in Server Components
Prevents       → accidental data leaks to client
Throws         → at render time, not runtime
Use for        → passwords, API keys, tokens, PII
```

---

## One-liner

> "React 19's Taint API lets you mark sensitive objects or values as 'tainted' — if they accidentally get passed to a Client Component, React throws an error immediately at render time. Use `taintObjectReference` for entire objects (like a user with a password field) and `taintUniqueValue` for specific secrets like API keys or tokens."
