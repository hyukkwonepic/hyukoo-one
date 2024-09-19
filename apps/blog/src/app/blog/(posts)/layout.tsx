import { Prose } from 'ui';

export default function PostsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      <Prose>{children}</Prose>
    </div>
  );
}
