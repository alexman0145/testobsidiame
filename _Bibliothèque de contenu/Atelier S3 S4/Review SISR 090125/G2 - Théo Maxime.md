---
title: G2 - Théo Maxime
updated: 2025-01-30T16:12:49
created: 2025-01-09T13:13:12
---

Récap Sprints précédents

Schéma d’infra OK

Switch et routeur et borne wifi en production branchés en local
Borne wifi en salle 123
Routeur et Switch en salle serveur
1 Hyper-V en salle 124, héberge :
1 VM Linux qui héberge Conteneurs dockers :
GLPI lié au LDAP
Portnair qui gère les stacks (stack = ensemble de conteneurs liés. Exemple serveur web, BDD)
Stack Laravel BDD Data
Nginx en reverse proxy avec redirection des noms des services dans le domaine DNS vers les services en conteneurs
Dotnet
Persistance des données grâce à des volumes

Serveur Win AD LDAP DNS

Interdiction des connexions HTTP et redirection en HTTPS par le reverse proxy

Radius sur le serveur Windows avec WPA2 Professionnel
Ne fonctionne pas pleinement mais pas prioritaire
Radius marche pas mais Wifi sécurisé WPA 2 classique OK

Sauvegarde avec Veem version gratuite
Non finalisé en local, à faire en cloud. Voir solution de sauvegarde de Azure

Pare-feu pfSense envisagé mais non fait en local, remplacé en local par routeur Cisco
à faire en cloud avec solution Azure

Finalement pas de VLANs
Pas de DMZ

Sprint 4

AzureDevOps : backlog OK, exhaustif mais pas encore taggué : à faire
RU taggués, description, acceptance criteria, priorités : OK
Temps sur les tâches : OK
Assignation par personne : OK

Prompts IA générative pour les RU, les critères, les taches : à sauvegarder et mettre à dispo
A partir du tableau des compétences + ? (à préciser)
B1 et B3 pour les RU
B2 pour les taches
Question : pourquoi pas de B3 dans les tâches ?

Dashboard pour suivi du projet, avancée du travail, temps passé, analyse des écarts : revoir la présentation et lisibilité. Principe des queries OK mais voir la pertinence et/ou présentation globale

Pas de migration auto possible des serveurs du local vers le cloud
Reprise des dockercompose pour réinstallation semi-automatique dans le cloud

Étude de coûts des VM
Besoin de bcp de RAM pour les BDD (l’an dernier ça ramait)
Utilisation d’un calculateur de coût Azure
Optimisation au max. Min 2,30€/mois (IP publique, adresse) puis environ 100h pour 10 à 20€.
Allumage uniquement pendant les périodes d’utilisation
Programmation pour extinction auto tous les jours à 17h

Reconfiguration du reverse proxy dans le cloud
IONOS : achat d’un nom de domaine 1€/mois
Lien avec infra Azure
Tous les services sont accessibles depuis Internet via leur noms, dans le domaine

Fichier définitif pour l’étude de coût finale à finaliser
RU déjà faits
Renseignements pour équivalents AD sur Azure : EntraID (nouveau non) : continuer à se documenter
Monitoring et sauvegarde : à faire
Mise en place de la pipe-line pour mise à jour, déploiement et mise en prod automatique : CI/CD : à faire en urgence
Sécurité : à faire

Ordre de Priorité :
Pipeline
Sauvegarde
EntraID
Monitoring de conteneurs
Sécurité, étude des besoins

