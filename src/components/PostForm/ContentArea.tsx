import { LegacyRef, forwardRef } from 'react';
import { Textarea, TextareaProps } from '../ui/textarea';

export const ContentArea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function ContentArea(props, ref) {
    return (
      <Textarea
        {...props}
        ref={ref as LegacyRef<HTMLTextAreaElement> | undefined}
        className="max-w-lg"
        placeholder="Post content"
      />
    );
  },
);
