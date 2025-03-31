---
title: TP 8 - Observation de la configuration réseau dyna...
updated: 2022-09-30T08:32:37
created: 2021-09-09T23:19:21
---

**Travaux pratiques– Observation de la configuration réseau dynamique DHCP**
- **Objectifs**
- Observer l'obtention et le renouvellement automatiques d'une configuration réseau avec DHCP
- Gérer le bail DHCP à l'aide des commandes ipconfig /release et ipconfig /renew.
- **Contexte/scénario**
Le protocole de configuration dynamique des hôtes en réseau (DHCP) est utilisé pour fournir automatiquement une configuration réseau complète aux hôtes : adresse IP, masque, passerelle, serveurs DNS… Les hôtes qui démarrent sur le réseau envoient une demande de configuration en broadcast (diffusion générale à tous les hôtes du réseau), et un serveur DHCP y répond, en proposant les paramètres TCP/IP au demandeur, pour une durée limitée mais renouvelable, appelée le bail DHCP.
- **Ressources requises**
- 1ordinateur (Windows10) avec connexion au réseau local.

- 

- **Consulter la configuration des hôtes**
  1.  **Configurer l'adressageIP dynamique sur les ordinateurs.**
      1.  Cliquez sur **Démarrer**, puis sur **Paramètres**.

![image1](resources/fdc2898d4ae548b1bf1ec3f019636b31.jpg)
- Dans la fenêtre Paramètres, cliquez sur **Réseau et Internet**.

![image2](resources/8f2366b2de804644af6941fa59596b70.jpg)
- Dans le panneau de gauche, sélectionnez **votre carte réseau**, puis cliquez sur le lien **Modifier les options de l'adaptateur**.

![image3](resources/e94c1f385bbe4cbb9fbd3c56c58ce3d8.jpg)
- La fenêtre Connexions réseau affiche les interfaces réseau disponibles sur l'ordinateur. Faites un clic droit sur votre interface réseau, puis sélectionnez **Propriétés**.

![image4](resources/1e3200bfe60c42769151a60a42ab7550.jpg)
- Sélectionnez **Protocole Internet version4 (TCP/IPv4)**, puis cliquez sur **Propriétés**.

![image5](resources/4fd0beb77725481c9bf8e7e9f230d2a7.jpg)

**Remarque**: vous pouvez également cliquer deux fois sur **Protocole Internet version4 (TCP/IPv4)** pour afficher la fenêtre Propriétés.
- Sélectionnez **Obtenir une adresseIP automatiquement**. Sélectionnez **Obtenir l'adresse du serveur DNS automatiquement**. Cliquez sur **OK**.

![image6](resources/88bef1881b884c138621d9fb27e894fd.jpg)

**Étape 2 : Vérifiez les paramètres réseau obtenus dynamiquement**

Utilisez l'invite de commandes pour vérifier les paramètres et la connectivité du PC.
- Lancez une **Invite de commandes**.
- Vérifiez les paramètres de votre ordinateur à l'aide de la commande **ipconfig /all**.

![image7](resources/156e05bf51ca40fe81b310af495d1309.jpg)

Examinez ensuite les informations détaillées de votre configuration réseau:

![image8](resources/00996fe9b50e4b64a2e2153fdd0275dd.jpg)

Repérez les informations indiquant que l'ordinateur est configuré en adressage dynamique, c'est-à-dire qu'il est un client DHCP

Quelle est l'adresseIP du serveur DHCP?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

À quelle date le bail a-t-il été obtenu?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

À quelle date le bail arrive-t-il à expiration?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Partie 2 : Gérer le bail DHCP**
- **Gérer le bail DHCP**
Utilisez l'invite de commandes pour gérer le bail DHCP
- Lancez une Invite de commandes.
- Résiliez le bail DHCP en saisissant la commande **ipconfig /release  
  **
![image9](resources/44e1510ad6a7412984f1f67dc13e0821.jpg)
- Que se passe-t'il ?

- Vérifiez votre configuration actuelle avec la commande ipconfig /all
- Renouveler votre bail DHCP en saisissant la commande **ipconfig /renew  
  **
![image10](resources/444eee8c66a349a38fb664c81bf2c18c.jpg)

- Que se passe-t-il ?

- Vérifiez votre configuration avec la commande ipconfig /all

- A quoi sert le bail DHCP ?

- Faites une recherche sur le web pour expliquer le fonctionnement des échanges entre un serveur DHCP et un client, en particulier pour les phases suivantes :
  - Demande d'un bail
  - Attribution d'un bail
  - Demande de renouvellement
  - Résiliation

