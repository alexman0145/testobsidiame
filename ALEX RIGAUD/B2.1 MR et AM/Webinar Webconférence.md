---
title: Webinar Webconférence
updated: 2024-10-01T09:10:18
created: 2024-09-24T11:33:54
---

Apprendre à utiliser les nouvelles technologies

Besoin de la société -\> Besoins et numérique -\> apporter ses compétences -\> Effacité et ouverture

- Deployer un projet
- Besoin basé sur les ODD
Design

Design Numérique (latitudes)
Besoin d'un acteur numérique

Solution numérique, mais sans la développer

Besoin basé sur la ODD Objectifs de dévelopement durable
Solution numérique à développer

Mesurer l'impact du projet

Amener du matériel d'en d'autre pays.

Mesurer l'impact existant du numérique

Efficacité et ouverture, Modules d'efficacité liées à son domaine.

Mineur Low-tech
3 semaines pour imaginer son futur indésirable.
Répondre au besoin technologique (Low-tech)

Faire appel à ses intervenants

Mettre en place des actions avec des étudiants

Expérimenter de nouvelles pratiques pédagogiques

Sensibiliser ses étudiants et se former sur la sobriété

Organisé un marathon créatif

- Travaille collectif sert à la mise en pratique d'outils de coopération

Testez les projets web de vos étudiants

Intégrer l'éco conception dans le projets

Organisation d'un marathon

- Intégrez des contrôle de sobriété
- Stend
- Faire un quiz

Projet Lattitude

Cas d'un camarade de classe docker :

- Php n'est pas installer de base

Docker run --name testweb -d -p 223:8000 httpd:latest

Démarrage du conteneur en arière plan qui aura pour nom testweb
Ce conteneur démarrera dans le répertoire latest

-d : Démarrage en arrirère plan

-p : correpond au port entrer

docker exec : permet de se connecter au conteneur

Libapach2 : permet d'installer un packet de … (à chercher)

nano /etc/apache2/ports.conf

Modifier le port dont apache 2 communiquera

Nano /etc/apache2/sites-availble/000-default.conf

Configuration de la page par défaut d'Apache

Problèmatique :

Toutes la configurations du server apaches sont réinitialisé à chaque démarrage du pc ou du conteneur

Solution :

- Créer un docker-compose ou un dockerfile

Création d'un docker-compose-lamp gérer sql, php, apache

Il faut mettre les version de php et mysql

Dans le conteneur vers le fichier DockerFile on peut mettre le lien de la base de donné

<https://github.com/sprintcube/docker-compose-lamp>

