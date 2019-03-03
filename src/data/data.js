const movies = [
    {
        id: 0,
        title: "Gladiator",
        director: {
            name: 'Ridley Scott',
            birthDate : '30/11/1937',
            nationality: 'Britannique'
        },
        note : 4,
        year : '2000',
        genre : 'Péplum',
        synopsis : 'Le général romain Maximus est le plus fidèle soutien de l\'empereur Marc Aurèle, qu\'il a conduit de victoire en victoire. Jaloux du prestige de Maximus, et plus encore de l\'amour que lui voue l\'empereur, le fils de Marc Aurèle, Commode, s\'arroge brutalement le pouvoir, puis ordonne l\'arrestation du général et son exécution. Maximus échappe à ses assassins, mais ne peut empêcher le massacre de sa famille. Capturé par un marchand d\'esclaves, il devient gladiateur et prépare sa vengeance.',
        poster : '/../../static/poster/gladiator_poster.jpg'
    },
    {
        id: 1,
        title: "Rocky",
        director: {
            name: 'John G.Avildsen',
            birthDate : '21/12/1935',
            nationality: 'Américain'
        },
        note : 5,
        year : '1976',
        genre : 'Boxe',
        synopsis : 'Rocky Balboa travaille pour Tony Gazzo, un usurier, et dispute de temps à autre des combats de boxe pour quelques dizaines de dollars sous l\'appellation de l\'Étalon Italien. Cependant, Mickey, propriétaire du club de boxe où Rocky a l\'habitude de s\'entraîner, décide de céder son casier à un boxeur plus talentueux.',
        poster : '/../../static/poster/rocky_poster.jpg'
    },
    {
        id: 2,
        title: "Forest Gump",
        director: {
            name: 'Robert Zemeckis',
            birthDate : '14/05/1952',
            nationality: 'Américain'
        },
        note : 5,
        year : '1995',
        genre : 'Drame',
        synopsis : 'Au fil des différents interlocuteurs qui viennent s\'asseoir tour à tour à côté de lui sur un banc, Forrest Gump raconte la fabuleuse histoire de sa vie. Sa vie est à l\'image d\'une plume qui se laisse porter par le vent, tout comme Forrest se laisse porter par les événements qu\'il traverse dans l\'Amérique de la seconde moitié du 20e siècle.',
        poster : '/../../static/poster/forest_gump_poster.jpg'
    },
    {
        id: 3,
        title: "Oldboy",
        director: {
            name: 'Park Chan-wook',
            birthDate : '23/08/1963',
            nationality: 'Coréen'
        },
        note : 4,
        year : '2000',
        genre : 'Thriller',
        synopsis : 'Fin des années 80, Oh Dae-Soo, père de famille sans histoire, est enlevé un jour sans raison. Séquestré pendant des années dans une cellule, son seul lien avec l\'extérieur est une télévision par laquelle il apprend le meurtre de sa femme, dont il est le principal suspect. Au désespoir succède alors la rage intérieure vengeresse qui lui permet de survivre. Il est relâché, toujours sans explication, après 15 ans.',
        poster : '/../../static/poster/oldboy_poster.jpg'
    },  
    {
        id: 4,
        title: "Gran Torino",
        director: {
            name: 'Clint Eastwood',
            birthDate : '31/05/1930',
            nationality : 'Américain'
        },
        note : 5,
        year : '2009',
        genre : 'Drame',
        synopsis : 'Walt Kowalski est un ancien de la guerre de Corée, un homme inflexible, amer et pétri de préjugés surannés. Après des années de travail à la chaîne, il vit replié sur lui-même, occupant ses journées à bricoler, traînasser et siroter des bières. Avant de mourir, sa femme exprima le voeu qu\'il aille à confesse, mais Walt n\'a rien à avouer, ni personne à qui parler.',
        poster : '/../../static/poster/gran-torino_poster.jpg'
    },
    {
        id: 5,
        title: "Titanic",
        director: {
            name: 'James Cameron',
            birthDate : '16/08/1954',
            nationality : 'Canadien'
        },
        note : 3.5,
        year : '1997',
        genre : 'Drame',
        synopsis : 'En 1997, l\'épave du Titanic est l\'objet d\'une exploration fiévreuse, menée par des chercheurs de trésor en quête d\'un diamant bleu qui se trouvait à bord. Frappée par un reportage télévisé, l\'une des rescapés du naufrage, âgée de 102 ans, Rose DeWitt, se rend sur place et évoque ses souvenirs. 1912. Fiancée à un industriel arrogant, Rose croise sur le bateau un artiste sans le sou.',
        poster : '/../../static/poster/titanic_poster.jpg'
    },
]

exports.movies = movies