import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { PostSchema } from '@/types/types';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import Link from 'next/link';

interface PostCardProps {
  readonly post: PostSchema;
}

export function PostCard({ post: { title, content, tag } }: PostCardProps) {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{content}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end gap-1">
        <Badge>{tag.name}</Badge>
        <Link href="/blog/1" passHref>
          <Button>Read more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
