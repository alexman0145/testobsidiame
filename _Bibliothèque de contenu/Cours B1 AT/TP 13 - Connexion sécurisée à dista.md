---
title: TP 13 - Connexion sécurisée à distance Linux
updated: 2023-11-09T09:59:01
created: 2022-01-16T21:18:58
---

**==Objectifs :==**

Etablir une connexion sécurisée (authentifiée et chiffrée) en ligne de commande vers un serveur Linux
Transférer des fichiers de façon sécurisée (authentifiée et chiffrée) depuis et vers un serveur Linux
Découvrir les protocoles SSH (Secure Shell), SCP (Secure Copy), et SFTP (Secure File Transfer Protocol)
Installer, configurer et utiliser les logiciels OpenSSH Server, OpenSSH client, Putty, FileZilla Server et WinSCP

**==Pré-requis :==** un serveur Linux, un client Linux, un client Windows
le réseau est correctement configuré sur les machines, elles communiquent entre elles et ont accès à Internet.

**==Introduction== :**

Pour se connecter à un serveur à partir d’un ordinateur, plusieurs protocoles sont disponibles. En effet, la compatibilité des systèmes d’exploitation rend plus facile l’utilisation de certains protocoles plutôt que d’autres. Ces systèmes d’exploitation sont dotés de spécificités bien particulières car ils n’ont pas les mêmes langages ni les mêmes manière de fonctionner, de réagir, de nous présenter les choses. Nous pouvons avoir des systèmes à interfaces graphiques, d’autres sans, en ligne de commande (CLI = Command Line Interface).

Dans ce TP, nous allons nous connecter à un serveur Linux dépourvu d'interface graphique (GUI = Graphic User Interface). Il nous sera donc nécessaire d'utiliser des protocoles en ligne de commande. Nous allons utiliser trois protocoles de connexions à distance : le protocole SSH (Secure Shell) pour les commandes et les protocole SCP (Secure Copy) et SFTP (Secure File Transfer Protocol) pour le transfert des fichiers. Nous établirons une connexion entre 2 machines Linux, et une connexion entre une machine Windows et une machine Linux.

**==ADMINISTRATION EN LIGNE DE COMMANDE==**

**==Connexion SSH Linux / Linux :==**

***Configuration du serveur Linux :***

Le protocole SSH (Secure Shell, ou Shell Sécurisé) sous Linux est simple à installer. Il faut installer «openssh» sur les deux machines à l’aide d’une commande pour pouvoir se connecter à distance.

On met à jour la liste des paquets disponibles avec la commande

\#apt update

![image1](resources/5e3137fdb8584a7886bd25e9bfcbd88a.png)

On installe le paquet OpenSSH Server avec la commande

\#apt install openssh-server

![image2](resources/3263655f4f3b4ec8b5f46eb49dd60db1.png)

On valide avec O + Entrée

![image3](resources/ea841d3f5c2e45a5be94577abf5c2249.png)

On édite le fichier de configuration /etc/ssh/sshd_config dans nano avec la commande

\#nano /etc/ssh/sshd_config

![image4](resources/337e4fa01b894aad9d4a32c49c1c01a9.png)

On parcours ce fichier jusqu'à la section Authentication

![image5](resources/0f8f6b8d483c430abe586848a6992572.png)

On active l'option PermitRootLogin en supprimant le dièse (#) en début de ligne

![image6](resources/776038957b344794afd2d63af5a3c650.png)

On modifie l'option PermitRootLogin en remplaçant prohibit-password par yes pour autoriser le compte root à se connecter en SSH

![image7](resources/70d41127190a42e5bb7e4bb107b248f4.png)

On enregistre les modifications avec Ctrl + O puis Entrée, et on quitte avec Ctrl + X

On redémarre le service SSH avec la commande

\#service sshd restart

![image8](resources/f686bf3790a4453a92d5a8c7184c1faa.png)

On vérifie si le serveur SSH est bien opérationnel avec la commande

\#service sshd status

![image9](resources/cce15e359a134b15a8412f63039ab4df.png)

Le serveur SSH est à présent configuré.

***Configuration du client Linux :***

On se place à présent sur le client Linux.

Comme sur le serveur, on met à jour la liste des paquets disponibles avec la commande

\#apt update

Puis on installe le paquet OpenSSH Server avec la commande

