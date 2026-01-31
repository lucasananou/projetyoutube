import { generateMetadata as genMetadata } from '@/lib/seo';
import { services } from '@/config/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';

interface ServicePageProps {
    params: Promise<{
        slug: string;
    }>;
}

// Génération statique des pages pour tous les services
export function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }));
}

// Métadonnées dynamiques par service
export async function generateMetadata({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        return {};
    }

    return genMetadata({
        title: `${service.title} - Expert en Couverture`,
        description: service.description,
        path: `/services/${slug}`,
    });
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = services.find((s) => s.slug === slug);

    if (!service) {
        notFound();
    }

    // Schema.org pour le service
    const serviceSchema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: service.title,
        description: service.description,
        provider: {
            '@type': 'LocalBusiness',
            name: 'Artisan Couvreur',
        },
        areaServed: {
            '@type': 'State',
            name: 'Île-de-France',
        },
    };

    return (
        <>
            <Script
                type="application/ld+json"
                id={`service-${service.slug}`}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
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
                                <Link href="/services" className="hover:text-slate-900 transition-colors">
                                    Services
                                </Link>
                            </li>
                            <li>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                </svg>
                            </li>
                            <li className="text-slate-900 font-medium">{service.title}</li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <section className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                                {service.title}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    </div>
                </section>

                {/* Service Details */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                {/* Long Description */}
                                {service.longDescription && (
                                    <div className="prose prose-slate max-w-none">
                                        {service.longDescription.split('\n\n').map((paragraph, index) => (
                                            <p key={index} className="text-base text-slate-700 leading-relaxed mb-4">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                )}

                                {/* Features */}
                                <div>
                                    <h2 className="text-2xl font-semibold text-slate-900 mb-6">Ce que nous proposons</h2>
                                    <ul className="space-y-3">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start gap-3">
                                                <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                <span className="text-base text-slate-700">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Process */}
                                {service.process && service.process.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-slate-900 mb-8">Notre processus d'intervention</h2>
                                        <div className="space-y-6">
                                            {service.process.map((step, index) => (
                                                <div key={index} className="flex gap-6">
                                                    <div className="flex-shrink-0">
                                                        <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center font-semibold text-lg">
                                                            {index + 1}
                                                        </div>
                                                    </div>
                                                    <div className="flex-1">
                                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                                                        <p className="text-base text-slate-600 leading-relaxed">{step.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Benefits */}
                                {service.benefits && service.benefits.length > 0 && (
                                    <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
                                        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Les avantages</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {service.benefits.map((benefit, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                    </svg>
                                                    <span className="text-sm text-slate-700">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* FAQ */}
                                {service.faq && service.faq.length > 0 && (
                                    <div>
                                        <h2 className="text-2xl font-semibold text-slate-900 mb-6">Questions fréquentes</h2>
                                        <div className="space-y-4">
                                            {service.faq.map((item, index) => (
                                                <details key={index} className="group bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5">
                                                    <summary className="flex justify-between items-center p-5 cursor-pointer text-base font-medium text-slate-900 select-none">
                                                        {item.question}
                                                        <span className="transform transition-transform duration-300 group-open:rotate-180">
                                                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                                            </svg>
                                                        </span>
                                                    </summary>
                                                    <div className="p-5 pt-0 text-base text-slate-600 leading-relaxed border-t border-neutral-100">
                                                        {item.answer}
                                                    </div>
                                                </details>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    {/* CTA Card */}
                                    <div className="bg-slate-900 text-white p-6 rounded-2xl">
                                        <h3 className="text-xl font-semibold mb-4">Besoin d'un devis ?</h3>
                                        <p className="text-slate-300 text-sm mb-6">
                                            Nos experts vous répondent sous 24h avec un devis détaillé et gratuit.
                                        </p>
                                        <a
                                            href="/#contact"
                                            className="block w-full text-center px-6 py-3 bg-white text-slate-900 rounded-lg font-medium hover:bg-neutral-100 transition-all"
                                        >
                                            Demander un devis
                                        </a>
                                    </div>

                                    {/* Other Services */}
                                    <div className="bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-4">Autres services</h3>
                                        <ul className="space-y-3">
                                            {services
                                                .filter((s) => s.slug !== service.slug)
                                                .map((otherService) => (
                                                    <li key={otherService.slug}>
                                                        <Link
                                                            href={`/services/${otherService.slug}`}
                                                            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                                                        >
                                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                                            </svg>
                                                            {otherService.title}
                                                        </Link>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact CTA Section */}
                <section id="contact" className="py-20 bg-neutral-50">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                            Prêt à démarrer votre projet ?
                        </h2>
                        <p className="text-base text-slate-600 mb-8 leading-relaxed">
                            Contactez-nous dès maintenant pour discuter de votre projet {service.title.toLowerCase()}.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="/#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white bg-slate-900 hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl">
                                Formulaire de contact
                            </a>
                            <a href="tel:0123456789" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-slate-900 border border-slate-300 bg-white hover:bg-neutral-50 transition-all">
                                Appeler maintenant
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
