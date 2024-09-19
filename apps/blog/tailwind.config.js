const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const colors = require('tailwindcss/colors');
const { join } = require('path');

const hexToRgb = (hex) => {
  hex = hex.replace('#', '');
  hex = hex.length === 3 ? hex.replace(/./g, '$&$&') : hex;
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `${r} ${g} ${b}`;
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html,mdx}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      typography: ({ theme }) => {
        return {
          // Based on original zinc theme https://github.com/tailwindlabs/tailwindcss-typography/blob/main/src/styles.js
          'zinc-light': {
            css: {
              '--tw-prose-body': colors.zinc[700],
              '--tw-prose-headings': colors.zinc[700], // original: 900
              '--tw-prose-lead': colors.zinc[600],
              '--tw-prose-links': colors.zinc[700], // original: 900
              '--tw-prose-bold': colors.zinc[700], // original: 900
              '--tw-prose-counters': colors.zinc[500],
              '--tw-prose-bullets': colors.zinc[300],
              '--tw-prose-hr': colors.zinc[200],
              '--tw-prose-quotes': colors.zinc[700], // original: 900
              '--tw-prose-quote-borders': colors.zinc[200],
              '--tw-prose-captions': colors.zinc[500],
              '--tw-prose-kbd': colors.zinc[700], // original: 900
              '--tw-prose-kbd-shadows': hexToRgb(colors.zinc[700]), // original: 900
              '--tw-prose-code': colors.zinc[700], // original: 900
              '--tw-prose-pre-code': colors.zinc[200],
              '--tw-prose-pre-bg': colors.zinc[800],
              '--tw-prose-th-borders': colors.zinc[300],
              '--tw-prose-td-borders': colors.zinc[200],
              '--tw-prose-invert-body': colors.zinc[300],
              '--tw-prose-invert-headings': colors.zinc[300], // original: white
              '--tw-prose-invert-lead': colors.zinc[400],
              '--tw-prose-invert-links': colors.zinc[300], // original: white
              '--tw-prose-invert-bold': colors.zinc[300], // original: white
              '--tw-prose-invert-counters': colors.zinc[400],
              '--tw-prose-invert-bullets': colors.zinc[600],
              '--tw-prose-invert-hr': colors.zinc[700],
              '--tw-prose-invert-quotes': colors.zinc[100],
              '--tw-prose-invert-quote-borders': colors.zinc[700],
              '--tw-prose-invert-captions': colors.zinc[400],
              '--tw-prose-invert-kbd': colors.zinc[300], // original: white
              '--tw-prose-invert-kbd-shadows': hexToRgb(colors.zinc[300]), // original: white
              '--tw-prose-invert-code': colors.zinc[300], // original: white
              '--tw-prose-invert-pre-code': colors.zinc[300],
              '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
              '--tw-prose-invert-th-borders': colors.zinc[600],
              '--tw-prose-invert-td-borders': colors.zinc[700],
            },
          },
        };
      },
    },
  },
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
};
