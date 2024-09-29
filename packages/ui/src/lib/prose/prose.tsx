export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <article className="prose dark:prose-invert prose-zinc-light prose-headings:font-semibold prose-h1:text-3xl prose-a:underline-offset-[3px] prose-a:decoration-auto hover:prose-a:bg-zinc-200 dark:hover:prose-a:bg-zinc-700  prose-a:decoration-zinc-700 dark:prose-a:decoration-zinc-300 [&>details>summary]:cursor-pointer [&>details>summary]:marker:mr-2">
      {children}
    </article>
  );
}
