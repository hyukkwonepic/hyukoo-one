'use client';

import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { Link } from '../link/link';

type Props = React.ComponentProps<typeof Link> & {
  href: string;
  exact?: boolean;
  children: React.ReactNode;
};

export function NavLink({ children, exact = false, ...props }: Props) {
  const pathname = usePathname();

  const activeClassName =
    'underline decoration-auto underline-offset-[5px] decoration-zinc-700 dark:decoration-zinc-300';

  const isActive = exact
    ? pathname === props.href
    : pathname.startsWith(props.href);

  return (
    <Link
      {...props}
      className={clsx(
        props.className,
        isActive ? activeClassName : 'no-underline'
      )}
    >
      {children}
    </Link>
  );
}
