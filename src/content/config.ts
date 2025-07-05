import { defineCollection, z } from "astro:content";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  tags: z.array(z.string()),
  coverImage: z.string(),
  isFeatured: z.boolean().default(false),
  redirect: z.string().optional(),
  draft: z.boolean().optional().default(false),
  originalPost: z
    .object({
      url: z.string().url(),
      platform: z.string(),
    })
    .optional(),
  series: z
    .object({
      name: z.string(),
      order: z.number(),
    })
    .optional(),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;

const blogCollection = defineCollection({
  type: "content",
  schema: blogSchema,
});

export const collections = {
  blog: blogCollection,
};
