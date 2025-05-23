import Link from 'next/link';
import { Card, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { BookOpenCheck } from 'lucide-react';

export function Navbar() {
  return (
    <Card className="w-full border-b-slate-300 rounded-none">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Link href="/" className="flex gap-2">
            <BookOpenCheck />
            <span>Blogit</span>
          </Link>
          <Link href="/create" passHref>
            <Button>Create Post</Button>
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
