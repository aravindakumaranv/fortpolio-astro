---
company: "Amazon Luxembourg"
role: "Business Analyst II — Software & Data Engineering"
startDate: "2024-05"
endDate: "Present"
location: "Luxembourg"
summary: "Architecting a cloud-native data platform powering workforce planning across 20 European Sort Centers."
highlights:
  - "Architected and engineered a cloud-native data platform, integrating data from 10+ operational systems, that became the primary backend powering workforce planning across 20 European Sort Centers."
  - "Built an automated forecast validation service that continuously monitored data quality through variance and year-over-year checks, enabling engineering and forecasting teams to catch anomalies earlier."
  - "Reduced manual engineering and operational effort by over 60% (equivalent to 2 FTEs) by designing and automating data validation and processing workflows end-to-end."
  - "Collaborated with software engineers and cross-functional teams to design and ship production-grade data products, applying Agile engineering practices throughout the development lifecycle."
  - "Engineered a centralized labor data platform, integrating and processing workforce data across five European countries into hourly refreshed, analytics-ready datasets."
  - "Built internal tooling and dashboards backed by automated data pipelines, giving stakeholders real-time visibility into operational KPIs."
  - "Designed and implemented scalable ETL pipelines and transformation workflows, standardizing data ingestion from multiple operational systems."
  - "Leveraged AI-assisted development tools (e.g., Kiro) to accelerate code generation and automate test writing, while applying responsible and ethical AI usage practices in line with data governance standards."
techStack: ["AWS Lambda", "Python", "SQL", "ETL", "QuickSight"]
order: 1
---

Ten-plus operational systems feed into this platform, and the output is what 20 European Sort Centers actually use to plan their workforce — so "obviously wrong before it ships" matters as much as "correct." That's the problem the forecast validation service solves: rather than trusting every upstream number blindly, it runs continuous variance and year-over-year checks and surfaces what looks statistically off before it reaches a planner.

The core of that service is z-score based anomaly detection — flag any data point whose deviation from the recent average crosses a threshold. The tricky part in practice was that some sort centers have much smaller historical sample sizes than others, and a naive fixed threshold either missed real anomalies at the small-sample centers or flagged noise constantly. Tuning that threshold per data volume, rather than using one global number, was the difference between a validation service people trusted and one they learned to ignore.

The variance/anomaly detection logic described here is the direct inspiration for the live demo in the [Projects](/projects) section — the Lambda function there is a small, public version of the same idea: take a data series, flag what looks statistically off, surface it before it becomes a bigger problem.

Integrating 10+ operational systems into one cloud-native platform meant dealing with schema drift as a constant, not an edge case — different systems updated on different cadences, with different notions of what a "clean" record looked like. Standardizing that through a consistent ETL layer, rather than special-casing each source downstream, kept the platform maintainable as more systems got added. AWS Lambda's pay-per-invocation model fit well here too, since sort center planning runs in bursts around specific cycles rather than needing an always-on service.

Bringing AI-assisted tools like Kiro into the workflow sped up a lot of the boilerplate — test scaffolding, repetitive data transformation code — but it also meant being more deliberate about review, not less. In a system feeding real workforce planning decisions across 20 sites, code that "looks right" isn't the same bar as code that's actually been reasoned through, and that distinction mattered more here than it would on a lower-stakes project.