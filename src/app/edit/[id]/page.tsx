'use client';

import { SubmitHandler } from 'react-hook-form';
import { PostForm } from '@/app/components/PostForm/PostForm';
import { useQuery } from '@tanstack/react-query';
import { Form } from '@/types/types';
import axios from 'axios';

interface EditPostPageProps {
  readonly params: {
    id: string;
  };
}

export default function EditPostPage({ params }: EditPostPageProps) {
  const { data } = useQuery({
    queryKey: ['posts', params.id],
    queryFn: async () => {
      const { id } = params;
      const response = await axios.get(`/api/posts/${id}`);
      return response.data;
    },
  });

  const handleEditPost: SubmitHandler<Form> = (data) => {};

  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-center">Edit post</h2>
      <PostForm submit={handleEditPost} isEditing={false} />
    </div>
  );
}
