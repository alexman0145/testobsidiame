---
title: TP 10 - Configuration avancée du pare-feu
updated: 2023-11-09T09:38:18
created: 2021-09-10T00:02:57
---

**Travaux pratiques- Configuration avancée du pare-feu**
- **Introduction**
Au cours de ces travaux pratiques, vous apprendrez à explorer le pare-feu Windows et à configurer quelques paramètres avancés.
- **Matériel conseillé**
- Deux ordinateurs connectés directement ou connectés via un réseau
- Windows installé sur les deux ordinateurs
- Les ordinateurs doivent appartenir au même groupe de travail ou être dans le même domaine et partager le même masque de sous-réseau
  1.  **Créez et partagez un dossier sur PC-1.**
      1.  Ouvrez une session sur **PC-1** en tant que membre du groupe des administrateurs. Demandez le nom d'utilisateur et le mot de passe à votre instructeur.
      2.  Sur **PC-1**, cliquez avec le bouton droit sur le Bureau, puis sélectionnez **Nouveau\> Dossier**. Baptisez ce dossier **Cisco**.
![image1](resources/08317c0d7af0472b9dc7e93aebabc27e.png)
- Cliquez avec le bouton droit sur le dossier Cisco, puis sélectionnez **Propriétés\> Partage\> Partage avancé**. La fenêtre **Partage avancé** s'affiche. Cliquez sur **Partager ce dossier** et utilisez le nom par défaut **Cisco**. Cliquez sur **OK**. Fermez la fenêtre **Propriétés Cisco**.
![image2](resources/83c66ffbf4b44707bf279b577ef33a04.png)
- **Utilisez l'Explorateur de fichiers pour afficher le dossier partagé sur PC-1.**
  1.  Ouvrez une session sur **PC-2** en tant que membre du groupe des administrateurs. Demandez le nom d'utilisateur et le mot de passe à votre instructeur.
  2.  Ouvrez la fenêtre de l'**Explorateur de fichiers**. Dans le volet de gauche, sous **Réseau**, développez **PC-1**.
![image3](resources/fe6c27ce90a04ef3834e3f46cc30320f.png)

Sous PC-1, voyez-vous le dossier partagé **Cisco**?

**Remarque**: si vous avez répondu non, demandez à l'instructeur de vous aider.
- Fermez l'**Explorateur de fichiers**.
- **Ouvrez le pare-feu Windows sur PC-1.**
**Remarque**: sauf indication contraire, utilisez **PC-1**pour le reste de ces travaux pratiques.
- Pour ouvrir la fenêtre **Pare-feu Windows**, cliquez sur **Panneau de configuration\> Pare-feu Windows**.
- L'état normal du pare-feu Windows est **Activé**.
![image4](resources/164d6f2478544e44be6b13def0920733.png)
- Quels sont les avantages du pare-feu Windows?
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- **Étudiez la fonctionnalité Programmes autorisés du pare-feu Windows.**
  1.  Cliquez sur **Autoriser une application ou une fonctionnalité via le Pare-feu Windows**.
![image5](resources/c59d0f6f2a7a4d74803cc3134b982057.png)
- La fenêtre **Applications autorisées** s'affiche. Les programmes et services que le pare-feu Windows ne bloque pas sont cochés dans la liste suivante. Cliquez sur **Quels sont les risques si une application est autorisée à communiquer?**
**Remarque**: vous pouvez ajouter des applications à cette liste. Cela peut être nécessaire si vous disposez d'une application qui nécessite des communications avec l'extérieur, et que le pare-feu Windows, pour une raison quelconque, ne parvient pas à effectuer automatiquement la configuration.

![image6](resources/b23049d4f2bf42f7a05c328b88257cb7.png)

La création de trop nombreuses exceptions dans votre fichier Programmes et services peut avoir de graves conséquences.

Décrivez l'une d'entre elles.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- Fermez la fenêtre **Aide et support Windows**.
- **Configurez la fonction Applications autorisées par le pare-feu Windows.**
  1.  Cliquez dans la fenêtre **Applications autorisées** afin de l'activer. Cliquez sur **Modifier les paramètres**. Désactivez la case à cocher **Partage de fichiers et d'imprimantes**. Cliquez sur **OK**.
![image7](resources/a60959238d1247ea918a5a6f314f4c77.png)
- Sur **PC-2**, à l'aide de l'**Explorateur de fichiers**, essayez d'ouvrir la connexion réseau à **PC-1**.
Pouvez-vous vous connecter à PC-1 et afficher le dossier partagé Cisco?

