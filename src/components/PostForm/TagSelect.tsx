import { Tag } from '@prisma/client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { ControllerRenderProps } from 'react-hook-form';
import { useSuspenseQuery } from '@tanstack/react-query';
import { forwardRef } from 'react';
import prisma from '@/lib/db';

const getTags = async () => {
  const tags = await prisma.tag.findMany();
  return tags;
};

export const TagSelect = forwardRef<HTMLSelectElement, ControllerRenderProps>(
  function TagSelect(props, ref) {
    const { data: tags } = useSuspenseQuery<Tag[]>({
      queryKey: ['tags'],
      queryFn: getTags,
    });

    return (
      <Select {...props} onValueChange={props.onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {tags.map((tag) => (
              <SelectItem key={tag.id} value={tag.id}>
                {tag.name}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    );
  },
);
