// Représente une entrée de transport, avec les détails du trajet
export interface TransportEntry {
  // Identifiant unique de l'entrée de transport
  id: number;            
  // Mode de transport (ex : "train", "bus", "voiture")
  mode: string;          
  // Type précis du véhicule (ex : "TGV", "Diesel", "électrique")
  vehicleType: string;   
  // Lieu ou heure de départ (format libre ou standardisé)
  departure: string;     
  // Lieu ou heure d'arrivée
  arrival: string;       
}

// Coordonnées et informations associées à une ville
export interface CityCoordinates {
  // Nom de la ville
  name: string;          
  // Latitude géographique
  lat: number;           
  // Longitude géographique
  lng: number;           
  // Code postal de la ville
  zipCode: string;       
  // Département ou région administrative
  department: string;    
}

// Détails d'un trajet en train
export interface TrainRoute {
  // Ville de départ
  origin: string;        
  // Ville d'arrivée
  destination: string;   
  // Nom de la compagnie de transport
  transporter: string;   
  // Distance parcourue en kilomètres
  distance: number;      
  // Émissions de CO2 liées au trajet en train (kg CO2)
  trainEmission: number; 
  // (Optionnel) Émissions équivalentes si le trajet était fait en avion
  avionEmission?: number;
}

// Résultat d'un calcul d'émissions de carbone
export interface CarbonCalculationResult {
  // Total des émissions calculées (kg CO2)
  totalEmissions: number; 
  // Liste des erreurs rencontrées lors du calcul (ex : données manquantes)
  errors: string[];       
}

// Coefficients d'émission liés aux types de véhicules
// Par exemple : { "voitureEssence": 0.2, "busDiesel": 0.1 }
export interface VehicleCoefficients {
  // Clé = type de véhicule, valeur = coefficient d'émission (kg CO2/km)
  [key: string]: number;  
}

// Détails d'un trajet en avion
export interface AvionRoute {
  // Aéroport de départ
  origin: string;         
  // Aéroport d'arrivée
  destination: string;    
  // Nom de la compagnie aérienne ou "Avion"
  transporter: string;    
  // Distance parcourue en kilomètres
  distance: number;       
  // Émissions liées au trajet en train (souvent 0 pour avion)
  trainEmission: number;  
  // Émissions de CO2 liées au trajet en avion (kg CO2)
  avionEmission: number;  
}
