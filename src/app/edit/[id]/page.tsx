'use client';

import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { SubmitHandler } from 'react-hook-form';
import { formSchema } from '@/lib/validations';
import { useRouter } from 'next/navigation';
import { Suspense } from 'react';
import { PostForm } from '@/app/components/PostForm/PostForm';
import { Form } from '@/types/types';
import Loading from './loading';
import axios from 'axios';

interface EditPostPageProps {
  readonly params: {
    id: string;
  };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { id } = params;
  const router = useRouter();

  const { data } = useSuspenseQuery({
    queryKey: ['posts', params.id],
    queryFn: async () => {
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const { mutate: updatePost, isPending } = useMutation({
    mutationFn: (newData: Form) => {
      const validatedPost = formSchema.safeParse(newData);

      if (!validatedPost.success) {
        throw new Error(validatedPost.error.message);
      }

      return axios.patch(`/api/posts/${id}`, validatedPost.data);
    },
    onError: (error) => {
      throw new Error(error.message);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });

  const handleEditPost: SubmitHandler<Form> = (data) => {
    updatePost(data);
  };

  return (
    <Suspense fallback={<Loading />}>
      <h2 className="text-2xl my-4 font-bold text-center">Edit post</h2>
      <PostForm
        submit={handleEditPost}
        postToEdit={data}
        isEditing
        isLoadingSubmit={isPending}
      />
    </Suspense>
  );
}
