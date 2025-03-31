---
title: Couleur CCF
updated: 2024-04-12T15:51:19
created: 2024-04-12T15:35:37
---

| 0   | 0   | 0   | 0   |
|-----|-----|-----|-----|
| 0   | 0   | 255 | 0   |
| 0   | 255 | 0   | 255 |
| 255 | 255 | 255 | 255 |
| 0   | 0   | 255 | 255 |
Tables

0 : Noir
255 : Blanc

Fonction Fullnoir(TAB:tableau):booléen
Var i,j:entiers

Rep: booleen

Debut

Rep \<- Vrai

Pour i alland de 0 à 4

Pour j allant de 0 à 3

Si TAB\[i,j\] != 0

Rep \<- Faux

FinSi

FinPour

finpour

Retourner rep
Finfonction

Fonction moyenne(T:tableau5x4):réel
var i,j:entiers

S:réel

Debut

S \<- 0

Pour i allant de 0 à 4

Pour j allant 0 à 3

S \<- S + T \[i,j\]

Finpour

Retourner 5/20

FinFonction

