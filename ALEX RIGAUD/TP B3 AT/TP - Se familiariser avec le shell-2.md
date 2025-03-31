---
title: TP - Se familiariser avec le shell
updated: 2023-12-08T14:49:53
created: 2023-03-02T14:35:12
---

**TP - Se familiariser avec le shell**
- 
- **Objectifs**
Au cours de ces travaux pratiques, vous allez utiliser la ligne de commande Linux pour gérer les fichiers et les répertoires, et pour effectuer quelques tâches d'administration de base.

**Partie 1: Principes de base de Shell**

**Partie 2: Copier, supprimer et déplacer des fichiers**
- 
- **Matériel conseillé**
- Poste de travail CyberOps VM
- 
- **Instructions**

- **Notions de base sur le shell**

Le terme «shell» désigne l'interpréteur de commandes sous Linux. Également connu sous le nom de Terminal, Ligne de commande et Invite de commande, le shell permet d'interagir de manière efficace avec un ordinateur Linux.

- **Accéder à la ligne de commande**

- Connectez-vous au poste de travail virtuel CyberOps avec le nom d'utilisateur **analyst** et le mot de passe **cyberops**. Le compte **analyst** servira d'exemple de compte utilisateur pendant l'intégralité des travaux pratiques.

- Pour accéder à la ligne de commande, cliquez sur l'icône **terminal** située sur le dock, en bas de l'écran de la machine virtuelle. L'émulateur de terminal s'ouvre.

![image1](resources/7782bbccb829436ca479ed373658cbbf.jpg)

- **Afficher les pages de manuel à partir de la ligne de commande**

Vous pouvez afficher l'aide de la ligne de commande à l'aide de la commande **man**. Une page man, abréviation de page de manuel, est une documentation intégrée sur les commandes Linux. Les pages man offrent des informations détaillées sur les commandes et leurs options.

- Pour en savoir plus sur les pages de manuel, saisissez:

\[analyst@secOps ~\]\$ **man man**

**Version graphique  

**

![image2](resources/ffd01c3d93c0409b8264ca5ace7efaed.png)

Indiquez le nom de quelques sections des pages man.

La commande man permet d'utiliser le manuel d'instruction pour se familiariser avec l'environnement du systeme d'exploitation Linux don’t Cyberops.

Il y a plusieurs nom de section comme par exemple :

- DESCRIPTION : Souvent ajouter en début de page pour donné une description du manuel de l'interface graphique

- NAME : Pour voir cet section il faut utiliser la commande man -an pour voir une autre référence mais plus dans le system

- SYNOPSIS : Affiche les différentes commande pour ce référencer sur certaine page

- EXAMPLES : Explique les différentes commande à utiliser sur le systeme d'exploitation UNIX très utile pour commencer à apprendre les base en Linux

- OVERVIEW : Les termes d'utilisation de l'OS

- Tapez **q** pour quitter la page man.
![image3](resources/7a98f42614eb4e8ba6c844a2ec4fb0c5.png)

- Utilisez la commande **man** pour en savoir plus sur la commande **cp** :

\[analyst@secOps ~\]\$ **man cp**

**Capture graphique**

![image4](resources/55e623e3d0814bf981dde64d9071d1ff.png)

Quelle est la fonction de la commande **cp**?

La commande cp permet de copier un fichier ou un répertoire mais elle peut avoir plusieur fonction comme copier un fichier de force en utilisant la commande

\[analyst@secOps ~\]\$ **cp "nom du répertoire ou fichier" -f**

La commande cp - r permettant de copier récursivement des répertoire

\[analyst@secOps ~\]\$ **cp "nom du répertoire ou fichier" -r**

La commande cp -I pour demander confirmation avant d'écraser le fichier

\[analyst@secOps ~\]\$ **cp "nom du répertoire ou fichier" -I**

Il existe plusieurs commande permettant d'utiliser cp qu'elle ne peuvent pas toute être évoquer

Quelle commande utiliseriez-vous pour obtenir plus d'informations sur la commande **pwd**? Quelle est la fonction de la commande **pwd**?

Pour obtenir des information il suffit de faire la même chose que pour connaître l'utilisattion de man cp on remplace alors :

\[analyst@secOps ~\]\$ **man pwd**

Cet commande permet d'afficher un répertoire spécifique soit le répertoire actuelle

Par exemple

La commande

