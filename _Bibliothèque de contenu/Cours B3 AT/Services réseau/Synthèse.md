---
title: Synthèse
updated: 2023-03-11T12:42:51
created: 2023-03-11T12:42:19
---

Synthèse

**DHCP**

Le protocole DHCP pour IPv4 automatise l'affectation des adresses IPv4. Le contraire de l'adressage dynamique est l'adressage statique. Sur les réseaux de plus grande taille ou sur les réseaux dont les utilisateurs changent fréquemment, l'adressage dynamique est souvent la méthode préférée pour l'attribution des adresses. De nombreux réseaux utilisent les deux méthodes. Le protocole DHCP est utilisé pour les hôtes d'usage général, comme les périphériques des utilisateurs finaux. L'adressage statique est utilisé pour les périphériques réseau tels que les routeurs de passerelle, les commutateurs, les serveurs et les imprimantes.

Lorsqu'un périphérique IPv4 configuré pour DHCP démarre ou se connecte au réseau, le client diffuse un message de détection DHCP (DHCPDISCOVER) pour identifier tous les serveurs DHCP disponibles sur le réseau. Un serveur DHCP répond par un message d'offre DHCP (DHCPOFFER), qui offre un bail au client. Ce message contient l'adresse IPv4 et le masque de sous-réseau à attribuer, l'adresse IPv4 du serveur DNS et l'adresse IPv4 de la passerelle par défaut. Le client peut recevoir plusieurs messages DHCPOFFER si le réseau local comporte plusieurs serveurs DHCP. Il doit donc effectuer un choix et envoyer une requête DHCP (DHCPREQUEST) qui identifie explicitement le serveur et l'offre de bail qu'il accepte. Si l'adresse IPv4 est toujours disponible, le serveur renvoie le message DHCPACK . Si l'offre n'est plus valide, elle renvoie un message DCHPNACK. Le format du message DHCPv4 est utilisé pour toutes les transactions DHCPv4. Les messages DHCPv4 sont encapsulés dans le protocole de transport UDP.

**Présentation du protocole DNS**

Le système DNS (Domain Name System) a été conçu pour gérer et fournir de manière fiable les noms de domaine et les adresses IP associées. Le système DNS est composé d'une hiérarchie globale de serveurs distribués qui contiennent des bases de données de mappages nom-adresse IP. Les analystes de la cybersécurité devraient avoir une connaissance approfondie du DNS car une analyse récente des menaces de sécurité réseau a révélé que plus de 90% des logiciels malveillants qui attaquent des réseaux utilisent le système DNS pour mener à bien leurs campagnes.

Voici les cinq étapes impliquées dans la résolution DNS:
- L'utilisateur saisit un FQDN dans un champ Adresse du navigateur.
- Une requête DNS est envoyée au serveur DNS désigné pour l'ordinateur client.
- Le serveur DNS correspond au FQDN avec son adresse IP.
- La réponse à la requête DNS est renvoyée au client avec l'adresse IP du FQDN.
- L'ordinateur client utilise l'adresse IP pour effectuer des requêtes du serveur.
DNS utilise le port UDP 53 pour les requêtes et les réponses DNS. Le serveur DNS stocke plusieurs types d'enregistrements de ressources pour résoudre les noms de domaine. Ces enregistrements contiennent le nom, l'adresse et le type d'enregistrement. Le DNS utilise le même format de message entre les serveurs, consistant en une question, une réponse, une autorité et des informations supplémentaires pour tous les types de requêtes des clients et les réponses des serveurs, les messages d'erreur et le transfert d'informations sur les enregistrements de ressources. À l'instar du système DNS, le DNS dynamique (DDNS) permet à un utilisateur ou à une entreprise d'enregistrer l'adresse IP correspondant à un nom de domaine. Toutefois, lorsque l'adresse IP du mappage est modifiée, le nouveau mappage peut être diffusé presque instantanément via le DNS. DDNS peut être abusé par les acteurs de menaces de diverses manières et les URL qui utilisent DDNS devraient être suspectes. WHOIS est un protocole basé sur TCP qui est utilisé pour identifier les propriétaires de domaines Internet dans le système DNS. Le protocole WHOIS présente des limites et les hackers disposent de techniques pour cacher leur vraie identité.

**NAT**

