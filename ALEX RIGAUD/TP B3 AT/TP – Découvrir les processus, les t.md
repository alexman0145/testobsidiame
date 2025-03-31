---
title: TP – Découvrir les processus, les threads, les han...
updated: 2023-10-13T14:33:45
created: 2023-01-12T18:07:23
---

**TP – Découvrir les processus, les threads, les handles et le Registre Windows**

- **Objectifs**
Au cours de ces travaux pratiques, vous allez découvrir les processus, les threads et les handles à l'aide de Process Explorer dans SysInternals Suite. Vous allez également utiliser le Registre Windows pour modifier un paramètre.

**Partie1: découvrir les processus**

**Partie 2: découvrir les threads et les handles**

**Partie3: découvrir le Registre Windows**
- 
- **Ressources requises**
- 1 machine virtuelle Windows avec accès Internet
- 
- **Instructions**

- **Découvrir les processus**
Dans cette partie, vous allez découvrir les processus. Les processus sont des programmes ou des applications en cours d'exécution. Vous allez explorer les processus à l'aide de Process Explorer dans Windows SysInternals Suite. Vous allez également démarrer et observer un nouveau processus.

- **Télécharger Windows SysInternals Suite.**
  1.  Cliquez sur le lien suivant pour télécharger Windows SysInternals Suite:
<https://technet.microsoft.com/en-us/sysinternals/bb842062.aspx>

- Une fois le téléchargement terminé, extrayez les fichiers du dossier.

![image1](resources/ae0d54effe0a4739876a789ba7b937ac.png)

- Laissez le navigateur web ouvert pour les étapes suivantes.

![image2](resources/8d28a4ffc3784407a30eb491124eab97.png)
- **Découvrir un processus actif.**
  1.  Accédez au dossier SysinternalsSuite contenant tous les fichiers extraits.

![image3](resources/69db22524ca64a089ebea4de06dbdb5d.png)

- Ouvrez **procexp.exe**. À l'invite, acceptez le contrat de licence d'utilisation Process Explorer.

![image4](resources/386ac6ec6c404f9d852b932263faef42.png)

- Process Explorer affiche une liste des processus actifs.

![image5](resources/97514a6580dc4f4ca843287b6acfd2bf.png)

- Pour localiser le processus de navigateur web, faites glisser l'icône de **Find Window's Process** dans la fenêtre du navigateur ouverte. Microsoft Excel a été utilisé dans cet exemple.

![image6](resources/0d91c62b6ac84d75aee7b60b419107a0.jpg)

- Le processus de Microsoft Edge peut être arrêté dans Process Explorer. Cliquez avec le bouton droit de la souris sur le processus sélectionné, puis sélectionnez **Kill Process**. Cliquez sur **OK** pour continuer.

![image7](resources/e6aeb205041f4ca58371417f83832b43.png)

![image8](resources/f988181edb7d4ec0849bcb8c8bceac16.png)

Cliquez sur oui

![image9](resources/111f9615923e446fbb708fb7278f7564.jpg)

:

Qu'est-il arrivé à la fenêtre du navigateur web lorsque le processus a été arrêté?

La feunêtre du naviguateur c'est fermer automatique après avoir tué le processus edge soit interompre le fonctionnement de edge (kill process en anglais)

- **Démarrer un autre processus.**
  1.  Ouvrez une invite de commande. (**Start** \> recherchez **Command Prompt**\> sélectionnez **Command Prompt**)

![image10](resources/d45c6d1787ca499095eeebaac1ff2b88.png)

- Faites glisser l'icône de **Find Window's Process** dans la fenêtre d'invite de commande et localisez le processus de ligne de commande en surbrillance dans Process Explorer.

![image11](resources/5eb0dbdb17d743b89c3223d9b848c140.png)

- Le processus de l'invite de commande est cmd.exe. Son processus parent est le processus explorer.exe. Le processus cmd.exe a un processus enfant conhost.exe.

![image12](resources/c69419f5663a435190ca70164fceea96.png)

- Accédez à la fenêtre de l'invite de commande. Lancez un ping à l'invite de commande et observez les modifications sous le processus cmd.exe.

Par exemple 8.8.8.8

![image13](resources/293c354d848245589ffa33b09b5d950e.png)

L'executable Ping.exe apparaît en vert ce qui signifie qu'il est en court d'execution

![image14](resources/5a63ed6a1f694218a6841101ef0c4c9c.png)

Une fois que la commande ping à été éxécuter le logiciel ping.exe devient rouge ce qui signifie que le processus est en mode arrêt

Qu'est-il arrivé au cours du processus de ping?

Au bout de certain temps après l'arrêt de la commande ping le processus ping.exe disparaît automatiquement après être passé au rouge.

- En examinant la liste des processus actifs, vous constatez que le processus enfant conhost.exe semble suspect.
Pour rechercher un contenu malveillant, cliquez avec le bouton droit de la souris sur **conhost.exe** et sélectionnez **Check VirusTotal**.

![image15](resources/f8449860af0349a4ae21b0137a3115d7.png)

Lorsque vous y êtes invité, cliquez sur **Yes** pour accepter les conditions d'utilisation de VirusTotal. Puis cliquez sur **OK** pour l'invite suivante.

![image16](resources/406aa35292e9470382dfa5317005b78d.png)

![image17](resources/d26e202d09f4473cac018598476a24a8.png)

- Développez la fenêtre de Process Explorer ou faites-la défiler vers la droite jusqu'à ce que vous voyiez la colonne de VirusTotal.

