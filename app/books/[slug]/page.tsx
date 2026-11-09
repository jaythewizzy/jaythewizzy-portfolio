import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageIntro } from '@/components/page-intro';
import { ArrowIcon } from '@/components/icons';
import { books, getBook } from '@/data/books';

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return books.map((book) => ({ slug: book.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const book = getBook(slug);
  return book ? { title: book.title, description: book.summary, alternates: { canonical: `/books/${slug}/` } } : { title: 'Book not found' };
}

export default async function BookDetailPage({ params }: Props) {
  const { slug } = await params;
  const book = getBook(slug);
  if (!book) notFound();

  return (
    <>
      <PageIntro
        eyebrow={`ORIGINAL FICTION · ${book.statusLabel}`}
        title={<>{book.title}<br /><em>{book.subtitle}.</em></>}
        description={book.summary}
        breadcrumb="Books"
      />
      <section className="section"><div className="shell book-detail-stack">
        <div className="book-status-banner">
          <div><span className="eyebrow">CURRENT STATUS</span><strong>{book.status}</strong><p>The first book is being written. This is an in-progress original property, not a published title.</p></div>
          <span className="book-status-mark">IN<br />PROGRESS</span>
        </div>

        <div className="detail-grid">
          <article className="detail-panel">
            <div className="eyebrow">THE STORY</div>
            <h2>A second chance. <em>A different life.</em></h2>
            <div className="detail-copy">{book.synopsis.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
            <div className="book-central-idea"><span className="eyebrow">THE CENTRAL IDEA</span><p>{book.centralIdea}</p></div>
            <div className="detail-facts">
              <div className="detail-fact"><small>Series</small><strong>{book.format}</strong></div>
              <div className="detail-fact"><small>Current book</small><strong>{book.subtitle}</strong></div>
              <div className="detail-fact"><small>Status</small><strong>{book.status}</strong></div>
            </div>
          </article>
          <aside className="detail-sidebar">
            <div className="detail-panel">
              <div className="eyebrow">THE WORLD</div>
              <h3>{book.setting.name}</h3>
              <p>{book.setting.description}</p>
            </div>
            <div className="detail-panel">
              <div className="eyebrow">THE STORY RULE</div>
              <h3>{book.governingRule}</h3>
              <p>Future knowledge can create an advantage, but it cannot remove uncertainty or the consequences of a new choice.</p>
            </div>
          </aside>
        </div>

        <section className="book-subsection">
          <div className="section-heading"><div><div className="eyebrow">SERIES PLAN</div><h2>Four books. <em>One evolving life.</em></h2></div><p>The saga moves through four distinct emotional stages. Only Book One is currently in progress; the remaining volumes are planned.</p></div>
          <div className="book-saga-grid">
            {book.saga.map((volume) => (
              <article className={`book-saga-card${volume.status === 'In progress' ? ' is-current' : ''}`} key={volume.volume}>
                <div className="book-saga-top"><span>BOOK {String(volume.volume).padStart(2, '0')}</span><span>{volume.status}</span></div>
                <h3>{volume.title}</h3>
                <div className="book-saga-stage">{volume.stage}</div>
                <p>{volume.line}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="book-two-column">
          <section className="detail-panel">
            <div className="eyebrow">RECURRING THEMES</div>
            <h2>What the story <em>explores.</em></h2>
            <ul className="feature-list">{book.themes.map((theme) => <li key={theme}>{theme}</li>)}</ul>
          </section>
          <section className="detail-panel">
            <div className="eyebrow">THE CREATIVE THREAD</div>
            <h2>Creation connects <em>everything.</em></h2>
            <p>{book.creativeThroughline}</p>
            <ul className="feature-list">{book.motifs.map((motif) => <li key={motif}>{motif}</li>)}</ul>
          </section>
        </div>

        <div className="book-enquiry-panel">
          <div><div className="eyebrow">LITERARY & PUBLISHING ENQUIRIES</div><h2>Interested in the project?</h2><p>For publishing, literary representation or future adaptation conversations, get in touch. The manuscript is still in progress.</p></div>
          <Link className="button button-outline" href="/contact">Contact me <ArrowIcon /></Link>
        </div>
      </div></section>
    </>
  );
}
