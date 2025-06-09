import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Santiago Merino',
  description: 'Fullstack developer & Computer Science Student in El Salvador',
  keywords: ['Web Designer', 'Developer', 'UX', 'UI', 'El Salvador', 'San Salvador'],
  authors: [{ name: 'Santiago Merino' }],
  creator: 'Santiago Merino',
  openGraph: {
    title: 'Santiago Merino - Fullstack Developer',
    description: 'Fullstack developer in El Salvador',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Merino - Student & Fullstack Developer',
    description: 'Fullstack developer & Computer Science Student in El Salvador',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollbarWidth: 'none' }} className={poppins.variable + 'scroll-smooth'}>
      <body className={`${poppins.className} antialiased h-full`}>
        {children}
      </body>
    </html>
  );
}