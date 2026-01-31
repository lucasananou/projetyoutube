import { generateMetadata, generateLocalBusinessSchema } from '@/lib/seo';
import Script from 'next/script';
import Image from 'next/image';

export const metadata = generateMetadata({
  title: 'Artisan Couvreur - Expert en Toiture et Couverture',
  description: 'Expert en couverture, zinguerie et charpente. Devis gratuit et intervention rapide partout en Île-de-France.',
  path: '/',
});

export default function HomePage() {
  const jsonLd = generateLocalBusinessSchema();

  return (
    <>
      <Script
        type="application/ld+json"
        id="local-business"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] md:min-h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 text-[0px]">
          <Image
            src="https://images.unsplash.com/photo-1565008576549-57569a49371d?q=80&w=2000&auto=format&fit=crop"
            alt="Toiture professionnelle artisan couvreur"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/60 to-slate-900/80"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white py-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-xs font-medium tracking-wide uppercase">Disponible 7j/7 en Île-de-France</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6 leading-tight">
            L'excellence pour<br />votre toiture.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            De la rénovation complète au dépannage d'urgence. Expertise artisanale et matériaux de qualité pour une toiture qui dure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-slate-900 bg-white hover:bg-neutral-100 transition-all border border-slate-200">
              Commencer mon projet
            </a>
            <a href="#services" className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-xl text-white border border-white/30 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all">
              Découvrir nos services
            </a>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20 bg-white border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl hover:bg-neutral-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Garantie Décennale</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Tous nos travaux de couverture sont couverts pour vous assurer une tranquillité d'esprit totale.</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl hover:bg-neutral-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Intervention Rapide</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Une fuite ? Des tuiles endommagées ? Nos équipes interviennent rapidement pour les urgences.</p>
              </div>
            </div>

            <div className="flex flex-col items-start gap-4 p-6 rounded-2xl hover:bg-neutral-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 tracking-tight">Finitions Premium</h3>
                <p className="text-sm text-slate-500 leading-relaxed">Matériaux haute qualité et attention aux détails pour un rendu esthétique parfait.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Section */}
      <section id="about" className="py-24 bg-neutral-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-slate-200 to-neutral-100 rounded-[2rem] transform -rotate-2 opacity-50"></div>
              <div className="relative rounded-2xl shadow-xl w-full h-[500px] bg-gradient-to-br from-slate-600 to-slate-800"></div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
                L'artisanat moderne au service de votre habitat.
              </h2>
              <p className="text-base text-slate-600 mb-6 leading-relaxed">
                Nous ne nous contentons pas de poser des tuiles. Nous protégeons votre patrimoine. Forte de valeurs de rigueur et de qualité, notre entreprise accompagne les particuliers et professionnels dans tous leurs projets de toiture.
              </p>
              <p className="text-base text-slate-600 mb-8 leading-relaxed">
                Notre équipe de couvreurs qualifiés maîtrise toutes les techniques traditionnelles et modernes : ardoise, tuile, zinc, charpente. Nous croyons en une transparence totale : devis clairs, délais respectés et chantier propre.
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <span className="block text-3xl font-semibold text-slate-900 tracking-tight">15+</span>
                  <span className="text-sm text-slate-500">Années d'expérience</span>
                </div>
                <div>
                  <span className="block text-3xl font-semibold text-slate-900 tracking-tight">500+</span>
                  <span className="text-sm text-slate-500">Toitures réalisées</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-sm font-medium text-slate-500 uppercase tracking-wider">Nos Expertises</span>
            <h2 className="mt-2 text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Solutions complètes pour votre toiture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 transition-all hover:border-slate-300">
              <div className="aspect-w-16 aspect-h-10 h-64 overflow-hidden bg-gradient-to-br from-orange-600 to-orange-800"></div>
              <div className="p-8">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 border border-neutral-100">
                  <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Rénovation de Toiture</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Rénovation complète : tuiles, ardoises, isolation et étanchéité. Redonnez vie à votre toit.</p>
                <a href="/services/renovation-toiture" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700">
                  Demander un devis
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 transition-all hover:shadow-lg">
              <div className="aspect-w-16 aspect-h-10 h-64 overflow-hidden bg-gradient-to-br from-slate-600 to-slate-800"></div>
              <div className="p-8">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 border border-neutral-100">
                  <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Zinguerie</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Installation de gouttières, chenaux et descentes. Évacuation optimale des eaux pluviales.</p>
                <a href="/services/zinguerie" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700">
                  En savoir plus
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-200 transition-all hover:border-slate-300">
              <div className="aspect-w-16 aspect-h-10 h-64 overflow-hidden bg-gradient-to-br from-amber-700 to-amber-900"></div>
              <div className="p-8">
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm mb-4 border border-neutral-100">
                  <svg className="w-6 h-6 text-slate-900" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Charpente</h3>
                <p className="text-sm text-slate-500 mb-6 leading-relaxed">Pose, rénovation et traitement de charpentes. Solidité et durabilité garanties.</p>
                <a href="/services/charpente" className="inline-flex items-center text-sm font-medium text-slate-900 hover:text-slate-700">
                  Voir les solutions
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Avis */}
      <section id="avis" className="py-24 bg-neutral-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-2">Ils nous font confiance</h2>
              <p className="text-slate-400">Découvrez les retours de nos clients satisfaits.</p>
            </div>
            <div className="flex items-center gap-2 mt-4 md:mt-0">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-sm font-medium">4.9/5 sur Google</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold">MR</div>
                <div>
                  <p className="text-sm font-medium text-white">Marc R.</p>
                  <p className="text-xs text-slate-400">Rénovation complète</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">"Excellente prestation pour la réfection de notre toiture. Travail soigné, équipe professionnelle et délais respectés. Je recommande vivement."</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold">CD</div>
                <div>
                  <p className="text-sm font-medium text-white">Claire D.</p>
                  <p className="text-xs text-slate-400">Dépannage urgence</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">"Intervention rapide suite à une grosse fuite après l'orage. Efficace, propre et tarif honnête. Merci encore !"</p>
            </div>

            <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-xs font-semibold">JL</div>
                <div>
                  <p className="text-sm font-medium text-white">Jean-Louis P.</p>
                  <p className="text-xs text-slate-400">Charpente et isolation</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">"Très bon conseil pour notre projet d'isolation. Le travail a été fait dans les règles de l'art. Une équipe de confiance."</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white border-b border-neutral-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-10 text-center">Questions Fréquentes</h2>

          <div className="space-y-4">
            <details className="group bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5">
              <summary className="flex justify-between items-center p-5 cursor-pointer text-sm font-medium text-slate-900 select-none">
                Combien de temps dure une rénovation de toiture ?
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-neutral-100">
                La durée dépend de la surface et de la complexité. Pour une maison individuelle standard, comptez entre 5 et 10 jours ouvrés. Nous vous fournissons un planning détaillé avant le début des travaux.
              </div>
            </details>

            <details className="group bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5">
              <summary className="flex justify-between items-center p-5 cursor-pointer text-sm font-medium text-slate-900 select-none">
                Vos travaux sont-ils couverts par une garantie ?
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-neutral-100">
                Absolument. Nous disposons d'une garantie décennale pour tous les travaux de couverture et de charpente, ainsi que d'une assurance responsabilité civile professionnelle.
              </div>
            </details>

            <details className="group bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5">
              <summary className="flex justify-between items-center p-5 cursor-pointer text-sm font-medium text-slate-900 select-none">
                Intervenez-vous en urgence ?
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-neutral-100">
                Oui, nous avons une équipe dédiée aux dépannages urgents (fuites, tuiles arrachées, sécurisation après tempête) disponible 7j/7.
              </div>
            </details>

            <details className="group bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5">
              <summary className="flex justify-between items-center p-5 cursor-pointer text-sm font-medium text-slate-900 select-none">
                Quels matériaux proposez-vous ?
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-neutral-100">
                Nous travaillons avec tous types de matériaux : tuiles (terre cuite, béton), ardoises naturelles, zinc, bac acier. Nous vous conseillons selon votre budget et vos contraintes architecturales.
              </div>
            </details>

            <details className="group bg-neutral-50 rounded-xl overflow-hidden transition-all duration-300 open:bg-white open:shadow-lg open:ring-1 open:ring-black/5">
              <summary className="flex justify-between items-center p-5 cursor-pointer text-sm font-medium text-slate-900 select-none">
                Le devis est-il gratuit ?
                <span className="transform transition-transform duration-300 group-open:rotate-180">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="p-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-neutral-100">
                Tout à fait. Nous nous déplaçons gratuitement pour évaluer vos travaux et vous fournissons un devis détaillé sous 48h.
              </div>
            </details>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-slate-200 p-8 md:p-12">
            <h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4 text-center">Demander un devis gratuit</h2>
            <p className="text-slate-500 mb-8 text-center">Remplissez le formulaire ci-dessous. Nous vous répondons sous 24h.</p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstname" className="text-sm font-medium text-slate-700">Prénom</label>
                  <input
                    type="text"
                    id="firstname"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder-slate-400"
                    placeholder="Jean"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastname" className="text-sm font-medium text-slate-700">Nom</label>
                  <input
                    type="text"
                    id="lastname"
                    className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder-slate-400"
                    placeholder="Dupont"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder-slate-400"
                  placeholder="jean.dupont@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-slate-700">Type de projet</label>
                <select
                  id="service"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all appearance-none bg-white"
                >
                  <option>Rénovation de Toiture</option>
                  <option>Zinguerie</option>
                  <option>Charpente</option>
                  <option>Isolation</option>
                  <option>Dépannage Urgent</option>
                  <option>Autre demande</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-300 focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all placeholder-slate-400"
                  placeholder="Décrivez votre projet..."
                ></textarea>
              </div>

              <button
                type="button"
                className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-md"
              >
                Envoyer la demande
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
