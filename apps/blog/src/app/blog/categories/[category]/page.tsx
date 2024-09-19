import { readdir } from 'fs/promises';
import path from 'path';
import type { Metadata } from 'next';
import { Dirent } from 'fs';
import { CATEGORIES } from './constants';
import { Link, NavLink, Prose } from 'ui';
import clsx from 'clsx';

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
    <>
      <div className="sticky top-[89px] sm:top-[65px] items-center border-b border-b-zinc-300 dark:border-b-zinc-700 w-full backdrop-blur-[20px] backdrop-saturate-150 bg-white/50 dark:bg-[#0D0D1050]">
        <nav className=" max-w-3xl w-full h-full mx-auto">
          <div className="h-12 items-center flex gap-4 px-4 py-3 md:py-3">
            {Object.entries(CATEGORIES).map(([key, category]) => (
              <NavLink key={key} href={`/blog/categories/${key}`}>
                {category.name}{' '}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      <div className="w-full max-w-3xl mx-auto py-12 px-4">
        <Prose>
          <h1 className="text-3xl font-semibold ">
            {CATEGORIES[params.category as keyof typeof CATEGORIES].name}
          </h1>
          <p>
            {CATEGORIES[params.category as keyof typeof CATEGORIES].description}
          </p>
        </Prose>

        <hr className="my-12" />

        <div className="grid grid-cols-1 gap-x-8 gap-y-12 mt-8">
          {posts.map((post, i) => (
            <div key={post.slug} className="space-y-2">
              <Link
                className={clsx(
                  'font-semibold text-lg leading-7',
                  'underline decoration-auto underline-offset-[7px] decoration-zinc-700 dark:decoration-zinc-300'
                )}
                href={`/blog/${post.slug}`}
              >
                {typeof post.title === 'string' && post.title}
              </Link>
              <div>{post.publishedAt}</div>
              <div>{post.description}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
