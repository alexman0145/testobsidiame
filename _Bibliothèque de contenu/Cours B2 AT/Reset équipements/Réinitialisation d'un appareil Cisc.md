---
title: Réinitialisation d'un appareil Cisco sans mot de p...
updated: 2024-03-14T09:24:30
created: 2022-01-13T17:14:23
---

**Effacement et rechargement d’un appareil Cisco**

**Partie 1 : connecter un câble console à l'appareil**

Depuis les 2 PC, connectez-vous au commutateur et au routeur via le terminal et le câble console.

Passez en mode d'exécution privilégié à l'aide de la commande **enable**:
Switch\> **enable**

ou

Router\> **enable**

**Partie 2 : effacer et recharger la configuration de l'appareil**

Sur le commutateur, supprimez le fichier d'informations de la base de données de réseau local virtuel (VLAN). Ce fichier existe uniquement si des modifications ont été apportées aux paramètres VLAN du commutateur.

Switch# **delete vlan.dat**

Delete filename \[vlan.dat\]? **\[Enter\]**

Delete flash:vlan.dat? \[confirm\] **\[Enter\]**

S'il n'y a pas de fichier VLAN, le message suivant s'affiche:

%Error deleting flash:vlan.dat (No such file or directory)

Effacez le fichier de configuration initiale de la mémoire NVRAM.

Switch# **erase startup-config**

ou

Router# **erase startup-config**

La ligne de réponse est la suivante:

Erasing the nvram filesystem will remove all files! Continue? \[confirm\]

Appuyez sur **Entrée** pour confirmer. La réponse suivante doit s'afficher:

Erase of nvram: complete

Redémarrez le logiciel à l'aide de la commande **reload** en mode d'exécution privilégié.

Switch# **reload**

ou

Router# **reload**

La ligne de réponse est la suivante:

System configuration has been modified. Save? \[yes/no\]:

Tapez **n**, puis appuyez sur **Entrée**. La ligne de réponse est la suivante:

Proceed with reload? \[confirm\] **\[Enter\]**

La première ligne de la réponse est la suivante:

Reload requested by console.

Après le rechargement de l'appareil, la ligne suivante s'affiche:

Would you like to enter the initial configuration dialog? \[yes/no\]:

Tapez **n**, puis appuyez sur **Entrée**. La ligne de réponse est la suivante:

Press RETURN to get started! **\[Enter\]**