![image18](resources/2ebe74a3d65044d2b977736738e51bf5.png)

- Cliquez sur le lien sous la colonne de VirusTotal. Le navigateur web par défaut s'ouvre avec les résultats concernant le contenu malveillant de conhost.exe.

- Cliquez avec le bouton droit de la souris sur le processus cmd.exe et sélectionnez **Kill Process**.

![image19](resources/d303618e87544bd98d4638db05599b20.png)

![image20](resources/4833ea50250d466bbaeb6a61f1b1fb49.png)

:

Qu'est-il arrivé au processus enfant conhost.exe?  

Quand le processus cmd.exe à été intérompue le processus enfant conhost.exe les aussi également car s'est deux processus sont liés  

- **Découvrir les threads et les handles**
Dans cette partie, vous allez explorer les threads et les handles. Les processus sont composés d'au moins un thread. Un thread est une unité d'exécution dans un processus. Un handle est une référence abstraite aux blocs de mémoire ou aux objets gérés par un système d'exploitation. Vous allez utiliser Process Explorer (procexp.exe) dans Windows SysInternals Suite pour découvrir les threads et les handles.

- **Découvrir les threads.**
  1.  Ouvrez une invite de commande.

![image21](resources/02da56f66cc242ce9d62fc619987f646.png)

- Dans la fenêtre de Process Explorer, cliquez avec le bouton de la souris sur conhost.exe et sélectionnez **Properties…**. Cliquez sur l'onglet **Threads** pour afficher les threads actifs pour le processus conhost.exe. Cliquez sur **OK** pour continuer si vous y êtes invité par une boîte de dialogue d'avertissement.

- Examinez les détails du thread.

:

Quel type d'information contient la fenêtre Properties?

- Cliquez sur **OK** pour continuer.

- **Découvrir les handles.**
  1.  Dans Process Explorer, cliquez sur **Vi﻿ew** \> select **Lower Pane View** \> **Handles** pour afficher les handles associés au processus conhost.exe.

:

Examinez les handles. Vers quoi pointent les handles?

- Fermez l'Explorateur de processus une fois terminé.

- **Découvrir le Registre Windows**
Le Registre Windows est une base de données hiérarchique qui stocke la plupart des systèmes d'exploitation et les paramètres de configuration des environnements de poste de travail.

- Pour accéder au Registre Windows, cliquez sur **Start** \> cherchez **regedit** et sélectionnez **Registry Editor**. Cliquez sur **Yes** pour permettre à cette application d'effectuer des modifications.

![image22](resources/d0c25a305f8e47c9987f5a4fe8a53b74.png)

L'éditeur du registre est composé de cinq ruches. Ces ruches sont au niveau supérieur du registre.

- HKEY_CLASSES_ROOT est en réalité la sous-clé Classes de HKEY_LOCAL_MACHINE\Software\\ Elle stocke les informations utilisées par les applications enregistrées comme l'association d'extensions de fichier, ainsi qu'un identificateur programmatique (ProgID), l'ID de classe (CLSID) et les données d'ID d'interface (IID).

- HKEY_CURRENT_USER contient les paramètres et les configurations pour les utilisateurs qui sont actuellement connectés.

- HKEY_LOCAL_MACHINE stocke les informations de configuration spécifiques à l'ordinateur local.

- HKEY_USERS contient les paramètres et les configurations pour tous les utilisateurs sur l'ordinateur local. HKEY_CURRENT_USER est une sous-clé de HKEY_USERS.

- HKEY_CURRENT_CONFIG stocke les informations de matériel qui sont utilisées au démarrage par l'ordinateur local.

- Au cours d'une étape précédente, vous avez accepté le CLUF pour Process Explorer. Accédez à la clé de registre EulaAccepted pour Process Explorer.

![image23](resources/c4865c76ca834e4ea0c8a3fa268e82ac.png)

Cliquez pour sélectionner Process Explorer dans **HKEY_CURRENT_USER** \> **Software** \> **Sysinternals** \> **Process Explorer**. Faites défiler la liste pour rechercher la clé **EulaAccepted**. Actuellement, la valeur de la clé de registre EulaAccepted est 0x00000001(1).

![image24](resources/bd939ca6492a4453b464a123a92319f6.png)

![image25](resources/a404907cb2f141139592aaa3430a2c5c.png)

- Double-cliquez sur la clé de registre **EulaAccepted**. Actuellement, les données de la valeur sont définies sur1. La valeur1 indique que le CLUF a été accepté par l'utilisateur.
![image26](resources/c4d6dd5737cf40d5a2268fe67990eb57.png)

- Remplacez **1** par **0** pour les données de la valeur (Value data). La valeur 0 indique que le CLUF n'a pas été accepté. Cliquez sur **OK** pour continuer.

![image27](resources/890f83fbcf4b41fcb560df66d1506bff.png)

Quelle est la valeur de cette clé de registre dans la colonne Data?

La velaur du processus EulaAccepted est :

0x00000000 (0)

![image28](resources/fafd1e20992a484ab2800d40d76d0d53.png)

- Ouvrez **Process Explorer**. Accédez au dossier où vous avez téléchargé SysInternals. Ouvrez le dossier **SysInternalsSuite** \> Ouvrez **procexp.exe**.

![image29](resources/c6b070ba895740cab185d8e9da9eac29.png)

:

Lorsque vous ouvrez Process Explorer, que voyez-vous?

On peut apercevoir diverse processus en court d'éxécution tel que com.docker.com msedge.exe explorer.exe cmd.exe conhost.exe

