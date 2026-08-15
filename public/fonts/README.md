# Polices auto-hébergées

Fichiers `.woff2` variables (un seul fichier couvre les graisses 400 → 700),
récupérés depuis l'API Google Fonts et servis désormais depuis notre origine.

| Fichier | Famille | Sous-ensemble |
| --- | --- | --- |
| `dm-sans-latin.woff2` | DM Sans | latin |
| `dm-sans-latin-ext.woff2` | DM Sans | latin-ext (exposants ordinaux : « Lyon 2ᵉ ») |
| `playfair-display-latin.woff2` | Playfair Display | latin |
| `playfair-display-italic-latin.woff2` | Playfair Display *italique* | latin |

Les deux familles sont sous licence **SIL Open Font License 1.1**, qui autorise
la redistribution et l'auto-hébergement.

Les `@font-face` correspondants sont déclarés en tête de `src/styles/global.css`,
avec les `unicode-range` d'origine — le navigateur ne télécharge `latin-ext` que
si la page contient réellement un de ces caractères.

## Mettre à jour

Récupérer la CSS de Google avec un User-Agent de navigateur récent, puis
télécharger les URL `fonts.gstatic.com` des blocs `/* latin */` et
`/* latin-ext */` :

```sh
curl -s "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..700;1,400..700&family=DM+Sans:wght@400..700&display=swap" \
  -H "User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
```

Si les `unicode-range` changent, reporter les nouvelles valeurs dans `global.css`.
