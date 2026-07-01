# Parallel Routes — Next.js App Router

## Question
> Load two separate sections (`@analytics` and `@team`) simultaneously on one page, each with their own loading state.

---

## Folder Structure

```
app/
  layout.tsx          ← receives both slots
  page.tsx
  @analytics/
    page.tsx          ← analytics section
    loading.tsx       ← analytics loading state
  @team/
    page.tsx          ← team section
    loading.tsx       ← team loading state
```

---

## layout.tsx — receive both slots

```tsx
// app/layout.tsx
export default function Layout({
  children,
  analytics,  // @analytics slot
  team,       // @team slot
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
}) {
  return (
    <div>
      {children}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
        {analytics}
        {team}
      </div>
    </div>
  );
}
```

---

## @analytics/page.tsx

```tsx
// app/@analytics/page.tsx
async function AnalyticsPage() {
  const data = await fetchAnalytics(); // slow query
  return <AnalyticsChart data={data} />;
}
```

## @analytics/loading.tsx

```tsx
// app/@analytics/loading.tsx
export default function Loading() {
  return <div>Loading analytics...</div>;
}
```

---

## @team/page.tsx

```tsx
// app/@team/page.tsx
async function TeamPage() {
  const members = await fetchTeam();
  return <TeamList members={members} />;
}
```

## @team/loading.tsx

```tsx
// app/@team/loading.tsx
export default function Loading() {
  return <div>Loading team...</div>;
}
```

---

## Key points

```
@folder   → slot name (must start with @)
layout    → receives slots as props
loading   → each slot has its own loading UI
Both load simultaneously — not waterfall
```

---

## One-liner for interviews

> "Parallel Routes use `@slot` folders — each slot loads independently with its own `loading.tsx`. The layout receives all slots as props and renders them together. This avoids waterfall loading — both sections fetch data at the same time."

---