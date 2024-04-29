import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export function PostCard() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Create project</CardTitle>
        <CardDescription>Deploy your new project in one-click.</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-end">
        <Link href="/blog/1" passHref>
          <Button>Read more...</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
