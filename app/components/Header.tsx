import React, { useState } from 'react';
import { Menu, X, Train, BarChart3 } from 'lucide-react';
import { Button } from '../components/ui/button';
import Image from 'next/image';

// Import du logo favicon depuis le dossier public
import Favicon from '../public/favicon.ico';

// Composant d'en-tête principal
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Menu burger mobile
  const [currentPage, setCurrentPage] = useState<'form' | 'studies'>('form'); // Page sélectionnée

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-emerald-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo + nom du site */}
          <a href="#" rel="noopener noreferrer">
            <div className="flex items-center space-x-2">
              <Image src={Favicon} alt="Logo" className="h-8 w-8" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                EmpreinteGES
              </h1>
            </div>
          </a>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" rel="noopener noreferrer">
              <Button
                variant={currentPage === 'form' ? 'default' : 'ghost'}
                onClick={() => setCurrentPage('form')}
                className="flex items-center bg-transparent space-x-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              >
                <Train className="h-4 w-4" />
                <span>Calculateur</span>
              </Button>
            </a>

            <a href="https://www.ynov.com/" target="_blank" rel="noopener noreferrer">
              <Button
                variant={currentPage === 'studies' ? 'default' : 'ghost'}
                onClick={() => setCurrentPage('studies')}
                className="flex items-center bg-transparent space-x-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
              >
                <BarChart3 className="h-4 w-4" />
                <span>Nos Études</span>
              </Button>
            </a>
          </nav>

          {/* Bouton menu mobile */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation mobile */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-emerald-100">
            <nav className="flex flex-col space-y-4">
              <a href="#" rel="noopener noreferrer">
                <Button
                  variant={currentPage === 'form' ? 'default' : 'ghost'}
                  onClick={() => setCurrentPage('form')}
                  className="flex items-center bg-transparent space-x-2 text-gray-700 hover:text-emerald-600 hover:bg-emerald-50"
                >
                  <Train className="h-4 w-4" />
                  <span>Calculateur</span>
                </Button>
              </a>

              <a href="https://www.ynov.com/" target="_blank" rel="noopener noreferrer">
                <Button
                  variant={currentPage === 'studies' ? 'default' : 'ghost'}
                  onClick={() => setCurrentPage('studies')}
                  className="flex items-center bg-transparent space-x-2 text-gray-700 hover:text-emerald-600"
                >
                  <BarChart3 className="h-4 w-4" />
                  <span>Nos Études</span>
                </Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
