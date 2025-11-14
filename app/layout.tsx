import type { Metadata } from 'next';
import { Inter, DM_Serif_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const dmSerifDisplay = DM_Serif_Display({ 
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
});

export const metadata: Metadata = {
  title: 'Resonance - Your Ideas. Real Music. In Minutes.',
  description: 'Stop letting technical barriers trap your creativity. AI-powered music creation platform with fractional rights trading. No music theory required. Start free.',
};
export default function RootLayout({
children,
}: {
children: React.ReactNode;
}) {
return (
<html lang="en">
<body className={`${inter.variable} ${dmSerifDisplay.variable} font-sans`}>
{children}
</body>
</html>
);
}