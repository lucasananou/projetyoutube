import Link from 'next/link';
import { blogPosts } from '@/config/blog';
import { generateMetadata } from '@/lib/seo';

export const metadata = generateMetadata({
    title: 'Blog - Conseils et Actualités Couverture',
    description: 'Découvrez nos conseils d\'experts pour l\'entretien et la rénovation de votre toiture. Actualités et guides pratiques.',
    path: '/blog',
});

export default function BlogPage() {
    return (
        <div className="min-h-screen pt-20">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <span className="text-xs font-medium tracking-wide uppercase">Guides & Actualités</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        Blog & Actualités
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                        Conseils d'experts, guides pratiques et actualités du secteur de la couverture
                    </p>
                </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link
                                key={post.slug}
                                href={`/blog/${post.slug}`}
                                className="group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 transition-all hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 relative">
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/80 transition-all"></div>
                                </div>

                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                                        <span className="font-semibold text-slate-900">{post.category}</span>
                                        <span>•</span>
                                        <time dateTime={post.publishedAt}>
                                            {new Date(post.publishedAt).toLocaleDateString('fr-FR', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            })}
                                        </time>
                                    </div>

                                    <h2 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-slate-700 transition-colors">
                                        {post.title}
                                    </h2>

                                    <p className="text-sm text-slate-500 mb-4 leading-relaxed line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    <div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700">
                                        Lire l'article
                                        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-neutral-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                        Une question sur votre toiture ?
                    </h2>
                    <p className="text-base text-slate-600 mb-8 leading-relaxed">
                        Nos experts sont à votre disposition pour vous conseiller gratuitement.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                            Demander un devis gratuit
                        </a>
                        <a href="tel:0123456789" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-slate-900 border border-slate-300 bg-white hover:bg-neutral-50 transition-all">
                            Nous appeler
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
