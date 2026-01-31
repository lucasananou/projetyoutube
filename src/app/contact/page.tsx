import { ContactForm } from '@/components/forms/ContactForm';
import { generateMetadata } from '@/lib/seo';
import { siteConfig } from '@/lib/seo';

export const metadata = generateMetadata({
    title: 'Contact - Demander un Devis Gratuit',
    description: 'Contactez-nous pour un devis gratuit. Réponse rapide garantie.',
    path: '/contact',
});

export default function ContactPage() {
    return (
        <div className="py-16 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-slate-800 mb-4">
                            Demander un Devis Gratuit
                        </h1>
                        <p className="text-lg text-slate-600">
                            Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement.
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-8">
                        <ContactForm />
                    </div>

                    <div className="mt-8 text-center">
                        <div className="space-y-2 text-slate-600">
                            <p className="font-semibold">Ou contactez-nous directement :</p>
                            <p>
                                <a href={`tel:${siteConfig.links.phone}`} className="text-orange-600 hover:underline">
                                    {siteConfig.links.phone}
                                </a>
                            </p>
                            <p>
                                <a href={`mailto:${siteConfig.links.email}`} className="text-orange-600 hover:underline">
                                    {siteConfig.links.email}
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
