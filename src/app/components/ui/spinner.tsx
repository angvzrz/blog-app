import { Loader2 } from 'lucide-react';

type Loader2Props = React.ComponentProps<typeof Loader2>;

export const Spinner = (props: Loader2Props) => {
  return <Loader2 {...props} className={`animate-spin ${props.className}`} />;
};