\[analyst@secOps ~\]\$ **pwd -L**

Cette commande affiche le répertoire avec des liens logiques

\[analyst@secOps ~\]\$ **pwd -R**

Contrairement à la commande précédente il évite les lien logique

En résumer cet commande peut afficher le répertoire qu'il soit physique ou logique

Selon la précision de la commande.

- **Créez et modifiez des répertoires.**

Au cours de cette étape, vous utiliserez les commandes de changement de répertoire (**cd**), de création de répertoire (**mkdir**) et de liste de répertoire (**ls**).

**Remarque**: «Répertoire» est synonyme de «Dossier». Les termes dossier et répertoire sont souvent utilisés de manière interchangeable dans ces travaux pratiques.

- Tapez **pwd** dans l'invite.

\[analyst@secOps ~\]\$ **pwd**

/home/analyst

Quel est le répertoire actif?

Le répertoire actif est /home/analyst

- Accédez au répertoire **/home/analyst** si ce n'est pas le répertoire actif. Saisissez **cd /home/analyst**

\[analyst@secOps ~\]\$ **cd /home/analyst**

- Saisissez **ls -l** dans l'invite de commande pour obtenir la liste des fichiers et des dossiers qui se trouvent dans le dossier actif. L'option **-l** (pour liste) affiche la taille du fichier, ses autorisations, ses paramètres de propriété, sa date de création et bien plus encore.

\[analyst@secOps ~\]\$ **ls -l**

total 20

drwxr-xr-x 2 analyst analyst 4096 Mar 22 2018 Desktop

drwxr-xr-x 3 analyste 4096 avr. 2 14:44 Téléchargements

drwxr-xr-x 9 analyst analyst 4096 Jul 19 2018 lab.support.files

drwxr-xr-x 2 analyst analyst 4096 Mar 21 2018 second_drive

-rw-r--r-- 1 analyst analyst 255 Apr 17 16:42 space.txt

- Dans le répertoire actif, utilisez la commande **mkdir** pour créer trois dossiers: **cyops_folder1**, **cyops_folder2**, and **cyops_folder3**. Saisissez **mkdir cyops_folder1** et appuyez sur **Entrée**. Répétez ces étapes pour créer **cyops_folder2** et **cyops_folder3**.

\[analyst@secOps ~\]\$ **mkdir cyops_folder1**

\[analyst@secOps ~\]\$ **mkdir cyops_folder2**

\[analyst@secOps ~\]\$ **mkdir cyops_folder3**

\[analyst@secOps ~\]\$

- Saisissez**ls -l** pour vérifier que les dossiers ont bien été créés:

\[analyst@secOps ~\]\$ **ls -l**

total 32

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:01 cyops_folder1

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:02 cyops_folder2

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:02 cyops_folder3

drwxr-xr-x 2 analyst analyst 4096 Sep 26 2014 Desktop

drwx------ 3 analyst analyst 4096 Jul 14 11:28 Downloads

drwxr-xr-x 8 analyst analyst 4096 Jul 25 16:27 lab.support.files

drwxr-xr-x 2 analyst analyst 4096 Mar 3 15:56 second_drive

-rw-r--r-- 1 analyst analyst 254 Aug 16 13:38 space.txt

- Saisissez **cd /home/analyst/cyops_folder3** dans l'invite de commande et appuyez sur **Entrée**.

\[analyst@secOps ~\]\$ **cd /home/analyst/cyops_folder3**

\[analyst@secOps cyops_folder3\]\$

Dans quel répertoire vous trouvez-vous maintenant?

Si on saisi la commande pwd le répertoire actuelle afficher sur le terminal est /home/analyst/cyops_folder3

![image5](resources/2fd55aa9734041168e813085f61f4efc.png)

**Remarque**: dans l'invite **\[analyst@secOps ~\]\$** ci-dessus: le symbole **~** représente le répertoire de base de l'utilisateur actuel. Dans cet exemple, le répertoire de base de l'utilisateur actuel est **/home/analyst**. Après exécution de la commande **cd /home/analyst/cyops_folder3**, le répertoire de base de l'utilisateur actuel devient **/home/analyst/cyops_folder3**.

**Remarque**: le signe **\$** (dollar) indique des privilèges d'utilisateur standard. Si un signe **\#** (hashtag) s'affiche dans l'invite de commande, celui-ci indique des privilèges élevés (**utilisateur root**).

