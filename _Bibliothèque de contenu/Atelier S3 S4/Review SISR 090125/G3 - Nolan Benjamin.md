---
title: G3 - Nolan Benjamin
updated: 2025-01-30T16:50:53
created: 2025-01-09T14:11:59
---

Récap Sprints précédents

Schéma d’infra OK, à mettre à jour quand la migration de conteneurs Docker ZoneProd sera effectuée depuis le Proxmox vers l’Hyper-V

Switch et borne wifi en production branchés en local en salle serveur
1 Hyper-V en salle serveur, héberge :
Veem backup pour les sauvegardes des conteneurs du proxmox et de l’hyper v
1 VM Linux qui héberge Conteneurs dockers :
GLPI lié au LDAP
Portnair qui gère les stacks (stack = ensemble de conteneurs liés. Exemple serveur web, BDD)
Supervision (NetAlertX, Zabbix, Wazuh)
Serveur Win AD LDAP DNS DHCP RADIUS PKI

1 proxmox
1 VM docker
Stack admin appli web SLAM
Nginx
postgreSQL
Nginx en reverse proxy avec redirection des noms des services dans le domaine DNS vers les services en conteneurs : PAS FAIT

1 pfSense en place

1 VPN (désactivé depuis)

Pas de VLANs, pas de DMZ

Sprint 4

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