\#apt install openssh-client

On se connecte en ligne de commande, depuis le client vers le serveur, avec la commande

\#ssh utilisateur@adresse_IP_du_serveur

Par exemple

\#ssh root@10.0.1.100

![image10](resources/1067de9d6e3743d28f092be270b2cb2a.png)

Lors de la toute première connexion au serveur SSH, le serveur vous demande de vérifier et de valider l'identité de celui-ci au moyen de son empreinte numérique.

![image11](resources/31cefbd428ae41f6b5bbfe7afbf14453.png)

Répondez yes pour accepter le certificat. Si vous acceptez, ce certificat sera installé sur le client et il ne sera pas nécessaire de valider à nouveau l'identité de ce serveur lors des prochaines connexions.

![image12](resources/06077a8ece364b2f8b8d019c7a3d9aa1.png)

Identifiez-vous

![image13](resources/6e175f65aee24f188c17debfd01cb401.png)

Vous êtes bien depuis le client, connecté sur le serveur. Vous pouvez le voir en vérifiant le hostname présent dans le prompt (nom du serveur dans l'invite de commande).

Si vous affichez l'état du service, vous verrez l'historique du service et des connexions ou tentatives de connexions (ici par exemple le service a :
- Été stoppé
- Été démarré
- Refusé une connexion à cause d'un mauvais mot de passe
- Accepté une connexion

![image14](resources/38af9e4e60fa4effba5ba419280e8400.png)

Vous pouvez donc maintenant administrer votre serveur Linux à distance, en ligne de commande, de manière sécurisée (authentifiée et chiffrée), depuis votre client Linux

**==Connexion SSH Windows / Linux :==**

Il n'y a rien à faire sur le serveur Linux car SSH y est déjà installé et configuré.

Sur un client Windows, on va télécharger et installer un client SSH, comme Putty : [Download PuTTY: latest release (0.79) (greenend.org.uk)](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Le client SSH est très simple, il faut juste indiquer l'adresse IP du serveur Linux, le port (22 par défaut) et valider :

![image15](resources/6151330031c44ff38375bc355faf47ed.png)

Comme pour la connexion depuis le client Linux, lors de la toute première connexion au serveur SSH, le serveur vous demande de vérifier et de valider l'identité de celui-ci au moyen de son empreinte numérique.

![image16](resources/f3d2964dede44e15849ba92b367b539c.png)

Répondez oui pour accepter le certificat. Si vous acceptez, ce certificat sera installé sur le client et il ne sera pas nécessaire de valider à nouveau l'identité de ce serveur lors des prochaines connexions.

Identifiez-vous

![image17](resources/3b7f80b617d94d1b83b6e16af4353347.png)

![image18](resources/df0bf6beb5f045278924652a831b4480.png)

Une fois connecté depuis le client Windows, affichez l'état du service SSH avec la commande

\#service ssh status

Et observez les informations concernant la connexion depuis Windows.

![image19](resources/3bb6e3c6e0134067a342ccdcd6f80132.png)

Vous pouvez donc maintenant administrer votre serveur Linux à distance, en ligne de commande, de manière sécurisée (authentifiée et chiffrée), depuis votre client Windows, avec un logiciel en interface graphique.

**==TRANSFERT DE FICHIERS==**

SFTP (Secure File Transfer Protocol) et SCP (Secure Copy, ou Copie Sécurisée) utilisent tous les deux un canal de communication sécurisé (chiffré et authentifié) en SSH pour permettre la gestion de fichiers et de dossiers via une interface graphique à distance.

Ces 2 protocoles sont très proches et se basent tous les 2 sur SSH. La différence et la comparaison entre les 2 est présentée ici : [SCP vs SFTP](https://bluefinch-esbd.com/fr/blog/scp-vs-sftp/)

***==SFTP==***

Il n'y a rien à faire sur le serveur Linux car SSH y est déjà installé et configuré.

Sur un client Windows, on va télécharger et installer un client graphique prenant en charge SFTP comme FileZilla Client.

[Download FileZilla Client for Windows (64bit x86) (filezilla-project.org)](https://filezilla-project.org/download.php?platform=win64)

Quand on passe la souris sur la zone "Hôte", une infobulle apparait, indiquant la syntaxe à utiliser selon le protocole souhaité.

(FTP n'est pas sécurisé, FTPS et FTPES utilisent SSL/TLS pour sécuriser les communications). Nous souhaitons utiliser le protocole SFTP car c'est celui qui se base sur SSH.

![image20](resources/6604cd9af9db42b98848c1a40a843dc5.png)

On va donc indiquer sftp://Adresse_IP_du_serveur, l'utilisateur, le mot de passe et le port (22 par défaut). On valide la connexion.

![image21](resources/9077a25cd4d14710b622811357fb91a1.png)

L'interface est celle d'un explorateur de fichier avec à gauche l'arborescence locale du client Windows.
A droite l'arborescence distante du serveur Linux.

En haut les logs (fichiers journaux).

![image22](resources/618208e2cbcd42adac655061d84f8329.png)

En bas la liste des fichiers en file d'attente, les transferts échoués et réussis.

![image23](resources/dbde9491c3064e19855a825990deee63.png)

Clic droit ou glisser déposer pour gérer les fichiers.

![image24](resources/5dfe7fb7c0f0498198585b7bd9ae7d90.png)

Clic droit pour créer, supprimer, modifier, renommer ou pour la gestion des permissions (droits d'accès).

![image25](resources/f9adde0fc9614288b9350f7068ebd09c.png)

**==SCP==**

Il n'y a rien à faire sur le serveur Linux car SSH y est déjà installé et configuré.

Sur un client Windows, on va télécharger et installer un client graphique prenant en charge SCP comme WinSCP.

[WinSCP :: Official Site :: Download](https://winscp.net/eng/download.php)

WinSCP permet le transfert de fichiers en SCP et en SFTP. Ces 2 protocoles sont très proches et se basent tous les 2 sur SSH. La différence et la comparaison entre les 2 est présentée ici : [SCP vs SFTP](https://bluefinch-esbd.com/fr/blog/scp-vs-sftp/)

Comme on a déjà testé SFTP avec FileZilla on va cette fois utiliser SCP.

![image26](resources/06944bf2585c45f596ba00fea47e210e.png)

Remplissez l'adresse IP, le n° de port (22 par défaut), l'identifiant, le mot de passe et validez la connexion.

![image27](resources/527be36124e24e75aa2af8b80b3e82ed.png)

Comme pour la connexion depuis le client Linux et le client Windows en ligne de commande, lors de la toute première connexion au serveur SSH, le serveur vous demande de vérifier et de valider l'identité de celui-ci au moyen de son empreinte numérique.

Répondez oui pour accepter le certificat. Si vous acceptez, ce certificat sera installé sur le client et il ne sera pas nécessaire de valider à nouveau l'identité de ce serveur lors des prochaines connexions.

![image28](resources/90e4b4ab9c7d48bbb770500944228fbf.png)

L'interface est celle d'un explorateur de fichier avec en haut à gauche l'arborescence locale du client Windows.
En haut à droite l'arborescence distante du serveur Linux.

![image29](resources/b08d3deb5a3a4377a15bacd978c855d8.png)

Utilisez l'interface graphique pour transférer (envoi et réception) des fichiers dans les 2 sens.

Utilisez l'interface graphique pour :

- Créer
- Modifier
- Renommer
- supprimer,
- Changer les permissions d'accès…

De fichiers et de dossiers d'exmple et de tests que vous placez dans /home

On peut le faire via un clic droit, un glisser-déposer, ou les menus/boutons du logiciels. Par exemple un clic droit puis transférer.

![image30](resources/4ebeb0e6e2af47bda508e821cacb2d18.png)

Le fichier a bien été transféré vers le serveur Linux

![image31](resources/182e44b571ff4fe3b06e266f57ef7283.png)

Testez des transferts de fichiers dans les 2 sens, créez des fichiers, des dossiers. Renommez un fichier, supprimez en un.

Modifiez les droits d'accès.

![image32](resources/3644f243955e403e9d267aa6bf15c25a.png)

Editez un fichier de configuration :

![image33](resources/679b22a9175b428cb1815fa75c5e6270.png)

![image34](resources/6cee6e3f65834519814f3c488a82c1e9.png)

Ce bouton permet de lancer directement une connexion en ligne de commande SSH avec Putty :

![image35](resources/4ccad6c335dd4655bfeeb636fb445d3e.png)

