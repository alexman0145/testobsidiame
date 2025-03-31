---
title: TP – Contrôler et gérer les ressources système sou...
updated: 2023-10-31T17:46:53
created: 2023-01-12T18:22:41
---

TP – Contrôler et gérer les ressources système sous Windows
- 
- **Objectifs**
Au cours de ces travaux pratiques, vous allez utiliser des outils d'administration pour contrôler et gérer les ressources système sous Windows.

**Partie 1: Démarrer et arrêter les services de routage et d'accès à distance**

**Partie 2: Utiliser l'utilitaire de gestion informatique**

**Partie 3: Configurer les outils d'administration.**
- 
- **Ressource recommandée**
- Une machine virtuelle Windows avec accès Internet
- 
- **Instructions**
  1.  **Démarrer et arrêter les services de routage et d'accès à distance**

Vous allez observer ce qui se produit lorsqu'un service est arrêté, puis redémarré. Dans cette partie, vous allez utiliser les services de routage et d'accès à distance comme exemple. Ce service permet d'utiliser l'appareil local comme routeur ou comme serveur d'accès à distance.

- Cliquez sur **Panneau de configuration** \> Cliquer sur **Centre Réseau et partage**.

**Remarque**: si votre panneau de configuration est défini sur **Afficher par: catégorie**, passez-le sur **Afficher par: grandes icônes** ou sur **Afficher par: petites icônes**. Ce TP nécessite l'utilisation de l'un de ces paramètres.

![image1](resources/a0a6dc1867474e59946e272b83856481.png)
- Cliquez sur **Modifier les paramètres de la carte** dans le volet de gauche. Réduisez la taille de la fenêtre **Connexions réseau** et laissez-la ouverte.
![image2](resources/9182de0509474b2991f39ba4d8b20474.png)

![image3](resources/65e17e9997154123aaaf3020be8cdb8b.png)
- Accédez aux **Outils d'administration.** (Naviguez au **Panneau de configuration** \> Cliquez sur **Outils d'administration**)

![image4](resources/f3b15fc7e5434a91a8ad55c5581ad391.png)

- Dans la fenêtre **Outils d'administration**, double-cliquez sur l'icône **Analyseur de performances**.

![image5](resources/2ef57dabe8b2474e8060b3d23de496b8.png)

- Dans la fenêtre **Analyseur de performances**, assurez-vous que l' **Analyseur de performances**sous l'en-tête Outil de surveillance dans le volet gauche est mis en surbrillance. Cliquez sur l'icône **Figer l'affichage** (bouton pause) pour arrêter l'enregistrement.

![image6](resources/8179325f8cef4f0dbd0f46f482be005d.png)

- Cliquez avec le bouton droit et sélectionnez **Effacer** pour effacer le graphique. Laissez cette fenêtre ouverte.
![image7](resources/d3a44b26a5e14a39aaee279441c0586d.png)
- Accédez à la fenêtre **Outils d'administration** et sélectionnez **Services**.

![image5](resources/2ef57dabe8b2474e8060b3d23de496b8.png)

- Élargissez la fenêtre **Services** de manière à voir correctement le contenu. Faites défiler l'affichage du volet de droite jusqu'à ce que le service **Routage et accès distant soit visible**. Double-cliquez sur **Routage et accès distant**.
![image8](resources/3e40d80e0b4d40e2af9b72666c8e3625.png)
- La fenêtre **Propriétés de routage et accès distant (Ordinateur local)** s'affiche. Dans le champ du menu déroulant **Type de démarrage**, sélectionnez **Manuel**, puis cliquez sur **Appliquer**.

![image9](resources/ed861ed5f7704a63a4235517d6fb55fa.png)

![image10](resources/8fce8be345ba400ba070f390b70367cd.png)

Le bouton Démarrer est désormais activé. Ne cliquez PAS encore sur le bouton Démarrer. Laissez cette fenêtre ouverte.

![image11](resources/e1a51dcd9e804aa1aa4c057c408b4a48.png)
- Accédez à la fenêtre **Analyseur de performances**. Cliquez sur l'icône **Libérer l'affichage** pour démarrer l'enregistrement.

- Cliquez sur la fenêtre **Propriétés de routage et accès distant (Ordinateur local)**. Cliquez sur **Démarrer** pour démarrer le service. Une fenêtre avec une barre de progression s'affiche.

- Les boutons Arrêter et Suspendre sont maintenant actifs dans la fenêtre **Propriétés de routage et accès distant (Ordinateur local)**. Laissez cette fenêtre ouverte.

![image12](resources/08670f70f39545cdae5a629d8533fbe1.png)
- Accédez à la fenêtre **Connexions réseau**. Appuyez sur la touche de fonction **F5** pour actualiser le contenu.

Qu'est-ce qui change dans la fenêtre après avoir démarré le service **Routage et accès à distance**?

Après avoir démarrer routage et accès à distance un menu connexion entrantes est apparu

