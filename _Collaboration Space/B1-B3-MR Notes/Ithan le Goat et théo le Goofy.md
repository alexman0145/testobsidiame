---
title: Ithan le Goat et théo le Goofy
updated: 2024-03-29T11:37:44
created: 2024-03-15T13:19:46
---

Ithan le Goat et théo le Goofy
Friday, March 15, 2024
1:19 PM

A03:2021 - Injection  

L'injection est a la troisième position des attaques les plus utilisés

<https://www.lemondeinformatique.fr/actualites/lire-des-failles-par-injection-sql-ciblant-des-entreprises-francaises-aux-encheres-82834.html>

1.  **Contexte**: Kubernetes est un outil essentiel pour gérer et orchestrer des conteneurs dans des environnements de production. Cependant, comme tout logiciel, il peut présenter des vulnérabilités.
2.  **Détails techniques**: Les attaquants peuvent exploiter cette faille en utilisant des volumes locaux (également appelés volumes hostPath) dans Kubernetes. Ces volumes permettent aux conteneurs d’accéder à des fichiers et des répertoires sur le nœud hôte. Cependant, si ces volumes sont mal configurés, ils peuvent être utilisés pour injecter des commandes malveillantes dans les conteneurs.
3.  **Mécanisme d’attaque**: L’attaquant crée un volume local et y place un fichier contenant des commandes malveillantes. Ensuite, il monte ce volume dans un conteneur Kubernetes. Le conteneur exécute alors involontairement les commandes contenues dans le fichier, ce qui peut compromettre la sécurité du cluster.
4.  **Impact**: Si un attaquant réussit à exploiter cette faille, il peut exécuter des commandes arbitraires dans les conteneurs. Cela peut entraîner la divulgation de données sensibles, la prise de contrôle du système ou d’autres conséquences graves.
5.  **Correctif**: Les administrateurs de Kubernetes doivent appliquer les correctifs disponibles pour résoudre cette vulnérabilité. Cela peut inclure la mise à jour vers une version plus récente de Kubernetes, la configuration appropriée des volumes locaux et la surveillance des activités suspectes.

**<u>Résumé :</u>**  

Une injection, en informatique, se réfère généralement à l'insertion de code ou de données malveillantes dans un programme ou un système, souvent dans le but de compromettre la sécurité ou de manipuler le comportement du logiciel. Les injections peuvent prendre différentes formes, telles que les injections SQL, les injections de code PHP, les injections XSS (Cross-Site Scripting), etc. Elles exploitent souvent des vulnérabilités dans les applications Web ou les systèmes mal sécurisés.

Le principe de l'injection SQL repose sur l'exploitation de failles de sécurité dans les applications web qui interagissent avec une base de données. L'attaquant insère du code SQL malveillant dans les champs de saisie de l'application, comme les formulaires de connexion ou les paramètres d'URL. Ce code SQL est ensuite exécuté par la base de données, ce qui peut entraîner diverses conséquences, telles que la divulgation d'informations sensibles, la manipulation des données ou même la compromission complète du système. En résumé, l'attaque par injection SQL permet à un attaquant d'injecter et d'exécuter du code SQL non autorisé à travers les entrées utilisateur, compromettant ainsi la sécurité de l'application et de la base de données.

Exemples :

\<?php

// Récupération des données du formulaire

\$username = \$\_POST\['username'\];

\$password = \$\_POST\['password'\];

// Connexion à la base de données

\$pdo = new PDO('mysql:host=localhost;dbname=ma_base_de_donnees', 'utilisateur', 'mot_de_passe');

// Requête SQL pour vérifier les informations d'identification

\$query = "SELECT \* FROM utilisateurs WHERE username='\$username' AND password='\$password'";

\$result = \$pdo-\>query(\$query);

// Vérification du résultat

if (\$result-\>rowCount() \> 0) {

echo "Connexion réussie!";

} else {

echo "Identifiants incorrects!";

}

?\>

