---
layout: ../../layouts/LegalLayout.astro
title: "Politique de confidentialité"
description: "Comment Glass It collecte, utilise et protège vos données personnelles."
---

# Politique de confidentialité

**Dernière mise à jour : 15 juillet 2026**

## 1. Introduction

La présente Politique de confidentialité décrit comment Pierre Davoine, entrepreneur individuel — SIRET 914 895 115 00014 (ci-après « **nous** », « **le Vendeur** » ou « **l'Éditeur** »), collecte, utilise et protège les données personnelles traitées dans le cadre de la plateforme **Glass It** (ci-après le « **Service** »), accessible à l'adresse [menu.glass-it.fr](https://menu.glass-it.fr).

Cette politique s'applique à deux catégories de personnes concernées :
- les **Utilisateurs** (gérants d'Établissements — bars, restaurants) titulaires d'un compte sur le tableau de bord ;
- les **Clients finaux** des Établissements, lorsqu'ils passent une commande à table via une page de menu public (fonctionnalité disponible sur le plan Pro).

Le traitement des données est effectué conformément au Règlement (UE) 2016/679 (« RGPD ») et à la loi n° 78-17 du 6 janvier 1978 modifiée (« Informatique et Libertés »).

## 2. Responsable de traitement

Le responsable du traitement des données est Pierre Davoine, joignable à l'adresse **contact@glass-it.fr**.

Pour les données des Clients finaux collectées via la fonctionnalité de commande à table, l'Établissement (Utilisateur du Service) agit en qualité de responsable de traitement pour ses propres finalités commerciales (gestion de ses commandes) ; le Vendeur agit en qualité de sous-traitant au sens de l'article 28 du RGPD pour l'hébergement et le traitement technique de ces données pour le compte de l'Établissement.

## 3. Données collectées

### 3.1 Données des Utilisateurs (compte Établissement)

Lors de la création d'un compte et de l'utilisation du tableau de bord, nous collectons :
- adresse email et mot de passe (géré par Supabase Auth) ;
- informations de l'Établissement : nom, identifiant public (« slug »), logo, image de couverture, couleurs, lien vers les avis Google, paramètres de menu ;
- données de facturation et d'abonnement (identifiant client Stripe, statut d'abonnement, plan souscrit) — les données bancaires elles-mêmes sont traitées exclusivement par Stripe, jamais stockées par nos soins ;
- données techniques de connexion (adresse IP, cookies de session).

### 3.2 Données des Clients finaux (commande à table)

Lorsqu'un client d'un Établissement passe commande depuis la page de menu public, nous collectons :
- nom (obligatoire) ;
- email (facultatif) ;
- numéro de téléphone (facultatif) ;
- contenu et détail de la commande (articles, quantités, table concernée).

Ces informations sont transmises à l'Établissement concerné pour lui permettre de traiter la commande et, le cas échéant, de recontacter le client.

## 4. Finalités du traitement

Les données collectées sont utilisées pour :
- créer et gérer les comptes Utilisateurs et l'accès au tableau de bord ;
- fournir les fonctionnalités du Service (gestion de menu, génération de QR code, prise de commande à table, suivi des commandes, statistiques) ;
- gérer la facturation et les abonnements via Stripe ;
- assurer le support et répondre aux demandes des Utilisateurs ;
- assurer la sécurité du Service et prévenir les usages frauduleux ;
- respecter nos obligations légales et comptables.

Nous ne réalisons aucune prospection commerciale ni profilage à des fins publicitaires à partir des données des Clients finaux.

## 5. Base légale des traitements

- **Exécution du contrat** (article 6.1.b du RGPD) : création et gestion du compte, fourniture du Service, traitement des commandes, facturation.
- **Intérêt légitime** (article 6.1.f) : sécurité du Service, prévention de la fraude, amélioration du produit.
- **Obligation légale** (article 6.1.c) : conservation des données de facturation à des fins comptables et fiscales.
- **Consentement** (article 6.1.a) : le cas échéant, pour toute communication non strictement nécessaire à l'exécution du Service.

## 6. Destinataires des données

Les données sont accessibles :
- à l'équipe opérant le Service, dans la limite de ce qui est nécessaire au support et à la maintenance ;
- à l'Établissement concerné, pour les données de ses propres Clients finaux (commandes) ;
- à nos sous-traitants techniques :

| Sous-traitant | Rôle | Localisation |
|---|---|---|
| **Supabase Inc.** | Hébergement de la base de données et authentification | Suisse (région Supabase `eu-central-2`, Zurich) |
| **Stripe** | Traitement des paiements et de la facturation | UE / États-Unis (clauses contractuelles types) |
| **Vercel Inc.** | Hébergement de l'application web | États-Unis (clauses contractuelles types) |

Nous ne vendons ni ne louons aucune donnée personnelle à des tiers.

## 7. Transferts hors Union européenne

Les données hébergées par Supabase sont stockées en Suisse (région `eu-central-2`, Zurich). La Suisse bénéficie d'une décision d'adéquation de la Commission européenne, garantissant un niveau de protection des données jugé équivalent à celui de l'Union européenne : aucune garantie supplémentaire n'est requise pour ce transfert.

D'autres sous-traitants (notamment Stripe et Vercel) peuvent être amenés à traiter des données aux États-Unis. Dans ce cas, ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types de la Commission européenne ou, le cas échéant, décision d'adéquation applicable au Data Privacy Framework).

## 8. Durée de conservation

- **Données de compte Utilisateur :** conservées pendant toute la durée de vie du compte, puis supprimées ou anonymisées dans un délai de [À COMPLÉTER : ex. 12 mois] après suppression du compte, sous réserve des obligations légales de conservation (données de facturation conservées 10 ans conformément aux obligations comptables).
- **Données des Clients finaux (commandes) :** conservées par l'Établissement pour la durée nécessaire au traitement de la commande, puis archivées ou supprimées selon la politique de conservation propre à chaque Établissement, dans la limite de [À COMPLÉTER : ex. 3 ans] à compter de la dernière commande.
- **Cookies de session :** durée de la session ou de la connexion persistante (selon la configuration Supabase Auth).

## 9. Sécurité des données

Nous mettons en œuvre des mesures techniques et organisationnelles raisonnables pour protéger les données contre l'accès non autorisé, la perte, l'altération ou la divulgation, notamment : chiffrement des mots de passe, connexions chiffrées (HTTPS/TLS), isolement des données par établissement (Row Level Security via Supabase), accès restreint aux données de paiement (traitées exclusivement par Stripe).

## 10. Cookies

Le Service utilise uniquement des cookies strictement nécessaires à l'authentification et au maintien de la session Utilisateur (cookies de session Supabase Auth). Ces cookies étant exclusivement fonctionnels, ils ne requièrent pas de consentement préalable au titre de l'article 82 de la loi « Informatique et Libertés ».

Aucun cookie de mesure d'audience tiers ou publicitaire n'est déposé. Si un tel outil devait être ajouté, la présente politique serait mise à jour et votre consentement recueilli préalablement à tout dépôt.

## 11. Droits des personnes concernées

Conformément au RGPD, toute personne concernée dispose des droits suivants sur ses données :
- **droit d'accès** : obtenir une copie de ses données ;
- **droit de rectification** : corriger des données inexactes ou incomplètes ;
- **droit à l'effacement** : demander la suppression de ses données, sous réserve des obligations légales de conservation ;
- **droit à la limitation du traitement** ;
- **droit à la portabilité** des données fournies ;
- **droit d'opposition**, pour motif légitime ;
- **droit de définir des directives relatives au sort de ses données après son décès**.

Ces droits peuvent être exercés en écrivant à **contact@glass-it.fr**, en précisant l'identité du demandeur. Une réponse sera apportée dans un délai maximal d'un mois.

Pour les données relatives à une commande passée auprès d'un Établissement, la demande peut également être adressée directement à l'Établissement concerné, responsable de traitement pour ces données.

En cas de désaccord persistant, toute personne concernée peut introduire une réclamation auprès de la **Commission Nationale de l'Informatique et des Libertés (CNIL)** — [cnil.fr](https://www.cnil.fr).

## 12. Modification de la présente politique

Cette Politique de confidentialité peut être mise à jour à tout moment pour refléter l'évolution du Service ou de la réglementation. Les Utilisateurs seront informés de toute modification substantielle par email ou notification sur le tableau de bord.

## 13. Contact

Pour toute question relative à la protection de vos données : **contact@glass-it.fr**
