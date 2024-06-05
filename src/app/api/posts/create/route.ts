import { NextResponse } from 'next/server';
import { formSchema } from '@/lib/validations';
import prisma from '@/lib/db';

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const validatedPost = formSchema.safeParse(body);

    if (!validatedPost.success) {
      return NextResponse.json(validatedPost.error, { status: 422 });
    }

    const {
      title,
      content,
      tagId,
    } = validatedPost.data;

    const newPost = await prisma.post.create({
      data: { title, content, tagId },
    });

    return NextResponse.json({ post: newPost, status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'could not create post', status: 500 });
  }
}
