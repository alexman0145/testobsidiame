---
title: Cours Mise en œuvre d'APACHE
updated: 2024-02-07T14:07:24
created: 2024-02-07T08:07:50
---

Stockage -\> nte

Service -\> apache2

Processeus -\> apache2

/var/www/html sous Debian ou /usr/share/httpd centos

/usr/share/httpd centos

/srv/www à créer chown devweb:devweb
/srv/www puis chmod 0771 /srv/www

Apt install apache2 apache2-data apache2-utils

Installations de apache2

/etc/apache2

/etc/apache2/apache2.conf

Fichier de configuration d'apache2

wget…..

Test : lynx localhost

Sites virtuelle soit virtualhost

Configuration : fichier

/etc/apache2/apache2.conf

Le virtualhost : (résolution de noms doit être en place)

Permet de faire tourner plusieurs site sur le mêmes serveur apache2

Un serveur web [www.1I.fr](http://www.1I.fr) et [www.2I.fr](http://www.2I.fr) (2 sites différents) mais hébergés sur le même serveur.

Le contenue symbolique de /etc/apache2/sites-enabled un lien symnolique vers /etc/apache2/sites-avaibles.

Dans /etc/apache2/sites-avaibles copier le fichier 000-default.conf autant de fois que vous avez des serveurs et activer avec a2ensite site1.conf.

Fichier de configurations des fichiers test1.conf et test2.conf

Site 1

\<VirtualHost \*:80\>
DocumentRoot /var/www/test1.fr
serverName [www.test1.fr](http://www.test1.fr)
\</virtualbox\>

Site2

Désactiver site default : a2dissite 000-default.conf pour paramètrer le nouveau site

Activer site 1 et site 2 :

A2ensite site1.conf, a2ensite site2.conf

Apachectl configtest

Relancer le service apache2

Site 000-default.conf doit être désactiver

Configuration des fichiers test1.conf et test2.conf

/var/log/apache2/access.log

Apt install apache2-utils

Créer un dans le fichier password un compte

htpasswd -c /etc/apache2.htpasswd moncompte

/etc/apt/sources list

Tous les packets télécharger

ls -l

Cat affiche les fichier cacher

Authentification apache

Nano /etc/apache2/sites-enabled/000-default.conf

Relancer service apache2

nano /etc/apache2/apache2.conf

nano /var/www/html/ .htaccess

- Accès à l'authentification apache 2

Athentification Apache

Authentification basique ou via l'AD

Module d'authentification apache2

apt-get install libapache2-mod-authnz-external

Configurer Apache pour utiliser ce script en ajoutant les lignes suivantes dans le fichier de configuration d'Apache php : /usr/lib/sgi-bin/monscript

Systemctl restart apache2

Cloud

Cloud computing Microsoft Learn

La mise à disposition de ressources indormatiques à la demande via internet

Tarification en fonction de votre utilisation.

Un moyen de louer de la puissance de calcul et de l'espace de stockage à un centre de donées d'une autre société

Incluent les serveurs, le stockage, les bases de données, le réseau.

Qubernetist

Service d'hébergeur

Azure, AWS, Google, IBM,…

Pourquoi migrer vers le cloud ?

- Peu d'utilisation de machine physique

- Réduire les coûts

- Exécuter votre infrastructure plus efficacement

- D'adapter vos ressources à mesures que les besoins métiers évoluent.

- Améliorer le travail des utilisateurs.

- Accéder à vos données quels que soient le lieu et le moment.

- Sécuriser les données de l'entreprise.

Quels sont les avantages du cloud computing ?

Fiabilité :

- Pas de temps d'arrêt apparent, même en cas de problème

Extensibilité :

- Ajouter de la RAM ou des processeurs à une machine

- Ajouter des machines virtuelles à votre configurations.

Géodistribution :

- Les applications et les données peuvent être déployées dans des centres de données régionaux dans le monde entier.
- 
- 
- Reprise d'activité après sinistre :

- Sauvegarde cloud,
- Réplication des données et de la géodistribution
- Sécurisées en cas de sinistre.

Inconvénients

Attaque potentiel et les services virtuels peuvent être mise hors fonction

Sécurité vis-à-vis stockage.

Sécurité et la confidentialité des données

La sécurité des locaux.

- Dépendance de prestataire (Google Cloud Platform, AWS, Azure, etc…).
SLA

Le coût du cloud

Dépendance de la connexion internet

Performance

Panne pouvant être perturber par une organisation.

Perte de la maîtrise du système informatique

IaaS (Infrastructure as a service)

Paas (Platform as a service)

Saas (Software as a service)

Local : Applications, Stockage de données, Runtime, middleware, OS, Virtualisations, Serveurs, stockages mise en réseau.

Iaas : Applications, Stockage de données, Runtime, middleware, OS, Virtualisations, Serveurs, stockages mise en réseau.

Paas : Applications, Stockage de données, Runtime, middleware, OS, Virtualisations, Serveurs, stockages mise en réseau.

Saas : Applications, Stockage de données, Runtime, middleware, OS, Virtualisations, Serveurs, stockages mise en réseau.

Le fournisseur gère

Le client gère

Qu'est ce que l'informatique Serverless

Permet aux développer :

Créer des applications plus rapidement

Elémine les nécessiter de gérer l'infrastructure.

Provisionne,

Met à l'echelle et gère automatiquement l'infrastructure nécessaire pour l'éxécuter.

Qu'est ce que le clouds publics, privés et hybrides ?

Cloud public : Services fournis via l'internet public, accessible à tous.

Ses services sont mis à disposition via internet

Cloud privé : Les ressources de calcule de stockage sont gérer par des entreprise et des personne professionnel

Cloud hybride : Cloud faisant à la fois public et privé en autorisant le partage de données et application entre ceux-ci.

Gouvernance

Cost amenagement Gestion de coûts

- Tarifs à l'utilisation

- La planification des ressources

Security Baseline

La base de la sécurité

- La séparation des responsabilités

- La gestion des identités et des accès

- La protection des données

Ressource consistency

Base d'identité

- Autenfication
- Gestion des périphériques
- Gestion des risques

Identity baseline

Cohérence des ressources

- L'auto-provisionnemnet

- L'auto-équilibrage

Deployement Acceleration

Acceleration des déploiements

- L'utilisation des scripts des déploiements

- L'utilisation de conteneurs

- L'utilisation as code.
