import { generateMetadata } from '@/lib/seo';
import { services } from '@/config/services';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = generateMetadata({
    title: 'Nos Services de Couverture - Expert Toiture & Zinguerie',
    description: 'Découvrez tous nos services de couverture : rénovation de toiture, zinguerie, charpente, isolation. Expertise artisanale et matériaux de qualité.',
    path: '/services',
});

export default function ServicesPage() {
    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                </div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                        <span className="text-xs font-medium tracking-wide uppercase">Expertise Complète</span>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                        Nos Services de Couverture
                    </h1>
                    <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto font-light leading-relaxed">
                        De la rénovation complète à l'entretien courant, nous maîtrisons tous les aspects de la couverture pour protéger votre patrimoine.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service) => (
                            <Link
                                key={service.slug}
                                href={`/services/${service.slug}`}
                                className="group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 transition-all hover:shadow-2xl hover:-translate-y-1"
                            >
                                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800 relative">
                                    {/* Placeholder - sera remplacé par de vraies images plus tard */}
                                    <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                                        </svg>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent group-hover:from-slate-900/80 transition-all"></div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight group-hover:text-slate-700 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-slate-500 mb-4 leading-relaxed">
                                        {service.description}
                                    </p>
                                    <div className="flex items-center text-sm font-medium text-slate-900 group-hover:text-slate-700">
                                        En savoir plus
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
                        Un projet en tête ?
                    </h2>
                    <p className="text-base text-slate-600 mb-8 leading-relaxed">
                        Nos experts vous conseillent gratuitement et établissent un devis détaillé sous 48h.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
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
