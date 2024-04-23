"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { Form, FormField, FormItem } from "./ui/form";
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
  postTitle: z.string().min(1),
  postContent: z.string().min(1),
  tagOption: z.string().min(1),
});

export type FormSchema = z.infer<typeof formSchema>;

interface PostFormProps {
  submit: SubmitHandler<FormSchema>;
}

export function PostForm({ submit }: PostFormProps) {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: { postTitle: "", postContent: "", tagOption: "" },
  });
  const { register, handleSubmit } = { ...form };
  return (
    <Form {...form}>
      <form
        className="flex flex-col items-center justify-center gap-5 mt-10"
        onSubmit={handleSubmit(submit)}
      >
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
        <FormField
          control={form.control}
          name="tagOption"
          render={({ field }) => (
            <FormItem className="w-full max-w-lg">
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
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
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full max-w-lg">
          Create
        </Button>
      </form>
    </Form>
  );
}
