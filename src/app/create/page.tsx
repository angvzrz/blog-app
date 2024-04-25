'use client';

import { SubmitHandler } from 'react-hook-form';
import { FormSchema, PostForm } from '../components/PostForm/PostForm';

export default function CreatePage() {
  const handleCreatePost: SubmitHandler<FormSchema> = (data) => {};
  return (
    <div>
      <h2 className="text-2xl my-4 font-bold text-center">Add new post</h2>
      <PostForm submit={handleCreatePost} />
    </div>
  );
}
