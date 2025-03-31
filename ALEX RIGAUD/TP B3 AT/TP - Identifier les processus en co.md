---
title: TP - Identifier les processus en cours d'exécution
updated: 2023-10-13T13:54:06
created: 2023-01-12T18:03:55
---

**TP - Identifier les processus en cours d'exécution**

**Objectifs**

Au cours de ces travaux pratiques, vous allez utiliser la visionneuse de terminaux TCP/UDP, un outil intégré à Sysinternals Suite, pour identifier tous les processus en cours d'exécution sur votre ordinateur.

**Partie 1: Télécharger Windows SysInternals Suite.**

**Partie 2: Démarrer la visionneuse de terminaux TCP/UDP.**

**Partie 3: Observer les processus en cours d'exécution**

**Partie 4: Examiner un processus démarré par un utilisateur.**
- 
- **Contexte/scénario**
Au cours de ces travaux pratiques, vous allez en apprendre davantage sur les processus. Les processus sont des programmes ou des applications en cours d'exécution. Vous allez explorer les processus à l'aide de l'outil Process Explorer fourni avec Windows Sysinternals Suite. Vous allez également démarrer et observer un nouveau processus.
- 
- **Ressources requises**
- 1 machine virtuelle Windows avec accès Internet
- 
- **Instructions**

- **Télécharger Windows Sysinternals Suite.**
  1.  Cliquez sur le lien suivant pour télécharger Windows Sysinternals Suite:
<https://technet.microsoft.com/en-us/sysinternals/bb842062.aspx>

- Une fois le téléchargement terminé, cliquez avec le bouton droit sur le fichier zip, puis choisissez **Extraire tout…** pour extraire les fichiers du dossier. Choisissez le nom et la destination par défaut dans le dossier Téléchargements et cliquez sur **Extraire**.

- Fermez le navigateur.

- **Démarrez la visionneuse de terminaux TCP/UDP.**
  1.  Accédez au dossier SysinternalsSuite contenant tous les fichiers extraits.

- Ouvrez le fichier **Tcpview.exe**. À l'invite, acceptez le contrat de licence d'utilisation Process Explorer. Cliquez sur **Yes** pour autoriser cette application à effectuer des modifications sur votre appareil.

- Quittez l'Explorateur de fichiers et fermez toutes les applications en cours d'exécution.

- **Observez les processus en cours d'exécution.**
  1.  TCPView répertorie les processus qui sont en cours d'exécution sur votre PC Windows. Pour l'instant, seuls des processus Windows sont en cours d'exécution.

![image1](resources/dd23a26567a24f12ba5ef52b3464fa51.png)

- Double-cliquez sur le fichier **lsass.exe**.

Question:

Qu'est-ce que le fichier lsass.exe? Dans quel dossier se trouve-t-il?

Le fichier Isass.exe se trouve dans le répertoire C:\Windows\System32\lsass.exe à la base se service permet de gérer les authentification des utilisateur.

![image2](resources/ea681e70bb6c411f8a629a0412e18b42.png)

- Lorsque vous avez terminé, fermez la fenêtre de propriétés de lsass.exe.

- Affichez les propriétés des autres processus en cours d'exécution.

![image3](resources/6505f68ac0bb44529c59be1c0a0e85a9.png)

**Remarque**: vous ne pouvez pas afficher les propriétés de tous les processus.

- **Examinez un processus démarré par un utilisateur.**
  1.  Ouvrez un navigateur, tel que Microsoft Edge.

![image4](resources/ab268082a7ca4c018ba6841b7292cda4.png)

Qu'avez-vous vu dans la fenêtre TCPView?

![image5](resources/233d5eb2dc60431487b28064111a7e00.png)
- Fermez le navigateurWeb.

Qu'avez-vous vu dans la fenêtre TCPView?

![image6](resources/6e58f5e109e348daafba80da55860061.png)

- Rouvrez le navigateur web. Recherchez certains des processus répertoriés dans TCPView. Notez vos résultats.
Il y a trois processus Msedge en court d'execution

![image7](resources/50b801d92fce4648b1948f7d97246449.png)![image8](resources/4466c1b1cf964767b5ea13f5e7a42991.png)![image9](resources/ff77ea22b1f94660a6a79125075ca210.png)

![image10](resources/de860fd5d1fb407582b0916d5ac19ee3.png)
