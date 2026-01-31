import Link from 'next/link';
import { services } from '@/config/services';

export function ServicesGrid() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">
                        Nos Services
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Une expertise complète pour tous vos travaux de couverture
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service) => (
                        <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="aspect-video bg-slate-200 relative overflow-hidden">
                                {/* Placeholder - remplacer par next/image */}
                                <div className="w-full h-full bg-gradient-to-br from-orange-500 to-orange-700" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-orange-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">
                                    {service.description}
                                </p>
                                <span className="text-orange-600 font-semibold text-sm">
                                    En savoir plus →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
