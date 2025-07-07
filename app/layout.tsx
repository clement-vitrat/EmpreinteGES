// Feuille de styles globale
import './globals.css'; 
// Importation des métadonnées et de la police "Inter" depuis Next.js
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Chargement de la police "Inter" avec le sous-ensemble latin
const inter = Inter({ subsets: ['latin'] });


// Métadonnées globales du site, injectées automatiquement par Next.js
export const metadata: Metadata = {
  // Titre de la page, affiché dans l'onglet du navigateur
  title: 'EmpreinteGES',
  // Description de la page, utilisée pour le SEO et les aperçus sociaux
  description: 'Calculez vos émissions de CO₂ liées aux transports',
};


// Layout racine : englobe toute l'application
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* La gestion du <title> et du <meta> passe par `metadata` */}
        {/* Le favicon doit être dans le dossier `public` à la racine */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
