import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import {ThemeProvider} from '@/components/theme-provider';
import '../styles/globals.css';
import Header from '@/components/Header';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Binary SUST',
  description: 'Technology for real life',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Header />
          <main className="container mx-auto px-4 py-8">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
