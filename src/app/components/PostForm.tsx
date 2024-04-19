import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select } from "./ui/select";
import { SelectContent, SelectTrigger } from "@radix-ui/react-select";
import { Button } from "./ui/button";

export function PostForm() {
  const form = useForm();
  return (
    <Form {...form}>
      <form className="flex flex-col items-center justify-center gap-5 mt-10">
        <Input className="max-w-lg" id="name" placeholder="post title..." />
        <Textarea className="max-w-lg" placeholder="Post content" />
        <Select>
          <SelectTrigger className="max-w-lg">Select tags</SelectTrigger>
          <SelectContent></SelectContent>
        </Select>
        <Button className="w-full max-w-lg">Create</Button>
      </form>
    </Form>
  );
}
