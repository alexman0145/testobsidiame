---
title: G1 - Valérie
updated: 2025-01-30T16:12:17
created: 2025-01-09T16:21:03
---

Récap Sprints précédents

Schéma réseau local pas à jour

Migration depuis environnement de test en Vbox local sur PC perso Valérie vers HyperV en salle 124 puis vers HyperV de la salle serveur

Dans cet HyperV : VM Proxmox.
Dans le Proxmox : conteneurs LXC :
GLPI
Serveur web Apache, Docker, BDD MySQL

pfSense : testé uniquement en Vbox. A migrer sur l’Hyper-V : A faire

VPN : Tailscale + script Linux pour relier toutes les machines des membres de l’équipe
Sur le proxmox de l’hyperv

A faire plus tard : DNS

AWS envisagé (coût inférieur et préférence notamment par rapport à Azure)

Gestion de projet sur GitHub Codespaces car plus simple que AzureDevOps

Pas d’utilisation d’équipements d’interconnexion

Pas de VLANs, pas de DMZ, pas de Wifi

Pas de sauvegarde

NetData : monitoring. Relié à Proxmox. Métriques, logs, historique des commandes

Sprint 4

GitHub : Tableau de gestion des tâches
Assignation : OK
Labels (tags) : OK
Status, Priority : OK
(Itération) N° de sprint : OK
Critères d’acceptance : en commentaire : OK
Milestones (US) : OK
Équivalent des queries : certaines OK

Service en cours de déploiement : Graphite.
Lié à GitHub. Pour avoir des dashboards avec des infos similaires à AzureDevOps : A SUIVRE

Étude des coûts de AWS ? Vite fait. A approfondir.

Priorité :
Choisir quel service AWS correspond au besoin
DNS, hébergement VM

