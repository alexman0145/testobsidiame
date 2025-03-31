---
title: Correction memories 02/02/2024
updated: 2024-02-02T09:50:14
created: 2024-02-02T08:02:23
---

1 HTML vide

2.  Création btn pour lancer

3.  Ajouter une fonction addvent sur le bouton
4.  Création d'une array avec les images
5.  Creation d'une fonction pour random URL Type
6.  Creation dynamique d'une table HTML pour placer les images

Pour commencer on créait une fonction et la page html doit être vide  

![image1](resources/0f5c1aabd86a4ce6afc74234cfe0f74d.png)

Dans l'exemple pour pour placer les images on peut utiliser dans l'exemple du code return permettant

De stopes si toutes les images sont retiré

![image2](resources/a655286d32db456abfb6003466162f23.png)

Dans le site mozilla developer la methode splice permet d'ajouter ou soit suprimer des élément dans le tableau  

![image3](resources/48e53b70ca0f460b9bd5dd54a0ce39e3.png)

Si on prend 0 en indice dans la méthode splice 0 les autres élément seront remplacé

Premier test :

Créer une fonction appeler initGame

![image2](resources/a655286d32db456abfb6003466162f23.png)

On créer un tableau pour ajouter les images
![image4](resources/f1a4fadcd614403e85478b937ea93f8c.png)

Methode à assigner dans un tableau pour en générer un autre appeler concat  

![image5](resources/b2b4914ab25e45d5924364433a679fee.png)

![image6](resources/dd543ca266724fb1be170dce354bcb75.png)

Attention pour mélanger un tableau on ne peut pas utiliser directement la méthode shuffle

Il est vraie que cet méthode fonctionne mais est "deprecated" depuis

Pour cela on utilise la méthode sort

![image7](resources/eab5af95432d40eb9d55daa4ce3628ca.png)

On utilise en paramètre a, b pour cela qui va être égale ou supérieur à la fonction math.random()  

![image8](resources/137cf90bd9d54f0cbac0b56a39a6995d.png)

Voici la documentation pour la fonction sort  

![image9](resources/453531079af740579d42414ad8c3a864.png)
Voici comment on doit procéder pour mélanger les images
![image10](resources/e68ca4f6737c41a0a87899fbd2ff1780.png)
Le code renvoie un nombre aléatoire qui va comparer ce nombre aléatoire au image
Ces nombres vont être assigner à chaque image et vont être comparer par la suite

Si a et b sont inférieur à 0 renvoyer a, b

Dans le cas contraire sont supérieur à 0 renvoyer à b, a

Créer une fonction qui créer le document HTML

Attention à ne pas oublier d'appeler la fonction suivante

![image11](resources/3c4b46aad07c40a7a730abfe609be854.png)

Pour que cela donne

![image12](resources/567ccdab22304d54a0b57b3c1eb98419.png)
La fonction suivante créer un tableau HTML pour les images dans le tableau

On attribut le tebleau d'image en paramètre par exemple image

En revanche on met dans la fonction créer mon tableau qui est appeler prédament monTableImage  

![image13](resources/de4322aec6824f5dad3ed9a5fc99e805.png)

La suite ettandue sont les suivante

![image14](resources/4613ad96a1fd45bb869d96113bb51725.png)
On peut créer un élément en html directement depuis js

![image15](resources/e0a7164f87304100b376a4bc2dfb7230.png)

On ajoute pour cela par la suite
![image16](resources/1004b4efeff244fa89fdb9b1e6814d32.png)

Voilà le procéder comme suit :

![image17](resources/2147bafb04d5423a989d02a2acad7832.png)

Il faut que l'utilisateur puisse choisir le nombre d'images (faire cela à 13h00)
