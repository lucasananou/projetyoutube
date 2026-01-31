import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export function Hero() {
    return (
        <section className="relative bg-gradient-to-b from-slate-800 to-slate-900 text-white">
            <div className="container mx-auto px-4 py-24 md:py-32">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        Expert en Couverture et Rénovation de Toiture
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 mb-8">
                        Devis gratuit • Intervention rapide • Garantie décennale
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link href="/contact">
                            <Button variant="primary" size="lg">
                                Demander un devis gratuit
                            </Button>
                        </Link>
                        <Link href="/services">
                            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-800">
                                Nos services
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Background decorative element */}
            <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path fill="currentColor" d="M40,120 L160,120 L100,40 Z" />
                </svg>
            </div>
        </section>
    );
}
