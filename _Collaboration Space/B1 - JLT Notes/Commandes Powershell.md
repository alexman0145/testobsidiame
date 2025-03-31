---
title: Commandes Powershell
updated: 2024-01-18T11:54:36
created: 2023-11-23T10:05:39
---

***Afficher la liste des utilisateurs locaux***

PS C:\WINDOWS\system32\> **net user**

comptes d’utilisateurs de [\\S124-01](file://S124-01)

-------------------------------------------------------------------------------
admin admin2019 Administrator
ASPNET DefaultAccount Guest
HvmService jlt toto
WDAGUtilityAccount
La commande s’est terminée correctement.

***Créer un nouvel utilisateur local***

PS C:\WINDOWS\system32\> **New-LocalUser -Name "testArthur"**

applet de commande New-LocalUser à la position 1 du pipeline de la commande
Fournissez des valeurs pour les paramètres suivants:
Password: \*\*\*\*\*\*\*\*\*\*

Name Enabled Description
---- ------- -----------
testArthur True

***Créer un nouveau groupe local***

PS C:\WINDOWS\system32\> **New-LocalGroup -Name "testProfs"**

Name Description
---- -----------
testProfs

***Ajouter un utilisateur local à un groupe local***

PS C:\WINDOWS\system32\> **Add-LocalGroupMember -Group "testProfs" -Member "testArthur"**

***Vérification de la création de l'utilisateur***

PS C:\WINDOWS\system32\> **net user**

comptes d’utilisateurs de [\\S124-01](file://S124-01)

-------------------------------------------------------------------------------
admin admin2019 Administrator
ASPNET DefaultAccount Guest
HvmService jlt **testArthur**
toto WDAGUtilityAccount
La commande s’est terminée correctement.

***Vérification de l'appartenance de l'utilisateur au groupe***

PS C:\WINDOWS\system32\> **Get-LocalGroupMember -Group "testProfs"**

ObjectClass Name PrincipalSource
----------- ---- ---------------
Utilisateur S124-01\testArthur Local

***Pour afficher la liste des groupes avec leurs utilisateurs***

On peut copier/coller le script suivant directement dans PowerShell

\# Obtenir la liste des groupes locaux
\$groupes = Get-LocalGroup

\# Parcourir les groupes et afficher les membres de chaque groupe
foreach (\$groupe in \$groupes) {
Write-Host "Groupe: \$(\$groupe.Name)"
\$membres = Get-LocalGroupMember -Group \$groupe.Name
foreach (\$membre in \$membres) {
Write-Host " Membre: \$(\$membre.Name)"
}
Write-Host ""
}
