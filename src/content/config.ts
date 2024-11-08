import { defineCollection, z } from 'astro:content';
import { getCollection } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    lang: z.string().optional(),
  }),
});

const projects = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    heroImage: z.string().optional(),
    pdf_url: z.string().optional(),
    video_url: z.string().optional(),
    lang: z.string().optional(),
  }),
});

export const collections = { blog, projects };

export async function getBlogPosts() {
  const posts = await getCollection('blog');

  return posts.map((post) => {
    const blog_slug = post.slug.split('/')[0];
    return {
      ...post,
      blog_slug,
    };
  });
}

export async function getProjects() {
  const projects = await getCollection('projects');

  return projects.map((project) => {
    const project_slug = project.slug.split('/')[0];
    return {
      ...project,
      project_slug,
    };
  });
}
