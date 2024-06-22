import './globals.css';
import { Inter } from 'next/font/google';
import { Navbar } from './components/Navbar';
import { Providers } from './components/Providers';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Bog App',
  description: 'Portfolio app to showcase and practice fullstack development abilities',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          <div className="container h-full pt-12">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
