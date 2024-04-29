import Link from 'next/link';
import { Button } from './ui/button';
import { Pencil, Trash } from 'lucide-react';

export function ButtonAction() {
  return (
    <div>
      <Link className="mr-2" href="/edit/id" passHref>
        <Button>
          <Pencil className="mr-2 h-4 w-4" /> Edit
        </Button>
      </Link>

      <Button variant="destructive">
        <Trash className="mr-2 h-4 w-4" /> Delete
      </Button>
    </div>
  );
}
