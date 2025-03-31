---
title: Top 10 Lucas Nizard A9
updated: 2024-03-15T13:30:02
created: 2024-03-15T13:16:04
---

Travail sur le 9e
A09:2021-Carence des systèmes de contrôle et de journalisation, précédemment A10:2017-Supervision et Journalisation Insuffisantes, est ajoutée de l'enquête auprès de l'industrie (3ème), précédemment à la dixième place. Cette catégorie a été étendue pour inclure plus de types de défaillances, est difficile à tester et est dès lors mal représentée dans les données CVE/CVSS. Toutefois, des incidents dans cette catégorie peuvent impacter directement la visibilité, la levée d'alertes et l'analyse forensique.

Scénario n°1 : l'opérateur du site Web d'un fournisseur de soins de santé pour enfants n'a pas pu détecter une violation en raison d'un manque de surveillance et de journalisation. Une partie externe a informé le fournisseur du plan de santé qu'un attaquant avait accédé et modifié des milliers de dossiers médicaux sensibles de plus de 3,5 millions d'enfants. Un examen postérieur à l'incident a révélé que les développeurs du site Web n'avaient pas corrigé d'importantes vulnérabilités. Comme il n'y avait pas de journalisation ou de surveillance du système, la violation de données pourrait être en cours depuis 2013, soit une période de plus de sept ans.

Scénario n°2 : une grande compagnie aérienne indienne a subi une violation de données portant sur plus de dix ans de données personnelles de millions de passagers, y compris des données de passeport et de carte de crédit. La violation des données s'est produite chez un fournisseur tiers d'hébergement en nuage, qui a informé la compagnie aérienne de la violation après un certain temps.

Scénario n°3 : une grande compagnie aérienne européenne a subi une violation à déclarer au titre de la RGPD. La violation aurait été causée par des vulnérabilités de sécurité des applications de paiement exploitées par des attaquants, qui ont récolté plus de 400 000 enregistrements de paiement de clients. La compagnie aérienne a été condamnée à une amende de 20 millions de livres sterling en conséquence par le régulateur de la vie privée.

Comment s'en prémunir
Les développeurs doivent mettre en œuvre tout ou partie des contrôles suivants, en fonction du risque de l'application :

s'assurer que toutes les authentifications, les erreurs de contrôle d'accès et de contrôle des entrées côté serveur sont enregistrées, avec un contexte utilisateur suffisant pour identifier les comptes suspects ou malveillants, et conservées suffisamment longtemps pour permettre une analyse légale différée ;
s'assurer que les enregistrements des journaux sont dans un format standard pour permettre de les intégrer facilement à une solution de gestion de logs centralisée ;
veiller à ce que les données des journaux soient correctement encodées afin d'éviter les injections ou les attaques sur les systèmes de journalisation ou de surveillance ;
s'assurer que les transactions à haute valeur ajoutée ont une piste d'audit, avec un contrôle d'intégrité, pour éviter la modification ou la suppression, comme des tables de bases de données en ajout seul ou équivalent ;
les équipes DevSecOps devraient mettre en place une supervision et une gestion d'alertes efficaces pour détecter et réagir aux actions suspectes en temps opportun ;
définir ou adopter un plan de réaction et de reprise sur incident, comme celui du National Institute of Standards and Technology (NIST) 800-61r2 ou ultérieur.
On trouve des logiciels, commerciaux ou open source, de protection d'applications tels que OWASP ModSecurity Core Rule Set, et des logiciels de corrélation de journaux, comme la pile Elasticsearch, Logstash, Kibana (ELK), qui propose des tableaux de bord et d'alertes configurables.
La catégorie A09:2021, auparavant nommée A10:2017, portant sur la "Carence des systèmes de contrôle et de journalisation", a été récemment ajoutée à l'enquête de l'industrie, passant ainsi de la dixième à la troisième place. Cette mise à jour reflète une extension de la catégorie pour englober un éventail plus large de défaillances, qui sont difficiles à tester et donc sous-représentées dans les données CVE/CVSS. Cependant, les incidents relevant de cette catégorie peuvent avoir un impact direct sur la visibilité, la détection d'alertes et l'analyse forensique.

Trois scénarios concrets illustrent les conséquences de cette lacune :

Un site Web d'un fournisseur de soins de santé pour enfants a été infiltré sans être détecté pendant une période de sept ans en raison d'un manque de surveillance et de journalisation adéquates. Des milliers de dossiers médicaux sensibles ont été compromis, mettant en danger la confidentialité des informations personnelles.

Une compagnie aérienne indienne a été victime d'une violation de données massives impliquant des données personnelles et financières de millions de passagers, en raison d'une faille chez un fournisseur tiers d'hébergement en nuage. La compagnie a été informée de la violation après un délai significatif.

Une compagnie aérienne européenne a été condamnée à une amende importante en vertu du RGPD suite à une violation de données causée par des failles de sécurité dans ses applications de paiement. Des centaines de milliers de transactions de clients ont été compromises.

Pour se prémunir contre de telles failles, les développeurs et les équipes DevSecOps doivent mettre en place des mesures telles que :

Enregistrer toutes les authentifications et les erreurs de contrôle d'accès, en conservant les données de journalisation suffisamment longtemps pour permettre une analyse différée.
Utiliser un format standard pour les journaux afin de faciliter leur intégration à une solution de gestion centralisée.
Assurer une encodage correct des données de journalisation pour éviter les attaques.
Mettre en place des pistes d'audit pour les transactions importantes.
Établir une supervision et une gestion d'alertes efficaces pour détecter les activités suspectes en temps opportun.
Adopter un plan de réaction et de reprise sur incident tel que recommandé par le NIST.
Des outils logiciels tels que OWASP ModSecurity Core Rule Set et la pile ELK (Elasticsearch, Logstash, Kibana) peuvent être utilisés pour renforcer la sécurité des applications et améliorer la gestion des journaux.
**MRC CHATGPT**
**✈️🏢🏢**
