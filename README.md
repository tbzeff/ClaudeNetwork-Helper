# Network+ Study Helper

A browser-based flashcard and quiz tool for the CompTIA Network+ N10-009 exam. No build step, no server, no dependencies — open `networkplus.html` directly in any browser.

## Purpose

Covers all five N10-009 exam domains through interactive multiple-choice questions and free-text exercises. Tracks your score per section so you can focus on weak areas before the exam.

**Exam at a glance:** 90 questions / 90 minutes / passing score 720 out of 900.

## File Structure

```
networkplus.html   — section markup and navigation only; no inline styles or scripts
networkplus.css    — all visual styles
networkplus.js     — all data arrays, question builders, state, and logic
```

## Running the App

Open `networkplus.html` in a browser. No installation required.

## Implementation Status

| Section | Domain / Objective | Status |
|---|---|---|
| Ports & Protocols | 1.4 | Done |
| Cable Standards | 1.5 | Done |
| Classful IP | 1.7 | Done |
| Subnetting + VLSM | 1.7 | Done |
| Net Fundamentals (OSI, Devices, Topologies) | 1.1, 1.2, 1.6 | Done |
| Cloud Concepts | 1.3 | Done |
| Routing | 2.1 | Done |
| Switching / VLANs | 2.2 | Not yet |
| Wireless | 2.3 | Not yet |
| DNS Record Types | 3.4 | Not yet |
| DR Concepts | 3.3 | Not yet |
| Security Concepts | 4.1 | Not yet |
| Attack Types | 4.2 | Not yet |
| Troubleshooting | 5.1–5.5 | Not yet |

## Domain Coverage

| Domain | Weight |
|---|---|
| 1 — Networking Concepts | 23% |
| 2 — Network Implementation | 20% |
| 3 — Network Operations | 19% |
| 4 — Network Security | 14% |
| 5 — Network Troubleshooting | 24% |

## Adding a New Topic Section

1. Add a `const TOPIC_QUESTIONS = [...]` array in `networkplus.js`
2. Add state variables: `let topicQs, topicIdx, topicScore, topicHist`
3. Add `renderTopicQ`, `checkTopicQ`, `nextTopicQ` functions (follow the existing MC pattern)
4. Add `'topic'` to the `SECTIONS` array
5. Add init calls in the `DOMContentLoaded` handler
6. Add the section HTML block in `networkplus.html` (copy an existing section, swap IDs)
7. Add a nav `<button>` in `networkplus.html`

For free-text answer sections (like Subnetting), follow the `subnet-*` pattern instead.
