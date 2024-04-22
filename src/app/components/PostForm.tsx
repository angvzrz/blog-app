"use client";

import { useForm } from "react-hook-form";
import { Form } from "./ui/form";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { Button } from "./ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  postTitle: z.string(),
  postContent: z.string(),
  tagOption: z.string(),
});

export function PostForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { postTitle: "", postContent: "", tagOption: "" },
  });
  const { register, handleSubmit } = { ...form };

  return (
    <Form {...form}>
      <form className="flex flex-col items-center justify-center gap-5 mt-10">
        <Input
          {...register("postTitle")}
          type="text"
          className="max-w-lg"
          id="name"
          placeholder="post title..."
        />
        <Textarea
          {...register("postContent")}
          className="max-w-lg"
          placeholder="Post content"
        />
        <Select {...register("tagOption")}>
          <SelectTrigger className="max-w-lg">
            <SelectValue placeholder="Select a tag" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="react">React</SelectItem>
              <SelectItem value="next">Next</SelectItem>
              <SelectItem value="svelte">Svelte</SelectItem>
              <SelectItem value="angular">Angular</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className="w-full max-w-lg">Create</Button>
      </form>
    </Form>
  );
}
