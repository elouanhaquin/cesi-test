
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon, FilterIcon, X } from 'lucide-react';
import GameCard from '@/components/GameCard';
import Navbar from '@/components/Navbar';
import { games } from '@/utils/gameData';
import { cn } from '@/lib/utils';

const Games = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [selectedDifficulties, setSelectedDifficulties] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  // Extract all unique genres and difficulties
  const allGenres = Array.from(new Set(games.flatMap(game => game.genres)));
  const allDifficulties = Array.from(new Set(games.map(game => game.difficulty)));
  
  // Filter games based on search term, genres, difficulties, and rating
  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          game.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesGenres = selectedGenres.length === 0 || 
                          game.genres.some(genre => selectedGenres.includes(genre));
    
    const matchesDifficulty = selectedDifficulties.length === 0 || 
                              selectedDifficulties.includes(game.difficulty);
    
    const matchesRating = game.rating >= minRating;
    
    return matchesSearch && matchesGenres && matchesDifficulty && matchesRating;
  });
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedGenres([]);
    setSelectedDifficulties([]);
    setMinRating(0);
  };
  
  const hasActiveFilters = () => {
    return searchTerm !== '' || 
           selectedGenres.length > 0 || 
           selectedDifficulties.length > 0 || 
           minRating > 0;
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold glow-text">Tous les jeux</h1>
            
            <button 
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="md:hidden cave-button flex items-center"
            >
              {isFilterOpen ? <X className="mr-2" /> : <FilterIcon className="mr-2" />}
              {isFilterOpen ? 'Fermer' : 'Filtres'}
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className={cn(
              "md:w-64 md:block",
              isFilterOpen ? "block" : "hidden"
            )}>
              <div className="glass-panel rounded-xl p-5 mb-6">
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">Recherche</h3>
                  <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Rechercher un jeu..."
                      className="w-full pl-10 pr-4 py-2 cave-input text-sm"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">Note minimum</h3>
                  <div className="px-2">
                    <input
                      type="range"
                      min="0"
                      max="10"
                      step="0.5"
                      value={minRating}
                      onChange={(e) => setMinRating(parseFloat(e.target.value))}
                      className="w-full accent-cave-accent"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>0</span>
                      <span>{minRating.toFixed(1)}</span>
                      <span>10</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">Genres</h3>
                  <div className="space-y-2 max-h-48 overflow-auto pr-2 scrollbar-thin">
                    {allGenres.map((genre) => (
                      <label key={genre} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedGenres.includes(genre)}
                          onChange={() => {
                            setSelectedGenres(
                              selectedGenres.includes(genre)
                                ? selectedGenres.filter(g => g !== genre)
                                : [...selectedGenres, genre]
                            );
                          }}
                          className="accent-cave-accent"
                        />
                        <span className="text-sm">{genre}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-sm font-medium mb-3 text-muted-foreground">Difficulté</h3>
                  <div className="space-y-2">
                    {allDifficulties.map((difficulty) => (
                      <label key={difficulty} className="flex items-center space-x-2">
                        <input
                          type="checkbox"
                          checked={selectedDifficulties.includes(difficulty)}
                          onChange={() => {
                            setSelectedDifficulties(
                              selectedDifficulties.includes(difficulty)
                                ? selectedDifficulties.filter(d => d !== difficulty)
                                : [...selectedDifficulties, difficulty]
                            );
                          }}
                          className="accent-cave-accent"
                        />
                        <span className="text-sm">{difficulty}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                {hasActiveFilters() && (
                  <button
                    onClick={clearFilters}
                    className="w-full py-2 text-sm border border-cave-light text-muted-foreground hover:bg-cave-light/20 rounded-lg transition-colors"
                  >
                    Réinitialiser les filtres
                  </button>
                )}
              </div>
            </div>
            
            <div className="flex-1">
              {filteredGames.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {filteredGames.map(game => (
                      <motion.div
                        key={game.id}
                        layout
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3 }}
                      >
                        <GameCard game={game} />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center">
                  <SearchIcon className="h-12 w-12 text-muted-foreground mb-4 opacity-50" />
                  <h3 className="text-xl font-medium mb-2">Aucun résultat trouvé</h3>
                  <p className="text-muted-foreground">
                    Essayez de modifier vos filtres ou votre recherche
                  </p>
                  <button
                    onClick={clearFilters}
                    className="mt-4 cave-button"
                  >
                    Réinitialiser les filtres
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="bg-cave-dark py-8 border-t border-cave-light/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            © 2023 CaveGaming - Tous droits réservés
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Games;
