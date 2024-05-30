import { z } from 'zod';

export const formSchema = z.object({
  postTitle: z.string().min(1, { message: 'Please add a title' }),
  postContent: z.string().min(1),
  tagOption: z.string().min(1, { message: 'Please select a tag' }),
});

export const postSchema = z.object({
  id: z.string().cuid(),
  title: z.string(),
  content: z.string(),
  tag: z.object({
    id: z.string(),
    name: z.string(),
  }),
});
