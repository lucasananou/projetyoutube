import { Metadata } from 'next';

/**
 * Configuration SEO centralisée
 */
export const siteConfig = {
    name: 'Artisan Couvreur',
    description: 'Expert en couverture, zinguerie et charpente. Devis gratuit et intervention rapide.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://exemple-couvreur.fr',
    ogImage: '/og-image.jpg',
    links: {
        phone: '+33612345678',
        email: 'contact@exemple-couvreur.fr',
    },
};

/**
 * Génère les métadonnées pour une page donnée
 */
export function generateMetadata({
    title,
    description,
    path = '',
    image,
}: {
    title: string;
    description: string;
    path?: string;
    image?: string;
}): Metadata {
    const url = `${siteConfig.url}${path}`;
    const ogImage = image || siteConfig.ogImage;

    return {
        title: {
            default: title,
            template: `%s | ${siteConfig.name}`,
        },
        description,
        keywords: [
            'couvreur',
            'toiture',
            'zinguerie',
            'charpente',
            'rénovation',
            'artisan',
            'devis gratuit',
        ],
        authors: [{ name: siteConfig.name }],
        creator: siteConfig.name,
        openGraph: {
            type: 'website',
            locale: 'fr_FR',
            url,
            title,
            description,
            siteName: siteConfig.name,
            images: [
                {
                    url: ogImage,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [ogImage],
        },
        alternates: {
            canonical: url,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

/**
 * Génère les données structurées JSON-LD pour LocalBusiness
 */
export function generateLocalBusinessSchema({
    city = 'Paris',
    postalCode = '75000',
}: {
    city?: string;
    postalCode?: string;
} = {}) {
    return {
        '@context': 'https://schema.org',
        '@type': 'RoofingContractor',
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        telephone: siteConfig.links.phone,
        email: siteConfig.links.email,
        address: {
            '@type': 'PostalAddress',
            addressLocality: city,
            postalCode,
            addressCountry: 'FR',
        },
        geo: {
            '@type': 'GeoCoordinates',
            // Coordonnées à personnaliser
            latitude: 48.8566,
            longitude: 2.3522,
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 48.8566,
                longitude: 2.3522,
            },
            geoRadius: '50000', // 50km
        },
        priceRange: '€€',
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '08:00',
                closes: '18:00',
            },
        ],
    };
}
