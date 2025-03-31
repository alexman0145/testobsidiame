---
title: TP - Analyse du trafic ICMP
updated: 2024-01-11T11:30:42
created: 2021-11-18T10:49:13
---

**Travaux pratiques– Utilisation de Wireshark pour voir le trafic ICMP**
- 
- **Topologie**

![image1](resources/27e12d0861234e17943947a866ac677e.jpeg)

- **Objectifs**

**Partie1: Capturer et analyser les donnéesICMP locales avec Wireshark**

**Partie2: Capturer et analyser les donnéesICMP distantes avec Wireshark**

- **Contexte/Scénario**

Wireshark est un analyseur de protocoles (analyseur de paquets) utilisé pour dépanner les réseaux, effectuer des analyses, développer des logiciels et des protocoles et s'informer. L'analyseur «capture» chaque unité de données de protocole (PDU) des flux de données circulant sur le réseau. Il permet de décoder et d'analyser leur contenu conformément aux spécificationsRFC ou autres appropriées.

Cet outil est utile pour toutes les personnes intervenant au niveau des réseaux. Vous pouvez vous en servir dans le cadre de la plupart des travaux pratiques des coursCCNA, à des fins d'analyse de données et de dépannage. Au cours de ces travaux pratiques, vous utiliserez Wireshark pour capturer les adresses IP des paquets de données ICMP et les adresses MAC de trames Ethernet.

- **Ressources requises**

- 1ordinateur Windows équipé d'un accès à Internet
- Des ordinateurs supplémentaires sur un réseau local (LAN) seront utilisés pour répondre aux requêtes ping.

- **Capturer et analyser les donnéesICMP locales avec Wireshark**

Dans la partie1 de ces travaux pratiques, vous exécuterez une commande ping sur un autre ordinateur du réseau local (LAN) et capturerez des requêtes et des réponses ICMP dans Wireshark. Vous examinerez également les trames capturées pour obtenir des informations spécifiques. Cette analyse devrait vous aider à mieux comprendre la façon dont les en-têtes de paquet sont utilisés pour transporter les données vers leur destination.

- **Récupérez les adresses d'interface de votre ordinateur.**

Dans le cadre de ces travaux pratiques, il vous faudra récupérer l'adresseIP de votre ordinateur et l'adresse physique de sa carte réseau, également appelée adresse MAC.

- Ouvrez une fenêtre de commandes, tapez **ipconfig /all**, puis appuyez sur Entrée.

- Notez l'adresseIP et l'adresse physique (MAC) de l'interface de votre ordinateur.

![image2](resources/178fb3718cc74f6ca00aa935e25fe842.jpg)

- Demandez à un membre de l'équipe de fournir l'adresseIP de son ordinateur et donnez-lui l'adresseIP de votre ordinateur. Ne lui fournissez pas votre adresse MAC pour le moment.

- **Démarrez Wireshark en Administrateur et commencez à capturer des données.**

- Sur votre ordinateur, exécutez **Wireshark** avec les droits Administrateur.

- Une fois que Wireshark démarre, cliquez sur **Interface List** (Liste d'interfaces).

![image3](resources/386b5ce8232b4448a9ed06ea608beaa4.jpg)

**Remarque**: cliquer sur la première icône d'interface dans la barre d'icônes permet également d'ouvrir la liste d'interfaces.

- Dans la fenêtre Wireshark: Capture Interfaces (Wireshark: interfaces de capture), sélectionnez la case à cocher en regard de l'interface connectée à votre réseau local (LAN).

![image4](resources/94ea97094770453cb63c927042acc7c5.jpg)

**Remarque**: si plusieurs interfaces sont répertoriées et que vous ne savez pas quelle interface sélectionner, cliquez sur le bouton **Details** (Détails), puis sur l'onglet **802.3 (Ethernet)**. Vérifiez que l'adresse MAC correspond à ce que vous avez noté à l'étape1b. Fermez la fenêtre Interface Details (Détails de l'interface) après avoir vérifié l'interface appropriée.

**Remarque**: si aucun interface n'est répertoriée, c'est probablement que Wireshark n'a pas été lancé avec les droits Administrateur, ou qu'il a été mal installé (composant manquant).

![image5](resources/00114be86d084fffa170f2f825d16efb.jpg)

- Après avoir sélectionné l'interface appropriée, cliquez sur **Start** (Démarrer) pour lancer la capture des données.

![image6](resources/d41644fc867648e7b142e0f5ab02ecae.jpg)

Les informations commencent à défiler vers le bas à partir de la section supérieure dans Wireshark. Les lignes de données s'affichent en différentes couleurs selon le protocole.

![image7](resources/918ea4f655824faeb1ec3be1c7dbdc26.jpg)

