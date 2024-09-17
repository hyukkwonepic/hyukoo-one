import Link from 'next/link';
import { CATEGORIES } from '../../../constants/categories';
import { readdir } from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';

const postsDir = path.resolve('src', 'app', '(posts)');

console.log({ postsDir });

interface PostMetadata extends Metadata {
  publishedAt?: string;
  updatedAt?: string;
  description?: string;
  categories?: string[];
}

export default async function Category({
  params,
}: {
  params: { category: string };
}) {
  const postSlugs =
    // await readdir('./src/app/(posts)', { withFileTypes: true })
    (await readdir(postsDir, { withFileTypes: true }))
      .filter((dirent) => dirent.isDirectory())
      .map((dirent) => dirent.name);

  const posts = (
    await Promise.all(
      postSlugs.map(async (slug) => {
        const { metadata }: { metadata: PostMetadata } = await import(
          `../../(posts)/${slug}/page.mdx`
        );
        return {
          ...metadata,
          slug,
        };
      })
    )
  ).filter((post) => post.categories?.includes(params.category));

  return (
    <div>
      <h1>
        Blog | {CATEGORIES[params.category as keyof typeof CATEGORIES].name}
      </h1>
      <br />
      <div>
        {posts.map((post) => (
          <Link key={post.slug} href={`/${post.slug}`}>
            {typeof post.title === 'string' && post.title}, {post.publishedAt}
          </Link>
        ))}
      </div>
    </div>
  );
}
