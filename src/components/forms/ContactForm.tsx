'use client';

import { useState } from 'react';
import { Input, Textarea } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});

        // Validation basique
        const newErrors: Record<string, string> = {};
        if (!formData.name.trim()) newErrors.name = 'Le nom est requis';
        if (!formData.email.trim()) newErrors.email = 'L\'email est requis';
        if (!formData.phone.trim()) newErrors.phone = 'Le téléphone est requis';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis';

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setIsSuccess(true);
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
            }
        } catch (error) {
            setErrors({ submit: 'Une erreur est survenue. Veuillez réessayer.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                <div className="text-green-600 text-5xl mb-4">✓</div>
                <h3 className="text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
                <p className="text-green-700">Nous vous recontacterons dans les plus brefs délais.</p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <Input
                label="Nom complet *"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                placeholder="Jean Dupont"
            />

            <Input
                label="Email *"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                error={errors.email}
                placeholder="jean.dupont@example.com"
            />

            <Input
                label="Téléphone *"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                error={errors.phone}
                placeholder="06 12 34 56 78"
            />

            <Textarea
                label="Votre message *"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                error={errors.message}
                placeholder="Décrivez votre projet..."
            />

            {errors.submit && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
                    {errors.submit}
                </div>
            )}

            <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </Button>
        </form>
    );
}
