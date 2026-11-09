import Link from 'next/link';

type Props = {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  breadcrumb?: string;
};

export function PageIntro({ eyebrow, title, description, breadcrumb }: Props) {
  return (
    <section className="page-intro">
      <div className="shell">
        <div className="breadcrumb"><Link href="/">Home</Link><span>/</span><span>{breadcrumb ?? eyebrow}</span></div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="intro-lede">{description}</p>
      </div>
    </section>
  );
}
