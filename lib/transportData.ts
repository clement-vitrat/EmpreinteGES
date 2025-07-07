// Options de modes de transport disponibles
export const TRANSPORT_MODES = ['Route', 'Train', 'Avion'];

// Types de véhicules pour le mode 'Route'
export const ROUTE_VEHICLES = [
  '2 Roues Motrices',
  'Bus', 
  'Poids lourd',
  'Véhicule utilitaire',
  'Voiture'
];

// Types de trains disponibles
export const TRAIN_TYPES = ['TER', 'TGV', 'Intercités'];

// Liste des villes avec leurs codes postaux et départements (extrait de fichiers CSV)
export const CITIES = [
  'Aix-en-Provence - 13100 - Bouches-du-Rhône',
  'Amiens - 80000 - Somme',
  'Angers - 49000 - Maine-et-Loire',
  'Argenteuil - 95100 - Val-d\'Oise',
  'Asnières-sur-Seine - 92600 - Hauts-de-Seine',
  'Aulnay-sous-Bois - 93600 - Seine-Saint-Denis',
  'Avignon - 84000 - Vaucluse',
  'Besançon - 25000 - Doubs',
  'Bordeaux - 33000 - Gironde',
  'Boulogne-Billancourt - 92100 - Hauts-de-Seine',
  'Brest - 29200 - Finistère',
  'Caen - 14000 - Calvados',
  'Clermont-Ferrand - 63000 - Puy-de-Dôme',
  'Colombes - 92700 - Hauts-de-Seine',
  'Courbevoie - 92400 - Hauts-de-Seine',
  'Créteil - 94000 - Val-de-Marne',
  'Dijon - 21000 - Côte-d\'Or',
  'Grenoble - 38000 - Isère',
  'Le Havre - 76600 - Seine-Maritime',
  'Le Mans - 72000 - Sarthe',
  'Lille - 59000 - Nord',
  'Limoges - 87000 - Haute-Vienne',
  'Lyon - 69001 - Rhône',
  'Marseille - 13001 - Bouches-du-Rhône',
  'Metz - 57000 - Moselle',
  'Montpellier - 34000 - Hérault',
  'Montreuil - 93100 - Seine-Saint-Denis',
  'Mulhouse - 68100 - Haut-Rhin',
  'Nancy - 54000 - Meurthe-et-Moselle',
  'Nanterre - 92000 - Hauts-de-Seine',
  'Nantes - 44000 - Loire-Atlantique',
  'Nice - 06000 - Alpes-Maritimes',
  'Nîmes - 30000 - Gard',
  'Orléans - 45000 - Loiret',
  'Paris - 75001 - Paris',
  'Pau - 64000 - Pyrénées-Atlantiques',
  'Perpignan - 66000 - Pyrénées-Orientales',
  'Poitiers - 86000 - Vienne',
  'Reims - 51100 - Marne',
  'Rennes - 35000 - Ille-et-Vilaine',
  'Roubaix - 59100 - Nord',
  'Rouen - 76000 - Seine-Maritime',
  'Saint-Denis - 93200 - Seine-Saint-Denis',
  'Saint-Étienne - 42000 - Loire',
  'Strasbourg - 67000 - Bas-Rhin',
  'Toulon - 83000 - Var',
  'Toulouse - 31000 - Haute-Garonne',
  'Tours - 37000 - Indre-et-Loire',
  'Versailles - 78000 - Yvelines',
  'Villeurbanne - 69100 - Rhône'
];

// Liste des gares TGV principales en France
export const TGV_STATIONS = [
  'Aéroport Charles de Gaulle 2 TGV',
  'Aix-en-Provence TGV',
  'Angers Saint-Laud',
  'Arras',
  'Avignon TGV',
  'Besançon Franche-Comté TGV',
  'Béziers',
  'Bordeaux Saint-Jean',
  'Bourg-Saint-Maurice',
  'Brest',
  'Brive-la-Gaillarde',
  'Chambéry - Challes-les-Eaux',
  'Champagne-Ardenne TGV',
  'Châteauroux',
  'Dijon',
  'Douai',
  'Dunkerque',
  'Grenoble',
  'La Rochelle',
  'Laval',
  'Le Creusot TGV',
  'Le Mans',
  'Lens',
  'Lille Europe',
  'Lille Flandres',
  'Lorraine TGV',
  'Lorient',
  'Lyon Part-Dieu',
  'Lyon Perrache',
  'Macôn-Loché TGV',
  'Marne-la-Vallée Chessy',
  'Marseille Saint-Charles',
  'Massy TGV',
  'Metz',
  'Montpellier Saint-Roch',
  'Mulhouse Ville',
  'Nancy',
  'Nantes',
  'Nice Ville',
  'Nîmes',
  'Paris Gare de Lyon',
  'Paris Gare du Nord',
  'Paris Montparnasse',
  'Poitiers',
  'Reims',
  'Rennes',
  'Saint-Pierre-des-Corps',
  'Strasbourg',
  'Toulon',
  'Toulouse Matabiau',
  'Valence TGV'
];

