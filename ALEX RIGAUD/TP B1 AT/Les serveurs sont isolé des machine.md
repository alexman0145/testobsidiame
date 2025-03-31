---
title: Les serveurs sont isolé des machine avec d'autre i...
updated: 2023-12-07T11:51:54
created: 2023-12-07T10:25:33
---

Les serveurs sont isolé des machine avec d'autre ip

Création de redirection de ports

Nom : web.IIS
Protocole : TCP
IP hôte : 192.168.1.4
Port hôte : 8081
IP VM : 10.0.215
Port VM : 80

Un switch virtuelle créait un NAT/PAT

Menu permettant d'aller configurer la redirection de port

![image1](resources/9a5ea44a72114b0ba6f5fe62dc5f7723.png)

On peut trouvé ces paramètres dans network manager

![image2](resources/7fafd31d772a43bdb98a4f8516f96c09.png)

Trouver la configuration ip de la machine grâce à ipconfig /all

![image3](resources/22f308a6d7c94b72b3cfcb956bfa2586.png)

