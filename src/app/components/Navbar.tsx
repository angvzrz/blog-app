import Link from "next/link";
import { Card, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <Card className="w-full border-primary">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <Link href="/">Blog App</Link>
          <Link href="/create" passHref>
            <Button>Create Post</Button>
          </Link>
        </CardTitle>
      </CardHeader>
    </Card>
  );
}
