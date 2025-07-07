# Transport Carbon Emission Calculator - EmpreinteGES

## Equipe :

## Equipe :

#### M1 DEV WEB : *Clément VITRAT-GUTIERREZ, Enzo CHAMANIER*

#### M1 DEV IOT : *Samy BOUDAOUD, Fayrouz SAADAOUI, Melvin TOMEZAK*

#### M1 CYBER : *Enzo CANALE*

#### M1 DATA : *Alexandre GUEYDAN, Emilia KARDACHE, Grégoire LABADIE*

#### M1 INFRA : *Billel SOUANE*

## Description générale

Ce projet est une application TypeScript permettant de modéliser différents trajets de transport (train, avion, etc.) et de calculer les émissions de carbone associées. Il facilite l'analyse de l'impact environnemental des déplacements en fonction du mode de transport, de la distance parcourue et des coefficients d'émission spécifiques.

## Architecture du projet

```
.
├── app/                      # Dossier principal pour l'application
│   ├── components/              # Composants réutilisables
│   │   ├── Transport/              # Composants liés au transport
│   │   │   ├── TransportForm.tsx
│   │   │   ├── TransportRow.tsx
│   │   │   └── TransportSection.tsx
│   │   ├── Footer.tsx                  # Pied de page
│   │   └── Header.tsx                  # En-tête
│   ├── layout.tsx                  # Mise en page principale de l'app
│   ├── page.tsx                    # Page d'accueil
│   └── globals.css                 # Feuille de style globale
│
├── hooks/                   # Custom hooks (ex. : notifications)
│   └── use-toast.ts
│
├── lib/                          # Fonctions utilitaires liées à la logique métier
│   ├── carbonCalculations.ts        # Calculs d'émissions de carbone
│   ├── transportData.ts             # Données ou fonctions liées aux transports
│   └── utils.ts                     # Fonctions utilitaires diverses
│
├── public/                  # Fichiers statiques (favicon, images…)
│   └── favicon.ico
│
├── types/                   # Définition des types TypeScript
│   └── transport.ts
│
├── .eslintrc.json           # Configuration ESLint
├── .gitignore               # Fichiers à ignorer par Git
├── components.json          # Configuration (optionnelle) des composants
├── next-env.d.ts            # Déclarations d'environnement pour Next.js
├── next.config.js           # Configuration Next.js
├── package.json             # Dépendances du projet
├── package-lock.json        # Lockfile npm
├── postcss.config.js        # Configuration PostCSS
├── tailwind.config.ts       # Configuration Tailwind CSS
├── tsconfig.json            # Configuration TypeScript
└── README.md                # Documentation du projet
```

## Description des fichiers

| Fichier                              | Description                                                                 |
| ------------------------------------ | --------------------------------------------------------------------------- |
| `components/Transport/`              | Composants spécifiques à la gestion des moyens de transport.                |
| `components/Footer.tsx Header.tsx`   | Composants dinterface généraux (utilisés dans la mise en page).             |
| `lib/`                               | Contient la logique métier (ex. : calcul d’émissions de carbone).           |
| `types/`                             | Tous les types TypeScript sont centralisés ici.                             |
| `hooks/`                             | Contient les hooks personnalisés utilisés dans l'application.               |
| `app/layout.tsx`                     | Mise en page de l’application (layout global).                              |
| `app/page.tsx`                       | Page d’accueil (entry point principal).                                     |
| `package.json`                       | Gère les scripts, dépendances, et configuration de build.                   |
| `tsconfig.json`                      | Configuration du compilateur TypeScript.                                    |
| `README.md`                          | Documentation du projet (vous lisez ce fichier).                            |

## Fonctionnalités

- **Modélisation des trajets de transport** : train, avion, autres modes possibles.
- **Représentation des coordonnées des villes** pour un contexte géographique précis.
- **Calcul des émissions de carbone** basé sur la distance et le type de transport.
- **Gestion des erreurs et validation des données** pour assurer la robustesse des calculs.
- **Possibilité d’étendre facilement** avec de nouveaux types de transport ou coefficients.

## Langages et technologies utilisés

- **TypeScript** : typage statique pour une meilleure maintenance et robustesse.
- **Node.js** : pour l’exécution locale des scripts (optionnel).
- **Outils recommandés** : npm ou yarn pour la gestion des dépendances.

## Installation et utilisation

### 1. Cloner le projet

```bash
git clone https://github.com/clement-vitrat/EmpreinteGES.git
cd EmpreinteGES
```

### 2. Installer les dépendances

```bash
npm install
```

### 3. Compiler le projet

```bash
npm run build
```

### 4. Lancer le projet

```bash
npm start
```

## Instruction pour le développement

- **Modifie les trajets** dans `transportData.ts` pour ajouter ou modifier les déplacements.
- **Utilise les fonctions** dans `carbonCalculations.ts` pour calculer les émissions selon tes besoins.
- **Lance le projet** avec `npm start` ou `npm run dev` ou via ton IDE favori.

