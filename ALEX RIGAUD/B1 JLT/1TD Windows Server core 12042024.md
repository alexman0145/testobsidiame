---
title: 1TD Windows Server core 12/04/2024
updated: 2024-04-15T19:07:51
created: 2024-04-12T10:13:59
---

AM

![image1](resources/a0eb8278a6ce407bb817179d598c03c8.png)

![image2](resources/54b59ea4ede7494e9a38fdcac260ce86.png)

![image3](resources/015897424aa24668b63d18d4bfe69d2b.png)

![image4](resources/489daff3c5a54ba7bdbb8d046d357cd9.png)

![image5](resources/ebc32eec07d04b468e014210bde7ffd0.png)

![image6](resources/858dc3506120475da569e5b09e80268d.png)

![image7](resources/54207758c2aa4499bfb20705513fd968.png)

![image8](resources/b21522c0281e482bb5c993bdf62ac400.png)

![image9](resources/fa101bb527004b1f8bbff99f4b042e51.png)

ouvrir le pare feu sur invite de commande

*From \<<https://chat.openai.com/c/ba2429ae-130b-43c1-8ef6-6bbdea3b6878>\>*

Pour ouvrir le pare-feu Windows via l'invite de commande sur un serveur Windows Server 2022, vous pouvez utiliser l'utilitaire Netsh. Voici comment ouvrir le pare-feu à l'aide de Netsh :

1\. \*\*Ouvrir une invite de commande en tant qu'administrateur\*\* :
\- Cliquez avec le bouton droit sur le menu Démarrer et sélectionnez "Invite de commandes (Admin)" ou "Windows PowerShell (Admin)".

2\. \*\*Afficher l'état actuel du pare-feu\*\* (optionnel) :
\- Pour afficher l'état actuel du pare-feu, vous pouvez exécuter la commande suivante :
\`\`\`
netsh advfirewall show allprofiles
\`\`\`

3\. \*\*Activer le pare-feu\*\* :
\- Pour activer le pare-feu, exécutez la commande suivante :
\`\`\`
netsh advfirewall set allprofiles state on
\`\`\`

4\. \*\*Désactiver le pare-feu\*\* :
\- Pour désactiver le pare-feu, exécutez la commande suivante :
\`\`\`
netsh advfirewall set allprofiles state off
\`\`\`

5\. \*\*Ajouter une règle de pare-feu\*\* (optionnel) :
\- Si vous avez besoin d'ajouter des règles de pare-feu spécifiques, vous pouvez utiliser la commande \`netsh advfirewall firewall\` suivie des options appropriées. Par exemple, pour autoriser le trafic sur un port spécifique (par exemple, le port 80 pour HTTP), vous pouvez utiliser :
\`\`\`
netsh advfirewall firewall add rule name="HTTP" protocol=TCP dir=in localport=80 action=allow
\`\`\`

6\. \*\*Vérifier les règles de pare-feu\*\* (optionnel) :
\- Pour vérifier les règles de pare-feu configurées, vous pouvez utiliser la commande suivante :
\`\`\`
netsh advfirewall firewall show rule name=all
\`\`\`

7\. \*\*Fermer l'invite de commande\*\* :
\- Une fois que vous avez terminé, vous pouvez fermer l'invite de commande.

Ces commandes vous permettront de gérer le pare-feu Windows à partir de l'invite de commande sur Windows Server 2022. Assurez-vous d'exécuter ces commandes avec les privilèges administratifs appropriés.

![image10](resources/0f009e5146214b1a840dd063d5fd12e5.png)

Restart-Computer
