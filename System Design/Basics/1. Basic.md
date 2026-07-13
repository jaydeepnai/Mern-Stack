# System Design Concepts — Pizza Shop Analogy (Quick Notes)

Real-world story: a pizza parlour grows from 1 chef → global chain. Each growth problem maps to a system design concept.

---

### 1. Vertical Scaling
**Story:** One chef, ask them to work harder / pay more to boost output.
**Tech term:** Increasing the power (CPU/RAM) of a single server instead of adding more servers.
**Limit:** There's a ceiling — one machine can only get so strong.

### 2. Pre-computation (Caching-style prep)
**Story:** Make pizza paste in advance during non-peak hours (like 4 AM), so peak-hour orders are faster.
**Tech term:** Pre-computing / caching expensive work ahead of time so it's not redone on every request.

### 3. Redundancy / Failover (avoiding Single Point of Failure)
**Story:** Chef falls sick → no backup → business stops for the day.
**Fix:** Hire a backup chef.
**Tech term:** Redundancy — keep backup instances so one failure doesn't kill the whole system.

### 4. Master-Slave Architecture
**Story:** Main chef = master, backup chef = slave (steps in when master is down).
**Tech term:** One primary node handles work; a replica node takes over on failure.

### 5. Horizontal Scaling
**Story:** Business grows → hire 10 chefs instead of relying on 1 super chef.
**Tech term:** Adding more machines/servers of similar type to share the load (vs. vertical scaling = 1 bigger machine).

### 6. Specialization / Microservices
**Story:** Chef 2 is great at garlic bread, Chefs 1 & 3 are great at pizza → route orders by specialty instead of randomly.
**Tech term:** Microservice architecture — each service has one clear responsibility, can scale independently, and is easy to update/debug without touching others.

### 7. Distributed Systems
**Story:** One shop isn't enough (power outage, license issue = zero business that day). Open a second shop in another location.
**Tech term:** Distributed system — multiple nodes/servers in different locations, improving fault tolerance and giving faster local response times (e.g., regional servers for a global app like Facebook).

### 8. Load Balancer
**Story:** A central authority decides whether an order should go to Shop 1 or Shop 2, based on total time (queue + prep + delivery), not randomly.
**Tech term:** Load balancer — routes incoming requests to the server that can serve them fastest/most efficiently, using real-time data.

### 9. Decoupling
**Story:** The delivery agent doesn't care if they're delivering pizza or burgers; the shop doesn't care if the customer or a delivery agent picks up the order. Separate their management.
**Tech term:** Decoupling — separating unrelated concerns/systems so each can change or fail independently without breaking the other.

### 10. Monitoring, Logging & Metrics
**Story:** Faulty oven → slower pizza output; faulty bike → slower delivery. You need to notice and track this.
**Tech term:** Logging events (what happened, when) + turning them into metrics to detect problems early.

### 11. Extensibility
**Story:** System shouldn't be rebuilt if tomorrow you deliver burgers instead of pizza (like Amazon evolving from parcels to everything).
**Tech term:** Extensibility — design so new use cases can be added without rewriting the whole system; a natural result of good decoupling.

---

## High Level Design (HLD) vs Low Level Design (LLD)

| | High Level Design (HLD) | Low Level Design (LLD) |
|---|---|---|
| Focus | How systems/servers talk to each other, scaling, architecture | How you actually code it — classes, objects, functions, signatures |
| Example from video | Load balancer, microservices, distributed shops | Writing clean, efficient code for each service |
| Who needs it | All engineers, esp. for system design interviews | Especially important as you grow toward senior engineer level |

---

### One-line mapping cheat sheet
| Pizza Shop Problem | Technical Term |
|---|---|
| Overworked chef | Vertical Scaling |
| Pre-made pizza paste | Caching / Pre-computation |
| Backup chef | Redundancy / Failover |
| Main + backup chef | Master-Slave Architecture |
| Hiring more chefs | Horizontal Scaling |
| Chefs specializing by dish | Microservices |
| Second shop in new city | Distributed System |
| Routing orders by wait time | Load Balancer |
| Delivery agent ≠ shop manager | Decoupling |
| Tracking faulty oven/bike | Monitoring / Logging / Metrics |
| Works for pizza or burgers | Extensibility |