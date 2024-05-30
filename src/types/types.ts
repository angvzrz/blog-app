import { formSchema, postSchema } from '@/lib/validations';
import { z } from 'zod';

export type FormSchema = z.infer<typeof formSchema>;
export type PostSchema = z.infer<typeof postSchema>;
