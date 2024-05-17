import { Tag } from '@prisma/client';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { useSuspenseQuery } from '@tanstack/react-query';
import axios from 'axios';

const getTags = async () => {
  const { data } = await axios.get('/api/tags');
  return data;
};

export function TagSelect() {
  const { data: tags } = useSuspenseQuery<Tag[]>({
    queryKey: ['tags'],
    queryFn: getTags,
  });

  return (
    <Select>
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
}
