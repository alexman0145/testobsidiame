---
title: TP 13 - Connexion sécurisée à distance Linux
updated: 2023-12-14T11:13:31
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

![image1](resources/b507ab24cb284210816f9ddf4bccbc37.png)

Si les paquet ne sont pas à jour

Utiliser la commande

apt upgrade

Un message va apparaître disant si on veut confirmer la mise à jour des paquets

Patientez cela devrait prendre plusieurs minutes

![image2](resources/0314e8c994e8427393aa30267f9a38c4.png)

On installe le paquet OpenSSH Server avec la commande

\#apt install openssh-server

![image3](resources/79e89a14a2284b99a1a93f41e6363eb1.png)

On valide avec O + Entrée

![image4](resources/17faa4a68c834e7986dda7078e6c8d21.png)

On édite le fichier de configuration /etc/ssh/sshd_config dans nano avec la commande

\#nano /etc/ssh/sshd_config

![image5](resources/8213e1de6b6a47f38109501f3db33f06.png)

On parcours ce fichier jusqu'à la section Authentication

![image6](resources/19652192163e484e84254aa45ac7eca0.png)

On active l'option PermitRootLogin en supprimant le dièse (#) en début de ligne

![image7](resources/84b3bfbe3f1e47ee81cd4a51018bd3db.png)

On modifie l'option PermitRootLogin en remplaçant prohibit-password par yes pour autoriser le compte root à se connecter en SSH

![image8](resources/2e25d05bd36049b78902870d3a0e49c6.png)

On enregistre les modifications avec Ctrl + O puis Entrée, et on quitte avec Ctrl + X

On redémarre le service SSH avec la commande

\#service sshd restart

![image9](resources/2d9113459246446aa1163b9285d8328b.png)

On vérifie si le serveur SSH est bien opérationnel avec la commande

\#service sshd status

![image10](resources/d89dd69d68ab4593a85d5a028f21805e.png)

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

![image11](resources/6827968e76fc4210b57c1eed017e9d06.png)

Lors de la toute première connexion au serveur SSH, le serveur vous demande de vérifier et de valider l'identité de celui-ci au moyen de son empreinte numérique.

![image12](resources/12343daf51364b81980b83ce0a467aa3.png)

Répondez yes pour accepter le certificat. Si vous acceptez, ce certificat sera installé sur le client et il ne sera pas nécessaire de valider à nouveau l'identité de ce serveur lors des prochaines connexions.

![image13](resources/c92acbb8be7c45f2b44cbb8776e8391b.png)

Identifiez-vous

![image14](resources/b35cee13337b4ea58895db0c95f146fc.png)

