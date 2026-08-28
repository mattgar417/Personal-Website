import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import Layout from '../components/Layout';
import Section from '../components/Section';
import SocialLinks from '../components/SocialLinks';
import { bio, sections } from '../data/site';

/** How many cards each section shows on the home page before "View all". */
const PREVIEW_COUNT = 3;

export default function Home() {
  return (
    <Layout title="Home">
      {/* Hero */}
      <section className="shell flex flex-col items-center gap-10 py-12 md:flex-row-reverse md:items-start md:gap-14 md:py-16 lg:gap-20">
        <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-full border-4 border-edge sm:w-52 md:w-64 lg:w-72">
          <Image
            src="/Matthew Garcia.jpg"
            alt="Matthew Garcia"
            fill
            sizes="(max-width: 768px) 13rem, 18rem"
            className="object-cover object-top"
            priority
          />
        </div>

        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Matthew Garcia
          </h1>
          <p className="mt-2 text-base font-semibold text-accent sm:text-lg">
            Electrical &amp; Computer Engineering @ Northeastern University
          </p>

          {bio.map((paragraph) => (
            <p key={paragraph.slice(0, 32)} className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
              {paragraph}
            </p>
          ))}

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </section>

      {/* Section directory — every section of the site, with a preview of each. */}
      <nav aria-label="Sections" className="shell border-y border-edge py-8">
        <ul className="grid gap-4 sm:grid-cols-3">
          {sections.map(({ id, href, title, Icon, blurb, items }) => (
            <li key={id}>
              <Link
                href={href}
                className="group flex h-full flex-col gap-2 rounded-xl border border-edge bg-surface p-5 transition hover:-translate-y-1 hover:border-accent hover:shadow-md"
              >
                <span className="flex items-center gap-3 text-lg font-bold text-ink">
                  <Icon className="text-accent" aria-hidden />
                  {title}
                  <span className="ml-auto text-sm font-semibold text-muted">{items.length}</span>
                </span>
                <span className="text-sm text-muted">{blurb}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-accent">
                  Explore <FaArrowRight className="transition group-hover:translate-x-1" aria-hidden />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map(({ id, href, title, Icon, blurb, items }) => (
        <Section
          key={id}
          id={id}
          title={title}
          Icon={Icon}
          blurb={blurb}
          items={items.slice(0, PREVIEW_COUNT)}
          href={href}
        />
      ))}
    </Layout>
  );
}
