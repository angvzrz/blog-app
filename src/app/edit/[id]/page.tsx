'use client';

import { FormSchema, PostForm } from '@/app/components/PostForm/PostForm';
import { SubmitHandler } from 'react-hook-form';

export default function EditPostPage() {
  const handleEditPost: SubmitHandler<FormSchema> = (data) => {};
  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-center">Edit post</h2>
      <PostForm submit={handleEditPost} isEditing={false} />
    </div>
  );
}
