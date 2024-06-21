'use client';

import type { Form as FormType } from '@/types/types';
import { Form, FormField, FormItem, FormMessage } from '../ui/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ContentArea } from './ContentArea';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from '@/lib/validations';
import { TitleInput } from './TitleInput';
import { TagSelect } from './TagSelect';
import { Suspense } from 'react';
import { Spinner } from '../ui/spinner';
import { Button } from '../ui/button';

interface PostFormProps {
  readonly submit: SubmitHandler<FormType>;
  readonly isEditing: boolean;
}

export function PostForm({ submit, isEditing }: PostFormProps) {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: { title: '', content: '', tagId: '' },
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
          name="title"
          render={({ field }) => (
            <FormItem {...field} className="w-full max-w-lg">
              <TitleInput />
              <FormMessage />
            </FormItem>
          )}
        />
        <ContentArea {...register('content')} />
        <FormField
          control={form.control}
          name="tagId"
          render={({ field }) => (
            <Suspense fallback={<Spinner />}>
              <FormItem {...field} className="w-full max-w-lg">
                <TagSelect />
                <FormMessage />
              </FormItem>
            </Suspense>
          )}
        />
        <Button type="submit" className="w-full max-w-lg">
          {isEditing ? 'Update' : 'Create'}
        </Button>
      </form>
    </Form>
  );
}
