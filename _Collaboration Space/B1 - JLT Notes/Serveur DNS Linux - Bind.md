---
title: Serveur DNS Linux - Bind
updated: 2024-02-09T11:54:04
created: 2024-02-09T11:45:29
---

**On met à jour la liste des paquets**
apt update

**On installe bind9 (le serveur DNS) et ses utilitaires**
apt install -y bind9 bind9utils bind9-doc dnsutils

**On donne un nom à la machine**
\#nano /etc/hostname
srvweb

**On indique à la machine son FQDN (nom de domaine pleinement qualifié : son hostname dans son domaine)**
nano /etc/hosts
127.0.0.1 localhost srvweb
10.0.X.Y srvweb srvweb.mondomaine.lan

**On indique à la machine dans quel domaine elle se trouve et quel serveur DNS elle va interroger (elle-même, donc on met sa propre adresse IP)**
nano /etc/resolv.conf
domain mondomaine.lan
search mondomaine.lan
nameserver 10.0.X.Y

**On paramètre le réseau avec une configuration statique et on précise que le serveur DNS à interroger est en local**
nano /etc/network/interfaces
allow-hotplug enp0s3
iface enp0s3 inet static
address 10.0.X.Y
netmask 255.0.0.0
gateway 10.0.0.1
nameserver 127.0.0.1

**On édite les options du serveur DNS pour configurer le serveur DNS du lycée en tant que redirecteur (pour résoudre les autres noms de domaine)**
nano /etc/bind/named.conf.options
forwarders {
10.0.0.2;
};

**On édite le fichier de configuration du serveur DNS local pour lui indiquer notre domaine local direct et son domaine inverse associé**
nano /etc/bind/named.conf.local
zone "mondomaine.lan" {
type master;
file "/etc/bind/db.mondomaine.lan";
};
zone "10.in-addr.arpa" {
type master;
file "/etc/bind/db.10";
};

**On créé le fichier de configuration de notre domaine local direct**
nano /etc/bind/db.mondomaine.lan
\$TTL 604800
@ IN SOA srvweb.mondomaine.lan. root.mondomaine.lan. (
1 ; Serial
604800 ; Refresh
86400 ; Retry
2419200 ; Expire
604800 ) ; Negative Cache TTL
;
NS srvweb.mondomaine.lan.
srvweb.mondomaine.lan. IN A 10.0.100.100
www IN CNAME srvweb.mondomaine.lan.
site1 IN CNAME srvweb.mondomaine.lan.
site2 IN CNAME srvweb.mondomaine.lan.

**On créé le fichier de configuration de notre domaine local inverse**
nano /etc/bind/db.10
\$TTL 604800
@ IN SOA ns.mondomaine.lan. root.mondomaine.lan. (
1 ; Serial
604800 ; Refresh
86400 ; Retry
2419200 ; Expire
604800 ) ; Negative Cache TTL
;
@ IN NS ns.mondomaine.lan.
100 IN PTR ns.mondomaine.lan.
100 IN PTR srvweb.mondomaine.lan.
100 IN PTR [www.mondomaine.lan](http://www.mondomaine.lan).
100 IN PTR site1.mondomaine.lan.
100 IN PTR site2.mondomaine.lan.

**On redémarre le service du serveur DNS**
service bind9 restart

**On vérifie le statut du serveur DNS**
service bind9 status

**On vérifie la résolution de nom sur le vrai nom du serveur, dans le domaine local (son FQDN)**
ping srvweb.mondomaine.lan

**On vérifie la résolution de nom sur les alias du serveur, c’est-à-dire ses différents noms**
ping [www.mondomaine.lan](http://www.mondomaine.lan)
ping site1.mondomaine.lan
ping site2.mondomaine.lan
