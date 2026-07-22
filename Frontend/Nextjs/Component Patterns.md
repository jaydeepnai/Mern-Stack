# Server Component Patterns — Next.js 16

## Question
> What are the common Server Component composition patterns? How do you pass Server Components as props to Client Components?

---

## Pattern 1 — Server Component as children prop

```tsx
// ✅ Pass Server Component as children to Client Component
// Client Component
'use client';
function Modal({ children }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)}>Toggle</button>
      {open && <div>{children}</div>}
    </div>
  );
}

// Server Component — wraps Modal
async function Page() {
  const data = await fetchData(); // server-side fetch ✓
  return (
    <Modal>
      <ServerContent data={data} /> {/* Server Component as child */}
    </Modal>
  );
}
```

---

## Pattern 2 — Interleaving Server + Client

```tsx
// ✅ Correct — Server wraps Client wraps Server
async function Page() {
  return (
    <ServerLayout>        {/* Server */}
      <ClientSidebar>     {/* Client */}
        <ServerNavItems /> {/* Server — passed as children */}
      </ClientSidebar>
    </ServerLayout>
  );
}

// ❌ Wrong — Client importing Server Component directly
'use client';
import { ServerComponent } from './ServerComponent'; // ERROR!
// Client Components cannot import Server Components
```

---

## Pattern 3 — Prop drilling Server data

```tsx
// Server fetches, passes to Client via props
async function ProductPage({ params }) {
  const product = await db.products.findOne(params.id);

  return (
    <div>
      <h1>{product.name}</h1>
      {/* Pass only serializable data to Client */}
      <AddToCartButton
        productId={product.id}    // ✓ string
        price={product.price}     // ✓ number
        // onSale={product.sale}  // ✓ boolean
        // db={db}                // ❌ not serializable!
      />
    </div>
  );
}
```

---

## Pattern 4 — Context alternative for Server Components

```tsx
// Server Components can't use Context
// Use prop passing or fetch data close to where it's needed

// ❌ Won't work
async function ServerComponent() {
  const user = useContext(UserContext); // ERROR — no hooks!
}

// ✅ Fetch directly where needed
async function ServerComponent() {
  const user = await getCurrentUser(); // fetch directly!
  return <div>{user.name}</div>;
}
```

---

## What can be passed as props to Client Components

```
✅ Serializable:
  string, number, boolean, null
  Plain objects { name: 'Jd' }
  Arrays [1, 2, 3]
  Date (serialized as string)
  JSX / React elements (Server Components as children!)

❌ Not serializable:
  Functions (except Server Actions)
  Class instances
  DB connections
  Symbols
```

---

## One-liner

> "The key Server Component pattern is: Server Components pass data and JSX to Client Components via props or children — never the other way around. Client Components can't import Server Components, but Server Components CAN be passed as `children` to Client Components. Only pass serializable data (strings, numbers, plain objects) as props — not DB connections or class instances."
