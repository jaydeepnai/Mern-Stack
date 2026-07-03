# Capacity Estimation — System Design Interview Notes

**Why do this:** Most big-tech interviews expect a 5-minute capacity estimation section (traffic, storage, bandwidth, cache) right after clarifying requirements. It rarely changes your final design directly, but it shows structured thinking. **Golden rule: approximate aggressively, round to powers of 10, never spend more than 5 min.**

Example used throughout: designing a **Pastebin**-like service, 10 million Daily Active Users (DAU).

---

### 1. Traffic Estimation

**Step 1 — Users → Requests/day**
- Ask interviewer: "How many DAU?" → assume 10M
- Assume only 10% of users write (upload) → 1M write requests/day
- Decide read-heavy vs write-heavy (most apps = read-heavy, e.g. YouTube: watch >> upload; analytics/logging = write-heavy)
- Pick a Read:Write ratio (e.g. 50:1) → 50M read requests/day

**Step 2 — Per day → Per second**
- Seconds in a day ≈ 86,400 → round to **100,000 (100K)** for easy math
- Write RPS = 1M / 100K = **10 req/sec**
- Read RPS = 50 × 10 = **500 req/sec**

---

### 2. Storage Estimation

**Step 1 — Identify the biggest data artifact** (ignore small stuff like URLs — negligible vs actual content)

**Step 2 — Estimate size per item**
- Avg paste ≈ 200 lines × 10 words × 5 characters(bytes) ≈ **10 KB per paste**

**Step 3 — Data generated per day**
- 1M writes/day × 10KB = **10 GB/day**

**Step 4 — Apply retention period**
- Ask interviewer: does data expire? (e.g. 5 years) — if never expires (like Facebook posts), assume ~10 years for estimation
- 5 years ≈ 365 days/year → round to 400 days/year
- Total = 5 × 400 × 10GB = **20 TB**

**Step 5 — Apply replication factor** (typically 3–5x for backup/availability)
- 20TB × 3 = **60 TB total storage needed**

---

### 3. Bandwidth Estimation
- **Incoming** = Write RPS × avg write size = 10 req/s × 10KB = **100 KB/sec**
- **Outgoing** = Read RPS × avg read size = 500 req/s × 10KB = **5 MB/sec**

---

### 4. Memory for Caching
- Use the **80/20 rule**: 20% of content generates 80% of traffic → cache that 20%
- 50M daily reads × (20% × 10KB) = 50M × 2KB = **100 GB cache** (actual usage likely less, since duplicate requests for the same paste are only stored once)

---

### 5. Estimating Number of Servers Needed
**Formula:**
```
Servers needed = Total RPS needed / RPS a single server can handle
```
For a CPU-bound request:
```
RPS per server = Number of physical cores / Time to process 1 request
```
**Example:** 8-core server, 0.5 sec/request → 8 / 0.5 = **16 req/sec per server**
Total servers = 500 RPS / 16 ≈ **~30 servers**

---

## Cheat Sheet: Byte Size Conversions (Base 10, for quick math)
| Unit | Value | Power of 10 |
|---|---|---|
| Byte | 1 | 10⁰ |
| Kilobyte (KB) | 1,000 bytes | 10³ |
| Megabyte (MB) | 1,000,000 bytes | 10⁶ |
| Gigabyte (GB) | 1,000,000,000 bytes | 10⁹ |
| Terabyte (TB) | 10¹² bytes | 10¹² |
| Petabyte (PB) | 10¹⁵ bytes | 10¹⁵ |

**Trick:** For multiplication, just add the powers of 10 (e.g. 10⁶ requests × 10³ bytes = 10⁹ = 1 GB). For division, subtract them.

---

## Cheat Sheet: Common Estimation Numbers

**Language / Text:**
- English language ≈ 500K words
- 1 line of text ≈ 10 words
- 1 word ≈ 5 characters = 5 bytes

**Media:**
- HD image (1280×720, 24-bit depth) ≈ **3 MB**
- Profile image (300×300) ≈ **300 KB**
- 1 minute of HD video (with ~100:1 compression) ≈ **50 MB**
- To store all lower resolutions too (480p, 360p, 240p, 144p) → roughly **2x** the original HD size (since the geometric series of halving sizes sums to the original size)

---

### Quick Recap (Order of Operations)
1. Traffic → users to requests/day → requests/sec (read vs write split)
2. Storage → biggest data artifact size → daily growth → retention period → replication factor
3. Bandwidth → incoming (writes) + outgoing (reads)
4. Cache → 80/20 rule on read traffic
5. Servers → total RPS ÷ per-server RPS capacity