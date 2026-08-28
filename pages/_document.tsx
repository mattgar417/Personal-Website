import { Head, Html, Main, NextScript } from 'next/document';

/**
 * Runs before first paint so the saved theme is applied without a flash of the
 * wrong colours. Falls back to the OS preference when nothing is stored.
 */
const themeScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
  } catch (e) {}
})();
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Matthew Garcia — Electrical and Computer Engineering student at Northeastern University." />
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
