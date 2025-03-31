---
title: Chapitre 2
updated: 2023-12-06T13:16:31
created: 2023-12-06T10:34:09
---

RAM : Random access memorie soir la mémoire vive ou morte du pc

ROM : Mémoire en lecture seul soit read only memory

Gestionnaire de fichiers : soit modifier supprimer ou déplacer des fichier ou répertoire

Gestion E/S soit la gestion d'entrée ou de Sortie

Redhat : permet de faire de l'orchestration de fichier n'est pas gratuit

Partition et volume

Volume : création en infinité. On peut les monter ou les démonté

Partition :

MBR : soit master boot record enregistrement d'amorçage principal content la table de partition.

BS : Secteur de boot / Boot sector

La différence entre MBR et GPT c'est leur capacité de stockage, le nombre de partition et la sécurité.

Cluster : soit la taille du fichier qui est 4ko soit bloc d'allocation.

GPT : (Guid partition Table) : BIOS -\> UEFI

SGF =\> Formater de 500go

Partition : peut s'étendre sur plusieurs couches comme

Partition primaire, étendue qui peut être partitionner plusieurs fois.

Système de linux Création des partition

- .\\ il va stocker etc bin

- SWAP partition utilisé pour la mémoire volatile

- Home parition primaire

- Var cet partition var gère les fichiers système

Red0 allant jusqu'à 10 soit de la tollérance de panne

Ls -il (soit le numéro innode) permet de retrouver des fichiers avec des numéros d'innodes

Ext4: système de fichier journalière (ext3 Linux native)

FAT32 (File AllocationTable)

NTFS (Windows NT File System)

Exfat (système de fichier simplifier)

CDFS pour les CD-Rom

ZFS : Tous les système de fichier de linux pour faire du proxmox. un système de fichiers avancé conçu par Sun Microsystems pour les systèmes d'exploitation Unix. Il offre des fonctionnalités avancées telles que la gestion de volumes, la correction d'erreurs intégrée, la compression, la déduplication, la gestion des instantanés, et bien plus encore.

HFS (mac)

Gestion de groupe de linux et Windows

Linux possède des gestions de fichier

-(non netbios) Windows soit 15 caractère 15 octet
-nom d'hôte -\> Hosts / DNS

Samba permet de configurer un workgroup pour communiquer entre deux OS différents tel que Linux et Windows.

SAM : Security account manager gestion de stockage de mot de passe par utilisateur créer, il permet de gérer toutes les informations des utilisateur

Nom d'ouverture de session doit être unique

GPMS

Création de compte permettant d'avoir les ressources partagées

Linux, créait par défaut un groupe primaire ce que ne fait pas l'OS de Windows

La sécurité NTFS permettant de définir des propriété de sécurité pour protéger des données.

Les utilisateurs sous Linux

Possèdent un langage de commande nommé shell stocker dans bin/bash

La commande

-RWX

Qui se fait par User group other

Le compte est sous-forme de caractère de lettre de chiffre, un mot de passe chiffré
L'ID et le GID il peut y avoir un commentaire

Les utilisateurs sous linux

Groupe primaire =\> groupe par défaut assigné à chaque utilisateur

Groupes secondaire =\> autre utilisateur créer à l'aide de commande bash

Windows server : toutes les version de windows server allant dans la version 2000 soit 2k

ALP : acount local permision soit des compte créer affecter dans des ressources partagés

Les groupes sous linux

Il sont stocké dans :

/etc/group

