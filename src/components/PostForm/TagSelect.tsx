import { forwardRef } from 'react';
import { useQuery } from '@tanstack/react-query';
import { ControllerRenderProps } from 'react-hook-form';
import { Tag } from '@prisma/client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Spinner } from '../ui/spinner';
import { getTags } from '@/server/functions';

export const TagSelect = forwardRef<HTMLSelectElement, ControllerRenderProps>(
  function TagSelect(props, ref) {
    const { data: tags, isLoading } = useQuery<Tag[]>({
      queryKey: ['tags'],
      queryFn: getTags,
    });

    if (isLoading) return <Spinner className="w-full" />;

    return (
      <Select {...props} onValueChange={props.onChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a tag" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {tags &&
              tags.map((tag) => (
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
