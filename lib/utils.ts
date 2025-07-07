// Import de la fonction `clsx` et du type `ClassValue` depuis la bibliothèque 'clsx'
// `clsx` sert à combiner des classes CSS conditionnelles ou multiples en une seule chaîne de caractères
import { clsx, type ClassValue } from 'clsx';

// Import de la fonction `twMerge` depuis la bibliothèque 'tailwind-merge'
// `twMerge` permet de fusionner et dédupliquer des classes Tailwind CSS, en gérant les conflits (par exemple, entre `p-2` et `p-4`)
import { twMerge } from 'tailwind-merge';

// Fonction utilitaire `cn` qui combine plusieurs classes CSS et gère les conflits Tailwind
export function cn(...inputs: ClassValue[]) {
  // `clsx(inputs)` combine les classes passées en paramètres en une seule chaîne (exclut les valeurs falsy)
  // Puis `twMerge` nettoie cette chaîne pour fusionner les classes Tailwind conflictuelles en gardant la dernière valable
  return twMerge(clsx(inputs));
}
