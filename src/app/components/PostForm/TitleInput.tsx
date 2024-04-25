import { LegacyRef, forwardRef } from 'react';
import { Input } from '../ui/input';

export const TitleInput = forwardRef(function TitleInput(props, ref) {
  return (
    <Input
      {...props}
      ref={ref as LegacyRef<HTMLInputElement> | undefined}
      type="text"
      className="max-w-lg"
      id="name"
      placeholder="post title..."
    />
  );
});
