---
title: Cours 2 - Conception et dépannage d'un réseau
updated: 2023-09-28T11:52:23
created: 2023-09-28T10:44:13
---

[02 Cours Conception et dépannage d'un réseau.pdf](resources/e91f75c50b8f4f3b8dc5231ec68114e4.pdf)
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
![image1](resources/c9166f5952ec4f7ebb75917defeacbbf.png)![image2](resources/59b56fc4f2ca46ecaaaa65c9e6497474.png)![image3](resources/f6c1d4834bb941f4a18c89c10bc66a01.png)![image4](resources/a0bf1a9cde81407f8026543f50a8cb53.png)![image5](resources/e2f525b0cc604d43aa759e3dfa3649c7.png)![image6](resources/dec7c4c5cc064d439741de32f3af5469.png)![image7](resources/6980ae8805da45f7ac069769454aee9f.png)![image8](resources/389259f2f0ec4b4581334d5d51e7a0b5.png)![image9](resources/704d5c0b7314474e9a81084cb8799270.png)![image10](resources/c299f789049c44a09a5bc4038f4e9ce4.png)![image11](resources/9c1bb19454724a1b8011f1bad4a2dbba.png)![image12](resources/1c0e35ef37f14294b7544534d3a37adc.png)![image13](resources/f04a936a8d844846bc28e2eca657ec54.png)![image14](resources/67950ecde7834467b9a517ce5a1186ba.png)![image15](resources/8560215bfbf9416280a8b7f8051a361e.png)![image16](resources/7fc2a7f063d5413e9e967b17a5d4aa1d.png)![image17](resources/7336e19843f34169882a3cce26dfe5c8.png)![image18](resources/3e3527ed06674191ac827bcccf63bad0.png)![image19](resources/b6d95275684d48e3a16064668cacca70.png)![image20](resources/dfb339d21d18465cb6e9475f117c0eb2.png)![image21](resources/fcb6e2f4180748d2bbb9c05267c74243.png)![image22](resources/6522c74f6a8c4bbe809676e09ac41cab.png)![image23](resources/b3de7ad6921842d5954a6e1d0fe9e398.png)![image24](resources/a58ef5d3f87c404eae318a6f132406a9.png)![image25](resources/4592d325a0364176bca87cb1560b0892.png)![image26](resources/e1d2a6fe2bef4c629a0f8769eac64dc2.png)![image27](resources/a89a69301bbe4cb4b316381816212ae9.png)![image28](resources/2a539473020d45aaae57631132cd1eed.png)![image29](resources/95ba4fdb339b42b1ae60e331f30d4ba5.png)![image30](resources/4e9f53f5850a45c188e017b18c41846d.png)![image31](resources/f1326b8c4d52480dac219e376fd3b902.png)
