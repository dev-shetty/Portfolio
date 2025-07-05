import { defineCollection, z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),
  coverImage: z.string(),
  draft: z.boolean().optional().default(false),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog: blogCollection,
};
