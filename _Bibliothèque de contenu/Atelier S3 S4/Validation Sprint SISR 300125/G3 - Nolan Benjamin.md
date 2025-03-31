---
title: G3 - Nolan Benjamin
updated: 2025-01-30T16:52:11
created: 2025-01-09T14:11:59
---

Rappel review du 09/01 :

Création d’une VM dans Azure destinée à recevoir la BDD (à faire) 16 Go RAM
Voir si c’est pas trop, réduire à 8 Go

Étude de coût pour maximiser les performances
Cf groupe de Théo/Maxime
Azure propose la calculatrice

Le 9/1/25 : à faire : création de 2 VM docker avec 8 Go de RAM

Achat d’un nom de domaine OVH 1€ la première année puis 7€/an
Lien entre le domaine et Azure : OK

Création d’un VPN site à site entre les 2 comptes Azure de Nolan et Benjamin pour étendre le crédit disponible : A FAIRE

AzureDevOps :
Sprint 4 créé
US créées : pas toutes, à terminer
Tâches : à terminer
Tags : OK pour les tâches créées
1 tache = 1 compétence
Queries : quelques unes
Heures estimées, heures passées : en cours. Fait pour les tâches saisies
Tâches assignées : OK
Dashboard : en cours de construction

Utilisation de l’IA générative (Claude et ChatGPT) à partir du tableau de compétences

Sauvegarde des prompts : à faire

Priorité :

(pas de déploiement spécifique aux SISR vers le cloud)
Services pour les SLAM dans le cloud
Git dans Azure
BDD
VPN entre 2 VM Azure de 2 comptes différents
Serveur web
Pare-feu avec solution Azure
Sauvegardes avec solution Azure
Supervision du site web avec Sentry

Validation du 30/01 :

CI/CD : phase de test concluante depuis un poste Ops, mais pas encore en production sur le repository des Dev
Git dans Azure remplacé par un contener registry : quand les devs poussent leur code, ça créé une image dans le conteneur registry (une version), qui est connecté au portainer, à partir duquel on peut ensuite déployer une image
BDD : une VM dédiée avec Docker avec Portainer, et une base PostgreSQL est fonctionnelle et les Devs y accèdent
Les coûts du VPN Azure sont prohibitifs. A la place, une connexion réseau virtuel avec la fonctionnalité peering/apairage de Azure permet de relier 2 réseaux virtuels contenant des VM de 2 comptes Azure différents. Ce sont des adresses IP privées virtuelles supplémentaires qui sont utilisées pour créer ce réseau, interne à Azure.
Ce lien va servir à faire passer les flux réseau entre le serveur web et la base de données.
Serveur web : conteneur Docker, Apache avec le site de production.
Un autre serveur web : un autre conteneur Docker, Nginx avec le site d’administration.
2 autres conteneurs : docker pour PHP/Laravel + docker pour dotnet pour l’API qui interroge la BDD.
Un autre conteneur Docker contient MSSQL pour l’administration.
Pare-feu Azure bloque tout sauf le SSH, Portnair, site web prod, HTTP et HTTPS sur des ports spécifiques, les BDD, temporairement le temps de mettre un VPN OpenVPN pour l’accès aux bases. OpenVPN est déjà installé, il ne reste qu’à le configurer.
Reste à autoriser l’API dans le pare-feu.
Les sauvegardes n’ont pas été configurées. Un snapshot (point de restauration) à été fait mais non testé.
Reste à faire des sauvegardes régulières et automatisées.
Sentry est en place et fonctionnel.
Reste à faire de la supervision et alerting.
Documentation : à faire.

A faire :

OpenVPN
Les sauvegardes n’ont pas été configurées. Un snapshot (point de restauration) à été fait mais non testé.
Reste à faire de la supervision et alerting.
Documentation : à faire.

Grille d’évaluation :

16/20

1\. Respect des objectifs techniques définis pour le sprint 4 3/4
• Objectifs atteints en totalité
• Objectifs partiellement atteints
• Objectifs non atteints

2\. Infrastructure système et réseau dans le cloud 6/8
• Fonctionnalités et accessibilité des services
• Gestion des erreurs/alertes et supervision/monitoring
• Sécurité et sauvegardes en place
• Documentation technique claire

3\. Hébergement et déploiement du projet 4/4
• Accessibilité du service

4\. Présentation et justification des choix techniques 3/4
• Explications claires et argumentées
• Justification des décisions techniques
• Capacité à répondre aux questions

