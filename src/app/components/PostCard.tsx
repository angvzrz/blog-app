import type { Post } from '@/types/types';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Link from 'next/link';

interface PostCardProps {
  readonly post: Post;
}

export function PostCard({ post: { id, title, content, tag } }: PostCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-1">
        <Badge>{tag.name}</Badge>
        <Link href={`/blog/${id}`} passHref>
          <Button>Read more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
