import { TransportEntry, CarbonCalculationResult, VehicleCoefficients } from '@/types/transport';
import { CITY_COORDINATES, TRAIN_ROUTES, AIRPORT_ROUTES } from './transportData';

// Coefficients d'émission de CO2 (en kg par km) selon le type de véhicule
const VEHICLE_COEFFICIENTS: VehicleCoefficients = {
  '2 Roues Motrices': 1.594333,
  'Bus': 1.063000 / 30, // émission par passager, divisé par capacité moyenne
  'Poids lourd': 0.523545,
  'Véhicule utilitaire': 0.252545,
  'Voiture': 0.938192 / 2.2 // ajustement d'émission par véhicule
};

// Fonction pour convertir des degrés en radians
function toRad(degrees: number): number {
  return degrees * (Math.PI / 180);
}

// Calcule la distance (en km) entre deux villes en utilisant la formule de Haversine
function calculateDistance(city1: string, city2: string): number {
  const coord1 = CITY_COORDINATES[city1];
  const coord2 = CITY_COORDINATES[city2];
  
  // Si une des villes n'existe pas dans la base, retourne 0
  if (!coord1 || !coord2) {
    return 0;
  }
  
  const R = 6371; // Rayon de la Terre en km
  const dLat = toRad(coord2.lat - coord1.lat);
  const dLon = toRad(coord2.lng - coord1.lng);
  
  // Formule de Haversine
  const a = 
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(coord1.lat)) * Math.cos(toRad(coord2.lat)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  
  return distance;
}

// Recherche une route de train ou avion dans la base selon les villes, mode et éventuellement le transporteur
function findRoute(departure: string, arrival: string, mode: string, transporter?: string) {
  if (mode === 'Avion') {
    // Recherche dans les trajets avion, dans les deux sens
    return AIRPORT_ROUTES.find(route =>
      (route.origin === departure && route.destination === arrival) ||
      (route.origin === arrival && route.destination === departure)
    );
  } else if (mode === 'Train') {
    // Recherche dans les trajets train, en filtrant par transporteur si donné
    return TRAIN_ROUTES.find(route =>
      ((route.origin === departure && route.destination === arrival) ||
       (route.origin === arrival && route.destination === departure)) &&
      (!transporter || route.transporter === transporter)
    );
  }
  // Retourne undefined si mode non géré
  return undefined;
}

// Fonction principale pour calculer l'empreinte carbone totale à partir d'une liste de trajets
export function calculateCarbonFootprint(entries: TransportEntry[]): CarbonCalculationResult {
  let totalEmissions = 0;
  const errors: string[] = [];

  for (const entry of entries) {
    // Ignorer les entrées incomplètes
    if (!entry.departure || !entry.arrival || !entry.mode || !entry.vehicleType) {
      continue;
    }

    try {
      let emissions = 0;

      switch (entry.mode) {
        case 'Route': {
          // Calcul de la distance pour le trajet routier
          const distance = calculateDistance(entry.departure, entry.arrival);
          if (distance === 0) {
            errors.push(`Impossible de calculer la distance entre ${entry.departure} et ${entry.arrival}`);
            continue;
          }
          // Récupération du coefficient d'émission du véhicule
          const coefficient = VEHICLE_COEFFICIENTS[entry.vehicleType];
          if (coefficient) {
            emissions = distance * coefficient; // émission totale = distance * coefficient
          } else {
            errors.push(`Coefficient d'émission non trouvé pour ${entry.vehicleType}`);
          }
          break;
        }

        case 'Train': {
          if (entry.vehicleType === 'TER') {
            // Pour TER, calcul basé sur la distance et un coefficient fixe
            const terDistance = calculateDistance(entry.departure, entry.arrival);
            if (terDistance === 0) {
              errors.push(`Impossible de calculer la distance entre ${entry.departure} et ${entry.arrival}`);
              continue;
            }
            emissions = terDistance * 0.027; // coefficient TER
          } else {
            // Pour autres trains, recherche d'un trajet dans la base avec une émission définie
            const route = findRoute(entry.departure, entry.arrival, 'Train', entry.vehicleType);
            if (route) {
              emissions = route.trainEmission;
            } else {
              errors.push(`Pas de trajet en ${entry.vehicleType} enregistré pour ${entry.departure} -> ${entry.arrival}`);
            }
          }
          break;
        }

        case 'Avion': {
          // Recherche du trajet avion dans la base
          const route = findRoute(entry.departure, entry.arrival, 'Avion');
          if (route && route.avionEmission !== undefined) {
            emissions = route.avionEmission;
          } else {
            errors.push(`Pas de trajet en avion enregistré pour ${entry.departure} -> ${entry.arrival}`);
          }
          break;
        }

        default:
          // Mode de transport inconnu
          errors.push(`Mode de transport inconnu : ${entry.mode}`);
      }

      totalEmissions += emissions; // cumul des émissions calculées
    } catch (error) {
      // Gestion générique des erreurs inattendues
      errors.push(`Erreur lors du calcul pour le trajet ${entry.departure} -> ${entry.arrival}`);
    }
  }

  // Retourne le total des émissions et la liste des erreurs rencontrées
  return {
    totalEmissions,
    errors
  };
}
