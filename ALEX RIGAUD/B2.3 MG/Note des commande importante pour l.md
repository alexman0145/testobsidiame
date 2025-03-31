---
title: Note des commande importante pour la configuration...
updated: 2024-02-06T21:44:46
created: 2024-01-24T11:31:46
---

Commande permettant de vérifier l'état des services de l'image docker possèdant les service LAMP :

docker-compose up -d

On aura des résultat mysql8, phpmyadmin et php8

Mysql = un système de gestion de base de donné relationnel

phpMyAdmin = un serveur de gestion de base donné de MySQL et MariaDB

php = Un langage pour la création de page dynamique via un serveur web

Redis = Système permettant à la gestion de base donné utilisant des clés de valeur extensible via serveur (à la différence de regedit qui utilise ses clé mais via en machine locale).

\[+\] Building 0.0s (0/0)                  docker:desktop-linux
\[+\] Running 4/4
✔ Container lamp-mysql8   Running                   0.0s
✔ Container lamp-redis    Started                   0.0s
✔ Container lamp-phpmyadmin Started                   0.0s
✔ Container lamp-php8    Running                   0.0s

Affiche les caractéristiques du l'image par exemple la version du php utiliser et des fichiers de configuration on peut retrouver aussi les port associé à chacun de ses services.

cat .env

1er Exemple :

La premier partie affiche les différente version de php

\# Possible values: php54, php56, php71, php72, php73, php74, php8, php81, php82

Valeur de la version php

PHPVERSION=php8

Fichier où son stocker les fichiers de configurations

DOCUMENT_ROOT=./www
APACHE_DOCUMENT_ROOT=/var/www/html
VHOSTS_DIR=./config/vhosts
APACHE_LOG_DIR=./logs/apache2
PHP_INI=./config/php/php.ini
SSL_DIR=./config/ssl

2ème exemple :

Affectation du port MySQL

\# If you already have the port 3306 in use, you can change it (for example if you have MySQL)
HOST_MACHINE_MYSQL_PORT=3306

On peut également changer le port d'écoute du service MySQL

Afficher tous les service filtrant ceux qui sont en écoute

netstat -an \| grep LISTEN

Afficher l'état des conteneur en cours d'execution on peut voir sur la commande le délai

Docker ps

CONTAINER ID  IMAGE      COMMAND         CREATED   STATUS     PORTS                     NAMES
e9189a54d739  lamp-webserver  "docker-php-entrypoi…"  6 days ago  Up 29 minutes  0.0.0.0:4040-\>80/tcp, 0.0.0.0:450-\>443/tcp  lamp-php8
f348d2071482  phpmyadmin    "/docker-entrypoint.…"  6 days ago  Up 27 minutes  0.0.0.0:8080-\>80/tcp, 0.0.0.0:8443-\>443/tcp  lamp-phpmyadmin
f06a0d92e865  redis:latest   "docker-entrypoint.s…"  6 days ago  Up 27 minutes  127.0.0.1:6379-\>6379/tcp           lamp-redis
11762d7f58a0  lamp-database  "docker-entrypoint.s…"  6 days ago  Up 29minutes  127.0.0.1:3306-\>3306/tcp, 33060/tcp      lamp-mysql8

La commande netstat sans aucun filtre indique tous les processus en cours d'execution sur Mac

kctl    0   0   19   6 com.apple.netsrc
kctl    0   0   20   6 com.apple.netsrc
kctl    0   0   21   6 com.apple.netsrc
kctl    0   0   22   6 com.apple.netsrc
kctl    0   0   23   6 com.apple.netsrc
kctl    0   0   24   6 com.apple.netsrc
kctl    0   0   25   6 com.apple.netsrc
kctl    0   0   26   6 com.apple.netsrc
kctl    0   0   27   6 com.apple.netsrc
kctl    0   0   28   6 com.apple.netsrc
kctl    0   0   29   6 com.apple.netsrc
kctl    0   0   30   6 com.apple.netsrc
kctl    0   0   31   6 com.apple.netsrc
kctl    0   0   1   7 com.apple.network.statistics
kctl    0   0   2   7 com.apple.network.statistics
kctl    0   0   3   7 com.apple.network.statistics

Commande permettant de changer le mot de passe pour se connecter à la base de donné SQL.

sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Azerty@123' -p 4041:4041 --name sql_server_container -d mcr.microsoft.com/mssql/server

Unable to find image 'mcr.microsoft.com/mssql/server:latest' locally
2024/01/24 10:54:49 must use ASL logging (which requires CGO) if running as root
latest: Pulling from mssql/server
25fa6962a0ca: Pull complete
22fbfac82290: Pull complete
f57446ead6b1: Pull complete
Digest: sha256:136be187bb12c94b150eb3e48fbc26ae62a81d39a2c7c913be2f3d7ebbddfbad
Status: Downloaded newer image for mcr.microsoft.com/mssql/server:latest
f320e4bae917d527026f45cfd138d32e5c8be770cfac9356395c032e167d35e5
docker: Error response from daemon: driver failed programming external connectivity on endpoint sql_server_container (1f25081380f24d027ae10a24a860d08c1ed63d71eb4df3f4410b0c2f1fd47bf7): Bind for 0.0.0.0:4040 failed: port is already allocated.
(base) user@MacBook-Air-de-User docker-compose-lamp % sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Azerty@123' -p 4041:1433 --name sql_server_container -d mcr.microsoft.com/mssql/server
docker: Error response from daemon: Conflict. The container name "/sql_server_container" is already in use by container "f320e4bae917d527026f45cfd138d32e5c8be770cfac9356395c032e167d35e5". You have to remove (or rename) that container to be able to reuse that name.
See 'docker run --help'.
(base) user@MacBook-Air-de-User docker-compose-lamp % docker rm
"docker rm" requires at least 1 argument.
See 'docker rm --help'.

Usage: docker rm \[OPTIONS\] CONTAINER \[CONTAINER...\]

Remove one or more containers

sudo docker run -e 'ACCEPT_EULA=Y' -e 'SA_PASSWORD=Azerty@123' -p 4041:1433 --name sql -d mcr.microsoft.com/mssql/server

42a88d859d796cc92ea85c280b3a8f1d6c623a76b4e6a3071246ec1e90ab3ab0
(base) user@MacBook-Air-de-User docker-compose-lamp % docker ps
CONTAINER ID  IMAGE              COMMAND         CREATED     STATUS     PORTS                     NAMES
42a88d859d79  mcr.microsoft.com/mssql/server  "/opt/mssql/bin/perm…"  9 seconds ago  Up 6 seconds  0.0.0.0:4041-\>1433/tcp            sql
e9189a54d739  lamp-webserver          "docker-php-entrypoi…"  6 days ago   Up 51 minutes  0.0.0.0:4040-\>80/tcp, 0.0.0.0:450-\>443/tcp  lamp-php8
f348d2071482  phpmyadmin            "/docker-entrypoint.…"  6 days ago   Up 49 minutes  0.0.0.0:8080-\>80/tcp, 0.0.0.0:8443-\>443/tcp  lamp-phpmyadmin
f06a0d92e865  redis:latest           "docker-entrypoint.s…"  6 days ago   Up 49 minutes  127.0.0.1:6379-\>6379/tcp           lamp-redis
11762d7f58a0  lamp-database          "docker-entrypoint.s…"  6 days ago   Up 51 minutes  127.0.0.1:3306-\>3306/tcp, 33060/tcp      lamp-mysql8

