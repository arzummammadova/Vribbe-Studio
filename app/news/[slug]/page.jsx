import { notFound } from 'next/navigation';
import NewsArticle from '../../../components/NewsArticle';

const slugs = ['brand-design', 'product-roadmap'];
export function generateStaticParams() { return slugs.map(slug => ({ slug })); }
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return { title: `${slug === 'brand-design' ? 'Brand Design' : 'Product Roadmap'} | VRIBBE Journal` };
}
export default async function NewsPage({ params }) {
  const { slug } = await params;
  if (!slugs.includes(slug)) notFound();
  return <NewsArticle slug={slug} />;
}
