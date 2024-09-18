import { Header } from 'ui';
import { CATEGORIES } from '../../constants/categories';
import Link from 'next/link';

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <div>
        {Object.entries(CATEGORIES).map(([key, category]) => (
          <Link key={key} href={`/blog/categories/${key}`}>
            {category.name}{' '}
          </Link>
        ))}
      </div>
      <br />
      {children}
    </>
  );
}
