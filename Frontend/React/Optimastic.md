# useOptimistic + Server Actions - React 19

## Question
> Combine `useOptimistic` with Server Actions for a todo list - add item instantly in UI, confirm in background.

---

## Solution

```tsx
'use client';
import { useOptimistic, useTransition } from 'react';

// Server Action
async function addTodo(text: string) {
  'use server';
  await db.todos.create({ text });
  revalidatePath('/todos');
}

// Client Component
function TodoList({ todos }: { todos: Todo[] }) {
  const [isPending, startTransition] = useTransition();

  const [optimisticTodos, addOptimisticTodo] = useOptimistic(
    todos,
    (current, newText: string) => [
      ...current,
      { id: Date.now(), text: newText, pending: true }
      //                               ↑ mark as pending
    ]
  );

  function handleAdd(formData: FormData) {
    const text = formData.get('text') as string;

    startTransition(async () => {
      addOptimisticTodo(text);   // instant UI update
      await addTodo(text);        // background server action
    });
  }

  return (
    <div>
      <form action={handleAdd}>
        <input name="text" placeholder="New todo..." />
        <button type="submit">Add</button>
      </form>

      <ul>
        {optimisticTodos.map(todo => (
          <li
            key={todo.id}
            style={{ opacity: todo.pending ? 0.5 : 1 }}
          >
            {todo.text}
            {todo.pending && ' (saving...)'}
          </li>
        ))}
      </ul>
    </div>
  );
}
```

---

## Flow

```
User types "Buy milk" → clicks Add
        ↓
addOptimisticTodo("Buy milk")
  → UI shows immediately (opacity 0.5)
        ↓  (parallel)
await addTodo("Buy milk")
  → Server saves to DB
  → revalidatePath refreshes todos
        ↓
Real todo replaces optimistic one
  → opacity 1, pending: false
```

---

## Error - automatic rollback

```tsx
startTransition(async () => {
  addOptimisticTodo(text);

  try {
    await addTodo(text);
  } catch {
    // No need to do anything!
    // useOptimistic auto-rollbacks when transition ends
    // optimistic item disappears automatically
  }
});
```

---

## One-liner

> "Combining `useOptimistic` with Server Actions gives instant UI feedback - `addOptimisticTodo` updates the UI immediately while the Server Action saves in the background. On error, `useOptimistic` automatically rolls back the optimistic update when the `startTransition` completes."
