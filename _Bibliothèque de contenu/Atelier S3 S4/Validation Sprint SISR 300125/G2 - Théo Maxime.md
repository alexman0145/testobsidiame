---
title: G2 - Théo Maxime
updated: 2025-01-30T16:51:58
created: 2025-01-09T13:13:12
---

Rappel review du 09/01 :

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

Validation du 30/01 :

Pipeline mis en œuvre, en partie opérationnel : pour le framework Laravel et l’API
Il manque encore des tests, mais c’est en cours
Sauvegardes : suite à un problème de MFA, solution de secours mise en place avec point de restauration Azure. Cependant non testé
EntraID non mis en place car trop cher et pas accessible (seulement pour l’administrateur). Pas de problème cependant car authentifications possibles mais non centralisées.
Monitoring en place avec Grafana. Prometheus va chercher les logs des machines et des plugins permettent de mettre en forme des graphes. Zabbix est en place mais non configuré totalement. Pas d’alertes mail en place pour le moment.
Sécurité pas encore étudiée en détails. Pare-feu par défaut de Azure activé, bloque tout sauf 80, 443 et 25000 (SSH) avec authentification par clés.
Hébergement de l’API dans un conteneur avec Kestrel ASP.NET 8.0 : mis en œuvre et fonctionnel.
Hébergement de REACT dans un conteneur : mis en œuvre et fonctionnel.

A faire :
Solution de sauvegarde cloud
Alerting pour la supervision cloud
Documentation à peine commencée

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
