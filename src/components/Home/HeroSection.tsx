import { ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import blogpost from '../../../public/blogpost.svg';
import Link from 'next/link';

export function HeroSection() {
  return (
    <Card
      className={cn(
        'flex flex-col flex-wrap flex-start lg:flex-nowrap lg:flex-row overflow-hidden rounded-2xl',
        'bg-gradient-to-br from-primary/10 to-accent',
        'p-8 md:p-12 w-full border-none',
      )}
    >
      <section className="flex flex-col items-center lg:items-start">
        <div
          className={cn(
            'inline-flex items-center rounded-full bg-muted',
            'px-3 py-1 text-sm font-medium text-muted-foreground',
          )}
        >
          <SparklesIcon className="mr-1 h-3.5 w-3.5 text-primary" />
          The modern blogging platform
        </div>

        <h1
          className={cn(
            'bg-gradient-to-br from-foreground to-foreground/70',
            'bg-clip-text text-5xl font-bold tracking-tight leading-tight',
            'py-1.5 text-transparent mt-6 md:text-6xl',
          )}
        >
          Welcome to Blogit
        </h1>
        <p className="mt-4 max-w-2xl text-xl text-muted-foreground md:text-2xl">
          Where ideas find their voice and stories come to life.
        </p>

        <Link href="/create" passHref>
          <Button size="lg" className="group mt-8 flex gap-2">
            <span>Start writing</span>
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </section>

      <Image
        alt="hero image"
        src={blogpost}
        className="self-center w-1/2 sm:float-right sm:top-0 relative"
      />
    </Card>
  );
}
