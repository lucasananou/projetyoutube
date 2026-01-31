import { BlogPost } from '@/types';

/**
 * Configuration du blog - Architecture SEO
 * Les articles peuvent être stockés dans un CMS (Contentful, Sanity, etc.)
 * ou générés depuis des fichiers markdown
 */
export const blogPosts: BlogPost[] = [
    {
        slug: 'quand-renover-toiture',
        title: 'Quand faut-il rénover sa toiture ?',
        excerpt: 'Découvrez les signes qui indiquent qu\'il est temps de rénover votre toiture.',
        content: '', // Contenu complet à ajouter
        image: '/blog/renovation-toiture.jpg',
        publishedAt: '2024-01-15',
        category: 'Conseils',
        author: {
            name: 'Expert Couverture',
        },
    },
    {
        slug: 'choisir-materiaux-toiture',
        title: 'Comment choisir les matériaux pour sa toiture ?',
        excerpt: 'Tuiles, ardoises, zinc... Guide complet des matériaux de couverture.',
        content: '',
        image: '/blog/materiaux-toiture.jpg',
        publishedAt: '2024-01-10',
        category: 'Guides',
        author: {
            name: 'Expert Couverture',
        },
    },
    {
        slug: 'entretien-toiture-automne',
        title: 'Entretenir sa toiture avant l\'hiver',
        excerpt: 'Les gestes essentiels pour préparer votre toiture aux intempéries hivernales.',
        content: '',
        image: '/blog/entretien-automne.jpg',
        publishedAt: '2024-01-05',
        category: 'Entretien',
        author: {
            name: 'Expert Couverture',
        },
    },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}
