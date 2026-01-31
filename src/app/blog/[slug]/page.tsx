import { notFound } from 'next/navigation';
import { blogPosts, getBlogPostBySlug } from '@/config/blog';
import { services } from '@/config/services';
import Image from 'next/image';
import { generateMetadata as genMeta } from '@/lib/seo';
import Link from 'next/link';
import Script from 'next/script';

interface BlogPostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        return {};
    }

    return genMeta({
        title: post.title,
        description: post.excerpt,
        path: `/blog/${slug}`,
    });
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = await params;
    const post = getBlogPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const articleJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        author: {
            '@type': 'Person',
            name: post.author.name,
        },
    };

    return (
        <>
            <Script
                type="application/ld+json"
                id={`blog-post-${post.slug}`}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />

            <div className="min-h-screen pt-20">
                {/* Breadcrumbs */}
                <nav className="bg-neutral-50 border-b border-neutral-200 py-4">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <ol className="flex items-center space-x-2 text-sm text-slate-600">
                            <li>
                                <Link href="/" className="hover:text-slate-900 transition-colors">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-slate-900 transition-colors">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li className="text-slate-900 font-medium line-clamp-1">{post.title}</li>
                        </ol>
                    </div>
                </nav>

                {/* Article Header */}
                <header className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    </div>
                    <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="flex items-center justify-center gap-3 text-sm mb-6">
                            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-medium uppercase tracking-wider text-xs">
                                {post.category}
                            </span>
                            <span className="text-slate-400">•</span>
                            <time dateTime={post.publishedAt} className="text-slate-300">
                                {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </time>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-8 leading-tight">
                            {post.title}
                        </h1>
                        <p className="text-xl text-slate-200 font-light leading-relaxed max-w-2xl mx-auto">
                            {post.excerpt}
                        </p>
                    </div>
                </header>

                {/* Article Content */}
                <div className="py-20 bg-white">
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Featured Image - Optimized for LCP */}
                        <div className="aspect-[21/9] rounded-3xl overflow-hidden bg-slate-100 mb-16 border border-slate-200 relative text-[0px]">
                            {post.image ? (
                                <Image
                                    src={post.image.startsWith('http') ? post.image : `https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000&auto=format&fit=crop`}
                                    alt={post.title}
                                    fill
                                    priority
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 800px"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-slate-400">
                                    <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </div>
                            )}
                        </div>

                        <div className="prose prose-slate prose-lg max-w-none text-slate-900 prose-headings:text-slate-900 prose-headings:font-semibold prose-headings:tracking-tight prose-p:text-slate-800 prose-p:leading-relaxed prose-a:text-slate-900 prose-a:font-medium hover:prose-a:text-slate-700 prose-img:rounded-3xl prose-blockquote:border-slate-300 prose-blockquote:bg-slate-50 prose-blockquote:py-1 prose-blockquote:px-6 prose-blockquote:rounded-r-xl">
                            <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-slate-900 font-medium underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors">$1</a>') }} />

                            <p className="mt-8">
                                L'entretien régulier de votre toiture est crucial pour éviter les infiltrations d'eau et prolonger la durée de vie de votre habitat. Que ce soit pour un nettoyage, une réparation ou une [rénovation complète](/services/renovation-toiture), faire appel à des professionnels qualifiés vous garantit un travail réalisé dans les règles de l'art.
                            </p>

                            <h2>Pourquoi le diagnostic est-il essentiel ?</h2>
                            <p>
                                Avant toute intervention, un diagnostic précis permet d'identifier les points de fragilité de votre couverture. Les tuiles poreuses, les solins défectueux ou les gouttières obstruées sont autant de signes qui nécessitent une attention immédiate pour prévenir des dégâts plus importants dans la structure de votre maison.
                            </p>

                            <blockquote>
                                "Une toiture bien entretenue est la meilleure assurance pour la pérennité de votre patrimoine immobilier."
                            </blockquote>

                            <h2>Nos recommandations d'experts</h2>
                            <ul>
                                <li>Nettoyez vos gouttières au moins deux fois par an (printemps et automne).</li>
                                <li>Faites vérifier l'état de votre faîtage après chaque épisode météo violent.</li>
                                <li>N'attendez pas de voir une tache d'humidité au plafond pour inspecter vos combles.</li>
                                <li>Privilégiez des matériaux certifiés conformes aux normes DTU en vigueur.</li>
                            </ul>

                            {/* Related Services in content */}
                            <div className="mt-16 not-prose p-8 rounded-3xl bg-neutral-50 border border-neutral-200">
                                <h3 className="text-xl font-semibold text-slate-900 mb-6 tracking-tight">Nos services liés à cet article</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.filter(s => s.slug === 'renovation-toiture' || s.slug === 'isolation-toiture').map(service => (
                                        <Link key={service.slug} href={`/services/${service.slug}`} className="group p-4 bg-white rounded-xl border border-neutral-200 hover:border-slate-900 transition-all">
                                            <h4 className="font-medium text-slate-900 group-hover:text-slate-700">{service.title}</h4>
                                            <p className="text-xs text-slate-500 mt-1">Découvrir le service →</p>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Author Section */}
                        <div className="mt-20 p-8 rounded-3xl bg-neutral-50 border border-neutral-200 flex items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-semibold">
                                    {post.author.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Écrit par</p>
                                    <p className="font-semibold text-slate-900">{post.author.name}</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Link href="/blog" className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                                    Voir tous les articles
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Section */}
                <section className="py-20 bg-neutral-900 text-white">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-white">
                            Vous avez un projet de toiture ?
                        </h2>
                        <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
                            Nos experts sont à votre disposition pour un diagnostic gratuit et un devis personnalisé sous 48 heures.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                href="/#contact"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-slate-900 bg-white hover:bg-neutral-100 transition-all shadow-lg hover:shadow-xl"
                            >
                                Demander un devis gratuit
                            </Link>
                            <a
                                href="tel:0123456789"
                                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white border border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all"
                            >
                                Nous appeler
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
