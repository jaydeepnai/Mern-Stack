# System Design Basics — API, Cloud & Scalability (Quick Notes)

---

### 1. API (Application Programmable Interface)
**What:** A way to expose your code/algorithm over the internet so others can use it without needing your actual computer.
**Request:** What the user/client sends to your server.
**Response:** What your server sends back after processing.

### 2. Cloud
**What:** A set of computers (owned by providers like AWS) that you rent for computation power, instead of running everything on your own desktop.
**Why use it:** Reliability, configuration, and maintenance are largely handled by the provider — you don't have to worry about power loss, hardware failure, etc. on your own machine.

### 3. Scalability
**Definition:** The ability of a system to handle more requests/users.
**Two ways to scale:**
- Buy a **bigger** machine → Vertical Scaling
- Buy **more** machines → Horizontal Scaling

---

## Vertical Scaling vs Horizontal Scaling

| Factor | Vertical Scaling (bigger machine) | Horizontal Scaling (more machines) |
|---|---|---|
| **Load Balancing** | Not needed (single machine) | Needed — requests distributed across machines |
| **Single Point of Failure** | Yes — if it fails, everything goes down | No — resilient, requests redirected to other machines |
| **Communication** | Interprocess communication (fast, same machine) | Network calls / RPC between servers (slower, I/O bound) |
| **Data Consistency** | Consistent — all data on one system | Harder — distributed data needs loose transactional guarantees (atomic locking across servers is impractical) |
| **Growth Limit** | Hits a hardware ceiling eventually | Scales almost linearly by adding more servers as users grow |

---

### 4. Hybrid Approach (Real-World Solution)
In practice, systems use **both**:
- Start with **vertical scaling** early on (simple, fast, consistent) while user base is small.
- As trust/users grow, shift to **horizontal scaling** — but make each individual machine as powerful as feasible ("big box" per node).
- This combines vertical scaling's speed + consistency with horizontal scaling's resilience + linear growth.

---

### Core System Design Questions (from this video)
When designing any system, always ask:
1. **Is it scalable?** — Can it handle more users/requests?
2. **Is it resilient?** — Does it survive a machine/server failure?
3. **Is it consistent?** — Is the data reliable and accurate across the system?

System design = balancing trade-offs between these three qualities to meet business requirements.