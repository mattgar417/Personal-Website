import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import type { Item } from '../data/site';

/**
 * One card shape for experiences, extracurriculars and projects — the three
 * sections differ only in which optional fields they populate.
 *
 * The gradient sits behind the image in every case (not just as a fallback) so
 * logos with transparent backgrounds stay legible in both light and dark mode.
 */
export default function Card({ item }: { item: Item }) {
  const { title, position, description, technologies, githubLink, liveLink, image, gradient, Icon } = item;

  return (
    <article className="flex flex-col overflow-hidden rounded-xl border border-edge bg-surface shadow-sm transition duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="relative flex aspect-[16/10] items-center justify-center"
        style={{ background: gradient }}
      >
        {image ? (
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-6"
          />
        ) : Icon ? (
          <Icon className="text-5xl text-white/85 drop-shadow" aria-hidden />
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="text-lg font-bold leading-snug text-ink">{title}</h3>

        {position && <p className="text-sm font-semibold text-accent">{position}</p>}

        <p className="flex-1 text-sm leading-relaxed text-muted">{description}</p>

        {technologies && technologies.length > 0 && (
          <ul className="flex flex-wrap gap-1.5 pt-1">
            {technologies.map((tech) => (
              <li
                key={tech}
                className="rounded bg-page px-2 py-0.5 text-xs font-medium text-muted ring-1 ring-inset ring-edge"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}

        {(githubLink || liveLink) && (
          <div className="flex flex-wrap gap-2 pt-2">
            {githubLink && (
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md border border-edge bg-page px-3 py-1.5 text-xs font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                <FaGithub aria-hidden /> GitHub
              </a>
            )}
            {liveLink && (
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-accent px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-85"
              >
                <FaExternalLinkAlt aria-hidden /> Link
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
