---
title: 2_8 - TP - Dépannage des protocoles VTP et DTP  
updated: 2024-02-15T10:34:08
created: 2024-01-11T16:27:49
---

**TP - Dépannage des protocoles VTP et DTP**

**Maquette : [2.2.3.3 Packet Tracer - Troubleshoot VTP and DTP.pka](https://groupesb-my.sharepoint.com/:u:/g/personal/arthur_trouillon_saint-benigne_fr/EVe8PwSScUxJqOO_NkX9ff4BoysVeYQpinuiCgAHXPemWQ)**

**Topologie**

![image1](resources/b71593cad527481da7caed78bad828dc.png)

**Table d'adressage**

| **Périphérique** | **Adresse IP** | **Masque de sous-réseau** |
|-------------------|-----------------|----------------------------|
| PC0              | 172.16.10.1    | 255.255.255.0             |
| PC1              | 172.16.20.1    | 255.255.255.0             |
| PC2              | 172.16.30.1    | 255.255.255.0             |
| PC3              | 172.16.30.2    | 255.255.255.0             |
| PC4              | 172.16.20.2    | 255.255.255.0             |
| PC5              | 172.16.10.2    | 255.255.255.0             |
| S1               | 172.16.99.1    | 255.255.255.0             |
| S2               | 172.16.99.2    | 255.255.255.0             |
| S3               | 172.16.99.3    | 255.255.255.0             |

**Objectifs**

**Partie 1 : dépannage du protocole DTP**

**Partie 2 : dépannage du protocole VTP**

**Contexte/scénario**

Dans cet exercice, les commutateurs S2 et S3 n'implémentent pas les informations VTP. Vous vérifierez que les configurations DTP et VTP sont bien mises en œuvre. Lorsque tous les problèmes seront résolus, les ordinateurs dans le même VLAN pourront communiquer les uns avec les autres.

1.  **Dépannage du protocole DTP**

Dans la Partie 1, vous dépannerez les trunks entre les commutateurs. Vous vérifierez que les trunks permanents sont utilisés entre les commutateurs.

1.  Exécutez la commande **show interfaces trunk** à l'invite du mode d'exécution privilégié sur tous les commutateurs pour déterminer l'état des trunks. Combien de trunks sont bien configurés ?

2.  Exécutez la commande **show interfaces g0/1 switchport** à l'invite du mode d'exécution privilégié sur S1. Faites de même pour l'interface G0/2 sur S1.

Quel est le mode opérationnel des interfaces GigabitEthernet sur S1 ?

3.  Utilisez les mêmes commandes pour G0/1 sur S2 et G0/2 sur S3.

Corrigez les trunks. Notez les commandes utilisées pour résoudre les problèmes de trunking.

4.  Vérifiez les trunks à l'aide des commandes **show**.

2.  **Dépannage du protocole VTP**

S1 jouera le rôle de serveur VTP. S2 et S3 seront configurés en tant que clients VTP et recevront des mises à jour VTP de la part de S1. Le domaine VTP sera **CCNA** et le mot de passe VTP sera **cisco**. Actuellement, tous les VLAN concernés sont déjà configurés sur S1.

1.  **Vérification des informations VLAN.**

Exécutez la commande **show vlan brief** sur tous les commutateurs. Est-ce que tous les commutateurs possèdent le même nombre de VLAN ? Combien chaque routeur en possède-t-il ?

2.  **Vérification de la configuration VTP.**

Exécutez les commandes **show vtp status** et **show vtp password** sur tous les commutateurs pour vérifier l'état VTP.

Notez les informations relatives à l'état VTP dans le tableau ci-dessous.

| **Périphérique** | **Nom de domaine** | **Mode d'exploitation** | **Mot de passe VTP** |
|----|----|----|----|
| S1 |  |  |  |
| S2 |  |  |  |
| S3 |  |  |  |

3.  **Correction des configurations VTP.**

Notez les commandes utilisées pour corriger les configurations VTP.

4.  **Vérification de l'affectation des ports.**

Les ports de commutateur qui se connectent aux ordinateurs doivent être configurés dans les VLAN appropriés pour permettre aux ordinateurs de communiquer les uns avec les autres.

Exécutez la commande **show vlan brief** sur S2 et S3 pour déterminer si les VLAN ont été attribués aux ports de commutateur. Quel VLAN est associé à ces ports de commutateur ?

<table>
<colgroup>
<col style="width: 30%" />
<col style="width: 34%" />
<col style="width: 34%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Ports</strong></th>
<th><strong>Affectations</strong></th>
<th><strong>Réseau</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td><p>S2 F0/1</p>
<p>S3 F0/8</p></td>
<td>VLAN 10 (Staff)</td>
<td>172.16.10.0/24</td>
</tr>
<tr class="even">
<td><p>S2 F0/9</p>
<p>S3 F0/16</p></td>
<td>VLAN 20 (Student)</td>
<td>172.16.20.0/24</td>
</tr>
<tr class="odd">
<td><p>S2 F0/17</p>
<p>S3 F0/24</p></td>
<td>VLAN 30 (Faculty)</td>
<td>172.16.30.0/24</td>
</tr>
</tbody>
</table>

À l'aide du tableau ci-dessus, corrigez les attributions de VLAN sur S2 et S3. Notez les configurations des attributions de VLAN ci-dessous.

5.  **Vérification de la connectivité de bout en bout.**

1.  Envoyez une requête ping de PC0 vers PC5.

2.  Envoyez une requête ping de PC1 vers PC4.

3.  Envoyez une requête ping de PC2 vers PC3.

**
