import { UseFormReturn } from 'react-hook-form';
import { FormField, FormItem } from '../ui/form';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { FormSchema } from './PostForm';

export function TagSelect() {
  return (
    <Select>
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
  );
}
