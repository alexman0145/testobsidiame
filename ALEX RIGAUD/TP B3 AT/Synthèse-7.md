---
title: Synthèse
updated: 2023-12-12T16:07:10
created: 2023-12-12T16:06:48
---

Synthèse
**ICMP**
La suite TCP/IP envoie des messages ICMP lorsque des paquets IP rencontrent des problèmes de transfert. Cependant, Les messages ICMP ne sont pas obligatoires et sont souvent interdits sur les réseaux pour des raisons de sécurité. ICMPv4 est le protocole de messagerie pour IPv4, tandis qu'ICMPv6 fournit ces mêmes services pour IPv6 et comprend des fonctionnalités supplémentaires. Les messages ICMP communs à ICMPv4 et ICMPv6 incluent la confirmation de l'hôte, la destination ou le service inaccessible, la durée dépassée et la redirection de la route. ICMPv6 inclut les quatre messages ICMPv6 supplémentaires pour le Neighbor Discovery Protocol (NDP). Ces messages sont des messages de sollicitation de routeur (RS) et de publicité de routeur (RA) envoyés entre les routeurs IPv6 et les hôtes IPv6, ainsi que des messages de sollicitation de voisin (NS) et de publicité de voisin (NA) qui sont envoyés entre les périphériques IPv6.
**Utilitaires ping et Traceroute**
La commande ping est un utilitaire de test qui utilise des messages de requête et de réponse d'écho ICMP pour tester la connectivité entre les hôtes. Parmi les types de tests de connectivité effectués avec ping, mentionnons l'exécution de ping-ping de la boucle locale, l'exécution de ping-ping de la passerelle par défaut et l'exécution de ping-ping d'un hôte distant. Traceroute (tracert) est un utilitaire qui génère la liste des tronçons empruntés sur un chemin. Cette liste fournit des informations importantes pour la vérification et le dépannage. La commande traceroute utilise une fonction du champ TTL du protocole IPv4 et le champ de limite de nombre de tronçons du protocole IPv6 dans les en-têtes de couche 3, ainsi que le message ICMP de dépassement de délai. ICMP est directement encapsulé sous la forme de paquets IP comme charge utile de données. La charge utile des données ICMP contient des champs de données d'en-tête spéciaux.
