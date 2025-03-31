---
title: TD 8 web authentication 02/07/2024
updated: 2024-02-17T12:58:51
created: 2024-02-07T14:09:13
---

TD 8 web authentication 02/07/2024
Wednesday, February 7, 2024
2:09 PM

![image1](resources/fe482d0dae844ca08ddab1f1304bee6f.png)

Permission ssh root

Aller dans

sudo nano /etc/ssh/sshd_config

Ajouter ou metter dans la ligne

PermitRootLogin yes

\<Directory "/var/www/html"\>
AuthType Basic
AuthName "Restricted Content"
AuthUserFile /etc/apache2/.htpasswd
Require valid-user
\</Directory\>

Syntax error on line 23 of /etc/apache2/sites-enabled/000-default.conf:
