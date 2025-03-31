---
title: Contrôle réseau 1 - Sujet 2023 - RIGAUD
updated: 2023-10-20T14:31:08
created: 2021-10-11T14:27:17
---

***Barème classe sur 40 points (TOUS LES EXERCICES)***

***==17/40==***

***==Note : 8.5/20==***

***Barème adapté sur 33 points (SEULS LES EXERCICES 1 A 5)***

***==17/33==***

***==Note : 10/20==***

1.  *Récupérez cette page en la copiant dans votre OneNote personnel*

2.  *Dans le titre de la page, remplacez NOM par votre nom de famille*

3.  *Lancez l'invite de commande **avec les droits administrateur***

4.  *Répondez directement aux questions signalées par un ? dans ce document.  
    Faites des ==réponses courte==s. ==Pas de capture d'écran ni d'images==.*

5.  *A la fin du contrôle, copiez le lien vers votre copie dans l'assignment sur Teams :*
\[SIO 2025\] \[S1\] \[B1\] \[AT\] Contrôle machine

***==1 - Affichez la configuration réseau complète d'une machine Windows==***

***1/1 point***

Commande utilisée pour afficher votre configuration réseau complète :

Pour afficher ma configuration réseau complète sur l'invite de commande on utilise la commande ipconfig /all pour afficher toutes les informations sur le poste.

***==2 - Relevez les paramètres de la configuration de la carte réseau==***

***10/17 points***

Quelle est l'adresse IPv4 de l'ordinateur?

Pour ce contrôle j'utilise le poste fixe dans mon atelier qui est a une adresse IPV4 en 10.0.0.46

Quelles sont les ==2 parties== qui composent l'adresse ==IPv4== ?

Les deux parties qui composent une adresse ipv4 est le ==~~masque de sous réseau et l'adresse physique.~~==

==Le masque et l'adresse MAC ne sont pas dans l'adresse IP==

La partié reseau et partie machine

Quel est le masque de sous-réseau de l'ordinateur?

Le masque de sous réseau de l'ordinateur est 255.0.0.0 soit une adresse de classe A.

A quoi sert le masque de sous-réseau ?

Le masque de sous-réseau sert à déterminer si l'adresse IP est ==~~public ou privé.~~==

==Ce n'est pas le rôle du masque de faire cette détermination==

Quelle est la passerelle par défaut de l'ordinateur?

La passerelle par défaut sur le poste fixe est en 10.0.0.1

A quoi sert la passerelle par défaut ?

Dans notre atelier la passerelle par défaut est généralement relier à l'aide d'un routeur pour communiquer des machine n'ayant pas la même adresse ip.

Quel est le serveur DNS de l'ordinateur?

Le DNS de l'ordinateur fixe de l'ordinateur soit le serveur par défaut est btssio-ad.sbsio.bts adresse ip 10.0.0.2

==Quelle sont adresse IP ?==

A quoi sert le serveur DNS ?

Le serveur DNS permet de connecter plusieurs poste dans le nom de domaine afin que chaque poste puisse être ==~~sur le même réseau~~== échanger et partager des fichier ou autre fonction.

==DNS fonctionne aussi sur Internet, donc avec des appareils situés dans d'autres réseaux==

Quelle est l'adresse physique de l'ordinateur?

L'adresse physique du pc soit la carte utilisant le nom domaine est 04-D4-C4-AA-A9-5C

Quel autre nom donne-t-on à l'adresse physique ?

L'adresse physique est aussi appeler adresse mac

Quelles sont les 2 parties qui composent l'adresse physique ?

Les parties qui composent une adresse physique sont le ==~~DHCP ainsi que le baille d'adresse ip attribuer~~==

DHCP est un protocole, le bail est une durée. Ca ne peut pas faire partie de la composition d'une adresse MAC

Identifie l'adresse de la carte de manière unique

DHCP est-il activé?

D'après l'invite de commande sur l'ordinateur utilisé, le DHCP est bien activé

Quelle est l'adresseIP du serveur DHCP?

L'adresse ip du serveur DHCP est 10.0.0.2

À quelle date le bail DHCP a-t-il été obtenu?

D'après les informations fourni le baille à été obtenue le Jeudi 19 octobre 2023 à ce jour ou du contrôle.

À quelle date le bail DHCP arrive-t-il à expiration?

D'après les informations fourni la date d'expiration du baille arrive le Vendredi 20 octobre 2023.

Qu'est ce que DHCP ? A quoi sert-il ?

Le DHCP soit ==~~domaine~~== Host ~~control~~ protocol est le protocole de ==~~controle~~== de ==~~domaine~~== d'hôte.

==Dynamic Host Configuration Protocol soit en français Protocole de Configuration Dynamique des Hôtes. Mais on ne demande pas la traduction, mais quelle est son rôle.==

Le DHCP peut être utiliser soit en local ou en réseaux

Hormis DHCP, indiquez une autre possibilité de configurer les paramètres d'une carte réseau

On peut utiliser ==~~Netbios anciennement nommer Tcpip ou une adresse local en ipv6.~~==

==Netbios et IPv6 ne peuvent pas remplacer DHCP==

==Il existe DHCP en IPv6==