// Liste des gares Intercités en France
export const INTERCITES_STATIONS = [
  'Agen',
  'Alençon',
  'Angers Saint-Laud',
  'Avignon Centre',
  'Béziers',
  'Bordeaux Saint-Jean',
  'Brest',
  'Caen',
  'Carcassonne',
  'Castres',
  'Cherbourg',
  'Clermont-Ferrand',
  'Dax',
  'Dieppe',
  'Dijon',
  'Lannion',
  'La Rochelle',
  'Le Mans',
  'Limoges Bénédictins',
  'Lorient',
  'Lyon Perrache',
  'Montauban-Ville-Bourbon',
  'Montluçon',
  'Moulins-sur-Allier',
  'Mulhouse Ville',
  'Nantes',
  'Nevers',
  'Niort',
  'Orléans',
  'Pau',
  'Poitiers',
  'Quimper',
  'Reims',
  'Rodez',
  'Rouen',
  'Saint-Brieuc',
  'Saint-Étienne Châteaucreux',
  'Saint-Nazaire',
  'Tarbes',
  'Toulon',
  'Toulouse Matabiau',
  'Tours',
  'Valence Ville',
  'Vannes',
  'Vendôme-Villiers-sur-Loir',
  'Vichy',
  'Villefranche-sur-Saône',
  'Vire',
  'Vierzon-Ville'
];

// Liste des aéroports français (avec nom complet)
export const AIRPORTS = [
  'Ajaccio Napoléon Bonaparte',
  'Albi-Le Séquestre',
  'Annecy Mont-Blanc',
  'Bastia Poretta',
  'Biarritz Pays Basque',
  'Brest Bretagne',
  'Caen-Carpiquet',
  'Castres-Mazamet',
  'Clermont-Ferrand Auvergne',
  'Deauville Normandie',
  'Figari Sud Corse',
  'Grenoble Alpes-Isère',
  'La Rochelle - Île de Ré',
  'Lannion Côte de Granit',
  'Lille Lesquin',
  'Limoges-Bellegarde',
  'Lorient Bretagne Sud',
  'Lyon Saint-Exupéry',
  'Marseille Provence',
  'Metz-Nancy-Lorraine',
  'Montpellier Méditerranée',
  'Mulhouse EuroAirport',
  'Nantes Atlantique',
  'Nice Côte d\'Azur',
  'Paris Beauvais Tillé',
  'Paris Charles de Gaulle',
  'Paris Orly',
  'Perpignan-Rivesaltes',
  'Poitiers-Biard',
  'Quimper Bretagne',
  'Reims Champagne',
  'Rennes Bretagne',
  'Saint-Étienne Loire',
  'Strasbourg',
  'Tarbes-Lourdes-Pyrénées',
  'Toulouse Blagnac',
  'Tours Val de Loire',
  'Valence-Chabeuil',
  'Béziers Cap d\'Agde',
  'Bourges',
  'Carcassonne',
  'Chambéry-Savoie',
  'Châteauroux-Centre',
  'Dieppe',
  'Dole Jura',
  'Figari Sud Corse',
  'La Môle – Saint-Tropez',
  'Le Puy – Loudes',
  'Nîmes-Alès-Camargue-Cévennes'
];


