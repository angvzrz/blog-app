'use client';

import { ChevronLeft } from 'lucide-react';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

export function BackButton() {
  const router = useRouter();
  return (
    <Button onClick={() => router.back()}>
      <ChevronLeft /> Back
    </Button>
  );
}
