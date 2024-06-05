'use client';

import type { Form } from '@/types/types';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { BackButton } from '../components/BackButton';
import { formSchema } from '@/lib/validations';
import { useRouter } from 'next/navigation';
import { PostForm } from '../components/PostForm/PostForm';
import axios from 'axios';

export default function CreatePage() {
  const router = useRouter();
  const { mutate: createPost } = useMutation({
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
    <div>
      <BackButton />
      <h2 className="text-2xl my-4 font-bold text-center">Add new post</h2>
      <PostForm submit={handleCreatePost} isEditing={false} />
    </div>
  );
}
