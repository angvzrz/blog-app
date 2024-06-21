import { LegacyRef, forwardRef } from 'react';
import { Textarea } from '../ui/textarea';

export const ContentArea = forwardRef(function ContentArea(props, ref) {
  return (
    <Textarea
      {...props}
      ref={ref as LegacyRef<HTMLTextAreaElement> | undefined}
      className="max-w-lg"
      placeholder="Post content"
    />
  );
});
