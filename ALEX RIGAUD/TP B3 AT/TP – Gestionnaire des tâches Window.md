---
title: TP – Gestionnaire des tâches Windows
updated: 2023-10-31T15:24:49
created: 2023-01-12T18:19:26
---

**TP – Gestionnaire des tâches Windows**

- **Objectifs**
Dans ces travaux pratiques, vous allez explorer le Gestionnaire des tâches et y gérer les processus.

**Partie1: Utiliser l'onglet Processus**

**Partie2: Utiliser l'onglet Services**

**Partie3: Utiliser l'onglet Performance**
- 
- **Contexte/scénario**
Le gestionnaire des tâches est un programme de surveillance du système qui fournit des informations sur les processus et les programmes en cours d'exécution sur un ordinateur. Il permet également de mettre fin à des processus et des programmes, et de modifier l'ordre de priorité des processus.
- 
- **Ressources requises**
- Une machine virtuelle Windows avec accès Internet
- 
- **Instructions**

- **Utiliser l'onglet Processus**
  1.  Ouvrez une invite de commande et un navigateur.
![image1](resources/8e0d207c523b4006966990bf14f8a475.png)

Google Chrome

![image2](resources/f252f0364eed43dd861d42138df0c507.png)

Microsoft Edge est utilisé dans ce TP, mais n'importe quel autre navigateur fera l'affaire. Il vous suffit de remplacer le terme Microsoft Edge par le nom de votre navigateur dans ce TP.

- Cliquez avec le bouton droit sur la barre des tâches pour ouvrir le **gestionnaire des tâches**. Vous pouvez également appuyer sur **Ctrl-Alt-Suppr** pour accéder à l'écran de sécurité Windows et sélectionner **Gestionnaire des tâches**.

- Cliquez sur **Plus de détails** pour afficher tous les processus répertoriés sous l'onglet Processus.

- Développez l'en-tête Interpréteur de commandes Windows.
![image3](resources/9f057a5e42354cac849c428e88aa5091.png)

Quels éléments apparaissent sous cet en-tête?

Lorsqu'on déroule L'interpréteur de commande Windows on peut apercevoir deux applications comme Hôte de la fenêtre de la console et interpréteur de commande Windows

- L'onglet Processus affiche trois catégories de processus: Applications, Processus en arrière-plan et Processus Windows.

![image3](resources/9f057a5e42354cac849c428e88aa5091.png)

- La catégorie Applications répertorie les applications que vous avez ouvertes, telles que Microsoft Edge, le gestionnaire de tâches et l'interpréteur de commandes Windows, comme illustré dans la figure ci-dessus. Elle affiche également d'autres applications qui ont été ouvertes par les utilisateurs, telles que les navigateurs et les clients de messagerie.

- Les processus en arrière-plan sont exécutés en arrière-plan par les applications qui sont actuellement ouvertes.

- Les processus Windows n'apparaissent pas dans la figure. Faites défiler l'écran vers le bas pour afficher ces processus sur votre PC Windows. Les processus Windows sont des services Microsoft Windows qui s'exécutent en arrière-plan.

![image4](resources/a23c68fe51e6453a9700ccd2e2366e8f.png)

Certains processus en arrière-plan ou processus Windows peuvent être associés à des processus en avant-plan. Par exemple, si vous ouvrez une fenêtre d'invite de commande, le processus Hôte de la fenêtre de la console sera lancé dans la section Processus Windows, comme illustré ci-dessous.

![image5](resources/aefd57fed2d047e988a001bafb2f81e8.jpg)
- Cliquez avec le bouton droit sur Hôte de la fenêtre de la console, puis sélectionnez **Propriétés**.

:

Quel est l'emplacement de ce nom de fichier et de ce processus?

L'emplacement se trouve dans C:\Windows\System32

- Fermez la fenêtre d'invite de commandes.

Que se passe-t-il au niveau de l'interpréteur de commandes Windows et de l'hôte de la fenêtre de la console lorsque la fenêtre d'invite de commande est fermée?

Lors de la fermeture de l'invite de commande, on peut voir sur le gestionnaire des tâche que ce processus n'est plus affichez

