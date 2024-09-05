'use client';

import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLSelectElement>) =>
      setTheme(event.target.value),
    [setTheme]
  );

  return (
    <select
      id="theme"
      value={resolvedTheme}
      onChange={handleChange}
      className="cursor-pointer bg-transparent text-zinc-700 dark:text-zinc-200 focus:outline-none tracking-tight"
    >
      <option value="light">light mode</option>
      <option value="dark">dark mode</option>
    </select>
  );
}

export default ThemeToggle;
