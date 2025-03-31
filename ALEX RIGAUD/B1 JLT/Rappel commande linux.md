---
title: Rappel commande linux
updated: 2023-12-15T10:40:18
created: 2023-12-15T10:24:32
---

AM

- Fichier

D -\> directory répertoire

\| -\> link le lien symbolique

R Read Lecture
W Write écrire
X . Fichier eXecution
Dossier (to) Cross -\> Parcourir

nomlien -\> fichiercible

U -\> utilisateur
G -\> Groupe
O -\> other autre

- Rwx rw- r--

chmod g+x fichier

Ls -l

-rwx rwx r--

Chmod a-r fichier

Ls -l

- -wx -wx ---
Personne ne peut accèder ou lire le fichier

chmod ug+r fichier

chmod ug-rw fichier

chgrp eleves dossier
Ls -l

d rwx rw-r-- mathieu eleves

ln fichiersource fichiercible

Commande permettant de créer un lien du fichier

Ln -s Fichiersource raccourci

Créer un lien symbolique

