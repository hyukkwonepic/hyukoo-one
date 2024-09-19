import clsx from 'clsx';
import NextLink from 'next/link';

type Props = React.ComponentProps<typeof NextLink> & {
  children: React.ReactNode;
};

export function Link({ children, ...props }: Props) {
  return (
    <NextLink {...props} className={clsx(linkStyles(), props.className)}>
      {children}
    </NextLink>
  );
}

export function linkStyles() {
  return clsx(
    'inline-flex items-center tracking-tight font-medium leading-6 text-zinc-700 hover:bg-zinc-200 ',
    'dark:text-zinc-300 dark:hover:bg-zinc-700'
  );
}
