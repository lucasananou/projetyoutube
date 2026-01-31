import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

export function Header() {
    return (
        <header className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-neutral-200/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <Link href="/" className="text-xl tracking-tighter font-semibold text-slate-900">
                            COUVREUR.
                        </Link>
                    </div>

                    <nav className="hidden md:flex space-x-8">
                        <Link href="/#services" className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            Services
                        </Link>
                        <Link href="/#about" className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            L'Entreprise
                        </Link>
                        <Link href="/#avis" className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            Avis
                        </Link>
                        <Link href="/#faq" className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            FAQ
                        </Link>
                        <Link href="/blog" className="text-base font-medium text-slate-600 hover:text-slate-900 transition-colors">
                            Blog
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href={`tel:${siteConfig.links.phone}`}
                            className="hidden lg:flex items-center gap-2 text-base font-medium text-slate-600 hover:text-slate-900 transition-colors"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            {siteConfig.links.phone}
                        </a>
                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-sm"
                        >
                            Devis Gratuit
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
