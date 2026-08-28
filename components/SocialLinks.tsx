import { useEffect, useRef, useState } from 'react';
import { EMAIL, RESUME_PATH, socialLinks } from '../data/site';

export default function SocialLinks() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (insecure context or denied permission) — fall back to mailto.
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <>
      <ul className="flex flex-wrap justify-center gap-3 md:justify-start">
        {socialLinks.map(({ Icon, label, color, href, action }) => {
          const content = (
            <>
              <Icon className="text-2xl" style={{ color }} aria-hidden />
              <span className="text-sm font-bold text-ink">{label}</span>
            </>
          );
          const className =
            'flex h-14 items-center gap-2.5 rounded-2xl border border-edge bg-surface px-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md';

          return (
            <li key={label}>
              {action ? (
                <button
                  type="button"
                  onClick={action === 'copyEmail' ? copyEmail : () => window.open(RESUME_PATH, '_blank')}
                  style={{ borderBottom: `5px solid ${color}` }}
                  className={className}
                >
                  {content}
                </button>
              ) : (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ borderBottom: `5px solid ${color}` }}
                  className={className}
                >
                  {content}
                </a>
              )}
            </li>
          );
        })}
      </ul>

      <div aria-live="polite" className="sr-only">
        {copied ? 'Email copied to clipboard' : ''}
      </div>

      {copied && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white shadow-lg">
          Email copied to clipboard!
        </div>
      )}
    </>
  );
}
