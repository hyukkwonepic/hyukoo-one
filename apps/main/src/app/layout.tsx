import './global.css';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { ThemeProvider } from 'next-themes';
import { Metadata } from 'next';

const title = `Hyukoo's site`;
const description =
  'Personal website of Hyukoo Kwon, a software engineer specializing in frontend development. Explore his projects and personal interests. Connect via various social platforms.';

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
