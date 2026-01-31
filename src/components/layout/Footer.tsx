import Link from 'next/link';
import { siteConfig } from '@/lib/seo';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-xl tracking-tighter font-semibold text-white mb-6 block">COUVREUR.</span>
                        <p className="text-sm text-slate-400 leading-relaxed">
                            Expert en couverture, zinguerie et charpente. Qualité, durabilité et confiance.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services/renovation-toiture" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Rénovation Toiture
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/zinguerie" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Zinguerie
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/charpente" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Charpente
                                </Link>
                            </li>
                            <li>
                                <Link href="/services/isolation-toiture" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Isolation
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Zones d'intervention</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/villes/paris" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Paris
                                </Link>
                            </li>
                            <li>
                                <Link href="/villes/versailles" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Versailles
                                </Link>
                            </li>
                            <li>
                                <Link href="/villes/saint-germain-en-laye" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Saint-Germain-en-Laye
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-white mb-4">Contact</h4>
                        <ul className="space-y-3">
                            <li className="text-slate-400">
                                <a href={`tel:${siteConfig.links.phone}`} className="text-sm hover:text-white transition-colors">
                                    {siteConfig.links.phone}
                                </a>
                            </li>
                            <li className="text-slate-400">
                                <a href={`mailto:${siteConfig.links.email}`} className="text-sm hover:text-white transition-colors">
                                    {siteConfig.links.email}
                                </a>
                            </li>
                            <li>
                                <Link href="/blog" className="text-sm text-slate-400 hover:text-white transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-slate-500">&copy; {currentYear} {siteConfig.name}. Tous droits réservés.</p>
                    <div className="flex items-center gap-4 text-xs text-slate-500">
                        <Link href="#" className="hover:text-white transition-colors">Mentions légales</Link>
                        <Link href="#" className="hover:text-white transition-colors">Confidentialité</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
