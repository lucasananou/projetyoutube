import { City } from '@/types';

/**
 * Configuration des villes pour le SEO local
 * Architecture scalable pour couvrir plusieurs zones géographiques
 */
export const cities: City[] = [
    {
        slug: 'paris',
        name: 'Paris',
        postalCode: '75000',
        latitude: 48.8566,
        longitude: 2.3522,
    },
    {
        slug: 'versailles',
        name: 'Versailles',
        postalCode: '78000',
        latitude: 48.8014,
        longitude: 2.1301,
    },
    {
        slug: 'saint-germain-en-laye',
        name: 'Saint-Germain-en-Laye',
        postalCode: '78100',
        latitude: 48.8984,
        longitude: 2.0945,
    },
    // Ajouter d'autres villes selon la zone d'intervention
];

export function getCityBySlug(slug: string): City | undefined {
    return cities.find((c) => c.slug === slug);
}
