---
title: Bastien & Jalil Owasp
updated: 2024-03-22T14:04:27
created: 2024-03-15T13:16:58
---

Travail sur le 5e : Security Misconfiguration

Lien : <https://owasp.org/Top10/A05_2021-Security_Misconfiguration/>

L'application peut être vulnérable si elle est :

- Renforcement de la sécurité approprié manquant dans n'importe quelle partie de la pile d'applications ou autorisations mal configurées sur les services cloud.
  - Des fonctionnalités inutiles sont activées ou installées (par exemple, des ports, services, pages, comptes ou privilèges inutiles).
  - Les comptes par défaut et leurs mots de passe sont toujours activés et inchangés.
  - La gestion des erreurs révèle des traces de pile ou d'autres messages d'erreur trop informatifs pour les utilisateurs.
  - Pour les systèmes mis à niveau, les dernières fonctionnalités de sécurité sont désactivées ou ne sont pas configurées de manière sécurisée.
  - Les paramètres de sécurité des serveurs d'applications, des frameworks d'applications (par exemple, Struts, Spring, ASP.NET), des bibliothèques, des bases de données, etc., ne sont pas définis sur des valeurs sécurisées.
  - Le serveur n'envoie pas d'en-têtes ou de directives de sécurité, ou ils ne sont pas définis sur des valeurs sécurisées.
  - Le logiciel est obsolète ou vulnérable

Comment empêcher cela :

- Un processus de renforcement reproductible permet de déployer rapidement et facilement un autre environnement correctement verrouillé. Les environnements de développement, d'assurance qualité et de production doivent tous être configurés de manière identique, avec des informations d'identification différentes utilisées dans chaque environnement. Ce processus doit être automatisé afin de minimiser les efforts requis pour mettre en place un nouvel environnement sécurisé.
- Une plate-forme minimale sans fonctionnalités, composants, documentation et exemples inutiles. Supprimez ou n’installez pas les fonctionnalités et frameworks inutilisés.
- Une tâche consistant à examiner et mettre à jour les configurations appropriées à toutes les notes de sécurité, mises à jour et correctifs dans le cadre du processus de gestion des correctifs (voir A06:2021-Composants vulnérables et obsolètes ). Vérifiez les autorisations de stockage dans le cloud (par exemple, les autorisations du compartiment S3)
- Une architecture d'application segmentée offre une séparation efficace et sécurisée entre les composants ou les locataires, avec segmentation, conteneurisation ou groupes de sécurité cloud (ACL).
- Envoi de directives de sécurité aux clients, par exemple, des en-têtes de sécurité.
- Un processus automatisé pour vérifier l'efficacité des configurations et des paramètres dans tous les environnements.

Exemple & explication :

Scénario 1 : le serveur d'applications est fourni avec des exemples d'applications non supprimés du serveur de production. Ces exemples d'applications présentent des failles de sécurité connues que les attaquants utilisent pour compromettre le serveur. Supposons que l'une de ces applications soit la console d'administration et que les comptes par défaut n'aient pas été modifiés. Dans ce cas, l’attaquant se connecte avec les mots de passe par défaut et prend le relais.

Explication :

- Renforcement de la sécurité approprié manquant dans n'importe quelle partie de la pile d'applications ou autorisations mal configurées sur les services cloud.
  - Des fonctionnalités inutiles sont activées ou installées (par exemple, des ports, services, pages, comptes ou privilèges inutiles).
  - Les comptes par défaut et leurs mots de passe sont toujours activés et inchangés.
  - La gestion des erreurs révèle des traces de pile ou d'autres messages d'erreur trop informatifs pour les utilisateurs.
  - Pour les systèmes mis à niveau, les dernières fonctionnalités de sécurité sont désactivées ou ne sont pas configurées de manière sécurisée.
  - Les paramètres de sécurité des serveurs d'applications, des frameworks d'applications (par exemple, Struts, Spring, ASP.NET), des bibliothèques, des bases de données, etc., ne sont pas définis sur des valeurs sécurisées.
  - Le serveur n'envoie pas d'en-têtes ou de directives de sécurité, ou ils ne sont pas définis sur des valeurs sécurisées.
  - Le logiciel est obsolète ou vulnérable
