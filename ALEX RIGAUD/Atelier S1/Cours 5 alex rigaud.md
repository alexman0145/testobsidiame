---
title: Cours 5 alex rigaud
updated: 2023-10-10T21:08:38
created: 2023-10-10T11:58:20
---

AM

1.  Choisir un template bootstrap
    1.  Qu'est-ce que bootstrap

Un Boostrap est un framework open-source pour le development web. Il est utilisé en fichier css et javascript permettant de fournir une collection de style de modèles de conception tel que bouton, grille, formulaires, et modèles de navigation.

2.  Où trouver un template
Ils existent plusieurs sites avec des exemples différents de templates :

- [Accueil - Canva](https://www.canva.com/)
- [Free Templates - Download Designs, Docs, Forms \| Template.net](https://www.template.net/)
1.  Comment le modifier

Avant de modifier un template il faut s'assurer que toute extension est installez sur l'IDE qui permettera de modifier le templates

Ouvrez visual studio code

![image1](resources/5934633055e948e18cb412086c33d2c5.png)

Assurez-vous d'avoir télécharger le templates et qu'il soit sur Vscode

Télécharger l'extension Live server ou five server

Dans visual studio code recherché dans le menu extension en bas à gauche recherchez dans le menu zone de recherche et cliquez sur l'extension live server

![image2](resources/a7f73fbd9fea4e2abeb47a57a56ee5a7.png)

Si Live server est installer vous pouvez commencez à créer votre repos sur Azure dev ops

Rendez-vous sur le site <https://dev.azure.com/>

Démarrer en session gratuite

Puis créer un nouveau project si ce n'est pas déjà fait dans new project

![image3](resources/8ea90a1b5f634c97a7d4f9dbae7fb4a3.png)

Dans le nouveau projet séléctionez dans version control " Git " et Work item process "Basic" puis cliquez sur create

![image4](resources/a178e249ae7d4f86a4f09437672e2404.png)

Créer un nouveau repo on peut le nommé par exemple " portfolio sites "

En repository type " Git "

Dans add .gitignore dans none sélectionnez " VisualStudio "
![image5](resources/903d978aaa534510a3ceb97223fbc4fe.png)

Ensuite cliquez sur create

Une fois que le repos est créer

Cloner le repos pour enregistrer les projet à ajouter dans azure dev ops

![image6](resources/318a7599baa64531a952af20261e7370.png)

Cloner à partir de visual studio code

Cliquez sur "clone in VS code"

![image7](resources/a90431d74e7141a1b0d056a064548624.png)

Cliquer sur "open"

![image8](resources/f2d332a023a7493485287b2e8a63a7b6.png)

Cliquez une nouvelle fois sur open sur VScode

![image9](resources/84e159f7051a4a0c967d73fd71233908.png)

Sélectionner le répertoire pour le repos

![image10](resources/44d20e2d2cb247c2b254e674e4dbf048.png)

Patientez quelque instant

Cliquez une nouvelle fois sur open

Cliquez sur "Yes, I trust the authors"'

![image11](resources/f0d29416925c48cd86166f3e8c35ca4e.png)

Glisser le contenu template sur le repos puis effectuer un commit sur la branch

Ensuite créer un commit pour préparer l'envoie des fichiers

Pour trouver un element à modifier sur une page HTML sur le petit curseur avec un rectangle arondi

![image12](resources/39ae80d4545043c3a0535f63b96280dc.png)
![image13](resources/6be0a4a4a4bb4ff394fbd3ab85d674de.png)

Déployer un site web sur Azure portal connectez vous sur azure portal cliquez sur commencez gratuitement

![image14](resources/c4ab0edfbfbc46a6aa4e5b6b9a3b126e.png)

![image15](resources/615a82cff6d04c52aba510144128607a.png)

Dans le menu accueil d'azure allez en haut à gauche sur les trois traits un menu déroulant apparaît cliquez sur espace de stockage

![image16](resources/45de710287ee442f8924e5fe0d50d41e.png)![image17](resources/69ae90721e3246fc9516334389bb4d7b.png)

Dans le menu compte de stockage cliquez sur créer

![image18](resources/343e3259d13e48158e5fb10277bc286e.png)

L'outil de création de compte de stockage démarre

Laisser par défaut Azure for students, nommez un nouveau groupe de ressource par exemple "portfolio"
Région méter europe central france
Nom le nom du compte de stockage du site et laisser par défaut standard en performances et géoredondant (GRS) en redondance ainsi que les avancé réseau protection des données chiffrement étiquettes verifier.

![image19](resources/28be0ec426914b46bb785e25d2abcfb4.png)

Une fois que la vérification est terminé cliquer sur créer

Dans le menu acceuille deux ressources sont ajouté aller dans votre compte de stockage

![image20](resources/a1c6de5142d041d195d839214656a653.png)![image21](resources/ecfa25000e4f4ce1a69a6e2639e14eb7.png)

Dans l'espace compte de stockage aller dans gestions de données cliquer sur site web statique en décédant au milieu

![image22](resources/3894964ace0f4b078b13c0fe2291a7c6.png)

Dans sites web statique par défaut l'option est désactivé il faut l'activé pour publier la page web une fois que cela est fait

![image23](resources/5785700edc344d1e9ff27009a2edf6cc.png)

Allez dans naviguateur de fichier tout en haut

![image24](resources/815979dad90d401db699a1fcf9a11084.png)![image25](resources/6e512e234ba74f5aa4bea2a3dbb080aa.png)

Le contenu pour permettre de mettre la page web va être placer par défaut dans \$web

![image26](resources/74b4d9986aef423d8394cca8c4f6c39d.png)![image27](resources/08265320c96c41a7b5804bdf674c172d.png)

Placer tous les fichier que vous voulez publier sur le web en cliquant sur charger

![image28](resources/b8f0880f0aa947c49469c4956480c4a3.png)

Glisser et déposser tous les fichier à ajouté

![image29](resources/077176c78cf54236adde3d479f31df3c.png)

Retournez sur site web statique

Sur le site un url principal et secondaire à été créer pour accordé l'accès à tous le monde de votre site

![image30](resources/c0bbaa793e914ed5bca6d5563d3f60d9.png)
Ajouter le fichier principal de votre page web par exemple index.html puis enregistrer

Normalement si vous copier votre page html le lien devrait fonctionner et se diriger vers votre site que vous avez créer.

1.  Mettre son site en ligne
    2.  Azure
3.  Modifier votre template afin d'avoir un menu
1.  Il doit comporter toutes les entrées que nous avons déterminées