La traduction d'adresse réseau (NAT) assure la traduction des adresses privées en adresses publiques. Cela permet aux périphériques possédant une adresse IPv4 privée d'accéder aux ressources situées en dehors de son réseau privé, notamment celles d'Internet. La NAT permet la conservation des adresses IPv4 publiques. Les routeurs configurés pour la NAT peuvent être configurés avec une ou plusieurs adresses IPv4 publiques valides. Ces adresses publiques sont appelées collectivement «pool NAT». Un routeur NAT fonctionne généralement à la périphérie d'un réseau d'extrémité. Lorsqu'un périphérique situé dans un réseau d'extrémité souhaite communiquer avec un périphérique en dehors de son réseau, le paquet est transmis au routeur périphérique. Le routeur périphérique mène à bien le processus NAT en traduisant l'adresse privée interne du périphérique en une adresse publique externe routable. La traduction d'adresses de port (PAT), également appelée surcharge NAT, mappe plusieurs adresses IPv4 privées à une seule adresse IPv4 publique unique ou à quelques adresses.

**Services de transfert et de partage des fichiers**

Le protocole FTP (File Transfer Protocol) est un protocole de couche application couramment utilisé. Il a été développé en vue de permettre le transfert de fichiers entre un client et un serveur. Pour transférer les fichiers, le protocole FTP nécessite deux connexions entre le client et le serveur: une pour les commandes et les réponses, et une autre pour le transfert de fichiers. Le protocole SSH de transfert de fichiers est une forme sécurisée de FTP qui utilise Secure Shell pour fournir un canal sécurisé. TFTP est un protocole de transfert de fichiers simplifié qui utilise le numéro de port UDP réservé 69. Le protocole TFTP est fondamentalement insécurisé. Le protocole SMB (Server Message Block) est un protocole de partage de fichiers client/serveur pour décrire la structure des ressources réseau partagées telles que les répertoires, les fichiers, les imprimantes et les ports série. Le partage de fichiers et les services d'impression SMB sont devenus la base des réseaux Microsoft.

**E-mail**

Les clients de messagerie communiquent avec les serveurs de messagerie pour envoyer et recevoir des messageries electroniques. Les serveurs de messagerie communiquent avec d'autres serveurs de messagerie pour acheminer les messages d'un domaine à un autre. Le courrier électronique prend en charge trois protocoles distincts pour fonctionner : SMTP, POP et IMAP. Le processus de couche application qui envoie les e-mails d'un client à un autre utilise le protocole SMTP. Un client récupère les e-mails d'un serveur de messagerie à l'aide de POP3 ou IMAP.

**Le protocole HTTP**

Les navigateurs Web et les serveurs Web interagissent en suivant les étapes suivantes:
- Le navigateur commence par interpréter les trois parties de l’adresse URL :
- Le navigateur vérifie auprès d'un serveur de noms pour convertir une adresse en adresse IP numérique. Le client initie une requête HTTP à un serveur en envoyant une requête GET au serveur.
- En réponse à la demande, le serveur envoie le code HTML de cette page Web au navigateur.
- Le navigateur déchiffre le HTML et rend la page pour la fenêtre du navigateur.
Les URL HTTP peuvent indiquer le port du serveur chargé de traiter les opérations HTTP. En outre, elles peuvent spécifier une chaîne de requête et un fragment. HTTP est un protocole de requête-réponse qui utilise le port TCP 80. D'autres ports peuvent toutefois être utilisés. Lorsqu'un client, généralement un navigateur web, envoie une requête à un serveur web, il utilise l'une des six méthodes spécifiées par le protocole HTTP: GET, POST, PUT, DELETE, OPTIONS et CONNECT. Le protocole HTTP est flexible mais pas sécurisé. Les réponses du serveur HTTP sont identifiées avec des codes d'état qui sont organisés en cinq groupes de codes: 1xx, 2xx, 3xx, 4xx et 5xx. HTTP/2 est une révision majeure de la spécification du protocole HTTP conçue pour améliorer les performances HTTP en traitant les problèmes de latence. Pour une communication sécurisée via Internet, le protocole HTTPS (HTTP Secure) est utilisé. HTTPS utilise l'authentification et le chiffrement pour sécuriser les données pendant leur transfert entre le client et le serveur.
