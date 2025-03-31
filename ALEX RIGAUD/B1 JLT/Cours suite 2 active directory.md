---
title: Cours suite 2 active directory
updated: 2024-04-03T08:54:05
created: 2024-04-03T08:06:17
---

Création et gestion des comptes et groupes dans un domaine
Linux (Samba)
Rappel :

Protocole utiliser par l'AD est LDAP
Serveur membre
Ainsi que son port 389. Switch

Logique : Domaine

Physique:
Services : client w11 DHCP

Windows Serveur DNS
- Contrôleur(s)
Contrôleur domaine
- Site(s)

DNS --------\> Domaine ADDS (rôle) Adherer au domaine :
\- Adminitrateur
\- mdp

| DNS        | NS  | @IP1 |
|------------|-----|------|
| SRV_AD     | A   | @IP1 |
| Cltw11     | A   | @IP2 |
| @IP        | PTR | NOM  |
| messagerie | MX  |     |

Compte utilisateur :

- Gestion d'utilisateur locaux

- Permettent aux utilisateurs d'ouvrir une sessions et accéder aux ressources stocker dans une SAM (Service account management)

Compte utilisateur de domaine

- Permet d'ouvrir des sessions sur le domaine pour utiliser des ressources réseau. (AD)

Comptes d'utilisateur prédéfinis

\- Permettent aux utilisateurs d'effectuer des tâches administratives

- Résident du gestionnaire SAM

- Résident dans active directory

Nom d'ouverture de session d'utilisateur

Le suffixe par défaut est le nom du domaine racine, mais vous pouvez ajouter d'autres

![image1](resources/c060a3ee74d146ef968ea7f5e1d5bdbd.png)![image2](resources/1124d195177742f7a1636407c7ec3133.png)![image3](resources/9de5ec2968a5457f8ab951707a2ebbc4.png)![image4](resources/78fe36674c4b470fa43a579be819481e.png)![image5](resources/4244f38ce52f484cb920e3417676ca63.png)![image6](resources/41511734aaa54e05b3b4c9baa0dd2b0d.png)![image7](resources/92bef813e7a3451da02b4c0d0aafd784.png)![image8](resources/016921392fed4b55a8b29dc26fbe2947.png)![image9](resources/1530454ce44d4f49b9a7fddd544e6aca.png)![image10](resources/aeb9dfce3f1b4527a4c0e913954976c2.png)