// Coordonnées GPS mock pour certaines villes (latitude et longitude)
export const CITY_COORDINATES: { [key: string]: { lat: number; lng: number } } = {
  'Aix-en-Provence - 13100 - Bouches-du-Rhône': { lat: 43.5297, lng: 5.4474 },
  'Amiens - 80000 - Somme': { lat: 49.8941, lng: 2.2958 },
  'Angers - 49000 - Maine-et-Loire': { lat: 47.4784, lng: -0.5632 },
  'Argenteuil - 95100 - Val-d\'Oise': { lat: 48.9472, lng: 2.2468 },
  'Asnières-sur-Seine - 92600 - Hauts-de-Seine': { lat: 48.9124, lng: 2.2881 },
  'Aulnay-sous-Bois - 93600 - Seine-Saint-Denis': { lat: 48.9397, lng: 2.4944 },
  'Avignon - 84000 - Vaucluse': { lat: 43.9493, lng: 4.8055 },
  'Besançon - 25000 - Doubs': { lat: 47.2378, lng: 6.0241 },
  'Bordeaux - 33000 - Gironde': { lat: 44.8378, lng: -0.5792 },
  'Boulogne-Billancourt - 92100 - Hauts-de-Seine': { lat: 48.8397, lng: 2.2399 },
  'Brest - 29200 - Finistère': { lat: 48.3904, lng: -4.4861 },
  'Caen - 14000 - Calvados': { lat: 49.1829, lng: -0.3707 },
  'Clermont-Ferrand - 63000 - Puy-de-Dôme': { lat: 45.7772, lng: 3.0870 },
  'Colombes - 92700 - Hauts-de-Seine': { lat: 48.9150, lng: 2.2386 },
  'Courbevoie - 92400 - Hauts-de-Seine': { lat: 48.8965, lng: 2.2552 },
  'Créteil - 94000 - Val-de-Marne': { lat: 48.7904, lng: 2.4555 },
  'Dijon - 21000 - Côte-d\'Or': { lat: 47.3220, lng: 5.0415 },
  'Grenoble - 38000 - Isère': { lat: 45.1885, lng: 5.7245 },
  'Le Havre - 76600 - Seine-Maritime': { lat: 49.4944, lng: 0.1079 },
  'Le Mans - 72000 - Sarthe': { lat: 48.0061, lng: 0.1996 },
  'Lille - 59000 - Nord': { lat: 50.6292, lng: 3.0573 },
  'Limoges - 87000 - Haute-Vienne': { lat: 45.8336, lng: 1.2611 },
  'Lyon - 69001 - Rhône': { lat: 45.7640, lng: 4.8357 },
  'Marseille - 13001 - Bouches-du-Rhône': { lat: 43.2965, lng: 5.3698 },
  'Metz - 57000 - Moselle': { lat: 49.1193, lng: 6.1757 },
  'Montpellier - 34000 - Hérault': { lat: 43.6110, lng: 3.8767 },
  'Montreuil - 93100 - Seine-Saint-Denis': { lat: 48.8638, lng: 2.4483 },
  'Mulhouse - 68100 - Haut-Rhin': { lat: 47.7508, lng: 7.3359 },
  'Nancy - 54000 - Meurthe-et-Moselle': { lat: 48.6921, lng: 6.1844 },
  'Nanterre - 92000 - Hauts-de-Seine': { lat: 48.8917, lng: 2.2060 },
  'Nantes - 44000 - Loire-Atlantique': { lat: 47.2184, lng: -1.5536 },
  'Nice - 06000 - Alpes-Maritimes': { lat: 43.7102, lng: 7.2620 },
  'Nîmes - 30000 - Gard': { lat: 43.8367, lng: 4.3601 },
  'Orléans - 45000 - Loiret': { lat: 47.9030, lng: 1.9093 },
  'Paris - 75001 - Paris': { lat: 48.8566, lng: 2.3522 },
  'Pau - 64000 - Pyrénées-Atlantiques': { lat: 43.2951, lng: -0.3708 },
  'Perpignan - 66000 - Pyrénées-Orientales': { lat: 42.6887, lng: 2.8948 },
  'Poitiers - 86000 - Vienne': { lat: 46.5802, lng: 0.3404 },
  'Reims - 51100 - Marne': { lat: 49.2583, lng: 4.0317 },
  'Rennes - 35000 - Ille-et-Vilaine': { lat: 48.1173, lng: -1.6778 },
  'Roubaix - 59100 - Nord': { lat: 50.6922, lng: 3.1744 },
  'Rouen - 76000 - Seine-Maritime': { lat: 49.4432, lng: 1.0993 },
  'Saint-Denis - 93200 - Seine-Saint-Denis': { lat: 48.9362, lng: 2.3574 },
  'Saint-Étienne - 42000 - Loire': { lat: 45.4397, lng: 4.3872 },
  'Strasbourg - 67000 - Bas-Rhin': { lat: 48.5734, lng: 7.7521 },
  'Toulon - 83000 - Var': { lat: 43.1242, lng: 5.9280 },
  'Toulouse - 31000 - Haute-Garonne': { lat: 43.6047, lng: 1.4442 },
  'Tours - 37000 - Indre-et-Loire': { lat: 47.3941, lng: 0.6848 },
  'Versailles - 78000 - Yvelines': { lat: 48.8049, lng: 2.1204 },
  'Villeurbanne - 69100 - Rhône': { lat: 45.7667, lng: 4.8833 }
};

