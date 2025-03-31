---
title: TP – Contrôler et gérer les ressources système sou...
updated: 2023-01-12T18:27:32
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

![image1](resources/f0e5354946ef449e996bc904210dc310.png)
- Cliquez sur **Modifier les paramètres de la carte** dans le volet de gauche. Réduisez la taille de la fenêtre **Connexions réseau** et laissez-la ouverte.

- Accédez aux **Outils d'administration.** (Naviguez au **Panneau de configuration** \> Cliquez sur **Outils d'administration**)

- Dans la fenêtre **Outils d'administration**, double-cliquez sur l'icône **Analyseur de performances**.

- Dans la fenêtre **Analyseur de performances**, assurez-vous que l' **Analyseur de performances**sous l'en-tête Outil de surveillance dans le volet gauche est mis en surbrillance. Cliquez sur l'icône **Figer l'affichage** (bouton pause) pour arrêter l'enregistrement.

- Cliquez avec le bouton droit et sélectionnez **Effacer** pour effacer le graphique. Laissez cette fenêtre ouverte.
![image2](resources/0c5afdbd58a0428ab70897ccadbbfcea.png)
- Accédez à la fenêtre **Outils d'administration** et sélectionnez **Services**.

- Élargissez la fenêtre **Services** de manière à voir correctement le contenu. Faites défiler l'affichage du volet de droite jusqu'à ce que le service **Routage et accès distant soit visible**. Double-cliquez sur **Routage et accès distant**.
![image3](resources/ea82134e869c4a6a8ea4132f12e03e73.png)
- La fenêtre **Propriétés de routage et accès distant (Ordinateur local)** s'affiche. Dans le champ du menu déroulant **Type de démarrage**, sélectionnez **Manuel**, puis cliquez sur **Appliquer**.

Le bouton Démarrer est désormais activé. Ne cliquez PAS encore sur le bouton Démarrer. Laissez cette fenêtre ouverte.

![image4](resources/7f5d8756fbbb4d8894bee20c0b1893d5.png)
- Accédez à la fenêtre **Analyseur de performances**. Cliquez sur l'icône **Libérer l'affichage** pour démarrer l'enregistrement.

- Cliquez sur la fenêtre **Propriétés de routage et accès distant (Ordinateur local)**. Cliquez sur **Démarrer** pour démarrer le service. Une fenêtre avec une barre de progression s'affiche.

- Les boutons Arrêter et Suspendre sont maintenant actifs dans la fenêtre **Propriétés de routage et accès distant (Ordinateur local)**. Laissez cette fenêtre ouverte.

![image5](resources/5e3408feba6048348445dc5049b90020.png)
- Accédez à la fenêtre **Connexions réseau**. Appuyez sur la touche de fonction **F5** pour actualiser le contenu.

Qu'est-ce qui change dans la fenêtre après avoir démarré le service **Routage et accès à distance**?

- Accédez à la fenêtre **Propriétés de Routage et accès distant (Ordinateur local)** et cliquez sur **Arrêter**. **Remarque**: Si l'option **Arrêter** est grisée, cliquez sur **Appliquer** et modifiez l'état du service.

- Accédez à la fenêtre **Connexions réseau**.

Question:Quels changements voyez-vous dans le volet de droite après avoir arrêté le service Routage et accès distant?

- Accédez à la fenêtre **Analyseur de performances** et cliquez sur l'icône **Figer l'affichage** pour arrêter l'enregistrement.

![image6](resources/0f7fd4272dd944b2b8e7828d3e5d7b40.png)

Quel compteur est le plus enregistré sur le graphique? (Astuce: regardez la couleur du graphique et la couleur du compteur).

- Cliquez sur le menu déroulant **Modifier le type de graphique**, puis sélectionnez **Rapport**.
![image7](resources/c2afbe335b064d799f873a0fa84d363b.png)
- L'affichage passe en mode Rapport.
![image8](resources/12883df906f240948d0592c3adcaf2b5.png)

Quelles sont les valeurs affichées dans le compteur?

- Cliquez sur la fenêtre **Propriétés de routage et accès distant (Ordinateur local)**. Dans le champ Type de démarrage, sélectionnez **Désactivé**, puis cliquez sur **OK**.
![image9](resources/06cec768cccd484890d13529ce27a25d.png)
- Cliquez sur la fenêtre **Services**.

Quels sont le Statut et le Type de démarrage du service Routage et accès distant?

- Cliquez sur la fenêtre **Analyseur de performances**. Cliquez sur l'icône **Libérer l'affichage** pour démarrer l'enregistrement.

- Fermez toutes les fenêtres que vous avez ouvertes au cours de la partie 1 de ce TP.
- **Travailler dans l'utilitaire de gestion de l'ordinateur**
L'utilitaire de gestion de l'ordinateur est utilisé pour gérer un ordinateur local ou distant. Les outils de cet utilitaire sont regroupés en trois catégories: les outils système, de stockage, et les services et applications.

- Cliquez sur **Panneau de configuration** \> **Outils d'administration**. Sélectionnez **Gestion de l'ordinateur**.

- Dans la fenêtre **Gestion d'ordinateur** , développez les trois catégories en cliquant sur la **flèche** en regard d' **Outils d'administration**.

- Cliquez sur la flèche en regard de l'**Observateur d'événements**, puis cliquez sur la flèche en regard de **Journaux Windows**. Sélectionnez **Système**.
![image10](resources/352bdeeee8da4cf68e15ef4fed42356b.png)
- La fenêtre **Propriétés de l'événement** s'affiche. Cliquez sur la **flèche dirigée vers le bas** pour localiser un événement du service **Routage et accès distant**. Vous devriez trouver quatre événements décrivant l'ordre de démarrage et d'arrêt du service **Routage et accès distant**.
![image11](resources/eaa32faefb4d4f89b454220ee3633788.png)

