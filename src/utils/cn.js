import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Fusionne les classes Tailwind en évitant les conflits
 * @param  {...any} inputs - Classes à fusionner
 * @returns {string} - Chaîne de classes fusionnées
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}