Avez-vous reçu un message d'erreur sur PC-2? Si oui, quel était le message d'erreur?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- Fermez toutes les fenêtres ouvertes sur **PC-2**.
- Sur **PC-1**, ajoutez une coche à **Partage de fichiers et d'imprimantes**. Cliquez sur **OK**.
**Remarque**: vous devriez pouvoir ajouter la coche sans avoir à cliquer sur **Modifier les paramètres**.
- Sur **PC-2**, rouvrez l'Explorateur de fichiers et tentez de vous connecter à **PC-1**.
Pouvez-vous vous connecter à l'ordinateur1? Pourquoi?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- Fermez toutes les fenêtres ouvertes sur **PC-2** et fermez la session.
- Fermez toutes les fenêtres sur **PC-1**.
- **Configurez les fonctions de sécurité avancées du Pare-feu Windows.**
**Remarque**: utilisez **PC-1** jusqu'à la fin de ces travaux pratiques.
- Cliquez sur **Panneau de configuration\> Outils d'administration\> Pare-feu Windows avec fonctions avancées de sécurité**.
- La fenêtre **Pare-feu Windows avec fonctions avancées de sécurité** s'ouvre. Dans le panneau de gauche, vous pouvez sélectionner les éléments pour configurer les **Règles de trafic entrant**, les **Règles de trafic sortant** ou les **Règles de sécurité de connexion**. Vous pouvez également cliquer sur **Analyse** pour afficher l'état des règles configurées. Cliquez sur **Règles de trafic entrant**.
![image8](resources/7e1db23b1a34493ab6c9efa8fd9818cd.png)
- Dans le volet central, faites défiler l'écran jusqu'à ce que vous trouviez la règle entrante **Partage de fichiers et d'imprimantes (Demande d'écho- Trafic entrant ICMPv4)**. Cliquez avec le bouton droit sur la règle, sélectionnez **Propriétés**, puis l'onglet **Avancé**.
![image9](resources/57970ca2177e4a2bac8c73461fb6905e.png)
- L'onglet **Avancé** affiche le ou les profils utilisés par l'ordinateur. Cliquez sur **Personnaliser** dans la zone **Types d'interfaces** de la fenêtre.
![image10](resources/8928b53c97434dd3af9fde476f9ef457.png)

- La fenêtre **Personnaliser les types d'interfaces** s'affiche. Elle affiche les différentes connexions configurées sur votre ordinateur. Laissez **Tous les types d'interface** sélectionné, puis cliquez sur **OK**.
![image11](resources/86020b1c279948a3a879a61c98cb5fee.png)

- Cliquez sur l'onglet **Programmes et services**. Dans la section **Services**, cliquez sur **Paramètres**.
![image12](resources/cf4e73904b014ed99bbee6df621a6caf.png)

- La fenêtre **Personnaliser les paramètres des services** s'affiche.
![image13](resources/dac6cda85f89403d976ab034264fd811.png)

- Citez le nom abrégé de quatre services disponibles.
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- Cliquez sur **Annuler** pour fermer la fenêtre **Personnaliser les paramètres des services**.
- Cliquez sur l'onglet **Protocoles et ports**.
**Remarque**: il existe de nombreuses applications, généralement invisibles pour l'utilisateur, qui doivent également transiter par le pare-feu Windows pour accéder à votre ordinateur. Il s'agit de programmes au niveau du réseau chargés d'acheminer le trafic sur le réseau et sur Internet.

![image14](resources/3ef8ae01e7cb40408660b917d507d63e.png)
- Pour accéder aux paramètres ICMP, cliquez sur le bouton **Personnaliser**.
- La fenêtre **Personnaliser les paramètres ICMP** s'affiche. Le fait d'autoriser les requêtes d'écho entrantes est ce qui permet aux utilisateurs du réseau d'envoyer une commande ping vers votre ordinateur afin de déterminer s'il est présent sur le réseau.
![image15](resources/83220d1a835f41f487d3af75848db5b8.png)

Dressez la liste de quatre types ICMP spécifiques.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
- Fermez toutes les fenêtres ouvertes sur **PC-1**.
- Cliquez avec le bouton droit sur le dossier **Cisco**sur le Bureau, puis sélectionnez **Supprimer**.
- **Remarques générales**
Quelles sont les raisons possibles pour que vous deviez apporter des modifications au pare-feu?

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
