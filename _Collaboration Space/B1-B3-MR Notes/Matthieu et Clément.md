---
title: Matthieu et Clément
updated: 2024-03-22T08:01:54
created: 2024-03-15T13:23:30
---

La faille concerne les vulnérabilités dans le contrôle d'accès, où les utilisateurs peuvent contourner les restrictions et accéder à des fonctionnalités ou des données auxquelles ils ne sont pas autorisés. Cela peut se produire à travers diverses méthodes, telles que la manipulation d'URL, l'accès à des API non sécurisées, la falsification de jetons d'authentification, ou l'exploitation d'erreurs de configuration. Ces failles peuvent entraîner la divulgation, la modification ou la destruction de données sensibles, ainsi que des violations des principes de sécurité tels que le moindre privilège et le refus par défaut. Pour se protéger contre ces failles, il est crucial de mettre en œuvre des contrôles d'accès stricts, de valider soigneusement les entrées utilisateur, de surveiller activement les tentatives d'accès non autorisées et de suivre les meilleures pratiques de sécurité tout au long du développement et du déploiement de l'application.

En janvier 2014 et en août 2015, des données issues des services Snapchat et Facebook Business Pages ont été divulguées. Dans le cas de Facebook Business Pages, une vulnérabilité a été mise en avant par Laxman Muthiyah, un chercheur en sécurité informatique, montrant qu’il était possible pour un utilisateur malveillant d’utiliser une requête pour s’attribuer des autorisations d’administrationpour la page Facebook de son choix, et ainsi d’en prendre le contrôle.

- Violation du principe du moindre privilège ou de refus par défaut, où l'accès ne doit être accordé que pour des capacités, des rôles ou des utilisateurs particuliers, mais est accessible à tous.
- Contourner les contrôles d'accès en modifiant l'URL (falsification de paramètres ou navigation forcée), l'état interne de l'application ou la page HTML, ou en utilisant un outil d'attaque modifiant les requêtes API.
- Autoriser l'affichage ou la modification du compte de quelqu'un d'autre, en fournissant son identifiant unique (références directes d'objet non sécurisées).
- Accès à l'API avec des contrôles d'accès manquants pour POST, PUT et DELETE.
- Élévation de privilège. Agir en tant qu'utilisateur sans être connecté ou agir en tant qu'administrateur lorsqu'il est connecté en tant qu'utilisateur.
- Manipulation de métadonnées, comme le rejeu ou la falsification de JSON Web Token (JWT), de cookies ou de champs cachés, afin d'élever les privilèges ou abuser de l'invalidation JWT.
- La mauvaise configuration de CORS permettant l'accès à l'API à partir d'origines non autorisées/non approuvées.
- Forcer la navigation vers des pages authentifiées en tant qu'utilisateur non authentifié ou vers des pages privilégiées en tant qu'utilisateur standard.

- Real-World Examples of Broken Access Control

- Facebook’s Data Leak (2018): Facebook experienced a significant data leak due to a broken access control issue, which allowed attackers to steal access tokens for around 50 million accounts1. The attackers could use these tokens to take over user accounts, gaining access to private messages and other sensitive information.

- First American Financial Corp. Data Leak (2019): This financial services company exposed 885 million records online due to a broken access control on its website. Anyone with a web browser could access confidential documents without any authentication needed.
- Capital One Data Breach (2019): A misconfiguration in a web application firewall allowed an attacker to access Capital One’s systems, resulting in the exposure of data from 100 million customers.
- Twitter Admin Tool Misuse (2020): In a high-profile incident, attackers gained access to a Twitter admin tool that wasn’t properly secured, allowing them to take over several high-profile accounts.

