import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';

type Theme = 'light' | 'dark';

export default function ThemeToggle({ className = '' }: { className?: string }) {
  // Start as null so the server render and first client render agree; the real
  // theme was already applied to <html> by the script in _document.
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  }, []);

  const toggle = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', next === 'dark');
    document.documentElement.style.colorScheme = next;
    localStorage.setItem('theme', next);
    setTheme(next);
  };

  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-edge bg-surface text-lg text-ink transition hover:border-accent hover:text-accent ${className}`}
    >
      {/* theme is null until mounted; render a stable icon to avoid a hydration mismatch. */}
      {theme === null ? <FaMoon aria-hidden /> : isDark ? <FaSun aria-hidden /> : <FaMoon aria-hidden />}
    </button>
  );
}
