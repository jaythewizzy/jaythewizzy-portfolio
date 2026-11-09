import Link from 'next/link';
import { ArrowIcon } from './icons';

type Props = {
  href: string;
  name: string;
  category: string;
  status: string;
  statusTone?: 'live' | 'testing' | 'development' | 'brand' | 'research';
  description: string;
  stack?: string[];
};

export function ProjectCard({ href, name, category, status, statusTone = 'development', description, stack = [] }: Props) {
  return (
    <Link className="project-card project-card-link" href={href}>
      <div className="project-meta"><span className={`status status-${statusTone}`}>{status}</span><span>{category}</span></div>
      <h3>{name}</h3>
      <p>{description}</p>
      {stack.length > 0 && <div className="tags project-tags">{stack.slice(0, 5).map((item) => <span className="tag" key={item}>{item}</span>)}</div>}
      <span className="text-link">View project <ArrowIcon /></span>
    </Link>
  );
}
