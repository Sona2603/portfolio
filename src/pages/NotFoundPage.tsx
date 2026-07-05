import { FiArrowLeft } from 'react-icons/fi';
import { PageTransition } from '../components/PageTransition';

export default function NotFoundPage() {
  return (
    <PageTransition>
      <main className="grid min-h-screen place-items-center bg-radial-field px-5 text-white">
        <section className="glass-panel max-w-xl rounded-[2rem] p-8 text-center">
          <p className="eyebrow">404</p>
          <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-6xl">Page not found</h1>
          <p className="mt-5 text-zinc-300">
            The page you are looking for is not available in this portfolio.
          </p>
          <a
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-mint px-6 py-3 text-sm font-bold text-zinc-950"
          >
            <FiArrowLeft aria-hidden="true" />
            Back Home
          </a>
        </section>
      </main>
    </PageTransition>
  );
}
