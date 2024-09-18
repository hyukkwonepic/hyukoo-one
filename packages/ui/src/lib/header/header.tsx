import Link from 'next/link';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

export function Header() {
  return (
    <header className="z-50 flex items-center border-b border-b-zinc-300 dark:border-b-zinc-700 sticky top-0 w-full backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
      <nav className=" max-w-3xl w-full h-full mx-auto">
        <div className="flex flex-col justify-between  w-full px-4 py-4 md:py-5 sm:flex-row sm:justify-between gap-y-2">
          <Link href="/">
            <span className="text-zinc-700 dark:text-zinc-300 tracking-tig font-bold font-mono hover:underline">
              hyukoo.one
            </span>
          </Link>
          <div className="flex justify-between md:space-x-12">
            <div className="flex space-x-4">
              <a href="https://hyukoo.one/projects ">
                <span className="text-zinc-700 dark:text-zinc-300 font-m tracking-tight hover:underline">
                  /projects
                </span>
              </a>

              <a href="https://hyukoo.one/blog ">
                <span className="text-zinc-700 dark:text-zinc-300 font-m tracking-tight hover:underline">
                  /blog
                </span>
              </a>
            </div>
            <div className="flex items-center">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
