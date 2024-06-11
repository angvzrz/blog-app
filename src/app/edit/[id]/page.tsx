'use client';

import { SubmitHandler } from 'react-hook-form';
import { PostForm } from '@/app/components/PostForm/PostForm';
import { Form } from '@/types/types';

export default function EditPostPage() {
  const handleEditPost: SubmitHandler<Form> = (data) => {};
  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-center">Edit post</h2>
      <PostForm submit={handleEditPost} isEditing={false} />
    </div>
  );
}
