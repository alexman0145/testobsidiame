---
title: 1_8 - TP - Réinitialisation d'un appareil Cisco
updated: 2023-01-12T18:50:26
created: 2022-01-13T17:14:23
---

**Effacement et rechargement d’un appareil Cisco**

- **Maquette : Dans Packet Tracer, créez manuellement un réseau contenant un routeur, un commutateur et 2 PC**

- **Objectifs**

- Effacer la configuration courante d'un appareil Cisco
- Réinitialiser la configuration usine d'un appareil Cisco

- **Contexte/scénario**

Il est parfois nécessaire de commencer avec un commutateur et un routeur non configurés. L'utilisation d'un appareil déjà configuré peut produire des résultats imprévisibles. Les instructions suivantes permettent de préparer un commutateur ou un routeur avant d'effectuer sa configuration pour que les options de configuration précédentes ne créent pas d'interférence.

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
