import { defineCollection, z } from "astro:content";

const works = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    videos: z.array(z.object({
      embedUrl: z.string().optional(),
      videoFile: z.string().optional(),
    })).optional(),
    buttonLink: z.string().optional(),
    audio: z.object({
      embedUrl: z.string().optional(),
      audioFile: z.string().optional(),
    }).optional(),
  }),
});

const events = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),          // markdown string z Decap
    date: z.string(),           // datetime zapisze się jako string
    description: z.string().optional(),
  }),
});

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    description: z.string().optional(),
  }),
});

const photos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    photo: z.string(),
    alt: z.string(),
  }),
});

const media = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    fileUrl: z.string().optional(),
    file: z.string().optional(),
    alt: z.string(),
  }).refine((d) => !!(d.fileUrl || d.file), {
    message: "Provide either fileUrl or file",
    path: ["fileUrl"],
  }),
});

export const collections = { works, events, news, photos, media };