---
company: "Nucleus Software Exports India"
role: "Senior Software Engineer"
startDate: "2020-07"
endDate: "2021-08"
location: "India"
summary: "Designed a configurable workflow architecture for a microservices-based enterprise loan onboarding platform."
highlights:
  - "Designed configurable workflow architecture for a microservices-based enterprise loan onboarding platform serving multiple banking clients."
  - "Developed metadata-driven admin tooling enabling reusable workflow components and configurable onboarding experiences."
  - "Applied reusable component design patterns to improve extensibility and scalability across customer deployments."
  - "Built and maintained REST APIs and backend services using Java, Spring, Hibernate, and PostgreSQL, with frontend integration via Vue.js."
  - "Founding member of an internal Software Architecture Forum focused on enterprise system design and scalability."
techStack: ["Java", "Spring", "Hibernate", "PostgreSQL", "Vue.js"]
order: 5
---

This is the role the planned [Phase 2 Flask demo](/projects#phase-2) is modeled after — a small, public version of the configurable workflow engine built here. "Configurable" was the actual hard requirement: the same onboarding platform served multiple banking clients, each with their own process quirks, so the architecture had to let non-engineers reconfigure workflow steps rather than requiring a code change per client.

The metadata-driven admin tooling was the piece that made that possible in practice — workflow steps, their ordering, and their validation rules lived as configuration data rather than hardcoded logic, so onboarding a new client's variant of the process was a configuration exercise, not a development one. That same reusable-component thinking is what founding the internal Software Architecture Forum was really about — the workflow engine wasn't useful in isolation if every other team kept solving the "how do we make this configurable" problem from scratch.