/**
 * Types globaux de l'application
 */

export interface Service {
    slug: string;
    title: string;
    description: string;
    image: string;
    features: string[];
    longDescription?: string;
    process?: { title: string; description: string }[];
    benefits?: string[];
    faq?: { question: string; answer: string }[];
}

export interface City {
    slug: string;
    name: string;
    postalCode: string;
    latitude?: number;
    longitude?: number;
}

export interface BlogPost {
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    image: string;
    publishedAt: string;
    category: string;
    author: {
        name: string;
        avatar?: string;
    };
}

export interface Testimonial {
    id: string;
    name: string;
    city: string;
    rating: number;
    comment: string;
    date: string;
}

export interface ContactFormData {
    name: string;
    email: string;
    phone: string;
    message: string;
    service?: string;
    city?: string;
}
