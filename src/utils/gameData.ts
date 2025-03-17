
export interface Game {
  id: number;
  title: string;
  coverImage: string;
  description: string;
  rating: number; // 0-10
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  platforms: string[];
  playtime: number; // in hours
  completionRate: number; // 0-100
  difficulty: 'Easy' | 'Medium' | 'Hard' | 'Very Hard';
  reviewText: string;
  pros: string[];
  cons: string[];
  isFeatured?: boolean;
}

export const games: Game[] = [
  {
    id: 1,
    title: "Elden Ring",
    coverImage: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000",
    description: "Elden Ring is an action role-playing game developed by FromSoftware and published by Bandai Namco Entertainment. The game was directed by Hidetaka Miyazaki and made in collaboration with fantasy novelist George R. R. Martin.",
    rating: 9.5,
    releaseDate: "2022-02-25",
    developer: "FromSoftware",
    publisher: "Bandai Namco",
    genres: ["Action RPG", "Open World"],
    platforms: ["PC", "PS5", "Xbox Series X"],
    playtime: 95,
    completionRate: 78,
    difficulty: "Hard",
    reviewText: "Un chef-d'œuvre absolu qui redéfinit le genre open-world. L'univers créé par Miyazaki et Martin est fascinant, avec une direction artistique époustouflante et un level design brillant. La difficulté est élevée mais juste, récompensant l'exploration et la persévérance.",
    pros: ["Level design exceptionnel", "Direction artistique somptueuse", "Gameplay profond et satisfaisant", "Contenu très riche"],
    cons: ["Difficulté qui peut rebuter certains joueurs", "Performance technique parfois inégale"],
    isFeatured: true
  },
  {
    id: 2,
    title: "Cyberpunk 2077",
    coverImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1000",
    description: "Cyberpunk 2077 is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival.",
    rating: 7.8,
    releaseDate: "2020-12-10",
    developer: "CD Projekt Red",
    publisher: "CD Projekt",
    genres: ["RPG", "Open World", "Cyberpunk"],
    platforms: ["PC", "PS5", "Xbox Series X"],
    playtime: 65,
    completionRate: 62,
    difficulty: "Medium",
    reviewText: "Après un lancement catastrophique, Cyberpunk 2077 s'est transformé en une expérience RPG fascinante. Night City est l'une des villes les plus impressionnantes jamais créées dans un jeu vidéo, avec une ambiance cyberpunk parfaitement réalisée et des quêtes narratives de grande qualité.",
    pros: ["Direction artistique exceptionnelle", "Narration de qualité", "Ville immersive", "Liberté d'approche"],
    cons: ["Bugs encore présents", "IA des PNJ décevante", "Systèmes RPG superficiels par moments"],
    isFeatured: false
  },
  {
    id: 3,
    title: "God of War Ragnarök",
    coverImage: "https://images.unsplash.com/photo-1527576539890-dfa815648363?q=80&w=1000",
    description: "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It is the sequel to 2018's God of War and the ninth installment in the God of War series.",
    rating: 9.2,
    releaseDate: "2022-11-09",
    developer: "Santa Monica Studio",
    publisher: "Sony Interactive Entertainment",
    genres: ["Action", "Adventure"],
    platforms: ["PS5", "PS4"],
    playtime: 40,
    completionRate: 85,
    difficulty: "Medium",
    reviewText: "Une suite magistrale qui développe et améliore tous les aspects du reboot de 2018. La relation père-fils entre Kratos et Atreus atteint de nouveaux sommets émotionnels, tandis que le combat est encore plus brutal et satisfaisant. La mythologie nordique est exploitée de façon brillante.",
    pros: ["Narration exceptionnelle", "Combats fluides et viscéraux", "Direction artistique sublime", "Personnages mémorables"],
    cons: ["Structure similaire au précédent opus", "Certains puzzles répétitifs"],
    isFeatured: true
  },
  {
    id: 4,
    title: "Red Dead Redemption 2",
    coverImage: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=1000", 
    description: "Red Dead Redemption 2 is a western-themed action-adventure game. The player controls outlaw Arthur Morgan, a member of the Van der Linde gang, as he completes numerous missions—linear scenarios with set objectives—to progress through the story.",
    rating: 9.7,
    releaseDate: "2018-10-26",
    developer: "Rockstar Games",
    publisher: "Rockstar Games",
    genres: ["Action", "Adventure", "Open World"],
    platforms: ["PC", "PS4", "Xbox One"],
    playtime: 110,
    completionRate: 70,
    difficulty: "Medium",
    reviewText: "Un chef-d'œuvre incontournable. RDR2 est une simulation de vie dans l'Ouest américain d'une profondeur inégalée. L'attention aux détails est ahurissante, créant l'un des mondes les plus crédibles et immersifs jamais créés dans un jeu vidéo.",
    pros: ["Monde ouvert d'une richesse incroyable", "Narration mature et émouvante", "Personnages complexes et attachants", "Détails visuels stupéfiants"],
    cons: ["Gameplay parfois lent et rigide", "Missions principales assez linéaires"],
    isFeatured: false
  },
  {
    id: 5,
    title: "Hollow Knight",
    coverImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000",
    description: "Hollow Knight is a 2D Metroidvania action-adventure game. It tells the story of a knight on a quest to uncover the secrets of the long-abandoned insect kingdom of Hallownest, whose depths draw in the adventurous and brave with promises of treasures and answers to ancient mysteries.",
    rating: 9.3,
    releaseDate: "2017-02-24",
    developer: "Team Cherry",
    publisher: "Team Cherry",
    genres: ["Metroidvania", "Souls-like", "Platformer"],
    platforms: ["PC", "Switch", "PS4", "Xbox One"],
    playtime: 50,
    completionRate: 65,
    difficulty: "Hard",
    reviewText: "Un jeu indépendant qui surpasse de nombreuses productions AAA. Hollow Knight combine une direction artistique mélancolique et magnifique avec un gameplay exigeant et précis. L'exploration du royaume de Hallownest est une expérience inoubliable.",
    pros: ["Direction artistique somptueuse", "Level design intelligent", "Bande-son atmosphérique", "Contenu très généreux"],
    cons: ["Certaines zones difficiles à naviguer", "Difficulté parfois frustrante"],
    isFeatured: false
  },
  {
    id: 6,
    title: "Baldur's Gate 3",
    coverImage: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000",
    description: "Baldur's Gate 3 is a role-playing video game developed and published by Larian Studios. It is the third main game in the Baldur's Gate series, based on the Dungeons & Dragons tabletop role-playing system.",
    rating: 9.6,
    releaseDate: "2023-08-03",
    developer: "Larian Studios",
    publisher: "Larian Studios",
    genres: ["RPG", "Turn-based Strategy", "Fantasy"],
    platforms: ["PC", "PS5"],
    playtime: 120,
    completionRate: 60,
    difficulty: "Medium",
    reviewText: "Une révolution dans le genre des RPG qui établit un nouveau standard de qualité. La liberté offerte au joueur est vertigineuse, avec d'innombrables façons d'aborder chaque situation. Le système D&D est brillamment adapté en jeu vidéo.",
    pros: ["Liberté de choix sans précédent", "Écriture et dialogues exceptionnels", "Combats tactiques profonds", "Réactivité du monde aux actions du joueur"],
    cons: ["Quelques bugs persistants", "Interface parfois confuse", "Courbe d'apprentissage abrupte"],
    isFeatured: true
  }
];

export const getGameById = (id: number): Game | undefined => {
  return games.find(game => game.id === id);
};

export const getFeaturedGames = (): Game[] => {
  return games.filter(game => game.isFeatured);
};

export const getGamesByRating = (minRating: number = 0): Game[] => {
  return [...games].filter(game => game.rating >= minRating).sort((a, b) => b.rating - a.rating);
};

export const getDifficultyColor = (difficulty: Game['difficulty']): string => {
  switch (difficulty) {
    case 'Easy':
      return 'bg-green-500';
    case 'Medium':
      return 'bg-yellow-500';
    case 'Hard':
      return 'bg-orange-500';
    case 'Very Hard':
      return 'bg-red-500';
    default:
      return 'bg-blue-500';
  }
};

export const formatDate = (dateString: string): string => {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('fr-FR', options);
};
