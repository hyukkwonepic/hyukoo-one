export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="prose dark:prose-invert prose-zinc-light  prose-headings:font-semibold prose-h1:text-3xl">
      {children}
    </div>
  );
}
