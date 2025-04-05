import type { Post } from '@/types/types';
import { postSchema } from '@/lib/validations';
import { PostCard } from '../components/PostCard';
import { z } from 'zod';
import prisma from '@/lib/db';

const postsSchema = z.array(postSchema);

const getPosts = async (): Promise<Post[]> => {
  const posts = await prisma.post
    .findMany({
      select: {
        id: true,
        title: true,
        content: true,
        tag: true,
      },
      orderBy: { createdAt: 'desc' },
    })
    .then((posts: unknown) => {
      const validatedPosts = postsSchema.safeParse(posts);

      if (!validatedPosts.success) {
        throw new Error(validatedPosts.error.message);
      }

      return validatedPosts.data;
    });

  return posts;
};

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </main>
  );
}