- Ces informations peuvent défiler très rapidement selon la nature des communications survenant entre votre ordinateur et le réseau local (LAN). Nous pouvons appliquer un filtre pour faciliter l'affichage et la manipulation des données capturées par Wireshark. Dans le cadre de ces travaux pratiques, nous nous concentrerons uniquement sur l'affichage des unités de données de protocole (PDU) (ping) ICMP. Tapez **icmp** dans la zone Filter (Filtre) en haut de Wireshark et appuyez sur Entrée ou cliquez sur le bouton **Apply** (Appliquer) pour afficher uniquement les unités de données de protocole (PDU) (ping) ICMP.

![image8](resources/eaa5ebfe395d41a2b7cd5dbb041103b6.jpg)

- Ce filtre fait disparaître toutes les données de la fenêtre supérieure, mais la capture du trafic dans l'interface se poursuit. Affichez la fenêtre d'invite de commandes que vous avez ouverte précédemment et envoyez une requête ping à l'adresseIP que vous avez reçue du membre de votre équipe. Notez que les données commencent à apparaître à nouveau dans la fenêtre supérieure de Wireshark.

![image9](resources/dbedbe75809b4372918bee3707e047a3.jpg)

**Remarque**: si l'ordinateur du membre de votre équipe ne répond pas à vos requêtes ping, c'est peut-être parce que le pare-feu de son ordinateur bloque ces requêtes. Consultez l'AnnexeA: Autoriser le trafic ICMP via un pare-feu pour savoir comment autoriser le trafic ICMP via le pare-feu sous Windows.

- Arrêtez la capture des données en cliquant sur l'icône **Stop Capture** (Arrêter la capture).

![image10](resources/b6afb9d0363d4e63910ef5032065f8af.jpg)

- **Examinez les données capturées.**

À l'étape3, examinez les données qui ont été générées par les requêtes ping de l'ordinateur du membre de votre équipe. Les données Wireshark s'affichent dans trois sections: 1) la section supérieure affiche la liste des trames PDU capturées avec un résumé des informations de paquetIP, 2) la section centrale liste les informations PDU correspondant à la trame sélectionnée dans la partie supérieure de l'écran et fractionne une trame PDU capturée en fonction de ses couches de protocole, et 3) la section du bas affiche les données brutes de chaque couche. Les données brutes sont affichées sous forme hexadécimale et décimale.

![image11](resources/508c3c80c4564ac288eb8e9e143a6eb3.jpg)

- Cliquez sur les premières trames PDU de requête ICMP dans la partie supérieure de Wireshark. Notez que la colonne Source contient l'adresseIP de votre ordinateur, tandis que la colonne Destination contient l'adresseIP de l'ordinateur de votre équipier auquel vous avez envoyé des requêtes ping.

![image12](resources/2228468b61d54fc6ad2f3c214972dbf6.jpg)
- Tandis que cette trame PDU est toujours sélectionnée dans la partie supérieure, accédez à la section centrale. Cliquez sur le signe plus à gauche de la ligne EthernetII pour afficher les adresses MAC de la destination et de la source.

![image13](resources/d33ca8a8f5534f4ba63980e42eb72c16.jpg)

L'adresse MAC de la source correspond-elle à l'interface de votre ordinateur?

L'adresse MAC de la destination dans Wireshark correspond-elle à celle de l'ordinateur du membre de votre équipe?

Comment votre ordinateur obtient-il l'adresse MAC de l'ordinateur destinataire des requêtes ping?

**Remarque**: dans l'exemple précédent d'une requête ICMP capturée, les données ICMP sont encapsulées dans une unité de données de protocole (PDU) de paquet IPv4 (en-tête IPv4) qui est ensuite encapsulée dans une PDU de trame EthernetII (en-tête EthernetII) en vue de sa transmission sur le réseau local (LAN).

- **Capturer et analyser les donnéesICMP distantes avec Wireshark**

Dans la partie2, vous enverrez des requêtes ping aux hôtes distants (les hôtes ne figurant pas sur le réseau local (LAN)) et vous examinerez les données générées à partir de ces requêtes ping. Ensuite, vous déterminerez en quoi ces données diffèrent des données examinées dans la partie1.

- **Commencez par capturer les données sur l'interface.**
  1.  Cliquez sur l'icône **Interface List** (Liste d'interfaces) pour afficher à nouveau la liste des interfaces d'ordinateur.

![image14](resources/e27774a6075f4fd9a5bee41d6ca0aee7.jpg)
- Vérifiez que la case à cocher en regard de l'interface LAN est sélectionnée, puis cliquez sur **Start** (Démarrer).

![image15](resources/f70141114cf443379163396f06c134f3.jpg)
- Une fenêtre vous invite à enregistrer les données capturées précédemment avant de commencer une autre capture. Il n'est pas nécessaire d'enregistrer ces données. Cliquez sur **Continue without Saving** (Continuer sans enregistrer).

