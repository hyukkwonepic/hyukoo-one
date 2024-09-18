//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');
// import createMDX from '@next/mdx'
const createMDX = require('@next/mdx');

const isProductionBuild = process.env.NODE_ENV === 'production';

const withMDX = createMDX({
  // Add markdown plugins here, as desired
});

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  ...(isProductionBuild
    ? { assetPrefix: 'https://hyukoo-one-blog.netlify.app' }
    : {}),
  nx: {
    // Set this to true if you would like to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
  withMDX,
];

module.exports = composePlugins(...plugins)(nextConfig);
