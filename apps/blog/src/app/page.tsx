import { redirect } from 'next/navigation';
import { CATEGORIES } from '../constants/categories';

export default function Index() {
  const entry = Object.entries(CATEGORIES).find(
    ([key, value]) => value.order === 0
  );

  if (!entry) {
    return null;
  }

  const [id] = entry;

  redirect(`/categories/${id}`);
}
