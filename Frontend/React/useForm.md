# Actions + useFormStatus — React 19

## Question
> Handle form submission with async Actions in React 19. Show pending state using `useFormStatus`.

---

## Solution

```jsx
import { useFormStatus } from 'react-dom';

// Submit button — knows form's pending state automatically
function SubmitButton() {
  const { pending } = useFormStatus();
  //       ↑
  // true while form action is running
  // no prop drilling needed!

  return (
    <button disabled={pending}>
      {pending ? 'Saving...' : 'Submit'}
    </button>
  );
}

// Form with async Action
function ContactForm() {
  async function submitAction(formData) {
    // This IS the action — no e.preventDefault() needed!
    const name  = formData.get('name');
    const email = formData.get('email');

    await saveToDatabase({ name, email }); // async call
  }

  return (
    <form action={submitAction}>
      <input name="name"  placeholder="Name"  />
      <input name="email" placeholder="Email" />
      <SubmitButton />  {/* knows pending state automatically */}
    </form>
  );
}
```

---

## With useActionState — handle errors + response

```jsx
import { useActionState } from 'react';

async function submitAction(prevState, formData) {
  const email = formData.get('email');

  if (!email.includes('@')) {
    return { error: 'Invalid email' };
  }

  await saveToDatabase({ email });
  return { error: null, success: true };
}

function ContactForm() {
  const [state, action, isPending] = useActionState(submitAction, {
    error: null,
    success: false,
  });

  return (
    <form action={action}>
      <input name="email" placeholder="Email" />
      {state.error   && <p style={{color:'red'}}>{state.error}</p>}
      {state.success && <p>Saved!</p>}
      <button disabled={isPending}>
        {isPending ? 'Saving...' : 'Submit'}
      </button>
    </form>
  );
}
```

---

## React 18 vs React 19

```
React 18:                    React 19:
  onSubmit + e.preventDefault   action={asyncFn}
  useState for loading          useFormStatus for pending
  useState for errors           useActionState for state
  manual FormData parsing       formData.get() built in
```

---

## One-liner

> "React 19 Actions let you pass an async function directly to `form action` — no `e.preventDefault()` needed. `useFormStatus` gives the pending state to any child button automatically without prop drilling. `useActionState` manages the full action lifecycle — pending, error, and success states."