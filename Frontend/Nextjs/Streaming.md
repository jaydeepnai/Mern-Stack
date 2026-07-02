# Route Handlers — Streaming Response

## Question
> Implement a streaming response from a Route Handler — text appears word by word like ChatGPT.

---

## Solution

```ts
// app/api/stream/route.ts

export async function GET() {
  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      const words = ['Hello', ' from', ' Next.js', ' streaming', ' response!'];

      for (const word of words) {
        // Push each chunk
        controller.enqueue(encoder.encode(word));
        // Small delay between words
        await new Promise(r => setTimeout(r, 300));
      }

      controller.close(); // done!
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Transfer-Encoding': 'chunked',
    },
  });
}
```

---

## With OpenAI streaming (real world)

```ts
// app/api/chat/route.ts
import OpenAI from 'openai';

const openai = new OpenAI();

export async function POST(request: Request) {
  const { prompt } = await request.json();

  // OpenAI streaming
  const stream = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
    stream: true, // ← enable streaming
  });

  // Convert OpenAI stream to ReadableStream
  const readable = new ReadableStream({
    async start(controller) {
      const encoder = new TextEncoder();

      for await (const chunk of stream) {
        const text = chunk.choices[0]?.delta?.content || '';
        if (text) controller.enqueue(encoder.encode(text));
      }

      controller.close();
    },
  });

  return new Response(readable, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
```

---

## Client side — read the stream

```tsx
// app/page.tsx
'use client';
import { useState } from 'react';

export default function ChatPage() {
  const [output, setOutput] = useState('');

  const handleStream = async () => {
    const res = await fetch('/api/stream');
    const reader = res.body!.getReader();
    const decoder = new TextDecoder();

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;

      // Append each chunk as it arrives
      setOutput(prev => prev + decoder.decode(value));
    }
  };

  return (
    <div>
      <button onClick={handleStream}>Start Stream</button>
      <p>{output}</p>
    </div>
  );
}
```

---

## How it works

```
Server:
  ReadableStream banao
  controller.enqueue(chunk) — ek piece bhejo
  300ms wait
  Next chunk bhejo
  controller.close() — done

Client:
  res.body.getReader() — stream reader lo
  reader.read() — ek chunk lo
  setOutput — UI update karo
  Loop — jab tak done na ho
```

---

## Key points

```
ReadableStream    → chunks mein data bhejo
TextEncoder       → string → Uint8Array (bytes)
TextDecoder       → bytes → string (client side)
controller.enqueue() → ek chunk push karo
controller.close()   → stream khatam
Transfer-Encoding: chunked → header zaroori hai
```

---

## One-liner for interviews

> "Streaming responses use `ReadableStream` — data is pushed in chunks with `controller.enqueue()` and the stream closes with `controller.close()`. On the client, `res.body.getReader()` reads chunks one by one and appends them to state — giving a word-by-word ChatGPT-like effect."

---