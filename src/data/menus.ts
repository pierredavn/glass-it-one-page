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
  /**
   * Photo héros : l'image plein cadre de la carte (et du menu).
   * URL *sans* paramètres — MenuShowcase ajoute lui-même le redimensionnement
   * (`auto=format`, srcset) pour ne pas servir du 900px à une vignette.
   */
  hero: string;
  /** Photo de profil (logo / façade), affichée en pastille ronde. URL sans paramètres. Optionnelle. */
  avatar?: string;
  /** Where clicking the card sends the user. */
  href: string;
}

export const showcaseMenus: ShowcaseMenu[] = [
  {
    name: 'Café des',
    nameItalic: 'Arts',
    city: 'Lyon 2ᵉ',
    cuisine: 'Bistrot',
    hero: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
    avatar: 'https://images.unsplash.com/photo-1521017432531-fbd92d768814',
    href: 'https://menu.glass-it.fr/cafe-des-arts',
  },
  {
    name: 'Brasserie',
    nameItalic: 'Joséphine',
    city: 'Paris 11ᵉ',
    cuisine: 'Brasserie',
    hero: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0',
    avatar: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4',
    href: 'https://menu.glass-it.fr/brasserie-josephine',
  },
  {
    name: 'Rooftop',
    nameItalic: '42',
    city: 'Marseille',
    cuisine: 'Cocktails',
    hero: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288',
    avatar: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187',
    href: 'https://menu.glass-it.fr/rooftop-42',
  },
  {
    name: "L'",
    nameItalic: 'Atelier',
    city: 'Bordeaux',
    cuisine: 'Gastronomique',
    hero: 'https://images.unsplash.com/photo-1552566626-52f8b828add9',
    avatar: 'https://images.unsplash.com/photo-1559339352-11d035aa65de',
    href: 'https://menu.glass-it.fr/latelier',
  },
  {
    name: 'Café',
    nameItalic: 'Miroir',
    city: 'Nantes',
    cuisine: 'Café · Brunch',
    hero: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24',
    avatar: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085',
    href: 'https://menu.glass-it.fr/cafe-miroir',
  },
  {
    name: 'Le',
    nameItalic: 'Comptoir',
    city: 'Strasbourg',
    cuisine: 'Bar à vins',
    hero: 'https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0',
    avatar: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3',
    href: 'https://menu.glass-it.fr/le-comptoir',
  },
];
