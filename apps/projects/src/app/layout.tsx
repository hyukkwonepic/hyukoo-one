import './global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';

const title = `Projects | Hyukoo's site`;
const description =
  "Explore Hyukoo Kwon's software engineering projects, showcasing expertise in frontend development, React, Next.js, and various web technologies. View professional and personal works demonstrating skills in building efficient, user-friendly applications.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    images: ['https://hyukoo.one/hyukoo-kwon.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body className="font-sans dark:bg-zinc-900">
        <ThemeProvider attribute="class">{children}</ThemeProvider>
      </body>
    </html>
  );
}
