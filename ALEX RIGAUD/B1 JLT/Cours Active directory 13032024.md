---
title: Cours Active directory 13/03/2024
updated: 2024-05-17T08:39:14
created: 2024-03-13T08:38:41
---

Protocole LDAP : os server Windows (obligatoire)

- Contrôleurs de domaine -\> périphérique membre du domaine
- DNS

Active directory : est un annuaire servant d'emplacement d'administration unique

- Accès total aux ressources de l'annuaire en une seule session

Fonctions du service annuaire

Les ressources utilisé sont :

- Organiser
- Gérer
- Contrôler

Objectif d'un service d'annuaire :

Identification des ressources

L'attribution de noms

La description

Les accès

L'administration

La sécurité

Avantage d'Active directory

- Intégrations DNS
- Évolutivité
- Administration centralisée
- Administration déléguée

Objets Active Directory

- Les objets représentent les ressources du réseau

- Les attributs stockent les informations sur un objet

Le protocle LDAP offre un moyen de communiquer avec Active Directory en attribuant un chemin d'accès unique à chaque objet de l'annuaire

Les chemins d'accès LDAP (Distinguished Name) comprennent :

- Les noms uniques

CN = David Dubois, OU = personnel, DC=sbsio, DC=fr

- Les noms uniques relatifs

Domaines

- Limite de sécurité

- L'administrateur du domaine ne peut administrer que son domaine, ou il faut qu'il soit habilité dans d'autres domaines Core.

- Un domaine est une unité de duplication

Le contrôleur de domaine participent à la duplication et contiennent une copie intégrale des informations de l'annuaire pour leur domaine.

Nom netbios -\> Windows (16 octets) & (pas de caractère spéciale ni de chiffre)

Nom hôte -\> Host & DNS (255 octets) & (caractère spéciaux inclues)

Un domaine est implémenté dans un contrôleur

Ajout d'UO

Modèle d'administration de réseau :

- Comptabilité
- Utilisateurs
- Ordinateurs

Exemple de Structure organisationnelle :

- Toulouse
- Ventes
- Comptabilité

- Pour grouper des objets

Nom : Nom unique relatif LDAP
Exemple : OU=MonunitéOrganisation

Nom : Nom unique LDAP
Exemple : OU=MonunitéOrganisation, DC=microsoft,DC=com

Nom : Nom complet
Exemple : Microsoft.com/MonUnitéOrganisation

Forêt : Un essemble de domaine qui est composer d'un domaine principale ayant un sous-domaine.

Structure physique de AD

Contrôleurs de domaine :

- Participent à la duplication d'active directory
- Exécutent des rôles d'opérations principales simples dans un domaine

Sites :

- Optimisations du trafic lié à la duplication
- Permettent aux utilisateurs d'ouvrir une session sur un contrôleur de domaine en utilisant une connexion rapide et fiable.

Vue d'ensemble de la création d'un domaine Windows 2K.

- Domaine correspondant à l'unité administrative de base d'un réseau Windows 2K.

- Domaine créé est le domaine racine de l'ensemble de la forêt

- Installation d'AD pour créer des domaines et des contrôleurs de domaines

Configuration de l'installation d'AD

- Ordinateur exécutant Windows 2k Server

- Espace d'au moins 200 Mo pour AD et 50 Mo pour les fichiers journaux

- Partition ou volume au format NTFS

- Protocole TCP/IP installé et configuré pour utiliser le système DNS

- Privilèges administratifs nécessaires pour créer un domaine sur un réseau existant

DHCP : attribution de plages d'adresse IP

Création d'un premier nom de domaine

- Lancer l'Assistant Installation d'AD
- Choisir le contrôleur de domaine et le type de domaine
- Indiquer les informations requises
  - Noms de domaine, noms DNS et NetBIOS
  - Emplacements de la base de données, du journal et du volume système partage.
  - Autorisations
  - Mot de passe

