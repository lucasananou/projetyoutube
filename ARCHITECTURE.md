# Site Vitrine Couvreur - Architecture Complète

## 📁 Structure du Projet

```
site-vitrine/
├── src/
│   ├── app/                          # App Router Next.js
│   │   ├── layout.tsx                # Layout global avec Header/Footer
│   │   ├── page.tsx                  # Page d'accueil
│   │   ├── contact/
│   │   │   └── page.tsx              # Page contact avec formulaire
│   │   ├── services/
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Pages services dynamiques
│   │   ├── villes/
│   │   │   └── [city]/
│   │   │       └── page.tsx          # Pages SEO local par ville
│   │   ├── blog/
│   │   │   ├── page.tsx              # Liste des articles
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Article de blog détaillé
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts          # API route pour formulaire
│   │   ├── sitemap.ts                # Sitemap dynamique
│   │   └── robots.ts                 # Robots.txt
│   │
│   ├── components/
│   │   ├── ui/                       # Composants atomiques
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/                   # Composants de mise en page
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/                 # Sections réutilisables
│   │   │   ├── Hero.tsx
│   │   │   └── ServicesGrid.tsx
│   │   └── forms/
│   │       └── ContactForm.tsx       # Formulaire contact avec validation
│   │
│   ├── lib/
│   │   └── seo.ts                    # Gestion SEO centralisée + JSON-LD
│   │
│   ├── config/
│   │   ├── services.ts               # Configuration services (scalable)
│   │   ├── cities.ts                 # Configuration villes SEO local
│   │   └── blog.ts                   # Configuration articles blog
│   │
│   └── types/
│       └── index.ts                  # Types TypeScript globaux
│
├── public/                           # Assets statiques
└── package.json
```

## 🎯 Architecture & Responsabilités

### 1. Configuration (config/)
- **services.ts** : Liste des services avec slug, titre, description, features
- **cities.ts** : Villes pour SEO local avec coordonnées GPS
- **blog.ts** : Articles de blog (peut être remplacé par un CMS)

### 2. SEO & Metadata (lib/seo.ts)
- Fonction `generateMetadata()` pour créer les meta tags
- Fonction `generateLocalBusinessSchema()` pour JSON-LD LocalBusiness
- Configuration centralisée du site (nom, description, URL)

### 3. Composants Atomiques (components/)
#### UI (components/ui/)
- `Button` : Bouton réutilisable avec variants (primary, secondary, outline)
- `Input` & `Textarea` : Inputs avec labels et gestion d'erreurs

#### Layout (components/layout/)
- `Header` : Navigation sticky avec menu responsive
- `Footer` : Footer organisé par sections (services, villes, contact)

#### Sections (components/sections/)
- `Hero` : Section hero avec CTAs
- `ServicesGrid` : Grille de services avec cartes

#### Forms (components/forms/)
- `ContactForm` : Formulaire avec validation, gestion d'état, feedback

### 4. Pages

#### Statiques
- `/` : Homepage avec Hero, Services, JSON-LD
- `/contact` : Page contact avec formulaire
- `/blog` : Liste des articles de blog

#### Dynamiques
- `/services/[slug]` : Pages détaillées par service (generateStaticParams)
- `/villes/[city]` : Pages SEO local par ville (generateStaticParams)
- `/blog/[slug]` : Articles de blog avec JSON-LD Article

### 5. API Routes
- `/api/contact` : Gestion des soumissions de formulaire avec validation

### 6. SEO Technique
- `sitemap.ts` : Génère sitemap.xml dynamique pour toutes les routes
- `robots.ts` : Configuration robots.txt

## 🚀 Bonnes Pratiques Implémentées

### SEO
✅ Métadonnées dynamiques par page
✅ OpenGraph & Twitter Cards
✅ JSON-LD LocalBusiness pour SEO local
✅ JSON-LD Article pour le blog
✅ Sitemap dynamique
✅ Robots.txt optimisé
✅ Balises canoniques via metadata

### Performance
✅ Server Components par défaut
✅ Font optimization (next/font)
✅ Lazy loading naturel du router
✅ Static generation (generateStaticParams)

### Architecture
✅ Séparation des responsabilités (config, lib, components, pages)
✅ Types TypeScript stricts
✅ Code DRY et réutilisable
✅ Structure scalable (facile d'ajouter villes/services)

### UX
✅ Mobile-first Tailwind CSS
✅ Validation formulaire côté client
✅ Feedback utilisateur (succès/erreur)
✅ Navigation claire et breadcrumbs

## 📝 Instructions de Développement

### Installation
```bash
cd site-vitrine
npm install
```

### Développement
```bash
npm run dev
```

### Build Production
```bash
npm run build
npm start
```

### Variables d'environnement
Créer un fichier `.env.local` :
```
NEXT_PUBLIC_SITE_URL=https://votre-domaine.fr
```

## 🔄 Évolutions Futures Possibles

### Content Management
- Intégration CMS headless (Contentful, Sanity, Strapi)
- Fichiers MDX pour le blog
- Interface admin pour gérer les contenus

### Marketing
- Intégration Google Analytics / Tag Manager
- Pixels de tracking (Facebook, LinkedIn)
- A/B testing

### Fonctionnalités
- Multi-langues (i18n)
- Système de témoignages clients
- Galerie de réalisations
- Calculateur de devis en ligne
- Espace client

### Performance
- Optimisation images (next/image)
- Code splitting avancé
- CDN pour les assets

### Intégrations
- Service email (Resend, Sendgrid)
- CRM (HubSpot, Pipedrive)
- Calendrier de rendez-vous (Calendly)

## 📊 Checklist SEO Technique

- [ ] Configurer Google Search Console
- [ ] Configurer Google Analytics
- [ ] Soumettre le sitemap
- [ ] Tester les données structurées
- [ ] Vérifier Core Web Vitals
- [ ] Audit Lighthouse (>90/100)
- [ ] Configurer les redirections si migration
- [ ] Certificat SSL
- [ ] Minification des assets

## 🎨 Personnalisation

### Couleurs
Les couleurs sont définies dans `tailwind.config.ts` et utilisent :
- Slate pour les gris
- Orange pour l'accent (modifiable selon charte graphique)

### Polices
- Inter (next/font) - peut être changée facilement

### Contenu
Tous les contenus sont dans les fichiers de configuration (`config/`) pour une modification centralisée.