Vous êtes bien depuis le client, connecté sur le serveur. Vous pouvez le voir en vérifiant le hostname présent dans le prompt (nom du serveur dans l'invite de commande).

Si vous affichez l'état du service, vous verrez l'historique du service et des connexions ou tentatives de connexions (ici par exemple le service a :
- Été stoppé
- Été démarré
- Refusé une connexion à cause d'un mauvais mot de passe
- Accepté une connexion

![image15](resources/2d7f936f31564c6b8fd2417f12e5f512.png)

Vous pouvez donc maintenant administrer votre serveur Linux à distance, en ligne de commande, de manière sécurisée (authentifiée et chiffrée), depuis votre client Linux

**==Connexion SSH Windows / Linux :==**

Il n'y a rien à faire sur le serveur Linux car SSH y est déjà installé et configuré.

Sur un client Windows, on va télécharger et installer un client SSH, comme Putty : [Download PuTTY: latest release (0.79) (greenend.org.uk)](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

Le client SSH est très simple, il faut juste indiquer l'adresse IP du serveur Linux, le port (22 par défaut) et valider :

![image16](resources/ce54a84d5d6746579203c089a3885537.png)

Comme pour la connexion depuis le client Linux, lors de la toute première connexion au serveur SSH, le serveur vous demande de vérifier et de valider l'identité de celui-ci au moyen de son empreinte numérique.

![image17](resources/073a51b9f92e47aebd376cc7ae7d6970.png)

Répondez oui pour accepter le certificat. Si vous acceptez, ce certificat sera installé sur le client et il ne sera pas nécessaire de valider à nouveau l'identité de ce serveur lors des prochaines connexions.

Identifiez-vous

![image18](resources/a41e6de6eec847b1b522a5aa0a2f4866.png)

![image19](resources/e71cc084bb944cad9a5db7a236fdd164.png)

Une fois connecté depuis le client Windows, affichez l'état du service SSH avec la commande

\#service ssh status

Et observez les informations concernant la connexion depuis Windows.

![image20](resources/f9064ce708aa415ba5c05dd86da9db3b.png)

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

![image21](resources/6b9c7b92ec3b4064ab941e8eb3615a3d.png)

On va donc indiquer sftp://Adresse_IP_du_serveur, l'utilisateur, le mot de passe et le port (22 par défaut). On valide la connexion.

![image22](resources/49436539dfa443c3972efdbb834688bd.png)

L'interface est celle d'un explorateur de fichier avec à gauche l'arborescence locale du client Windows.
A droite l'arborescence distante du serveur Linux.

En haut les logs (fichiers journaux).

![image23](resources/61085fb2bf914c93b131a9cad877a4d7.png)

En bas la liste des fichiers en file d'attente, les transferts échoués et réussis.

![image24](resources/eabdef31d0bb492c9184562c8fac7aff.png)

Clic droit ou glisser déposer pour gérer les fichiers.

![image25](resources/0141246ca0dd434aad9cd4aaa5deb44e.png)

Clic droit pour créer, supprimer, modifier, renommer ou pour la gestion des permissions (droits d'accès).

![image26](resources/9d984c7115ae4ad1bbe647f7cb2a1641.png)

**==SCP==**

Il n'y a rien à faire sur le serveur Linux car SSH y est déjà installé et configuré.

Sur un client Windows, on va télécharger et installer un client graphique prenant en charge SCP comme WinSCP.

[WinSCP :: Official Site :: Download](https://winscp.net/eng/download.php)

WinSCP permet le transfert de fichiers en SCP et en SFTP. Ces 2 protocoles sont très proches et se basent tous les 2 sur SSH. La différence et la comparaison entre les 2 est présentée ici : [SCP vs SFTP](https://bluefinch-esbd.com/fr/blog/scp-vs-sftp/)

Comme on a déjà testé SFTP avec FileZilla on va cette fois utiliser SCP.

![image27](resources/c230e60c09874c54812b17abb81e4ac3.png)

Remplissez l'adresse IP, le n° de port (22 par défaut), l'identifiant, le mot de passe et validez la connexion.

![image28](resources/5a2f0a72184941e2adefcb8a3310640a.png)

Comme pour la connexion depuis le client Linux et le client Windows en ligne de commande, lors de la toute première connexion au serveur SSH, le serveur vous demande de vérifier et de valider l'identité de celui-ci au moyen de son empreinte numérique.

Répondez oui pour accepter le certificat. Si vous acceptez, ce certificat sera installé sur le client et il ne sera pas nécessaire de valider à nouveau l'identité de ce serveur lors des prochaines connexions.

![image29](resources/3f38920ef9a1497f88972f83c21fea1a.png)

L'interface est celle d'un explorateur de fichier avec en haut à gauche l'arborescence locale du client Windows.
En haut à droite l'arborescence distante du serveur Linux.

![image30](resources/bd1a3ac29d134717994d1cb500662393.png)

Utilisez l'interface graphique pour transférer (envoi et réception) des fichiers dans les 2 sens.

Utilisez l'interface graphique pour :

- Créer
- Modifier
- Renommer
- supprimer,
- Changer les permissions d'accès…

De fichiers et de dossiers d'exmple et de tests que vous placez dans /home

On peut le faire via un clic droit, un glisser-déposer, ou les menus/boutons du logiciels. Par exemple un clic droit puis transférer.

![image31](resources/39e8a14eae76476ca2f9bd82006a4f07.png)

Le fichier a bien été transféré vers le serveur Linux

![image32](resources/7cdd3a2cf4864efbbdb8024f784e8763.png)

Testez des transferts de fichiers dans les 2 sens, créez des fichiers, des dossiers. Renommez un fichier, supprimez en un.

Modifiez les droits d'accès.

![image33](resources/94ed7fb27cba4e5ca3c8fb531e933cfe.png)

Editez un fichier de configuration :

![image34](resources/10ea52a6c64540f8910ee443113874be.png)

![image35](resources/206935d053e64d02bf8e7303fc08a9f9.png)

Ce bouton permet de lancer directement une connexion en ligne de commande SSH avec Putty :

![image36](resources/0063105fb3334f9b94979c44d504cf7c.png)

