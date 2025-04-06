import { z } from 'zod';
import type { Post } from '@/types/types';
import { postSchema } from '@/lib/validations';
import { HeroSection } from '@/components/Home/HeroSection';
import { PostCard } from '@/components/PostCard';
import { cn } from '@/lib/utils';
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
    <main
      className={cn(
        posts.length
          ? 'grid items-center justify-center md:grid-cols-2 lg:grid-cols-3 gap-4'
          : 'flex items-center justify-center',
      )}
    >
      {posts.length ? (
        posts.map((post) => <PostCard key={post.id} post={post} />)
      ) : (
        <HeroSection />
      )}
    </main>
  );
}
