'use client';

import { useState } from 'react';
import { Button } from '../ui/button';
import { Alert, AlertDescription } from '../ui/alert';
import { Plus, Calculator, AlertTriangle } from 'lucide-react';

import TransportRow from './TransportRow';
import { calculateCarbonFootprint } from '@/lib/carbonCalculations';
import { TransportEntry } from '@/types/transport';


// Composant principal du formulaire de calcul d’empreinte carbone des trajets
export default function TransportForm() {
  // État local contenant la liste des étapes de transport (un tableau d’objets TransportEntry)
  // Initialisé avec une étape vide (id=1)
  const [transportEntries, setTransportEntries] = useState<TransportEntry[]>([
    {
      id: 1,
      mode: '',
      vehicleType: '',
      departure: '',
      arrival: ''
    }
  ]);

  // Calcul des émissions totales et collecte des erreurs de validation pour toutes les étapes
  // Cette fonction vient de la librairie importée
  const { totalEmissions, errors: calculationErrors } = calculateCarbonFootprint(transportEntries);

  // Fonction pour ajouter une nouvelle étape de transport vide avec un nouvel ID unique
  const addTransportEntry = () => {
    const newId = Math.max(...transportEntries.map(entry => entry.id), 0) + 1;
    setTransportEntries([
      ...transportEntries,
      { id: newId, mode: '', vehicleType: '', departure: '', arrival: '' }
    ]);
  };

  // Fonction pour mettre à jour une étape donnée via son ID, en appliquant les modifications partiellement
  const updateTransportEntry = (id: number, updates: Partial<TransportEntry>) => {
    setTransportEntries(entries =>
      entries.map(entry => (entry.id === id ? { ...entry, ...updates } : entry))
    );
  };

  // Fonction pour supprimer une étape par son ID, seulement si on a plus d’une étape dans la liste
  const removeTransportEntry = (id: number) => {
    if (transportEntries.length > 1) {
      setTransportEntries(entries => entries.filter(entry => entry.id !== id));
    }
  };

  return (
    <section id="transport-calculator" className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-tête principal du formulaire avec titre et description */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full mb-6">
            <Calculator className="h-4 w-4 mr-2" />
            <span className="font-medium">Empreinte GES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Calculez votre <span className="text-emerald-600">empreinte GES</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Calculez l’impact CO₂ de vos déplacements quotidiens et obtenez 
            une estimation précise pour mieux agir.
          </p>
        </div>

        {/* Section du formulaire : affichage dynamique des étapes de transport */}
        <div className="mb-8">
          {transportEntries.map((entry, index) => (
            <TransportRow
              key={entry.id}                // clé unique React par étape
              entry={entry}                 // données de l’étape courante
              index={index}                 // index pour information d’affichage
              onUpdate={(updates) => updateTransportEntry(entry.id, updates)} // gestion mise à jour
              onRemove={() => removeTransportEntry(entry.id)}                 // gestion suppression
              canRemove={transportEntries.length > 1}                         // autorise suppression si >1
            />
          ))}

          {/* Affichage conditionnel des erreurs retournées par le calcul */}
          {calculationErrors.length > 0 && (
            <div className="max-w-4xl mx-auto">
              <Alert className="bg-red-50 border border-red-200 p-4 flex items-start">
                <AlertTriangle className="h-5 w-5 text-red-600 mt-1 mr-3" />
                <AlertDescription className="text-red-800">
                  <p className="font-semibold mb-2">Erreurs dans le formulaire :</p>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    {calculationErrors.map((err, index) => (
                      <li key={index}>{err}</li>
                    ))}
                  </ul>
                </AlertDescription>
              </Alert>
            </div>
          )}
        </div>

        {/* Bouton centré pour ajouter une nouvelle étape de transport */}
        <div className="text-center">
          <Button
            onClick={addTransportEntry}
            className="bg-emerald-600 hover:bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold text-md shadow-lg hover:scale-105 transition-all duration-200 inline-flex items-center space-x-2"
          >
            <Plus className="h-4 w-4" />
            <span>Ajouter une étape</span>
          </Button>
        </div>

        {/* Bloc affichage des résultats du calcul d’empreinte carbone */}
        <div className="max-w-4xl mx-auto rounded-3xl mt-8 md:p-12 border border-gray-200 shadow-lg">
          <div className="mt-4 mb-4 text-center">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Résultats de vos trajets
            </h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Affichage de la valeur totale des émissions en kg CO2 */}
              <div className="text-center">
                <div className="text-4xl font-bold text-emerald-600 hover:text-yellow-600 mb-2">
                  {totalEmissions.toFixed(2)} kg
                </div>
                <div className="text-gray-600">CO₂ émis au total</div>
              </div>

              {/* Comparaison avec la moyenne française (1400 kg) */}
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${totalEmissions < 1400 ? 'text-green-600' : 'text-red-600'}`}>
                  {/* Affiche un signe + ou - selon que l’émission est au-dessus ou en dessous */}
                  {totalEmissions < 1400 ? '-' : '+'}
                  {Math.abs(((totalEmissions - 1400) / 1400 * 100)).toFixed(0)}%
                </div>
                <div className="text-gray-600">vs moyenne française</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
