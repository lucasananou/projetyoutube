import { NextRequest, NextResponse } from 'next/server';
import { ContactFormData } from '@/types';

export async function POST(request: NextRequest) {
    try {
        const body: ContactFormData = await request.json();

        // Validation basique
        if (!body.name || !body.email || !body.phone || !body.message) {
            return NextResponse.json(
                { error: 'Tous les champs requis doivent être remplis' },
                { status: 400 }
            );
        }

        // Validation email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(body.email)) {
            return NextResponse.json(
                { error: 'Email invalide' },
                { status: 400 }
            );
        }

        // TODO: Implémenter l'envoi d'email
        // Options:
        // - Resend (https://resend.com)
        // - Sendgrid
        // - Mailgun
        // - Ou webhook vers un service tiers

        console.log('Nouveau contact:', body);

        // Pour l'instant, on retourne un succès
        return NextResponse.json({ success: true }, { status: 200 });
    } catch (error) {
        console.error('Erreur API contact:', error);
        return NextResponse.json(
            { error: 'Erreur serveur' },
            { status: 500 }
        );
    }
}
