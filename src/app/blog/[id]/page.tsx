import { ButtonAction } from '@/components/ButtonAction';
import { BackButton } from '@/components/BackButton';
import { postSchema } from '@/lib/validations';
import { Badge } from '@/components/ui/badge';
import type { Post } from '@/types/types';
import prisma from '@/lib/db';

interface BlogDetailsPageProps {
  readonly params: {
    id: string;
  };
}

async function getPost(id: string): Promise<Post> {
  const response: unknown = await prisma.post.findFirst({
    where: { id: id },
    select: {
      id: true,
      title: true,
      content: true,
      tag: true,
    },
  });

  const validatedPost = postSchema.safeParse(response);

  if (!validatedPost.success) {
    throw new Error(validatedPost.error.message);
  }

  return validatedPost.data;
}

export default async function BlogDetailsPage({ params }: BlogDetailsPageProps) {
  const post = await getPost(params.id);

  return (
    <div>
      <BackButton />
      <div className="mb-8">
        <h2 className="text-2xl font-bold my-4">{post.title}</h2>
        <ButtonAction postId={params.id} />
      </div>
      <Badge>{post.tag.name}</Badge>
      <p className="text-slate-700">{post.content}</p>
    </div>
  );
}
