import Link from 'next/link';
import { readdir } from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';
import { Dirent } from 'fs';
import { CATEGORIES } from './constants';

const postsDir = path.resolve('src', 'app', 'blog', '(posts)');

interface PostMetadata extends Metadata {
  publishedAt?: string;
  updatedAt?: string;
  description?: string;
  categories?: string[];
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  let dirents: Dirent[] = [];
  try {
    dirents = await readdir(postsDir, { withFileTypes: true });
  } catch (error) {
    console.log(error);
  }

  const postSlugs = dirents
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
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            {typeof post.title === 'string' && post.title}, {post.publishedAt}
          </Link>
        ))}
      </div>
    </div>
  );
}
