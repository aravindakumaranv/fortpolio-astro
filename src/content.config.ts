import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const career = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/career" }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    summary: z.string(),
    highlights: z.array(z.string()).optional(),
    techStack: z.array(z.string()).optional(),
    order: z.number(),
  }),
});

export const collections = { career };