==TCP/IP est une suite de protocoles contenant de très nombreux protocoles et n'a pas été renommé==

==Netbios ne s'appelait pas TCPIP avant==

Soit manuel ou static

***==3 - Testez la connectivité réseau entre votre ordinateur et la passerelle par défaut==***

***4/7 points***

Commande utilisée pour vérifier la connectivité entre votre ordinateur et la passerelle :

Pour vérifier si la connectivé entre l'ordinateur et la paserrelle il faut utiliser la commande ping.

Ping \<adresse ip\>

==Donnez la commande complète==

Quel est le protocole utilisé par cette commande de test ?

Le protocole utilisé pour cet commande de test est le protocole ==~~TCP/IP~~==

==TCP/IP est une suite de protocoles contenant de très nombreux protocoles==

ICMP

A quoi correspondent toutes les informations données dans les résultats du test :

Bytes = 32? Taille du packet envoyé

Time \< 1 ms? Temps de transmission entre le serveur ou le client distant

TTL = 64? Indique la durée du vie d'un packet soit détruit par le routeur.

==Cette durée n'est pas un temps, donc il faut expliquer le mécanisme du TTL==

(exemple) Packets Sent = 4, Received = 4, Lost = 0 (0% loss)?

Packet envoyé 4 nombre reçu 4 et pert de packet 0

Approximate round trip times in milli-seconds :

(exemple) Minimum = 1 ms, Maximum = 2 ms, Average = 1 ms ?

Temps de transmission minimum 1ms

Temps de transmission maximum 2 ms

Temps d'envoie 1ms ==incomplet==

Moyenne

***==4 - Testez le chemin réseau entre votre ordinateur et une destination sur Internet==***

***1/2 points***

Commande utilisée pour connaitre le chemin réseau entre votre ordinateur et le serveur d'adresse IP 8.8.8.8 :

La commande utilisé permettant de connaître le chemin réseau entre mon ordinateur fixe et le serveur 8.8.8.8 est la commande tracert

==Donnez la commande complète==

A quoi correspond chaque ligne (depuis une connexion Internet non filtrée, où cette commande fonctionne)?

Chaque ligne correspond le ==~~temps utilisé pour que l'ordinateur fixe et le serveur 8.8.8.8 communique~~==

==C'Est-ce que renvoie le ping. Le tracert donne d'autres informations==

Le proxy

Le serveur

Routeur qui vont traverser

***==5 - Observez le fonctionnement du protocole ARP sur votre ordinateur==***

***1/6 points***

Commande permettant d'afficher le cache ARP de votre ordinateur :

La commande permettant d'afficher le cache ARP de mon poste fixe est la commande arp -a

Qu'est ce que le protocole ARP ? A quoi sert-il ?

Associer une adresse Ip à un adresse mac

==-==

Quelle est l'utilité du cache ARP de l'ordinateur ?

Il permet de voir les différent type d'adresse utilisé sur le poste fixe soit dynamique ou static.

==Ce n'est pas son rôle principal==

Permet de conserver les adresses ip et optimiser ls performance du réseau.

Quelle adresse physique est utilisée comme adresse de destination dans l'entête de la trame ethernet si je souhaite communiquer avec l'adresse IP 8.8.8.8 ?

Adresse mac du routeur

==-==

Pourquoi ?

Tous les routeurs bloc toutes forme de broadcast et l'adresse mac du routeur à son propre broadcast.

==-==

Commande permettant de vider le cache ARP de l'ordinateur :

La commande permettant de vider le cache ARP d'un pc est la commande arp ==~~-s~~==

Arp -renew

***==6 - Gestion du bail DHCP==***

***0/2 points***

En ligne de commande, libérez le bail DHCP obtenu :

Commande permettant de libérer le bail DHCP de l'ordinateur :

==-==

En ligne de commande, demandez un nouveau bail DHCP :

Commande permettant de renouveler un bail DHCP :

==-==

***==7 - Observez le cache DNS de l'ordinateur==***

***0/4 points***

Qu'est ce que la résolution de nom ?

==-==

Affichez le cache DNS de l'ordinateur :

Commande utilisée pour afficher le cache DNS :

==-==

A quoi sert ce cache ?

==-==

Videz le cache DNS de l'ordinateur :

Commande utilisée pour vider le cache DNS :

==-==

***==8 - Résolution d'un problème de connectivité==***

***0/1 point***

Depuis un émetteur, le résultat du test de connectivité vers un destinataire est positif : le ping répond.

Cependant, le test inverse échoue : la connectivité entre le destinataire et l'émetteur n'est pas validée par le ping.

On est certain que tout fonctionne bien entre l'émetteur et ce destinataire : cartes réseau, câblage, switch…  

D'où peut provenir le problème et comment le résoudre ?

Si le destinataire à l'inverse sont ping n'est pas validé vérifier les problème suivant :

Assurez-vous que d'autre connexion n'empêche la communication entre destinataire et l'éméteur

Desactiver le pare-feu temporairement pour vérifier si la communication entre le destinataire et l'éméteur fonctionne sans pare-feu.

==Copié collé d'une IA qui ne prend pas en compte le contexte !==

==Précisez quel pare feu : celui de l'émtteur, du destinataire, des 2 ?.==

