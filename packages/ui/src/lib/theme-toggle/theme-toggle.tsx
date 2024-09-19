'use client';

import { useTheme } from 'next-themes';
import { useCallback } from 'react';

export function ThemeToggle() {
  const { setTheme, resolvedTheme, theme } = useTheme();

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
      className="cursor-pointer bg-transparent font-medium h-6 leading-6 text-zinc-700 dark:text-zinc-200 focus:outline-none tracking-tight"
    >
      <option value="light">Light mode</option>
      <option value="dark">Dark mode</option>
    </select>
  );
}

export default ThemeToggle;
