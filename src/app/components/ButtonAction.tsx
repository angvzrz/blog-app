'use client';

import { Pencil, Trash } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { Spinner } from './ui/spinner';
import { Button } from './ui/button';
import { z } from 'zod';
import axios from 'axios';
import Link from 'next/link';

interface ButtonActionProps {
  readonly postId: string;
}

export function ButtonAction({ postId }: ButtonActionProps) {
  const router = useRouter();
  const { mutate: deletePost, isPending } = useMutation({
    mutationFn: async () => {
      const validatedPostId = z.string().cuid().safeParse(postId);

      if (!validatedPostId.success) {
        throw new Error(validatedPostId.error.message);
      }

      return axios.delete(`/api/posts/${validatedPostId.data}`);
    },
    onError: (error) => {
      throw new Error(error.message);
    },
    onSuccess: () => {
      router.push('/');
      router.refresh();
    },
  });
  return (
    <div>
      <Link className="mr-2" href="/edit/id" passHref>
        <Button>
          <Pencil className="mr-2 h-4 w-4" /> Edit
        </Button>
      </Link>

      <Button variant="destructive" onClick={() => deletePost()}>
        {isPending ? (
          <>
            <Spinner className="mr-2 h-4 w-4" /> Deleting
          </>
        ) : (
          <>
            <Trash className="mr-2 h-4 w-4" /> Delete
          </>
        )}
      </Button>
    </div>
  );
}
