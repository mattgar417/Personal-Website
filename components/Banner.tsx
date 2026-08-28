import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { navLinks } from '../data/site';
import ThemeToggle from './ThemeToggle';

export default function Banner() {
  const { pathname, events } = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu whenever navigation completes.
  useEffect(() => {
    const close = () => setMenuOpen(false);
    events.on('routeChangeComplete', close);
    return () => events.off('routeChangeComplete', close);
  }, [events]);

  const linkClasses = (href: string) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition ${
      pathname === href
        ? 'bg-accent text-white'
        : 'text-muted hover:bg-surface hover:text-ink'
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-page/85 backdrop-blur">
      <div className="shell flex h-16 items-center justify-between gap-4">
        <Link href="/" className="text-base font-bold tracking-tight text-ink sm:text-lg">
          Matthew Garcia
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Main" className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                className={linkClasses(link.href)}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <ThemeToggle />

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-edge bg-surface text-ink transition hover:border-accent hover:text-accent md:hidden"
          >
            {menuOpen ? <FaTimes aria-hidden /> : <FaBars aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-edge bg-page md:hidden">
          <div className="shell flex flex-col gap-1 py-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname === link.href ? 'page' : undefined}
                onClick={() => setMenuOpen(false)}
                className={`${linkClasses(link.href)} text-center`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
