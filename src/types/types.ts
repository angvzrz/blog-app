import { formSchema, postSchema } from '@/lib/validations';
import { z } from 'zod';

export type Form = z.infer<typeof formSchema>;
export type Post = z.infer<typeof postSchema>;