- Accédez à la fenêtre **Propriétés de Routage et accès distant (Ordinateur local)** et cliquez sur **Arrêter**. **Remarque**: Si l'option **Arrêter** est grisée, cliquez sur **Appliquer** et modifiez l'état du service.

- Accédez à la fenêtre **Connexions réseau**.

Question:Quels changements voyez-vous dans le volet de droite après avoir arrêté le service Routage et accès distant?

Après avoir arrêter le service routage et accès à distance le menu connexion entrantes à disparu.

- Accédez à la fenêtre **Analyseur de performances** et cliquez sur l'icône **Figer l'affichage** pour arrêter l'enregistrement.

![image13](resources/f7eed8cde83f46e2b4f659fbde6505ea.png)

Quel compteur est le plus enregistré sur le graphique? (Astuce: regardez la couleur du graphique et la couleur du compteur).

Ce compteur affiche le termps du processeur en pourcentage et affiche un graphique en rouge

- Cliquez sur le menu déroulant **Modifier le type de graphique**, puis sélectionnez **Rapport**.
![image14](resources/970e39aeecec4e178226168b7b937157.png)
- L'affichage passe en mode Rapport.
![image15](resources/e8fe7ad96a0b44cd8c012f951a1c115e.png)

Quelles sont les valeurs affichées dans le compteur?

Selon les données il y a de total de pourcentage de 34,916

- Cliquez sur la fenêtre **Propriétés de routage et accès distant (Ordinateur local)**. Dans le champ Type de démarrage, sélectionnez **Désactivé**, puis cliquez sur **OK**.
![image16](resources/a5f6e50660ee4dc9b9d5c00509a5aea5.png)
- Cliquez sur la fenêtre **Services**.

Quels sont le Statut et le Type de démarrage du service Routage et accès distant?

Le statut de routage et accès distant est seulement stopper

- Cliquez sur la fenêtre **Analyseur de performances**. Cliquez sur l'icône **Libérer l'affichage** pour démarrer l'enregistrement.

- Fermez toutes les fenêtres que vous avez ouvertes au cours de la partie 1 de ce TP.
- **Travailler dans l'utilitaire de gestion de l'ordinateur**
L'utilitaire de gestion de l'ordinateur est utilisé pour gérer un ordinateur local ou distant. Les outils de cet utilitaire sont regroupés en trois catégories: les outils système, de stockage, et les services et applications.

- Cliquez sur **Panneau de configuration** \> **Outils d'administration**. Sélectionnez **Gestion de l'ordinateur**.

- Dans la fenêtre **Gestion d'ordinateur** , développez les trois catégories en cliquant sur la **flèche** en regard d' **Outils d'administration**.

- Cliquez sur la flèche en regard de l'**Observateur d'événements**, puis cliquez sur la flèche en regard de **Journaux Windows**. Sélectionnez **Système**.
![image17](resources/1c93b9aea2f84afeb86c5aed62d42c75.png)
- La fenêtre **Propriétés de l'événement** s'affiche. Cliquez sur la **flèche dirigée vers le bas** pour localiser un événement du service **Routage et accès distant**. Vous devriez trouver quatre événements décrivant l'ordre de démarrage et d'arrêt du service **Routage et accès distant**.
![image18](resources/eb8a28f02c9c43099d7c06ef64281a1e.png)

- Fermez toutes les fenêtres ouvertes.

- **Configurez les outils d'administration.**
Pour la suite de ce TP, vous allez configurer les fonctionnalités avancées de l'outil d'administration et en contrôler l'impact sur l'ordinateur.

- Cliquez sur **Panneau de configuration** \> **Outils d'administration** \> **Analyseur de performances**. La fenêtre Analyseur de performances s'affiche. Allez dans **Ensembles de collecteurs de données**. Cliquez avec le bouton droit sur **Définis par l'utilisateur**, puis cliquez sur **Nouveau** \> **Ensemble de collecteurs de données**.
![image19](resources/3086ebf3a4b74f65a682d8a0e496f8a9.png)
- La fenêtre **Créer un nouvel ensemble de collecteurs de données** s'affiche. Dans le champ Nom, tapez **Journaux de mémoire**. Activez le bouton radio **Créer manuellement (avancé)**, puis cliquez sur **Suivant**.

![image20](resources/bb39726b71e1495e847437ea5c491883.png)

- Dans la fenêtre **Quel type de données inclure?** , ﻿sélectionnez **Compteur de performance** puis cliquez sur **Suivant**.

![image21](resources/e74d485ab132474a8438846d3aa38902.png)

- Dans la fenêtre **Quels compteurs de performance enregistrer dans un journal?** , cliquez sur **Ajouter**.

![image22](resources/f4e5b235853d4c8d875faa8d58ad9461.png)

- Dans la liste des compteurs disponibles, recherchez et développez **Mémoire**. Sélectionnez **Mégaoctets disponibles** et cliquez sur **Ajouter\>\>**.
![image23](resources/c74d9637c104453b81a307b464722150.png)
- Le compteur **Mégaoctets disponibles** doit à présent être visible dans le volet. Cliquez sur **OK**.

