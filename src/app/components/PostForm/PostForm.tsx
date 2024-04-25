'use client';

import { Form, FormField, FormItem, FormMessage } from '../ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContentArea } from './ContentArea';
import { zodResolver } from '@hookform/resolvers/zod';
import { TitleInput } from './TitleInput';
import { TagSelect } from './TagSelect';
import { Button } from '../ui/button';
import { z } from 'zod';

const formSchema = z.object({
  postTitle: z.string().min(1, { message: 'Please add a title' }),
  postContent: z.string().min(1),
  tagOption: z.string().min(1, { message: 'Please select a tag' }),
});

export type FormSchema = z.infer<typeof formSchema>;

interface PostFormProps {
  readonly submit: SubmitHandler<FormSchema>;
}

export function PostForm({ submit }: PostFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { postTitle: '', postContent: '', tagOption: '' },
  });
  const { register, handleSubmit } = { ...form };

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-5 mt-10"
        onSubmit={handleSubmit(submit)}
      >
        <FormField
          control={form.control}
          name="postTitle"
          render={({ field }) => (
            <FormItem {...field} className="w-full max-w-lg">
              <TitleInput />
              <FormMessage />
            </FormItem>
          )}
        />
        <ContentArea {...register('postContent')} />
        <FormField
          control={form.control}
          name="tagOption"
          render={({ field }) => (
            <FormItem {...field} className="w-full max-w-lg">
              <TagSelect />
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full max-w-lg">
          Create
        </Button>
      </form>
    </Form>
  );
}
