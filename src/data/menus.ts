/**
 * Showcase menus — clickable cards in the "Exemples" section.
 *
 * Edit this file to add / remove / reorder the client menus shown
 * on the landing. Each entry becomes one <MenuCard /> in the grid.
 *
 * `href` should point to the real public menu URL of that client.
 */

export interface ShowcaseMenu {
  /** Restaurant display name. Use **bold** part + italic part split via `nameRest` for the Playfair italic accent. */
  name: string;
  /** Optional italic-styled suffix (rendered in <i>). e.g. "Arts" in "Café des Arts". */
  nameItalic?: string;
  /** City / location. */
  city: string;
  /** Short cuisine descriptor. */
  cuisine: string;
  /** Cover photo URL (Unsplash or your own). */
  image: string;
  /** Where clicking the card sends the user. */
  href: string;
}

export const showcaseMenus: ShowcaseMenu[] = [
  {
    name: 'Café des',
    nameItalic: 'Arts',
    city: 'Lyon 2ᵉ',
    cuisine: 'Bistrot',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80',
    href: 'https://glass-it.vercel.app/cafe-des-arts',
  },
  {
    name: 'Brasserie',
    nameItalic: 'Joséphine',
    city: 'Paris 11ᵉ',
    cuisine: 'Brasserie',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80',
    href: 'https://glass-it.vercel.app/brasserie-josephine',
  },
  {
    name: 'Rooftop',
    nameItalic: '42',
    city: 'Marseille',
    cuisine: 'Cocktails',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=900&q=80',
    href: 'https://glass-it.vercel.app/rooftop-42',
  },
  {
    name: "L'",
    nameItalic: 'Atelier',
    city: 'Bordeaux',
    cuisine: 'Gastronomique',
    image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&q=80',
    href: 'https://glass-it.vercel.app/latelier',
  },
  {
    name: 'Café',
    nameItalic: 'Miroir',
    city: 'Nantes',
    cuisine: 'Café · Brunch',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=900&q=80',
    href: 'https://glass-it.vercel.app/cafe-miroir',
  },
  {
    name: 'Le',
    nameItalic: 'Comptoir',
    city: 'Strasbourg',
    cuisine: 'Bar à vins',
    image: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?w=900&q=80',
    href: 'https://glass-it.vercel.app/le-comptoir',
  },
];
