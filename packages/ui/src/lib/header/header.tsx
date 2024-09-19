import { NavLink } from '../nav-link/nav-link';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

export function Header() {
  return (
    <header className="z-50 flex items-center border-b border-b-zinc-300 dark:border-b-zinc-700 sticky top-0 w-full backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
      <nav className=" max-w-3xl w-full h-full mx-auto">
        <div className="sm:h-16 flex flex-col justify-between sm:items-center  w-full px-4 py-4 md:py-5 sm:flex-row sm:justify-between gap-y-2">
          <div>
            <NavLink href="/" exact>
              <span className="font-mono font-black tracking-normal">
                hyukoo.one
              </span>
            </NavLink>
          </div>
          <div className="flex justify-between md:space-x-12">
            <div className="flex space-x-4">
              <NavLink href="/projects">Projects</NavLink>
              <NavLink href="/blog">Blog</NavLink>
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
