'use client';

// Importation des composants nécessaires
import { useState } from 'react';
import Header from '@/components/Header';
import TransportForm from '@/components/Transport/TransportForm';
import Footer from '@/components/Footer';


// Page d'accueil du projet
export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* En-tête de page (navbar/menu/logo) */}
      <Header />

      {/* Contenu principal : formulaire de transport */}
      <TransportForm />

      {/* Pied de page */}
      <Footer />
    </div>
  );
}
