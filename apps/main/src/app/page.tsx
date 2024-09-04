import Welcome from './welcome.mdx';
import Header from '../components/header/header';

export default function Index() {
  return (
    <div>
      <Header />
      <main>
        <div className="w-full max-w-3xl mx-auto py-10 px-4">
          <article className="prose dark:prose-invert prose-zinc-light  prose-headings:font-semibold prose-h1:text-3xl">
            <Welcome />
          </article>
        </div>
      </main>
    </div>
  );
}
