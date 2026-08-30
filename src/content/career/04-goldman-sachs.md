---
company: "Goldman Sachs India"
role: "Software Development Analyst"
startDate: "2021-10"
endDate: "2022-09"
location: "India"
summary: "Migrated legacy batch pipelines to a Kafka-based streaming architecture for high-volume financial product data."
highlights:
  - "Developed and maintained distributed data processing systems supporting high-volume financial product data, enabling reliable data exchange across business-critical applications."
  - "Migrated legacy batch processing pipelines to a Kafka-based streaming architecture, enabling scalable, near real-time data processing while improving system responsiveness and reliability."
techStack: ["Kafka", "Distributed Systems", "Java"]
order: 4
---

Batch-to-streaming migrations are one of those changes that sound simple in a sentence and rarely are in practice — every downstream consumer of the old batch output has its own assumptions about timing and ordering that a move to Kafka can quietly break. This one supported business-critical, high-volume financial product data, which is exactly the kind of system where "near real-time" is a real requirement, not a nice-to-have.

The migration ran in phases rather than a single cutover — old batch pipeline and new Kafka-based streaming running in parallel long enough to validate that consumers saw consistent data from both, before anything downstream was allowed to depend solely on the new path. That parallel-running period caught several assumptions baked into the old batch consumers that would have caused quiet data discrepancies if the cutover had happened all at once — the kind of problem that's far cheaper to catch in a validation phase than in production.