// Données de parcours de trains en France
export const TRAIN_ROUTES = [
  {
    origin: 'Paris Gare de Lyon',
    destination: 'Lyon Part-Dieu',
    transporter: 'TGV',
    distance: 462,
    trainEmission: 12.5,
    avionEmission: 89.2
  },
  {
    origin: 'Paris Gare de Lyon', 
    destination: 'Marseille Saint-Charles',
    transporter: 'TGV',
    distance: 750,
    trainEmission: 18.9,
    avionEmission: 145.3
  },
  {
    origin: 'Lyon Part-Dieu',
    destination: 'Marseille Saint-Charles', 
    transporter: 'TGV',
    distance: 325,
    trainEmission: 8.7,
    avionEmission: 62.8
  },
  {
    origin: 'Paris Austerlitz',
    destination: 'Toulouse Matabiau',
    transporter: 'Intercités',
    distance: 678,
    trainEmission: 22.1,
    avionEmission: 131.5
  },
  {
    origin: 'Paris Austerlitz',
    destination: 'Clermont-Ferrand',
    transporter: 'Intercités', 
    distance: 421,
    trainEmission: 15.3,
    avionEmission: 82.4
  },
  {
    origin: 'Paris Gare de Lyon',
    destination: 'Nantes',
    transporter: 'TGV',
    distance: 385,
    trainEmission: 10.4,
    avionEmission: 67.9
  },
  {
    origin: 'Paris Gare de Lyon',
    destination: 'Strasbourg',
    transporter: 'TGV',
    distance: 490,
    trainEmission: 13.2,
    avionEmission: 90.4
  },
  {
    origin: 'Lille Europe',
    destination: 'Paris Gare du Nord',
    transporter: 'TGV',
    distance: 225,
    trainEmission: 6.1,
    avionEmission: 42.7
  },
  {
    origin: 'Lyon Part-Dieu',
    destination: 'Montpellier Saint-Roch',
    transporter: 'TGV',
    distance: 300,
    trainEmission: 7.8,
    avionEmission: 58.2
  },
  {
    origin: 'Marseille Saint-Charles',
    destination: 'Nice Ville',
    transporter: 'TGV',
    distance: 200,
    trainEmission: 5.2,
    avionEmission: 39.5
  },
  {
    origin: 'Le Mans',
    destination: 'Tours',
    transporter: 'Intercités',
    distance: 70,
    trainEmission: 3.5,
    avionEmission: 12.1
  },
  {
    origin: 'Caen',
    destination: 'Rennes',
    transporter: 'Intercités',
    distance: 130,
    trainEmission: 4.9,
    avionEmission: 18.2
  },
  {
    origin: 'Orléans',
    destination: 'Bourges',
    transporter: 'Intercités',
    distance: 110,
    trainEmission: 4.3,
    avionEmission: 16.5
  },
  {
    origin: 'Brest',
    destination: 'Quimper',
    transporter: 'Intercités',
    distance: 85,
    trainEmission: 3.9,
    avionEmission: 14.8
  },
  {
    origin: 'Saint-Étienne Châteaucreux',
    destination: 'Clermont-Ferrand',
    transporter: 'Intercités',
    distance: 95,
    trainEmission: 4.1,
    avionEmission: 15.7
  },
  {
    origin: 'Paris Gare Montparnasse',
    destination: 'Bordeaux Saint-Jean',
    transporter: 'TGV',
    distance: 580,
    trainEmission: 15.4,
    avionEmission: 110.7
  },
  {
    origin: 'Paris Gare du Nord',
    destination: 'Arras',
    transporter: 'TGV',
    distance: 180,
    trainEmission: 5.0,
    avionEmission: 35.8
  },
  {
    origin: 'Avignon TGV',
    destination: 'Lyon Part-Dieu',
    transporter: 'TGV',
    distance: 230,
    trainEmission: 6.0,
    avionEmission: 42.9
  },
  {
    origin: 'Limoges Bénédictins',
    destination: 'Clermont-Ferrand',
    transporter: 'Intercités',
    distance: 160,
    trainEmission: 6.8,
    avionEmission: 24.1
  },
  {
    origin: 'Toulouse Matabiau',
    destination: 'Montpellier Saint-Roch',
    transporter: 'TGV',
    distance: 245,
    trainEmission: 6.7,
    avionEmission: 47.3
  }
];

