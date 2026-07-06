# Multi-threaded
### The Concept: Node.js is famously "single-threaded," yet it handles thousands of concurrent requests.

- The Task: Imagine you are reviewing code from a junior developer on your team. They have written an Express route that processes a massive, synchronous calculation (like parsing a gigantic CSV file using a heavy for loop) directly inside the request handler.
- Explain to them in plain English why this specific approach will break the application for every other user trying to access the site at that exact moment, and what they should fundamentally do differently to fix it.



Node.js runs JavaScript on a single main thread. While it feels multi-threaded because it offloads asynchronous I/O tasks (like database queries or network requests) to the operating system, it can only execute one piece of synchronous JavaScript logic at a time.

If we put a massive, synchronous operation—like a heavy for loop parsing a CSV—directly inside an Express route, it completely blocks that single thread. The Event Loop is paralyzed; it cannot process any other incoming requests, nor can it execute waiting callbacks in the micro or macro task queues until that loop finishes. Every other user on the platform will experience a stalled application.

To fix this, heavy CPU-bound tasks must be moved off the main thread. We should either offload the calculation using Node's Worker Threads, or push the CSV parsing to a dedicated background worker service (via a message queue like Redis/RabbitMQ) so the main Express server remains unblocked and responsive.