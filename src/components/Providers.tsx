'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface ProvidersProps {
  readonly children: React.ReactNode;
}
export function Providers({ children }: ProvidersProps) {
  const queryClient = new QueryClient();
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