// Données de parcours d'avion en France
export const AIRPORT_ROUTES = [
  {
    origin: 'Paris Charles de Gaulle',
    destination: 'Lyon Saint-Exupéry',
    transporter: 'Avion',
    distance: 390,
    trainEmission: 0,
    avionEmission: 95.4
  },
  {
    origin: 'Paris Charles de Gaulle',
    destination: 'Marseille Provence',
    transporter: 'Avion',
    distance: 660,
    trainEmission: 0,
    avionEmission: 160.8
  },
  {
    origin: 'Paris Orly',
    destination: 'Nice Côte d\'Azur',
    transporter: 'Avion',
    distance: 690,
    trainEmission: 0,
    avionEmission: 168.2
  },
  {
    origin: 'Lyon Saint-Exupéry',
    destination: 'Toulouse Blagnac',
    transporter: 'Avion',
    distance: 470,
    trainEmission: 0,
    avionEmission: 115.0
  },
  {
    origin: 'Nantes Atlantique',
    destination: 'Biarritz Pays Basque',
    transporter: 'Avion',
    distance: 400,
    trainEmission: 0,
    avionEmission: 98.5
  },
  {
    origin: 'Paris Charles de Gaulle',
    destination: 'Ajaccio Napoléon Bonaparte',
    transporter: 'Avion',
    distance: 830,
    trainEmission: 0,
    avionEmission: 202.3
  },
  {
    origin: 'Paris Charles de Gaulle',
    destination: 'Brest Bretagne',
    transporter: 'Avion',
    distance: 540,
    trainEmission: 0,
    avionEmission: 130.5
  },
  {
    origin: 'Paris Orly',
    destination: 'Montpellier Méditerranée',
    transporter: 'Avion',
    distance: 570,
    trainEmission: 0,
    avionEmission: 138.1
  },
  {
    origin: 'Marseille Provence',
    destination: 'Nice Côte d\'Azur',
    transporter: 'Avion',
    distance: 150,
    trainEmission: 0,
    avionEmission: 36.2
  },
  {
    origin: 'Lille Lesquin',
    destination: 'Strasbourg',
    transporter: 'Avion',
    distance: 370,
    trainEmission: 0,
    avionEmission: 90.3
  },
  {
    origin: 'Nantes Atlantique',
    destination: 'La Rochelle - Île de Ré',
    transporter: 'Avion',
    distance: 120,
    trainEmission: 0,
    avionEmission: 28.7
  },
  {
    origin: 'Toulouse Blagnac',
    destination: 'Perpignan-Rivesaltes',
    transporter: 'Avion',
    distance: 180,
    trainEmission: 0,
    avionEmission: 42.9
  },
  {
    origin: 'Paris Beauvais Tillé',
    destination: 'Biarritz Pays Basque',
    transporter: 'Avion',
    distance: 750,
    trainEmission: 0,
    avionEmission: 183.0
  },
  {
    origin: 'Grenoble Alpes-Isère',
    destination: 'Chambéry-Savoie',
    transporter: 'Avion',
    distance: 60,
    trainEmission: 0,
    avionEmission: 14.5
  },
  {
    origin: 'Clermont-Ferrand Auvergne',
    destination: 'Limoges-Bellegarde',
    transporter: 'Avion',
    distance: 210,
    trainEmission: 0,
    avionEmission: 50.3
  }
];
