---
title: G1 - Valérie
updated: 2025-02-20T14:08:41
created: 2025-01-09T16:21:03
---

Rappel review du 09/01 :

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

Validation du 30/01 :

Testé un service à part pour les queries. Finalement un dashboard en groupe et un en individuel. En groupe c’est partageable mais pas l’individuel. Du progrès sur les queries.
Graphite finalement abandonné car trop d’informations dont certaines inutiles. Finalement le groupe reste sous GitHub avec un nouveau plug-in pour le dashboard : Finalement GitHubCharts est utilisé à la place.
AWS étudié : coûts plus intéressants que Azure : un an gratuit avec compte étudiant. Beaucoup de services proposés malgré une complexité accrue par rapport à Azure.
Utilisation de l’IA pour faire du tri dans les services proposés et ne garder que les services souhaités.
Les servies gardés : EC2 pour faire des VM, les volumes de stockage avec des VM déjà installées et pré-configurées et installées par Amazon. Permet un gain de temps. EC2 fournit aussi une adresse IP publique. Intègre un pare-feu, paramétré pour tout bloquer sauf HTTP, HTTPS, SSH.
IAM : autre service utilisé pour faire des comptes administrateurs et des comptes utilisateurs dans les VM.
Service route 53 pour DNS pour l’accès externe : encore en cours. Nom de domaine à acheter mais configuration déjà effectuée (zone, A, CNAME, SOA, NS…)
Service ACM : certificate manager à relier à route 53 pour générer des certificats HTTPS.
Il faudrait améliorer la documentation : ne pas se contenter de captures d’écran du résultat final mais rédiger de vrais modes opératoires.
VPN en place pour se connecter à la VM hébergeant les données de l’application, depuis les postes personnels des membres du groupe. Le VPN permet aussi d’accéder à d’autres machines de l’infra.
Pas de sauvegardes, pas de point de restauration, réplication pas encore en place.
Monitoring : NetData sous Linux. Supervise en local mais rien dans le cloud pour l’instant.
Service accessible dans un conteneur avec Laravel, nextjs, postgresql jusqu’au weekend dernier mais ne fonctionne plus depuis l’injection des données. Pour l’infrastructure c’est OK

A faire :
Nom de domaine DNS
Certificats HTTPS
Sauvegarde cloud
Monitoring, Alerting cloud
Documentation

Grille d’évaluation :

14/20

1\. Respect des objectifs techniques définis pour le sprint 4 3/4
• Objectifs atteints en totalité
• Objectifs partiellement atteints
• Objectifs non atteints

2\. Infrastructure système et réseau dans le cloud 5/8
• Fonctionnalités et accessibilité des services
• Gestion des erreurs/alertes et supervision/monitoring
• Sécurité et sauvegardes en place
• Documentation technique claire

3\. Hébergement et déploiement du projet 3/4
• Accessibilité du service

4\. Présentation et justification des choix techniques 3/4
• Explications claires et argumentées
• Justification des décisions techniques
• Capacité à répondre aux questions