- Définissez le champ Intervalle d'échantillonnage sur **4** secondes. Cliquez sur **Suivant**.
![image24](resources/64d56e0c27cd4c5f9d9069e00f1b2d0b.png)
- Dans la fenêtre **Où enregistrer les données?**, cliquez sur **Parcourir**

- Dans la fenêtre **Rechercher un dossier**, sélectionnez votre lecteur **(C:)** qui est **Disque local (C:)**.
![image25](resources/70793e236c50412b8e184bea9ad19013.png)
- Sélectionnez **PerfLogs** et cliquez sur **OK**.

- La fenêtre **Où enregistrer les données?** s'affiche, avec les informations relatives au répertoire que vous avez sélectionné à l'étape précédente. Cliquez sur **Next** (Suivant).

![image26](resources/336e38ed8ea14f4fbbdaa4f3497bca78.png)

- La fenêtre **Créer l'ensemble de collecteurs de données?** cliquez sur **Fin**.

![image27](resources/b796d2dcc07d425cb89e42ad3d090018.png)

- Développez **Définis par l'utilisateur** et sélectionnez **Journaux de mémoire.** Cliquez avec le bouton droit sur **DataCollector01**, puis sélectionnez **Propriétés**.
![image28](resources/a155f27482f747efaa57df502d5d429c.png)
- Cliquez sur **Propriétés de DataCollector01** , définissez le **champ Format:** sur **Séparé par une virgule**.
![image29](resources/4153719a0b5d405ab945d3c07a2fbe01.png)
- Cliquez sur l'onglet **Fichier**.

Quel est le nom complet du chemin du fichier exemple?

C:\Perflogs\Admin\Nouvel ensemble de collecteur…\DataCollector01.csv

![image30](resources/215257dd656b43ef9d3903257e3ae6ca.png)
- Cliquez sur **OK**.

- Cliquez sur l'icône **Journaux de mémoire** dans le volet de gauche de l'onglet **Analyseur de performances**. Cliquez sur la **flèche verte** pour démarrer l'ensemble de collecte de données. Notez qu'une flèche verte est placée au-dessus de l'icône **Journaux de mémoire**.
![image31](resources/01ad92f4351c4efc9c8b6442fb412a78.png)
- Pour forcer l'ordinateur à utiliser une partie de la mémoire disponible, ouvrez et fermez un navigateur.

- Cliquez sur le **carré noir** pour démarrer l'ensemble de collecte de données.
![image32](resources/c32f48c8fef845229b450052ac306f7e.png)

Quel changement remarquez-vous à propos de l'icône Journaux de mémoire?

Aucun changement

- Cliquez sur **Démarrer \> Ordinateur**,puis sur le **lecteur C: \> PerfLogs**. Recherchez le dossier commençant par le nom de votre PC, suivi par un horodatage, **DESKTOP-NDFE14H_20170514-000001** dans cet exemple. Double-cliquez sur le dossier pour l'ouvrir, puis double-cliquez sur le fichier **DataCollector01.csv**. **Si vous y êtes invité, cliquez sur Continuer pour autoriser l'accès au dossier.**
![image33](resources/aacb29e0443845dda700ae62af62fb9c.png)

**Remarque**: si le message **Windows ne peut pas ouvrir ce fichier** s'affiche, sélectionnez la case d'option **Sélectionner un programme dans la liste des programmes installés** \> **OK** \> **Bloc-notes** \> **OK**.

![image34](resources/cdb97ba31b194ee4a0fbbe89be368495.png)

Qu'indique la colonne située le plus à droite?

Le chiffre de consomation de mémoire vive calculer par le datacollector

- Fermez le fichier **DataCollector01.csv**, ainsi que la fenêtre avec le dossier PerfLogs.

- Sélectionnez la fenêtre **Analyseur de performances**. Cliquez avec le bouton droit sur **Journaux de mémoire** \> **Supprimer**.
![image35](resources/f2766640e51e4fbcaea095b0fe20103c.png)
- La fenêtre **Analyseur de performances** \> **Confirmer la suppression** s'affiche. Cliquez sur **Oui**.

- Ouvrez le **lecteur (C:) \> PerfLogs**. Cliquez avec le bouton droit sur le dossier créé pour stocker le fichier journal de mémoire, puis cliquez sur **Supprimer**.

- La fenêtre Supprimer le dossier s'ouvre. Cliquez sur **Oui**.

- Fermez toutes les fenêtres ouvertes.

![image36](resources/3c6149624eb14f3fa87d26621aec0d21.png)

![image37](resources/b329127f22134309a6c4458cdd97b26c.png)

![image38](resources/aa4e5799ff2a4797b1ee2dc05a4d8ec3.png)

![image39](resources/92a8a6966df34517ac188dbcea2e15da.png)

![image40](resources/32cf69ac4b87447d8ae14378b6223d6e.png)

![image41](resources/3270e5cefc32491bac35424566ccc738.png)

![image42](resources/598438f81cef4d06b5ed57ddc0714e71.png)

![image43](resources/04e9c08bbf9c4102bb0a95b2b4079a5e.png)
