CREATE TABLE trailer (
    videoName VARCHAR(100),
    viewcount INT,
    PRIMARY KEY (videoName)
);

CREATE TABLE trailer_clean (
	videoName VARCHAR(100),
    viewcount INT,
    PRIMARY KEY (videoName)
);

--Barbie
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Barbie', 79686363);

--The Super Mario Bros. Movie
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Super Mario Bros. Movie', 30350430);

--Oppenheimer
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Oppenheimer', 112891125);

--Guardian of the Galaxy Vol.3
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Guardian of the Galaxy Vol.3', 53010134 );

--Fast X
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Fast X', 85653591);

--Spider-Man: Across the Spider-Verse
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Spider-Man: Across the Spider-Verse', 87361204);

--The Little Mermaid
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Little Mermaid', 26018835);

--Mission:Impossible-Dead Reckoning Part One
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Mission:Impossible-Dead Reckoning Part One', 34743536);

--Elemental
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Elemental',46500823);

--Ant-Man and the Wasp: Quantumania
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Ant-Man and the Wasp: Quantumania', 59812098);

--John Wick: Chapter 4
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('John Wick: Chapter 4', 80648027);

--Transformers: Rise of the Beasts
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Transformers: Rise of the Beasts', 44235315);

--Meg 2: The Trench
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Meg 2: The Trench', 46893076);

--Indiana Jones and the Dieal of Destiny
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Indiana Jones and the Dieal of Destiny', 16360565);

--The Hunger Games: The Ballad of Songbirds & Snakes
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Hunger Games: The Ballad of Songbirds & Snakes',52061684);

--Five Nights at Freddy's
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Five Nights at Freddys',63927641);

--Creed III
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Creed III',37657452);

--The Flash
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Flash',53112377);

--The Nun II
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('The Nun II',41591862);

--Taylor Swift: The Eras Tour
INSERT INTO trailer_clean (videoName, viewcount)
VALUES ('Taylor Swift: The Eras Tour',11207600)

Select * from trailer_clean