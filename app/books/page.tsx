import type { Metadata } from 'next';
import Link from 'next/link';
import { PageIntro } from '@/components/page-intro';
import { ProjectCard } from '@/components/project-card';
import { ArrowIcon } from '@/components/icons';
import { books } from '@/data/books';

export const metadata: Metadata = {
  title: 'Books & Original Stories',
  description: 'Original fiction in development by JaytheWizzy, including The Second Life of Julian Vale, a planned four-book saga. Book One, Play the Game, is in progress.',
};

export default function BooksPage() {
  return (
    <>
      <PageIntro
        eyebrow="BOOKS & ORIGINAL STORIES"
        title={<>Original worlds, built<br /><em>one chapter at a time.</em></>}
        description="Long-form fiction, character-led stories and original worlds developed with patience. The current focus is Book One of The Second Life of Julian Vale."
      />
      <section className="section"><div className="shell">
        <div className="section-heading">
          <div><div className="eyebrow">CURRENT WRITING PROJECT</div><h2>The story in <em>progress.</em></h2></div>
          <p>Publication and reading access will be announced when the manuscript is ready. The series outline is established; the writing is ongoing.</p>
        </div>
        <div className="project-grid">{books.map((book) => <ProjectCard key={book.slug} href={`/books/${book.slug}`} name={book.title} category={book.format} status={book.status} statusTone="development" description={`${book.subtitle}. ${book.summary}`} />)}</div>
        <div className="hero-actions"><Link className="button button-outline" href="/media">Explore all media <ArrowIcon /></Link></div>
      </div></section>
    </>
  );
}
