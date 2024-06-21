import { NextRequest, NextResponse } from 'next/server';
import { formSchema } from '@/lib/validations';
import { z } from 'zod';
import prisma from '@/lib/db';
import { NextApiResponse } from 'next';

interface ContextProps {
  params: {
    postId: string;
  };
}

export async function DELETE(res: NextApiResponse, context: ContextProps) {
  const postId = context.params.postId;
  const validatedPostId = z.string().cuid().safeParse(postId);

  if (!validatedPostId.success) {
    return res.status(422).json({ message: validatedPostId.error.message });
  }

  try {
    await prisma.post.delete({
      where: { id: validatedPostId.data },
    });

    return NextResponse.json({ message: 'post deleted', status: 200 });
  } catch (error) {
    return res.status(500).json({ error: 'could not delete post' });
  }
}

export async function PATCH(request: NextRequest, context: ContextProps) {
  const body: unknown = await request.json();
  const validatedPost = formSchema.safeParse(body);

  if (!validatedPost.success) {
    return NextResponse.json(validatedPost.error.message, { status: 422 });
  }

  const postId = context.params.postId;
  const validatedPostId = z.string().cuid().safeParse(postId);

  if (!validatedPostId.success) {
    return NextResponse.json(validatedPostId.error.message, { status: 422 });
  }

  const { title, content, tagId } = validatedPost.data;
  try {
    await prisma.post.update({
      where: { id: validatedPostId.data },
      data: { title, content, tagId },
    });

    return NextResponse.json({ message: 'update success', status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'could not update post', status: 500 });
  }
}

export async function GET(context: ContextProps) {
  const postId = context.params.postId;
  const validatedPostId = z.string().cuid().safeParse(postId);

  if (!validatedPostId.success) {
    return NextResponse.json(validatedPostId.error.message, { status: 422 });
  }

  const validPostId = validatedPostId.data;

  try {
    const post = await prisma.post.findFirst({
      where: { id: validPostId },
      include: { tag: true },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `could not fetch post with id: ${validPostId}` },
      { status: 500 },
    );
  }
}
