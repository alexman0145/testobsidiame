---
title: Cours 2 - Conception et dépannage d'un réseau
updated: 2023-09-28T11:52:23
created: 2023-09-28T10:44:13
---

[02 Cours Conception et dépannage d'un réseau.pdf](resources/4e9c15832d1d445f90c8574eefc364ee.pdf)
<table>
<colgroup>
<col style="width: 13%" />
<col style="width: 86%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Compétences du référentiel</strong></th>
<th><table>
<colgroup>
<col style="width: 100%" />
</colgroup>
<thead>
<tr class="header">
<th><mark>1.2.2 Traiter des demandes concernant les services réseau et système</mark></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><mark>2.2.1 Installer et configurer des éléments d’infrastructure</mark></td>
</tr>
<tr class="even">
<td><mark>2.2.6 Déployer une solution d’infrastructure</mark></td>
</tr>
<tr class="odd">
<td><mark>2.3.1 Administrer sur site et à distance des éléments d’une infrastructure</mark></td>
</tr>
</tbody>
</table></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Durée</td>
<td>30 min</td>
</tr>
<tr class="even">
<td>Titre + Contenu</td>
<td><p>Cours réseau - <strong>2 - Commandes de diagnostic et dépannage d'un réseau<br />
<br />
</strong>2.1 Les commandes réseau de base<br />
2.2 Dépannage du réseau</p>
<p></p></td>
</tr>
<tr class="odd">
<td>Objectifs</td>
<td><p>Identifier les équipements entrant dans la conception d'un réseau</p>
<p>Identifier les protocoles utilisés dans un réseau</p>
<p>Expliquer comment un petit réseau sert de base aux réseaux plus importants</p>
<p></p>
<p>Utiliser les résultats de la commande ping pour déterminer les performances relatives du réseau</p>
<p>Utiliser les résultats de la commande tracert pour déterminer les performances relatives du réseau</p>
<p>Utiliser la commandes ipconfig pour vérifier la configuration des périphériques réseau</p>
<p>Utiliser la commandes arp pour obtenir des informations sur les périphériques réseau</p>
<p>Utiliser la commande netstat pour obtenir des informations et des statistiques sur les connexions réseau</p>
<p></p>
<p>Appliquer des méthodologies de dépannage pour résoudre des problèmes</p>
<p>Résoudre les problèmes liés aux interfaces et aux câbles</p>
<p>Résoudre les problèmes de connectivité du client liés au serviceDNS</p>
<p></p></td>
</tr>
<tr class="even">
<td>Indicateurs de performance</td>
<td><p>Des tests pertinents d’intégration et d’acceptation sont rédigés et effectués.</p>
<p>Les outils de test sont utilisés de manière appropriée.</p>
<p>Un rapport de test du service est produit.</p>
<p>Un support d’information est disponible.</p>
<p>Les modalités d’accompagnement sont définies.</p>
<p>Le service déployé est opérationnel et donne satisfaction à l’utilisateur.</p>
<p>La documentation est à jour et disponible.</p>
<p>Une procédure claire de déploiement de la solution d'infrastructure est rédigée.</p>
<p>La solution d’infrastructure est déployée selon la procédure et la planification définies.</p>
<p></p></td>
</tr>
<tr class="odd">
<td>Savoirs</td>
<td><p>Services et protocoles réseaux standard et de base</p>
<p>Principes des architectures réseau : modèles de référence, normes et technologies, périmètres de réseau, routage, plans d’adressage</p>
<p>Bases du réseau : modèles de référence, médias d’interconnexion, protocoles de base et services associés, adressage, nommage, routage, principaux composants matériels, notion de périmètres réseau</p>
<p></p></td>
</tr>
<tr class="even">
<td>Transversalités CEJMA</td>
<td><p>Accord de niveau de service (en anglais SLA - Service Level Agreement)</p>
<p></p></td>
</tr>
<tr class="odd">
<td>Liens ressources (externes)</td>
<td><p>Cours système et réseaux d’OpenClassRoom : <a href="https://openclassrooms.com/fr/search?page=1&amp;categories=Syst%C3%A8mes%20%26%20R%C3%A9seaux">https://openclassrooms.com/fr/search?page=1&amp;categories=Syst%C3%A8mes%20%26%20R%C3%A9seaux</a></p>
<p>La bibliothèque numérique ENI : <a href="https://www.editions-eni.fr/livres-numeriques">https://www.editions-eni.fr/livres-numeriques</a></p>
<p>L’internet rapide et permanent : <a href="http://irp.nain-t.net/doku.php">http://irp.nain-t.net/doku.php</a></p></td>
</tr>
</tbody>
</table>
![image1](resources/cf930c753f174218a5b242a630f3f470.png)![image2](resources/b7f5263d8fd240e79cc8f6eb2aeb9451.png)![image3](resources/c672c380585643c9bc5de8b7bebdeea8.png)![image4](resources/799038353fe04b3482c20696db342ee1.png)![image5](resources/ba635c6ef0df467f9af498d1a1d4d2fe.png)![image6](resources/b2e7cf7756dc4515a642667c609624ad.png)![image7](resources/c3c2d226a39745848af3f623de700219.png)![image8](resources/47d0af15787f4a5bb44449c450d1f3a5.png)![image9](resources/354ff49e95334995a7d5c660f5fb2f54.png)![image10](resources/43d4147489884e6cb4cb5fa5d599c9eb.png)![image11](resources/908d6766e3f8469a9c49021263baf688.png)![image12](resources/3185054b6c754ababcfe380b474f807d.png)![image13](resources/ab266d4629724f378c111a10d42b7cc9.png)![image14](resources/a979569468f54798a1ae103ae8d2f3e0.png)![image15](resources/59e5b3794d144ebb828fd6dafa32f540.png)![image16](resources/b031577bb7f2492686a702b2938895fc.png)![image17](resources/9573b7389cbd490e94758f2e7e53bfd4.png)![image18](resources/6a8b8e6a215945cb87e5573626b1c17c.png)![image19](resources/f3c8d00461d445f58cf5db0645cad959.png)![image20](resources/7707b0f178da461ba63f5151252c960d.png)![image21](resources/5c8089910902445b8df1b5ac41e63fe6.png)![image22](resources/f82cefb9ab6a4fc6bd039ee0eba0f618.png)![image23](resources/df50e9a40ee0450093730b3fe99f74b8.png)![image24](resources/2c364108cc894140bf0f682ce0e1bf3e.png)![image25](resources/85611ef59ff940538e39a3ab90847be2.png)![image26](resources/47ab8cb4cc1b4e818fcff649cc1b4d8f.png)![image27](resources/a2d89dce7c264f768532f651a25a7f90.png)![image28](resources/f7783039fc6242818c7ef5ef4a970522.png)![image29](resources/af952dcdafee4a8aa1afc38fc9c97499.png)![image30](resources/a3adea6ce5bc40c18044dcecdc0eaff4.png)![image31](resources/a3fd3808773846fea14aeaf4a8c745e3.png)