**Remarque**: si ces symboles, conventions et concepts de base ne changent pas, l'invite d'une fenêtre de terminal sous Linux reste tout de même hautement personnalisable. Par conséquent, la structure de l'invite observée sur le poste de travail virtuel CyberOps sera probablement différente de l'invite sur les autres installations Linux.

**Défi:** tapez la commande **cd ~** et décrivez ce qui se passe.

![image6](resources/60206873a3e8487aad2a63be2e5d2493.png)

Si on tape la commande cd ~ (alt n sous mac) cela nous redirige sur le répertoire de base

Pourquoi?

Parce que cet commande permet de rediriger l'utilisateur sur le répertoire de base ou personnel de l'utilisateur dont le symbole tilde (~).

- Utilisez la commande **mkdir** pour créer un nouveau dossier nommé **cyops_folder4** à l'intérieur du dossier **cyops_folder3**:

\[analyst@secOps ~\]\$ **mkdir /home/analyst/cyops_folder3/cyops_folder4**

\[analyst@secOps ~\]\$

![image7](resources/14b66c19c08d4d5e80d8f260c8e5f1a4.png)

- Utilisez la commande **ls -l** pour vérifier que le dossier a été créé.

analyst@secOps ~\]\$ **ls –l /home/analyst/cyops_folder3**

total 4

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:04 cyops_folder4

- Jusqu'ici, nous avons utilisé des *chemins d'accès complets ou absolus.* Les chemins absolus désignent les chemins qui commencent à la racine (/). Il est également possible d'utiliser des *chemins relatifs.* Les chemins d'accès relatifs réduisent le volume de texte à taper. Pour comprendre comment sont formés les chemins d'accès relatifs, vous devez savoir à quoi correspondent les répertoires **.** et **..** (point et double point). Depuis le répertoire **cyops_folder3**, émettez une commande **ls – la**:

analyst@secOps ~\]\$ **ls –la /home/analyst/cyops_folder3**

total 12

drwxr-xr-x 3 analyst analyst 4096 Aug 16 15:04 .

drwxr-xr-x 20 analyst analyst 4096 Aug 16 15:02 ..

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:04 cyops_folder4

L'option **-a** indique à **ls** d'afficher tous les fichiers. Notez les listes **.** et **..** affichées par **ls**. Ces listes sont utilisées par le système d'exploitation pour assurer le suivi de l'utilisation du répertoire actuel (.) et du répertoire parent (..) Notez l'utilisation de **.** et **..** lorsque vous utilisez la commande **cd** pour changer de répertoire. Si vous utilisez la commande **cd** pour passer au répertoire **.**, aucun changement de répertoire visible ne se produit, car **.** désigne le répertoire actuel.

- Passez du répertoire actuel au répertoire /home/analyst/cyops_folder3:

\[analyst@secOps ~\]\$ **cd /home/analyst/cyops_folder3**

\[analyst@secOps cyops_folder3\]\$

- Tapez **cd .**

\[analyst@secOps cyops_folder3\]\$ **cd .**

\[analyst@secOps cyops_folder3\]\$

Que se passe-t-il?

La commande cd . Permet de demander au terminal linux de rester sur le répertoire soit le répertoire /home/analyst/cyops_folder. Par conséquent cet commande ne fait aucun effet visible.

- Passer au répertoire **..** revient en fait à passer au répertoire qui se trouve un niveau plus haut. Ce répertoire est également appelé *répertoire parent*. Tapez **cd ..**

\[analyst@secOps cyops_folder3\]\$ **cd ..**

\[analyst@secOps ~\]\$

Que se passe-t-il?

Comme démontrer au l. cet commande permet de reculer d'un répertoire ce qui signifie que de /home/analyst/cyops_folder3 on passe à /homme/analyst.

**Quel serait le répertoire actuel si vous exécutiez la commande cd .. pour** \[analyst@secOps ~\]\$**?**

![image7](resources/14b66c19c08d4d5e80d8f260c8e5f1a4.png)

Si on utilise une nouvelle fois la commande cd .. Une nouvelle fois on bascule de /home/analyst à /home.

La preuve en est si on éxecute pwd

![image7](resources/14b66c19c08d4d5e80d8f260c8e5f1a4.png)

Quel serait le répertoire actuel si vous exécutiez la commande **cd ..** pour \[analyst@secOps home\]\$?

