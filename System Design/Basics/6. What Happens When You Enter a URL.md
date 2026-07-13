# What Happens When You Enter a URL

End-to-end flow from typing `www.google.com` in the browser to the page rendering on screen.

---

## 1. Browser Cache Lookup
The browser first checks its **local DNS cache** to see if it has already resolved this domain to an IP address in a recent session (cached with a TTL — Time To Live). If a valid, non-expired entry exists, DNS resolution is skipped entirely and the browser proceeds directly to Step 5.

## 2. OS-Level Resolution — Hosts File
If the browser cache misses, it delegates the lookup to the **Operating System**. The OS first checks the local **hosts file** (`/etc/hosts` on Unix, `C:\Windows\System32\drivers\etc\hosts` on Windows) — a static, manually-editable file mapping hostnames to IPs. If an entry exists here, it's used immediately (this is how local dev environments often override domains).

## 3. DNS Resolution — Recursive Query
If not found locally, the OS issues a **DNS query** to a **DNS Resolver** (typically your ISP's resolver, or a public one like Google DNS `8.8.8.8` / Cloudflare `1.1.1.1`).

The resolver performs a **recursive lookup**:
1. **Resolver cache check** — if the resolver already has this domain cached, it returns the IP immediately.
2. **Root Server** — if not cached, the resolver queries one of the 13 root DNS servers, which doesn't know the IP but points to the correct **TLD (Top-Level Domain) server** based on the domain's suffix (`.com`, `.net`, `.org`, etc.).
3. **TLD Server** — the TLD server checks its own cache/records and, if it doesn't have the final answer, returns the **authoritative name server** responsible for that specific domain.
4. **Authoritative Name Server** — this server holds the actual DNS records (A/AAAA records) for the domain and returns the resolved **IP address**.

This entire recursive chain (resolver → root → TLD → authoritative) typically completes in **milliseconds**, and results are cached at each level (based on TTL) to speed up future lookups.

## 4. IP Address Returned to Browser
The OS passes the resolved IP address back to the browser. The browser now knows exactly which server to contact.

## 5. HTTP Request Construction
The browser constructs an **HTTP GET request** (the HTTP method used to retrieve a resource) and hands it to the OS. The OS encapsulates this request using the **TCP protocol** (Transmission Control Protocol), which handles reliable, ordered, error-checked delivery of data over the network via a three-way handshake (SYN → SYN-ACK → ACK) before any data is actually sent.

## 6. Firewall & Routing
As the packet travels across the network, it passes through:
- **Client-side firewall** — checks outgoing traffic for policy/security violations.
- **Server-side firewall** — inspects incoming traffic before it reaches the infrastructure.

Once past the firewall, the request typically hits a **Load Balancer** first, rather than a single server. The load balancer:
- Selects an appropriate backend server (based on algorithms like round-robin, least connections, etc.)
- Initiates a **TLS/SSL handshake** to establish a secure, encrypted session (**HTTPS**), exchanging the SSL certificate to verify server identity and negotiate encryption keys.

## 7. Server Response
The chosen backend server processes the request and returns the requested resources — **HTML** (document structure), **CSS** (styling), and **JavaScript** (interactivity/behavior) — back through the same path (server → load balancer → network → client firewall → OS → browser).

## 8. Rendering
The browser's rendering engine parses the HTML to build the **DOM (Document Object Model)**, applies CSS to build the **CSSOM**, combines them into a **render tree**, executes JavaScript (which may modify the DOM/CSSOM further), and paints the final page to the screen.

---

## Summary Flow

```
Browser Cache → OS Hosts File → DNS Resolver (cache)
   → Root Server → TLD Server → Authoritative Name Server
   → IP Address returned
   → HTTP GET request wrapped in TCP (3-way handshake)
   → Client Firewall → Network → Server Firewall
   → Load Balancer (server selection + TLS/SSL handshake for HTTPS)
   → Backend Server processes request
   → Response (HTML/CSS/JS) sent back
   → Browser builds DOM + CSSOM → Render Tree → Paint
```

## Key Technical Terms

| Term | Meaning |
|---|---|
| TTL (Time To Live) | How long a DNS record stays valid in cache before re-resolution is required |
| Recursive Resolver | DNS server that does the full lookup chain on behalf of the client |
| Authoritative Name Server | The definitive source of a domain's DNS records |
| A / AAAA Record | DNS record mapping a domain to an IPv4 (A) or IPv6 (AAAA) address |
| TCP 3-Way Handshake | SYN → SYN-ACK → ACK — establishes a reliable connection before data transfer |
| TLS/SSL Handshake | Negotiates encryption and verifies server identity to establish HTTPS |
| Load Balancer | Distributes incoming requests across multiple backend servers |
| DOM / CSSOM | In-memory tree representations of HTML structure and CSS styles used by the browser to render the page |