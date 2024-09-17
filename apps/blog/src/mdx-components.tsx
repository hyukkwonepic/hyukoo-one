import type { MDXComponents } from 'mdx/types';
import { ComponentPropsWithoutRef } from 'react';

// function Heading(props: ComponentPropsWithoutRef<'h1'>) {
//   return <h1 className="heading" {...props} />;
// }

export function useMDXComponents(components: MDXComponents): MDXComponents {
  console.log(components);
  return {
    // h1: ({ children }) => (
    //   <h1 style={{ color: 'red', fontSize: '48px' }}>{children}</h1>
    // ),
    // meta: ({ children }) => <div>meta{children}</div>,
    // metadata: ({ children }) => <div>metadata{children}</div>,

    // h1: <Heading />,
    ...components,
  };
}
