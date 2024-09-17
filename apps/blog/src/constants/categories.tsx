export const CATEGORIES = {
  'software-development': {
    name: 'Software Development',
    order: 0,
  },
  general: {
    name: 'General',
    order: 1,
  },
};

export type CategoryId = keyof typeof CATEGORIES;
export type Category = (typeof CATEGORIES)[CategoryId];
