---
company: "Amazon Luxembourg"
role: "Business Analyst Intern — Software Development"
startDate: "2023-09"
endDate: "2024-02"
location: "Luxembourg"
summary: "Built a Python API integration syncing tickets between Amazon's internal system and Asana, and migrated reporting infra to QuickSight."
highlights:
  - "Built a Python-based API integration that automatically synchronized tickets between Amazon's internal system and Asana, eliminating manual updates and improving engineering team workflows."
  - "Migrated legacy reporting infrastructure to Amazon QuickSight, engineering new data models to improve visibility into transportation operations."
techStack: ["Python", "Amazon QuickSight", "REST APIs"]
order: 2
---

The Asana sync started as a small annoyance: engineers were manually copying ticket updates between Amazon's internal system and Asana, and it was exactly the kind of repetitive, error-prone task that should never have been a human's job in the first place. The integration itself was a fairly standard polling-based sync, but getting the mapping between two systems' very different data models right — statuses, assignees, priority levels that didn't line up one-to-one — took more care than the "just sync two APIs" framing suggests.

The QuickSight migration was less about the tool switch itself and more about the data modeling underneath it — the legacy reporting setup had grown organically over time, and moving to QuickSight was a natural point to redesign those models around what transportation operations teams actually needed to see, rather than just replicating the old reports in a new tool.