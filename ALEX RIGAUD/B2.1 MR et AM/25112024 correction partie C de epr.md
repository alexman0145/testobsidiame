---
title: 25/11/2024 correction partie C de epreuve blan  B3
updated: 2024-11-26T08:05:23
created: 2024-11-25T16:53:09
---

C.1

\$id = htmlspecialchars(\$\_POST\['id'\])
\$password = password_hash((\$\_POST\['password'\])

C.2

Données sans vérification
Variables public
Utilisation compte root (ce compte à tous les droits)

C.3

\<php

\$fileName = "202110-log.csv";
\$logs = getLogs(\$fileName);
?\>
\<table\>
\<thead\>
\<th\>Day\</th\>
\<th\>Time\</th\>
\<th\>Ip\</th\>
\<th\>Usertype\</th\>
\</th\>
\</thead\>
\<tbody\>
\<?php foreach(\$logs as \$log) {
echo("
\<tr\>
\<td\>" .\$log\[0\]."\</td\>

\<td\>" .\$log\[1\]."\</td\>

\<td\>" .\$log\[2\]." \</td\>

\<td\>" .\$log\[3\]."\</td\>

\</tr\>")} ?\>
\</tbody\>
\</table\>

D.1

