'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import { Button } from '../ui/button';
import { Trash2, Car, Settings, MapPin, ArrowUpRightFromSquare } from 'lucide-react';
import { TransportEntry } from '@/types/transport';

import {
  TRANSPORT_MODES,
  ROUTE_VEHICLES,
  TRAIN_TYPES,
  CITIES,
  TGV_STATIONS,
  INTERCITES_STATIONS,
  AIRPORTS,
} from '@/lib/transportData';
import TransportSection from './TransportSection';

// Définition des props attendues par le composant TransportRow
interface TransportRowProps {
  entry: TransportEntry;                    // Données de l’étape de transport (mode, véhicule, départ, arrivée)
  index: number;                            // Index de l’étape dans la liste
  onUpdate: (updates: Partial<TransportEntry>) => void; // Fonction pour mettre à jour les données de l’étape
  onRemove: () => void;                     // Fonction pour supprimer cette étape
  canRemove: boolean;                       // Booléen indiquant si la suppression est autorisée (ex : si plus d’une étape)
}

export default function TransportRow({
  entry,
  index,
  onUpdate,
  onRemove,
  canRemove,
}: TransportRowProps) {

  // Fonction pour retourner la liste des types de véhicules disponibles selon le mode choisi
  const getVehicleOptions = () => {
    switch (entry.mode) {
      case 'Route':
        return ROUTE_VEHICLES;      // Par ex. voiture, moto, bus
      case 'Train':
        return TRAIN_TYPES;         // Par ex. TGV, Intercités
      case 'Avion':
        return ['Avion'];           // Option unique si avion
      default:
        return [];                  // Pas de véhicule si mode non sélectionné
    }
  };

  // Fonction pour retourner les options possibles pour les lieux (départ / arrivée) selon mode et véhicule
  const getLocationOptions = () => {
    if (entry.mode === 'Route') return CITIES;               // Villes pour la route
    if (entry.mode === 'Train') {
      if (entry.vehicleType === 'TGV') return TGV_STATIONS;          // Gares TGV si TGV
      if (entry.vehicleType === 'Intercités') return INTERCITES_STATIONS; // Gares Intercités sinon
      return CITIES;                                          // Sinon liste générique de villes
    }
    if (entry.mode === 'Avion') return AIRPORTS;              // Aéroports pour avion
    return [];                                                // Sinon rien
  };

  // Fonction pour afficher le label du lieu selon mode choisi (ex: Ville, Gare, Aéroport)
  const getLocationLabel = () => {
    switch (entry.mode) {
      case 'Route':
        return 'Ville';
      case 'Train':
        return 'Gare';
      case 'Avion':
        return 'Aéroport';
      default:
        return 'Lieu';
    }
  };

  // Lorsqu'on change le mode de transport, on remet à zéro le véhicule, départ et arrivée
  // Si mode "Avion", on fixe directement vehicleType à "Avion"
  const handleModeChange = (mode: string) => {
    onUpdate({
      mode,
      vehicleType: mode === 'Avion' ? 'Avion' : '',
      departure: '',
      arrival: '',
    });
  };

  // Lorsqu'on change le type de véhicule, on remet aussi à zéro départ et arrivée (car dépendant du véhicule)
  const handleVehicleTypeChange = (vehicleType: string) => {
    onUpdate({
      vehicleType,
      departure: '',
      arrival: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-gradient-to-br from-gray-50 to-emerald-50 rounded-3xl p-8 md:p-12 border border-emerald-100 mb-8">

        {/* Bouton de suppression visible uniquement si canRemove = true */}
        {canRemove && (
          <div className="flex justify-end mb-4">
            <Button
              onClick={onRemove}
              size="sm"
              variant="ghost"
              className="text-red-500 hover:text-white hover:bg-red-500 border border-red-100 rounded-full transition-all"
            >
              <Trash2 className="h-4 w-4" />
              <span className="ml-2 hidden sm:inline">Supprimer</span>
            </Button>
          </div>
        )}

        {/* Grille en 2 colonnes pour les sélecteurs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Sélecteur du mode de transport */}
          <TransportSection title="Mode de Transport" icon={<Car className="h-6 w-6 text-emerald-600 mr-3" />}>
            <Select value={entry.mode} onValueChange={handleModeChange}>
              <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                {/* Liste des modes de transport */}
                {TRANSPORT_MODES.map((mode) => (
                  <SelectItem key={mode} value={mode}>
                    {mode}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TransportSection>

          {/* Sélecteur du type de véhicule, désactivé si mode non choisi ou mode avion */}
          <TransportSection title="Type de véhicule" icon={<Settings className="h-6 w-6 text-emerald-600 mr-3" />}>
            <Select
              value={entry.vehicleType}
              onValueChange={handleVehicleTypeChange}
              disabled={!entry.mode || entry.mode === 'Avion'}
            >
              <SelectTrigger className="w-full border-gray-300 focus:ring-teal-500 focus:border-teal-500">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                {/* Liste dynamique des véhicules selon mode */}
                {getVehicleOptions().map((vehicle) => (
                  <SelectItem key={vehicle} value={vehicle}>
                    {vehicle}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TransportSection>

          {/* Sélecteur du lieu de départ, désactivé si mode non choisi */}
          <TransportSection title={`${getLocationLabel()} de départ`} icon={<ArrowUpRightFromSquare className="h-6 w-6 text-emerald-600 mr-3" />}>
            <Select
              value={entry.departure}
              onValueChange={(departure) => onUpdate({ departure })}
              disabled={!entry.mode}
            >
              <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                {/* Options de lieux selon mode/véhicule */}
                {getLocationOptions().map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TransportSection>

          {/* Sélecteur du lieu d’arrivée, désactivé si mode non choisi */}
          <TransportSection title={`${getLocationLabel()} d'arrivée`} icon={<MapPin className="h-6 w-6 text-emerald-600 mr-3" />}>
            <Select
              value={entry.arrival}
              onValueChange={(arrival) => onUpdate({ arrival })}
              disabled={!entry.mode}
            >
              <SelectTrigger className="w-full border-gray-300 focus:ring-emerald-500 focus:border-emerald-500">
                <SelectValue placeholder="Sélectionnez..." />
              </SelectTrigger>
              <SelectContent>
                {/* Options de lieux selon mode/véhicule */}
                {getLocationOptions().map((opt) => (
                  <SelectItem key={opt} value={opt}>
                    {opt}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </TransportSection>

        </div>
      </div>
    </div>
  );
}
