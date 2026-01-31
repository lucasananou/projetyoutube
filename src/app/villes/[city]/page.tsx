import { notFound } from 'next/navigation';
import { cities, getCityBySlug } from '@/config/cities';
import { services } from '@/config/services';
import { generateMetadata as genMetadata, generateLocalBusinessSchema } from '@/lib/seo';
import Link from 'next/link';
import Script from 'next/script';

interface CityPageProps {
    params: Promise<{
        city: string;
    }>;
}

export async function generateStaticParams() {
    return cities.map((city) => ({
        city: city.slug,
    }));
}

export async function generateMetadata({ params }: CityPageProps) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        return {};
    }

    return genMetadata({
        title: `Artisan Couvreur à ${city.name} (${city.postalCode}) - Devis Gratuit`,
        description: `Besoin d'un couvreur à ${city.name} ? Expertise en rénovation de toiture, zinguerie et charpente. Intervention rapide 7j/7, garantie décennale. Devis gratuit sous 24h.`,
        path: `/villes/${citySlug}`,
    });
}

export default async function CityPage({ params }: CityPageProps) {
    const { city: citySlug } = await params;
    const city = getCityBySlug(citySlug);

    if (!city) {
        notFound();
    }

    const jsonLd = generateLocalBusinessSchema({
        city: city.name,
        postalCode: city.postalCode,
    });

    return (
        <>
            <Script
                type="application/ld+json"
                id={`local-business-${city.slug}`}
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                                <span className="text-slate-900 font-medium">Couvreur à {city.name}</span>
                            </li>
                        </ol>
                    </div>
                </nav>

                {/* Hero Section */}
                <header className="relative py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
                    </div>
                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                                <span className="text-xs font-medium tracking-wide uppercase text-slate-100">Artisan Local à {city.name}</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
                                Couvreur à {city.name}
                            </h1>
                            <p className="text-lg md:text-xl text-slate-200 font-light leading-relaxed">
                                Expert en travaux de toiture, zinguerie et charpente à {city.name} ({city.postalCode}) et dans tout le département des {city.postalCode.startsWith('75') ? 'Paris' : city.postalCode.startsWith('78') ? 'Yvelines' : city.postalCode.startsWith('92') ? 'Hauts-de-Seine' : 'alentours'}.
                            </p>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <section className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-12">
                                <div className="prose prose-slate max-w-none text-slate-800">
                                    <h2 className="text-3xl font-semibold text-slate-900 mb-6 tracking-tight">Votre expert de proximité à {city.name}</h2>
                                    <p className="text-base leading-relaxed mb-6">
                                        Vous recherchez un artisan couvreur de confiance à **{city.name}** ? Notre entreprise familiale met son savoir-faire au service de votre toiture depuis plus de 15 ans. Que vous habitiez près du centre-ville ou dans les quartiers périphériques de {city.name}, nous intervenons rapidement pour tous vos projets de couverture.
                                    </p>
                                    <p className="text-base leading-relaxed mb-6">
                                        La toiture est l'élément le plus important de votre habitation : elle vous protège des intempéries et garantit la longévité de votre patrimoine. À {city.name}, les conditions climatiques peuvent mettre à rude épreuve vos matériaux (tuiles, ardoises, zinc). Un entretien régulier par un professionnel local est indispensable.
                                    </p>

                                    <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-6 tracking-tight">Nos prestations de couverture à {city.name}</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                        {services.map((service) => (
                                            <Link
                                                key={service.slug}
                                                href={`/services/${service.slug}`}
                                                className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200 hover:border-slate-300 transition-all group"
                                            >
                                                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-slate-700">{service.title}</h4>
                                                <p className="text-sm text-slate-600 line-clamp-2">{service.description}</p>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                <div className="bg-slate-900 text-white p-8 md:p-12 rounded-3xl relative overflow-hidden">
                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-semibold mb-6 tracking-tight">Dépannage d'urgence 7j/7</h2>
                                        <p className="text-slate-300 text-lg mb-8 max-w-xl font-light">
                                            Une fuite de toiture après un orage à {city.name} ? Nous intervenons en moins de 24h pour mettre votre habitation hors d'eau et sécuriser votre foyer.
                                        </p>
                                        <a href={`tel:0123456789`} className="inline-flex items-center justify-center px-8 py-4 bg-white text-slate-900 rounded-xl font-medium hover:bg-neutral-100 transition-all shadow-lg">
                                            Appeler l'Arstisan
                                        </a>
                                    </div>
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                                </div>

                                <div className="prose prose-slate max-w-none text-slate-800">
                                    <h3 className="text-2xl font-semibold text-slate-900 mt-10 mb-6 tracking-tight">Pourquoi nous choisir pour votre toit à {city.name} ?</h3>
                                    <ul className="space-y-4">
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                                            <div>
                                                <strong className="text-slate-900">Réactivité locale :</strong> Étant basés à proximité, nous connaissons parfaitement les spécificités architecturales de {city.name}.
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                                            <div>
                                                <strong className="text-slate-900">Garantie Décennale :</strong> Tous nos chantiers à {city.name} sont couverts par une assurance responsabilité civile et décennale professionnelle.
                                            </div>
                                        </li>
                                        <li className="flex gap-3">
                                            <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                                            <div>
                                                <strong className="text-slate-900">Matériaux de qualité :</strong> Nous sélectionnons uniquement des matériaux certifiés (NF, CE) pour garantir l'étanchéité de votre toit à {city.name}.
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    {/* Contact Form Link */}
                                    <div className="bg-neutral-50 p-8 rounded-3xl border border-neutral-200">
                                        <h3 className="text-xl font-semibold text-slate-900 mb-4 tracking-tight">Devis Gratuit à {city.name}</h3>
                                        <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                                            Décrivez votre projet et recevez une estimation gratuite sous 24h. Déplacement gratuit sur toute la commune de {city.name}.
                                        </p>
                                        <Link href="/#contact" className="block w-full py-4 bg-slate-900 text-white rounded-xl font-medium text-center hover:bg-slate-800 transition-all border border-slate-900">
                                            Demander mon devis
                                        </Link>
                                    </div>

                                    {/* Villes à proximité */}
                                    <div className="p-8 rounded-3xl border border-neutral-200">
                                        <h3 className="text-lg font-semibold text-slate-900 mb-4 tracking-tight">Zones d'intervention</h3>
                                        <div className="flex flex-wrap gap-2">
                                            {cities.filter(c => c.slug !== city.slug).map(c => (
                                                <Link
                                                    key={c.slug}
                                                    href={`/villes/${c.slug}`}
                                                    className="px-3 py-1.5 rounded-lg bg-neutral-100 text-xs font-medium text-slate-600 hover:bg-slate-900 hover:text-white transition-all border border-neutral-100"
                                                >
                                                    {c.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