Si on éxecute une deuxième fois la commande cd .. pour \[analyst@secOps home\] soit le répertoire /home on passe de /home à / soit le répertoire racine du système de fichier. On peut égalment remarquer que ~ est remplacer par / après avoir entré cet commande.

Quel serait le répertoire actuel si vous exécutiez la commande **cd ..** pour \[analyst@secOps /\]\$?

Si on éxecute une trosième fois la commande cd .. Pour \[analyst@secOps /\] soit / en oblique alors il n'aura aucun effet visuel car il n'y as aucun autre répertoire après /.

![image8](resources/0cd7de7607974c3aadd8d38430659111.png)

- **Rediriger les sorties.**

Il existe un autre opérateur de ligne de commande puissant dans Linux appelé *redirect*. Représenté par le symbole **\>**, cet opérateur permet de rediriger la sortie d'une commande vers un emplacement autre que la fenêtre de terminal actuelle (par défaut).

- Utilisez la commande **cd** pour passer au répertoire **/home/analyst/** (**~)**:

\[analyst@secOps /\]\$ **cd /home/analyst/**

\[analyst@secOps ~\]\$

- Utilisez la commande **echo** pour envoyer un message par écho. Étant donné qu'aucune sortie n'a été définie, l'écho sera transmis à la fenêtre de terminal actuelle:

analyst@secOps ~\]\$ **echo Il s'agit d'un message envoyé au terminal par écho.**

Il s'agit d'un message envoyé au terminal par écho.

- Utilisez l'opérateur **\>** pour transmettre la sortie de l'écho à un fichier de texte plutôt qu'à l'écran:

analyst@secOps ~\]\$ **echo Il s'agit d'un message envoyé au terminal par écho. \> fichier_texte.txt**

Aucune sortie ne s'affiche.

Ce résultat était-il prévisible? Expliquez votre réponse.

Oui cela était prévisible car on remplace ou créer du contenu sur le fichier_texte.txt qu'il soit existant ou non.

- Notez que même si le fichier **fichier_texte.txt** n'existait pas, il a été créé automatiquement avant l’exécution de la commande echo, pour recevoir la sortie générée par la commande **echo**. Utilisez la commande **ls -l** pour vérifier si le fichier a été créé.

\[analyst@secOps ~\]\$ **ls –l some_text_file.txt**

-rw-r--r-- 1 analyst analyst 50 Feb 24 16:11 some_text_file.txt

- Utilisez la commande **cat** pour afficher le contenu du fichier texte **fichier_texte.txt**:
\[analyst@secOps ~\]\$ **cat some_text_file.txt**

Il s'agit d'un message envoyé au terminal par écho.

- Utilisez de nouveau l'opérateur **\>** pour transmettre une autre sortie d'écho au fichier texte **fichier_texte.txt**:

analyst@secOps ~\]\$ **echo Il s'agit d'un message DIFFÉRENT envoyé de nouveau au terminal par écho. \> fichier_texte.txt**

- Utilisez de nouveau la commande **cat** pour afficher le contenu du fichier texte **fichier_texte.txt**:

\[analyst@secOps ~\]\$ **cat some_text_file.txt**

Il s'agit d'un message DIFFÉRENT envoyé de nouveau au terminal par écho.

Qu'est-il arrivé au fichier texte? Expliquez votre réponse.

Il semblerait qu'en voulant executé cet commande ce dernier à modifier le contenu du fichier fichier_text.txt car fichier_text.txt est un fichier existant.

- **Rediriger un fichier texte et y ajouter des données.**

- Semblable à l'opérateur **\>**, l'opérateur **\>\>** permet également de rediriger les données vers les fichiers. La différence est que **\>\>** ajoute les données à la fin du fichier ciblé, sans modifier le contenu actuel. Pour ajouter un message au fichier fichier_texte.txt, exécutez la commande ci-dessous:

\[analyst@secOps ~\]\$ **echo Il s'agit d'une autre ligne de texte. Elle sera AJOUTÉE au fichier de sortie. \>\> fichier_texte.txt**

- Utilisez la commande **cat** pour afficher de nouveau le contenu du fichier texte **some_text_file.txt** :

\[analyst@secOps ~\]\$ **cat some_text_file.txt**

Il s'agit d'un message DIFFÉRENT envoyé de nouveau au terminal par écho.

Il s'agit d'une autre ligne de texte. Elle sera AJOUTÉE au fichier de sortie.

Qu'est-il arrivé au fichier texte? Expliquez votre réponse.

Il semblerait qu'en ajoutant echo avec la phrase tapper et après avoir ajouter "\>\>" cela à créer une deuxième ligne.

- **Utiliser des fichiers cachés dans Linux.**

- Dans Linux, les fichiers dont le nom commence par un «.» (point) ne sont pas affichés par défaut. Bien que les fichiers «.» (point) n'ont pas d'autre particularité, ils sont appelés fichiers cachés pour cette raison. Par exemple, les fichiers **.fichier5**, **.fichier6**, **.fichier7** sont des fichiers cachés.

**Remarque**: ne confondez pas les fichiers «.» (point) avec le symbole «**.**» qui est l'indicateur de répertoire. Le nom des fichiers masqués commence par un point, suivi de plusieurs caractères, tandis que le répertoire «.» (point) est un répertoire masqué dont le nom comporte uniquement un point.

- Utilisez la commande **ls -l** pour afficher les fichiers stockés dans le répertoire de base de l'analyste (home/analyst).

\[analyst@secOps ~\]\$ **ls –l**

Combien de fichiers sont affichés?

Dans le répertoire home/analyst lors de l'utilisation ls -l il y a deux fichiers.

- Utilisez la commande **ls-la** pour afficher tous les fichiers dans le répertoire de base de l'utilisateur analyst, y compris les fichiers cachés.

\[analyst@secOps ~\]\$ **ls –la**

Combien de fichiers s'affichent maintenant, plus qu'avant? Expliquez votre réponse.

Dans le même répertoire que le précédent en utilisant la commande ls -la il y a 22 fichiers qui sont affichées car cet commande permet d'afficher les fichier caché.

**Est-il également possible de masquer des dossiers entiers en ajoutant un point avant leur nom? Y-a-t-il des répertoires dans la sortie de la commande ls-la ci-dessus?**

Donnez trois exemples de fichiers cachés affichés dans la sortie de la commande **ls-la** ci-dessus.

Bien sûr voici 3 exemples fichiers caché après avoir entré la commande ls-la

.bash_history :

.bash_logout :

.bash_profile :
- Tapez la commande **man ls** à l'invite pour en savoir plus sur la commande **ls**.

\[analyst@secOps ~\]\$ **man ls**

- Utilisez la flèche vers le bas (une seule ligne à la fois) ou la barre d'espace (une page à la fois) pour faire défiler la page vers le bas jusqu'à ce que vous trouviez la commande **-a** utilisée ci-dessus. Lisez sa description pour vous familiariser avec la commande **ls -a** .

- **Copier, supprimer et déplacer des fichiers**

- **Copier des fichiers**

- La commande **cp** sert à copier des fichiers dans le système de fichiers local. Lorsque vous utilisez la commande **cp**, une nouvelle copie du fichier est créée et placée dans l'emplacement spécifié, sans modifier le fichier d'origine. Le premier paramètre correspond au fichier source et le second à la destination. Lancez la commande ci-dessous pour copier **fichier_texte\_.txt** du répertoire de base vers le dossier **cyops_folder2**:

\[analyst@secOps ~\]\$ **cp some_text_file.txt cyops_folder2/**

**Identifiez les paramètres dans la commande cp ci-dessus.**

**Question:**

**Quels sont les fichiers source et de destination? (Utilisez les chemins d'accès complets pour représenter les paramètres.)**

- Utilisez la commande **ls** pour vérifier que **fichier_texte.txt** est maintenant dans le dossier **cyops_folder2:**

\[analyst@secOps ~\]\$ **ls cyops_folder2/**

fichier_texte.txt

- Utilisez la commande **ls** pour vérifier que **fichier_texte.txt** est également dans le répertoire de base:

\[analyst@secOps ~\]\$ **ls -l**

total 36

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:01 cyops_folder1

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:11 cyops_folder2

drwxr-xr-x 3 analyst analyst 4096 Aug 16 15:04 cyops_folder3

drwxr-xr-x 2 analyst analyst 4096 Sep 26 2014 Desktop

drwx------ 3 analyst analyst 4096 Jul 14 11:28 Downloads

drwxr-xr-x 8 analyst analyst 4096 Jul 25 16:27 lab.support.files

drwxr-xr-x 2 analyst analyst 4096 Mar 3 15:56 second_drive

-rw-r--r-- 1 analyst analyst 142 Aug 16 15:09 some_text_file.txt

-rw-r--r-- 1 analyst analyst 254 Aug 16 13:38 space.txt

- **Supprimer des fichiers et des répertoires**

- Utilisez la commande **rm** pour supprimer des fichiers. Lancez la commande ci-dessous pour supprimer le fichier **fichier_texte.txt** du répertoire de base. La commande **ls**est ensuite utilisée pour montrer que le fichier **fichier_texte.txt** a été supprimé du répertoire de base:

\[analyst@secOps ~\]\$ **rm some_text_file.txt**

\[analyst@secOps ~\]\$ **ls -l**

total 32

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:01 cyops_folder1

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:11 cyops_folder2

drwxr-xr-x 3 analyst analyst 4096 Aug 16 15:04 cyops_folder3

drwxr-xr-x 2 analyst analyst 4096 Sep 26 2014 Desktop

drwx------ 3 analyst analyst 4096 Jul 14 11:28 Downloads

drwxr-xr-x 8 analyst analyst 4096 Jul 25 16:27 lab.support.files

drwxr-xr-x 2 analyst analyst 4096 Mar 3 15:56 second_drive

-rw-r--r-- 1 analyst analyst 254 Aug 16 13:38 space.txt

- Dans Linux, les répertoires sont considérés comme un type de fichier. À ce titre, la commande **rm** sert également à supprimer des répertoires, mais l'option **- r** (récursive) doit être utilisée. Notez que tous les fichiers et tous les répertoires dans un répertoire donné sont également supprimés lorsque vous supprimez un répertoire parent avec l'option -r. Exécutez la commande ci-dessous pour supprimer le dossier **cyops_folder1** et son contenu:

\[analyst@secOps ~\]\$ **rm –r cyops_folder1**

\[analyst@secOps ~\]\$ **ls -l**

total 28

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:11 cyops_folder2

drwxr-xr-x 3 analyst analyst 4096 Aug 16 15:04 cyops_folder3

drwxr-xr-x 2 analyst analyst 4096 Sep 26 2014 Desktop

drwx------ 3 analyst analyst 4096 Jul 14 11:28 Downloads

drwxr-xr-x 8 analyst analyst 4096 Jul 25 16:27 lab.support.files

drwxr-xr-x 2 analyst analyst 4096 Mar 3 15:56 second_drive

-rw-r--r-- 1 analyst analyst 254 Aug 16 13:38 space.txt

- **Déplacer des fichiers et des répertoires**

- Le processus utilisé pour déplacer des fichiers est similaire à celui utilisé pour les copier. La différence est que lorsqu'un fichier est déplacé il est supprimé de son emplacement d'origine. Utilisez les commandes **mv** pour déplacer des fichiers dans le système de fichiers local. Comme les commandes **cp**, la commande mv requiert également des paramètres de fichier source et de destination. Lancez la commande ci-dessous pour déplacer le fichier **fichier_texte.txt** du répertoire **/home/analyst/cyops_folder2** vers le répertoire de base:

\[analyst@secOps ~\]\$ **mv cyops_folder2/some_text_file.txt .**

\[analyst@secOps ~\]\$ **ls –l cyops_folder2/**

total 0

\[analyst@secOps ~\]\$ **ls –l /home/analyst/**

total 32

drwxr-xr-x 2 analyst analyst 4096 Aug 16 15:13 cyops_folder2

drwxr-xr-x 3 analyst analyst 4096 Aug 16 15:04 cyops_folder3

drwxr-xr-x 2 analyst analyst 4096 Sep 26 2014 Desktop

drwx------ 3 analyst analyst 4096 Jul 14 11:28 Downloads

drwxr-xr-x 8 analyst analyst 4096 Jul 25 16:27 lab.support.files

drwxr-xr-x 2 analyst analyst 4096 Mar 3 15:56 second_drive

-rw-r--r-- 1 analyst analyst 142 Aug 16 15:11 some_text_file.txt

-rw-r--r-- 1 analyst analyst 254 Aug 16 13:38 space.txt

Quelle est la meilleure commande à utiliser pour accomplir la tâche?
- 
- **Remarques générales  
  **
Quels sont les avantages de la ligne de commande Linux?

