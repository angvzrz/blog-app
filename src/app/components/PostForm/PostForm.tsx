'use client';

import type { Form as FormType, Post } from '@/types/types';
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
  readonly postToEdit?: Post;
  readonly isEditing: boolean;
  readonly isLoadingSubmit: boolean;
  readonly submit: SubmitHandler<FormType>;
}

export function PostForm({
  postToEdit,
  isEditing,
  isLoadingSubmit,
  submit,
}: PostFormProps) {
  const form = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: postToEdit || { title: '', content: '', tagId: '' },
  });
  const { register, handleSubmit } = { ...form };

  let buttonText = '';
  if (isLoadingSubmit) {
    buttonText = isEditing ? 'Updating...' : 'Creating...';
  } else {
    buttonText = isEditing ? 'Update' : 'Create';
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-5 mt-10"
        onSubmit={handleSubmit(submit)}
      >
        <FormField
          name="title"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full max-w-lg">
              <TitleInput {...field} />
              <FormMessage />
            </FormItem>
          )}
        />
        <ContentArea {...register('content')} />
        <FormField
          name="tagId"
          control={form.control}
          render={({ field }) => (
            <Suspense fallback={<Spinner />}>
              <FormItem className="w-full max-w-lg">
                <TagSelect {...field} />
                <FormMessage />
              </FormItem>
            </Suspense>
          )}
        />
        <Button type="submit" className="w-full max-w-lg">
          {isLoadingSubmit && <Spinner />}
          {buttonText}
        </Button>
      </form>
    </Form>
  );
}
