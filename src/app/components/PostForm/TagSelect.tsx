import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';

interface TagSelectProps {
  tags: Tag[];
}

export function TagSelect({ tags }: TagSelectProps) {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select a tag" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="react">React</SelectItem>
          
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
