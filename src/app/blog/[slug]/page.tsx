import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import { notFound } from 'next/navigation';
import { blogPosts } from '../../../data/portfolioData';

type BlogPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) return { title: 'Article not found | Yasir Ali' };

  return {
    title: `${post.title} | Yasir Ali`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) notFound();

  return (
    <main className="min-h-screen bg-[#0e0e13] px-4 py-8 text-white sm:px-6 sm:py-12">
      <article className="mx-auto w-full max-w-3xl">
        <Link
          href="/#blog"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-[#C0DCBC]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to portfolio
        </Link>

        <header className="border-b border-[#2a2a38] pb-8 pt-12 sm:pb-10 sm:pt-16">
          <span className="inline-flex rounded-md border border-[#2a2a38] bg-[#15151c] px-3 py-1 text-xs font-mono uppercase tracking-wider text-[#C0DCBC]">
            {post.tag}
          </span>
          <h1 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
            {post.description}
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500">
            <span>{post.date}</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
            <span>By Yasir Ali</span>
          </div>
        </header>

        <div className="py-8 sm:py-10">
          {post.content.map((section) => (
            <section key={section.heading} className="mb-9 last:mb-0">
              <h2 className="text-xl font-bold text-white sm:text-2xl">{section.heading}</h2>
              <div className="mt-4 space-y-4 text-[15px] leading-7 text-zinc-300 sm:text-base sm:leading-8">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.points && (
                <ul className="mt-4 space-y-2 pl-5 text-[15px] leading-7 text-zinc-300 marker:text-[#C0DCBC] sm:text-base sm:leading-8">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        <footer className="flex flex-wrap items-center justify-between gap-4 border-t border-[#2a2a38] py-6">
          <span className="text-sm text-zinc-500">More ideas from the blog</span>
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#C0DCBC] transition-colors hover:text-white"
          >
            Browse all articles
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </footer>
      </article>
    </main>
  );
}