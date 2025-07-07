import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, MailIcon } from 'lucide-react';
import Image from 'next/image';
import Favicon from '../public/favicon.ico';



// Composant Footer : pied de page du site
const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Marque & Réseaux sociaux */}
          <div>
            <a href="#" aria-label="Accueil">
              <div className="flex items-center space-x-2 mb-6">
                <Image src={Favicon} alt="Logo EmpreinteGES" className="h-8 w-8" />
                <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  EmpreinteGES
                </h3>
              </div>
            </a>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Chaque geste compte pour notre planète.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="https://www.instagram.com/clement_cvz/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 p-2 rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation principale */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">Calculateur</a>
              </li>
              <li>
                <a href="https://www.ynov.com/" className="text-gray-300 hover:text-emerald-400 transition-colors">Nos études</a>
              </li>
            </ul>
          </div>

          {/* Ressources */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Ressources</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://www.ecologie.gouv.fr/politiques-publiques/collection-guides" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Guide écologique
                </a>
              </li>
              <li>
                <a 
                  href="https://www.ecologie.gouv.fr/politiques-publiques/collection-guides" 
                  className="text-gray-300 hover:text-emerald-400 transition-colors"
                >
                  Études de cas
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MailIcon className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">clementvitrat@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">+33 7 54 25 14 85</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-emerald-400" />
                <span className="text-gray-300">Aix-en-Provence, France</span>
              </div>
            </div>
          </div>

        </div>

        {/* Barre inférieure */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 EmpreinteGES. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              {['Politique de confidentialité', "Conditions d'utilisation", 'Mentions légales'].map((text, i) => (
                <a key={i} href="#" className="text-gray-400 hover:text-emerald-400 transition-colors">
                  {text}
                </a>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
