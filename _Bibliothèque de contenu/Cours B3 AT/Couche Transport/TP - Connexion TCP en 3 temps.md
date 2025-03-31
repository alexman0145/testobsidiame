---
title: TP - Connexion TCP en 3 temps
updated: 2024-01-11T11:38:56
created: 2023-12-12T16:44:57
---

**Travaux pratiques – Utilisation de Wireshark pour observer la connexionTCP en trois étapes**
- 
**Topologie**

![image1](resources/fd2bcf8270594a519a639eaead5a36c2.jpeg)

- 
- **Objectifs**

**Partie1: Préparer les hôtes pour la capture du trafic**

**Partie2: Analyser la connexion TCP en 3 étapes à l'aide de Wireshark**

- **Contexte/scénario**

Au cours de ces travaux pratiques, vous utiliserez Wireshark pour capturer et examiner les paquets générés entre le navigateur de l'ordinateur en utilisant le protocole HTTP (Hypertext Transfer Protocol) et un serveur web, tel que [www.google.com](http://www.google.com). Lorsqu'une application, comme le protocole HTTP ou FTP (File Transfer Protocol) démarre d'abord sur un hôte, TCP utilise la connexion en trois étapes pour établir une session TCP fiable entre les deux hôtes. Par exemple, lorsqu'un ordinateur utilise un navigateur web pour naviguer sur Internet, une connexion en trois étapes est lancée et une session est établie entre l'ordinateur hôte et le serveur web. Un ordinateur peut avoir des sessions TCP actives, multiples et simultanées avec différents sites web.

- **Ressources requises**

- Poste de travail avec Wireshark
- Accès Internet

- **Préparer les hôtes pour la capture du trafic**

- Démarrez le navigateur web sur le poste client

- Démarrez une capture de trafic dans Wireshark

- Consultez un nouveau site web sur Internet depuis le navigateur

- Stoppez la capture dans Wireshark

- **Analyser la connexion TCP en 3 étapes à l'aide de Wireshark**

- **Appliquez un filtre à la capture enregistrée.**

- Appliquez un filtre **tcp** à la capture. Dans cet exemple, les 3premières trames représentent le trafic d'intérêt.
![image2](resources/87fe513c56004de5a0e50351d791ec81.png)

- **Examinez les informations au sein des paquets, y compris les adressesIP, les numéros de port TCP et les indicateurs de contrôle TCP.**

- Dans cet exemple, la trame1 correspond au début de la connexion en trois étapes entre l'ordinateur client et le serveur web. Dans le volet de la liste des paquets (section supérieure de la fenêtre principale), sélectionnez le premier paquet, le cas échéant.

- Cliquez sur la **flèche** à gauche du protocole TCP (Transmission Control Protocol) dans le volet de détails des paquets pour développer et examiner les données TCP. Localisez les informations sur les ports source et de destination.

- Cliquez sur la **flèche** à gauche des indicateurs. Une valeur de 1 signifie que l'indicateur est défini. Repérez l'indicateur défini dans ce paquet.

**Remarque**: vous devrez peut-être modifier la taille des fenêtres du haut et du milieu dans Wireshark pour afficher les informations nécessaires.

![image3](resources/8f6120f19be04622830ba23ee22a0878.png)

Quel est le numéro du port source TCP?

Comment classifieriez-vous le port source? (voir [Liste de ports logiciels — Wikipédia (wikipedia.org)](https://fr.wikipedia.org/wiki/Liste_de_ports_logiciels))

Quel est le numéro du port de destination TCP?

Comment classifieriez-vous le port de destination? (voir [Liste de ports logiciels — Wikipédia (wikipedia.org)](https://fr.wikipedia.org/wiki/Liste_de_ports_logiciels))

Quel est l'indicateur (flag)? (plusieurs réponses possibles)

Quel est le numéro d'ordre relatif (n° de séquence) ?

- Sélectionnez le paquet suivant dans la connexion en trois étapes. Dans cet exemple, il s'agit de la trame2. C'est la réponse du serveur web à la requête initiale de démarrage d'une session.
![image4](resources/f829f57a82d14825a80a06ac18c6a200.png)

Quelles sont les valeurs des ports source et de destination?

Quel est l'indicateur (flag)? (plusieurs réponses possibles)

Quels sont les numéros d'ordre relatif (n° de séquence) et d'accusé de réception?

- Enfin, sélectionnez le troisième paquet dans la connexion en trois étapes.

![image5](resources/c6b8f604adf94dcb9a4232fb05822355.png)

Examinez le troisième et dernier paquet de la connexion.

Quel est l'indicateur (flag)? (plusieurs réponses possibles)

Les numéros d'ordre relatif (n° de séquence) et d'accusé de réception sont définis sur 1 comme point de départ. La connexion TCP est désormais établie et la communication entre l'ordinateur source et le serveur web peut commencer.

- 
Des centaines de filtres sont disponibles dans Wireshark. Un réseau de grande taille peut avoir de nombreux filtres et de nombreux types de trafic. Indiquez trois filtres qui pourraient être utiles à un administrateur réseau.

De quelles autres façons Wireshark pourrait-il être utilisé dans un réseau de production?
