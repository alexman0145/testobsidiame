---
title: 13/03/2024 sujet de modélisation
updated: 2024-04-10T11:06:38
created: 2024-03-13T10:18:19
---

AM

Sujet :

1\)
Création d'une base de donnés pour géré le joueur

- Pseudo pour le player
- Niveau corespondant du jeu corespond au jeu (level)
- ID
- Nationalité
- Classement
- User

Fornite

Le nom d'utilisateur est ajouté sur une plateforme de jeux tel que
2\)
Mon nom est alexman01 sur Fornite
Mon niveau est 3
Je suis classé bronze

Stockage sur une base de donné :

3\)

Dans la base de donné ont à:

- Player
- Game
- Level
- Nationality

4\)

GAME

\- ID
\- NAME
PLAYER

- ID
- Pseudo
- FIRST NAME
- LAST NAME
- NATIONALITY ID

Clé FK

LEVEL

- ID
- Description
Nationality

- ID
- Country

RANK

Experience

\- GameID - PlayerID

\- Level ID - Game ID

\- EXP - Level ID
\- Player EXP

Inserez une table GAME insertinto Game

5.  Méthode des dépendance entre Entité
(1 à m) one to many

6.  Etudier les relations many to many

INSERTINTO*table_name*(*column1*,*column2*,*column3*, ...)
VALUES(*value1*,*value2*,*value3*, ...);

*From \<<https://www.w3schools.com/sql/sql_insert.asp>\>*

Afficher le pseudo :

The INSERT statement conflicted with the FOREIGN KEY constraint "FK_play_user quiz selection". The conflict occurred in database "QuestionResponse", table "dbo.user quiz selection", column 'id'.

SELECT Pseudo, \[Name\], \[Description\], country

Sa nationalité

FROM Nationality
INNER JOIN Player on Nationality.Id = NationalityId
INNER JOIN \[Rank\] on Player.Id = Rank.PlayerId
INNER JOIN Game on \[Rank\].GameId = game.Id
INNER JOIN Experience on Game.Id = Experience.GameId
INNER JOIN \[level\] on Experience.levelId = \[level\].id

2 jeux deux players

**

![image1](resources/7916d32e7ef1408980501317a93131fd.png)![image2](resources/0f3896aa996144c4a55e481341319f03.png)![image3](resources/e26be8d54e404f348266323d9b4a1e86.png)![image4](resources/5cd4008b868b4b0586298153f3fab1c1.png)

![image5](resources/05b3927fe6f04dc4ab82eeecb972568d.png)![image6](resources/caf5cc5c42b346acb039c5741e1e297e.png)![image7](resources/bbf726e41e9c4411bdc125c3d3d0bd47.png)![image8](resources/ddd8000bc0d14cfda6f7dfd9e7ffc19a.png)![image9](resources/77ba779a26ee4e08bb9a9cfd33d8e1d3.png)

![image10](resources/35f397155e094b1c9dd6a2f8ba8209e0.png)![image11](resources/7007ababc9c94c2586d68d4eed4feb1b.png)![image12](resources/22ea4f87f9e14a1bb89dcb6bd98d0337.png)![image13](resources/c23b4bff5cce4676a8cee4d3e56f68d2.png)