- Fermez toutes les fenêtres ouvertes.

- **Configurez les outils d'administration.**
Pour la suite de ce TP, vous allez configurer les fonctionnalités avancées de l'outil d'administration et en contrôler l'impact sur l'ordinateur.

- Cliquez sur **Panneau de configuration** \> **Outils d'administration** \> **Analyseur de performances**. La fenêtre Analyseur de performances s'affiche. Allez dans **Ensembles de collecteurs de données**. Cliquez avec le bouton droit sur **Définis par l'utilisateur**, puis cliquez sur **Nouveau** \> **Ensemble de collecteurs de données**.
![image12](resources/2cb6491081624c668754caea35655f56.png)
- La fenêtre **Créer un nouvel ensemble de collecteurs de données** s'affiche. Dans le champ Nom, tapez **Journaux de mémoire**. Activez le bouton radio **Créer manuellement (avancé)**, puis cliquez sur **Suivant**.

- Dans la fenêtre **Quel type de données inclure?** , ﻿sélectionnez **Compteur de performance** puis cliquez sur **Suivant**.

- Dans la fenêtre **Quels compteurs de performance enregistrer dans un journal?** , cliquez sur **Ajouter**.

- Dans la liste des compteurs disponibles, recherchez et développez **Mémoire**. Sélectionnez **Mégaoctets disponibles** et cliquez sur **Ajouter\>\>**.
![image13](resources/8c276c0a666f4661ab4b3454335724a6.png)
- Le compteur **Mégaoctets disponibles** doit à présent être visible dans le volet. Cliquez sur **OK**.

- Définissez le champ Intervalle d'échantillonnage sur **4** secondes. Cliquez sur **Suivant**.
![image14](resources/1d8eb272676d474fbce4f4c81ec8cf58.png)
- Dans la fenêtre **Où enregistrer les données?**, cliquez sur **Parcourir**.

- Dans la fenêtre **Rechercher un dossier**, sélectionnez votre lecteur **(C:)** qui est **Disque local (C:)**.
- Sélectionnez **PerfLogs** et cliquez sur **OK**.

- La fenêtre **Où enregistrer les données?** s'affiche, avec les informations relatives au répertoire que vous avez sélectionné à l'étape précédente. Cliquez sur **Next** (Suivant).

- La fenêtre **Créer l'ensemble de collecteurs de données?** cliquez sur **Fin**.

- Développez **Définis par l'utilisateur** et sélectionnez **Journaux de mémoire.** Cliquez avec le bouton droit sur **DataCollector01**, puis sélectionnez **Propriétés**.
![image15](resources/2fe0236a78614bd5bfc149acba29db90.png)
- Cliquez sur **Propriétés de DataCollector01** , définissez le **champ Format:** sur **Séparé par une virgule**.
![image16](resources/2c5097820b924c1a8f3743f1f7f80adb.png)
- Cliquez sur l'onglet **Fichier**.

Quel est le nom complet du chemin du fichier exemple?

- Cliquez sur **OK**.

- Cliquez sur l'icône **Journaux de mémoire** dans le volet de gauche de l'onglet **Analyseur de performances**. Cliquez sur la **flèche verte** pour démarrer l'ensemble de collecte de données. Notez qu'une flèche verte est placée au-dessus de l'icône **Journaux de mémoire**.
![image17](resources/911dab6dc2ca46f8a3b17279032a0cdf.png)
- Pour forcer l'ordinateur à utiliser une partie de la mémoire disponible, ouvrez et fermez un navigateur.

- Cliquez sur le **carré noir** pour démarrer l'ensemble de collecte de données.
![image18](resources/4911b20cdd0a4b5e8a8862ec27ab4ad1.png)

Quel changement remarquez-vous à propos de l'icône Journaux de mémoire?

- Cliquez sur **Démarrer \> Ordinateur**,puis sur le **lecteur C: \> PerfLogs**. Recherchez le dossier commençant par le nom de votre PC, suivi par un horodatage, **DESKTOP-NDFE14H_20170514-000001** dans cet exemple. Double-cliquez sur le dossier pour l'ouvrir, puis double-cliquez sur le fichier **DataCollector01.csv**. **Si vous y êtes invité, cliquez sur Continuer pour autoriser l'accès au dossier.**
![image19](resources/a2915af2ecf34c2fb399e36d82dfc247.png)

**Remarque**: si le message **Windows ne peut pas ouvrir ce fichier** s'affiche, sélectionnez la case d'option **Sélectionner un programme dans la liste des programmes installés** \> **OK** \> **Bloc-notes** \> **OK**.

![image20](resources/f5573d53ba904178966e1c9e799fc850.png)

Qu'indique la colonne située le plus à droite?

- Fermez le fichier **DataCollector01.csv**, ainsi que la fenêtre avec le dossier PerfLogs.

- Sélectionnez la fenêtre **Analyseur de performances**. Cliquez avec le bouton droit sur **Journaux de mémoire** \> **Supprimer**.
![image21](resources/107b14d8732a40ab9bf207a1d688d940.png)
- La fenêtre **Analyseur de performances** \> **Confirmer la suppression** s'affiche. Cliquez sur **Oui**.

- Ouvrez le **lecteur (C:) \> PerfLogs**. Cliquez avec le bouton droit sur le dossier créé pour stocker le fichier journal de mémoire, puis cliquez sur **Supprimer**.

- La fenêtre Supprimer le dossier s'ouvre. Cliquez sur **Oui**.

- Fermez toutes les fenêtres ouvertes.