- Cliquez sur l'en-tête Mémoire. Cliquez une nouvelle fois sur le titre Mémoire.

Quel effet cela a-t-il sur les colonnes?

- Cliquez avec le bouton droit sur l'en-tête Mémoire, puis sélectionnez **Valeurs de ressources** \> **Mémoire** \> **Pourcentages**.

![image6](resources/67c97e04b2394230afa579067c13c97d.jpg)

:

Quel effet cela a-t-il sur la colonne Mémoire?

Quand on modifie le paramètre valeur dans mémoire et qu'on affiche des pourcentage il affichera le pourcentage d'utilisation des différent processus

Au lieu d'une valeur réelle.

En quoi est-ce utile?

Le pourcentage est utiliser pour mieux calculer les processus utiliser sur l'ordinateur et permet de mieux déterminer si s'est une faible utilisation ou une forte utilisation.

- Dans le Gestionnaire des tâches, cliquez sur l'en-tête **Nom** .

![image7](resources/29abd37082064cc087b3e78db6bae733.jpg)

- Double-cliquez sur Microsoft Edge.

Que se passe-t-il?

Rien de ne se passe

- Retournez au Gestionnaire des tâches et cliquez avec le bouton droit sur Microsoft Edge. Sélectionnez **Terminer la tâche**.

![image8](resources/a2ee1578b3ea44af8d51b946e18ea693.png)

Que se passe-t-il au niveau des fenêtres du navigateur?

Après avoir cliquez sur fin de tâche la feunêtre du naviguateur à disparue car cela arrête le processus de l'application

- **Utiliser l'onglet Services**
Dans la fenêtre Gestionnaire des tâches, cliquez sur l'onglet **Services**. Utilisez la barre de défilement située à droite de la fenêtre **Services** pour afficher l'ensemble des services répertoriés.

Quels sont les états répertoriés?

![image9](resources/61ce6365b3aa4773bec8f9af6af32b5a.png)

On peut apercevoir les nom des différent services leur description par exemple Windows Search, Xbox Game monitoring. On peut également voir si il sont actif ou inactif ou en cours d'execution.  

- **Utiliser l'onglet Performance**
  1.  Dans la fenêtre Gestionnaire des tâches, cliquez sur l'onglet **Performances**.

![image10](resources/6398a2c8f10842e79fa0ff6e39e82366.jpg)

Combien de threads sont en cours d'exécution?

Dans mon cas j'ai environ 1117 threads mais cela varie en fonction de l'utilisation

![image11](resources/3624630535d4498d8f5edbc6c44a8a0d.png)

Combien de processus sont en cours d'exécution?

71 processus en cours d'execution

- Cliquez sur **Mémoire** dans le volet de gauche de l'onglet **Performance**.

![image12](resources/f84986c381354166afa79258d3dc736a.jpg)

Quelle est la mémoire physique totale (en Mo)?

Pour moi elle est de 2 Go

![image13](resources/be79b3e4f3f14a278a02c576745c17ff.png)

Quelle est la mémoire physique disponible (en Mo)?

Environ 220 Mo

Quelle quantité de mémoire physique (en Mo) est utilisée par l'ordinateur?

- Cliquez sur le **graphique Ethernet** dans le volet de gauche de l'onglet **Performance**.

![image14](resources/06d6359c3978431b976ab7da94844f20.jpg)

:

Quelle est la vitesse de liaison?

Quelle est l'adresseIPv4 du PC?

- Cliquez sur **Ouvrir le Moniteur de ressources** pour afficher l'utilitaire Moniteur de ressources à partir de l'onglet Performance du gestionnaire des tâches.

![image15](resources/3f9c912ab1bd4ef6affa194ed9774379.jpg)

- **Question de réflexion**

Pourquoi est-il important qu'un administrateur maîtrise l'utilisation du Gestionnaire des tâches?

![image16](resources/bd63c2e0feb64ba582c0c7f76f38789b.png)

![image17](resources/941b8705efbf426796929236c7ccdd5d.png)

![image18](resources/2a9b1801064e484294f81cef3c04edae.png)
