import { Skeleton } from '../ui/skeleton';

export function FormSkeleton() {
  return (
    <div className="flex flex-col items-center justify-center gap-5 mt-10">
      <Skeleton className="space-y-2 min-h-[40px] w-56 rounded-md" />
      <Skeleton className="space-y-2 min-h-[40px] w-full max-w-lg rounded-md" />
      <Skeleton className="flex min-h-[80px] w-full px-3 py-2 max-w-lg rounded-md" />
      <Skeleton className="space-y-2 min-h-[40px] w-full max-w-lg rounded-md" />
      <Skeleton className="space-y-2 min-h-[40px] w-full max-w-lg rounded-md" />
    </div>
  );
}
