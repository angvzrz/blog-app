'use client';

import type { Form } from '@/types/types';
import { SubmitHandler } from 'react-hook-form';
import { PostForm } from '../components/PostForm/PostForm';
import { BackButton } from '../components/BackButton';

export default function CreatePage() {
  const handleCreatePost: SubmitHandler<Form> = (data) => {};
  return (
    <div>
      <BackButton />
      <h2 className="text-2xl my-4 font-bold text-center">Add new post</h2>
      <PostForm submit={handleCreatePost} isEditing={false} />
    </div>
  );
}
