import { ReactNode } from 'react';

// TypeScript interface for the props of TransportSection component
interface TransportSectionProps {
  // Titre de la section (ex: "Mode de Transport")
  title: string;        
  // Icône affichée à gauche du titre
  icon: ReactNode;      
  // Contenu de la section (ex: Select)
  children: ReactNode;  
}


// Composant TransportSection
export default function TransportSection({ title, icon, children }: TransportSectionProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
      {/* En-tête avec icône et titre */}
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>

      {/* Contenu de la section */}
      <div className="space-y-4">
        {children}
      </div>
    </div>
  );
}
