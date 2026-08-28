import Head from 'next/head';
import Banner from './Banner';

type LayoutProps = {
  title: string;
  children: React.ReactNode;
};

export default function Layout({ title, children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-page text-ink">
      <Head>
        <title>{`${title} · Matthew Garcia`}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Banner />

      <main className="flex-1">{children}</main>

      <footer className="border-t border-edge">
        <div className="shell py-8 text-center text-sm text-muted">
          © {new Date().getFullYear()} Matthew Garcia
        </div>
      </footer>
    </div>
  );
}
