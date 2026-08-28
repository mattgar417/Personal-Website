import Link from 'next/link';
import type { IconType } from 'react-icons';
import { FaArrowRight } from 'react-icons/fa';
import type { Item } from '../data/site';
import Card from './Card';

type SectionProps = {
  id?: string;
  title: string;
  Icon: IconType;
  blurb?: string;
  items: readonly Item[];
  /** When set, renders a "View all" link to the full section page. */
  href?: string;
  columns?: 2 | 3;
};

// Written out in full because Tailwind only keeps class names it can see statically.
const gridColumns = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
} as const;

export default function Section({
  id,
  title,
  Icon,
  blurb,
  items,
  href,
  columns = 3,
}: SectionProps) {
  return (
    <section id={id} className="shell py-12 sm:py-16">
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-edge pb-4">
        <div>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-ink sm:text-3xl">
            <Icon className="text-accent" aria-hidden />
            {title}
          </h2>
          {blurb && <p className="mt-2 max-w-2xl text-sm text-muted sm:text-base">{blurb}</p>}
        </div>

        {href && (
          <Link
            href={href}
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:gap-3"
          >
            View all <FaArrowRight aria-hidden />
          </Link>
        )}
      </div>

      <div className={`mt-8 grid gap-6 ${gridColumns[columns]}`}>
        {items.map((item) => (
          <Card key={item.title} item={item} />
        ))}
      </div>
    </section>
  );
}