![image16](resources/4be250006f754b4aa4cb016c2f84a20b.jpg)
- Le processus de capture étant actif, envoyez une requête ping aux trois URL de sites web suivantes:
  1.  [www.yahoo.com](http://www.yahoo.com)
  2.  [www.cisco.com](http://www.cisco.com)
  3.  [www.google.com](http://www.google.com)

![image17](resources/3019b23dd45346e28d1dd61a4f0946ff.jpg)

**Remarque**: lorsque vous envoyez une requête ping aux URL indiquées, notez que le serveur de noms de domaine (DNS) traduit l'URL en adresseIP. Notez l'adresseIP reçue pour chaque URL.

- Vous pouvez arrêter la capture des données en cliquant sur l'icône **Stop Capture** (Arrêter la capture).

![image18](resources/e3f1e31985564e2cac8e3ea78fbd8da8.jpg)
- **Examen et analyse des données provenant des hôtes distants.**

- Examinez les données capturées dans Wireshark, examinez les adressesIPetMAC des trois emplacements auxquels vous avez envoyé des requêtes ping. Indiquez les adressesIPetMAC de destination pour les trois emplacements dans l'espace prévu à cet effet.

1<sup>er</sup> emplacement:

IP:

MAC:

2<sup>ème</sup> emplacement:

IP:

MAC:

3<sup>ème</sup> emplacement:

IP:

MAC:

- Qu'y a-t-il d'important à retenir de ces informations?

- En quoi ces informations diffèrent-elles des informations de requêtes ping locales que vous avez reçues dans la partie1?

- Pourquoi Wireshark affiche-t-il l'adresse MAC réelle des hôtes locaux, mais pas l'adresse MAC réelle des hôtes distants?

- **Rappel: Autoriser le trafic ICMP via le pare-feu Windows Defender**

Si les membres de votre équipe ne parviennent pas à envoyer de requêtes ping à votre ordinateur, il est possible que votre pare-feu les bloque. Cette annexe explique comment créer une règle sur le pare-feu afin d'autoriser les requêtes ping. Elle décrit également comment désactiver la nouvelle règle ICMP une fois que vous avez terminé les travaux pratiques.

**Étape 1 Créez une règle de trafic entrant autorisant le trafic ICMP via le pare-feu.**

À partir du Panneau de configuration, cliquez sur l'option **Système et sécurité**.

![image19](resources/a616c545dfcf4bada2360c412f4bdc54.jpg)

Dans la fenêtre Système et sécurité, cliquez sur **Pare-feu Windows**.

![image20](resources/d8a36c124357423b902c6e1d4c4ec686.jpg)

Dans le volet gauche de la fenêtre Pare-feu Windows, cliquez sur **Paramètres avancés**.

![image21](resources/ab9b0f3512a843248bfd0fd691579beb.jpg)

Dans la fenêtre des fonctions de sécurité avancées, choisissez l'option **Règles de trafic entrant** dans la barre latérale gauche, puis cliquez sur **Nouvelle règle…** dans la barre latérale droite.

![image22](resources/2d19d840d478499093976e79ccfe215b.jpg)

Cette action démarre l'Assistant Nouvelle règle de trafic entrant. Dans l'écran Type de règle, cliquez sur la case d'option **Personnalisée**, puis cliquez sur **Suivant**.

![image23](resources/e17b1c1d1e7d4d899a1a3b5de9d62137.jpg)

Dans le volet gauche, cliquez sur l'option **Protocole et ports**, et au moyen du menu déroulant Type de protocole, sélectionnez **ICMPv4**, puis cliquez sur **Suivant**.

![image24](resources/e3375458963d44db8b1d4b19be1934a6.jpg)

Dans le volet de gauche, cliquez sur l'option **Nom** et dans le champ Nom, tapez **Autoriser les demandes ICMP**.Cliquez sur **Terminer**.

![image25](resources/4ed8153a9ad44d34b4f30ac6b26b9d75.jpg)

Cette nouvelle règle doit permettre aux membres de votre équipe de recevoir des réponses ping de votre ordinateur.

**Étape 2 Désactivation ou suppression de la nouvelle règle ICMP.**

Une fois que les travaux pratiques sont terminés, vous pouvez désactiver ou même supprimer la règle que vous avez créée à l'étape1. L'option **Désactiver la règle** vous permet d'activer la règle à nouveau plus tard. La suppression de la règle supprime cette dernière définitivement de la liste des règles de trafic entrant.

Dans la fenêtre des fonctions de sécurité avancées, dans le volet gauche, cliquez sur **Règles de trafic entrant**, puis localisez la règle que vous avez créée à l'étape 1.

![image26](resources/764e8906bd5b4babb4a6f9f040f6c20d.jpg)

Pour désactiver la règle, cliquez sur l'option **Désactiver la règle**. Lorsque vous choisissez cette option, celle-ci se transforme en **Activer la règle**. Vous pouvez basculer entre Désactiver la règle et Activer la règle. Le statut de la règle s'affiche également dans la colonne Activée de la liste Règles de trafic entrant.

![image27](resources/72a282875f204f5aacc46379118769d6.jpg)

Pour supprimer définitivement la règle ICMP, cliquez sur **Supprimer**. Si vous choisissez cette option, vous devez recréer la règle pour autoriser les réponses ICMP.

![image28](resources/2b4b120c149f4ed784e59fd45391e4fa.jpg)
