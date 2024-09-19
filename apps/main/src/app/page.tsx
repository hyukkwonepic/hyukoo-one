// @ts-expect-error - MDX file import not recognized by TypeScript
import Welcome from './welcome.mdx';
import { Header, Prose } from 'ui';

export default function Index() {
  return (
    <div>
      <Header />
      <main>
        <div className="w-full max-w-3xl mx-auto py-12 px-4">
          <Prose>
            <Welcome />
          </Prose>
        </div>
      </main>
    </div>
  );
}
