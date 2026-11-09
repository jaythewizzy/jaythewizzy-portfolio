import Link from 'next/link';
import { ArrowIcon } from '@/components/icons';

export default function NotFound() {
  return (
    <section className="error-page">
      <div className="error-mark">JW</div>
      <div className="eyebrow">404 · PAGE NOT FOUND</div>
      <h1>That page isn&apos;t <em>here.</em></h1>
      <p>The address may have changed, or the page may not have been published yet.</p>
      <Link className="button button-primary" href="/">Return home <ArrowIcon /></Link>
    </section>
  );
}
