'use client';

import type { Form } from '@/types/types';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { BackButton } from '@/components/BackButton';
import { formSchema } from '@/lib/validations';
import { useRouter } from 'next/navigation';
import { PostForm } from '@/components/PostForm/PostForm';
import { Suspense } from 'react';
import axios from 'axios';
import Loading from './loading';

export default function CreatePage() {
  const router = useRouter();
  const { mutate: createPost, isPending } = useMutation({
    mutationFn: (newPost: Form) => {
      const validatedPost = formSchema.safeParse(newPost);

      if (!validatedPost.success) {
        throw new Error(validatedPost.error.message);
      }

      return axios.post('/api/posts/create', validatedPost.data);
    },
    onError: (error) => {
      throw new Error(error.message);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });

  const handleCreatePost: SubmitHandler<Form> = (data: Form) => {
    createPost(data);
  };

  return (
    <Suspense fallback={<Loading />}>
      <BackButton />
      <h2 className="text-2xl my-4 font-bold text-center">Add new post</h2>
      <PostForm submit={handleCreatePost} isEditing={false} isLoadingSubmit={isPending} />
    </Suspense>
  );
}
