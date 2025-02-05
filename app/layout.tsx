import './globals.css';
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'GDG Hacks 2025 - North India\'s Largest Hackathon',
  description: 'Join GDG Hacks 2025, North India\'s largest hackathon featuring cutting-edge technology challenges, amazing prizes, and endless opportunities to innovate.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}