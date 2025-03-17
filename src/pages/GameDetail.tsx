
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  Calendar, 
  Users, 
  Monitor, 
  Clock, 
  Award, 
  ThumbsUp, 
  ThumbsDown,
  ShieldAlert
} from 'lucide-react';
import { getGameById, getDifficultyColor, formatDate } from '@/utils/gameData';
import RatingBadge from '@/components/RatingBadge';
import Navbar from '@/components/Navbar';

const GameDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);
  
  const game = getGameById(parseInt(id || '0'));
  
  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-cave-dark flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cave-accent"></div>
      </div>
    );
  }
  
  if (!game) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <h1 className="text-3xl font-bold mb-4">Jeu non trouvé</h1>
        <p className="text-muted-foreground mb-6">
          Le jeu que vous recherchez n'existe pas.
        </p>
        <Link to="/games" className="cave-button">
          Retour à la liste des jeux
        </Link>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="relative">
          <div className="absolute inset-0 bg-cave-dark">
            <img 
              src={game.coverImage} 
              alt={game.title} 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cave-dark/70 to-cave-dark"></div>
          </div>
          
          <div className="relative pt-16 pb-32 container mx-auto px-4">
            <div className="mb-6">
              <Link 
                to="/games" 
                className="inline-flex items-center text-muted-foreground hover:text-cave-accent transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour aux jeux
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-wrap gap-2 mb-3">
                    {game.genres.map((genre, index) => (
                      <span 
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-cave-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold mb-3 glow-text">
                    {game.title}
                  </h1>
                  
                  <div className="flex items-center mb-8">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="mr-1 h-4 w-4" />
                        <span>{formatDate(game.releaseDate)}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="mr-1 h-4 w-4" />
                        <span>{game.developer}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-8">
                    <div className="cave-card mb-8 overflow-hidden">
                      <img 
                        src={game.coverImage} 
                        alt={game.title} 
                        className="w-full h-[350px] object-cover"
                      />
                    </div>
                    
                    <p className="text-lg leading-relaxed mb-6">
                      {game.description}
                    </p>
                    
                    <h2 className="text-2xl font-bold mb-4 glow-text">Mon avis</h2>
                    <p className="text-lg leading-relaxed mb-6">
                      {game.reviewText}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                      <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <ThumbsUp className="mr-2 text-green-500" />
                          Points forts
                        </h3>
                        <ul className="space-y-2">
                          {game.pros.map((pro, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-2 h-2 rounded-full bg-green-500 mt-2 mr-2"></span>
                              <span>{pro}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="glass-panel p-6 rounded-xl">
                        <h3 className="text-xl font-bold mb-4 flex items-center">
                          <ThumbsDown className="mr-2 text-red-500" />
                          Points faibles
                        </h3>
                        <ul className="space-y-2">
                          {game.cons.map((con, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-block w-2 h-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                              <span>{con}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="sticky top-24">
                    <div className="glass-panel p-6 rounded-xl mb-6">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-xl font-bold">Note finale</h3>
                        <RatingBadge rating={game.rating} size="lg" />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-cave-medium/30 rounded-lg">
                          <Monitor className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground mb-1">Plateformes</p>
                          <div className="flex flex-wrap justify-center gap-1 text-xs">
                            {game.platforms.map((platform, index) => (
                              <span key={index} className="inline-block">
                                {platform}{index < game.platforms.length - 1 ? ", " : ""}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="text-center p-4 bg-cave-medium/30 rounded-lg">
                          <Clock className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground mb-1">Temps de jeu</p>
                          <p className="font-bold">{game.playtime}h</p>
                        </div>
                        
                        <div className="text-center p-4 bg-cave-medium/30 rounded-lg">
                          <Award className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground mb-1">Complétion</p>
                          <p className="font-bold">{game.completionRate}%</p>
                        </div>
                        
                        <div className="text-center p-4 bg-cave-medium/30 rounded-lg">
                          <ShieldAlert className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                          <p className="text-xs text-muted-foreground mb-1">Difficulté</p>
                          <span className={`text-xs px-2 py-1 rounded-full text-white ${getDifficultyColor(game.difficulty)}`}>
                            {game.difficulty}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="glass-panel p-6 rounded-xl">
                      <h3 className="text-xl font-bold mb-4">Publication</h3>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Éditeur</span>
                        <span>{game.publisher}</span>
                      </div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-muted-foreground">Développeur</span>
                        <span>{game.developer}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Date de sortie</span>
                        <span>{formatDate(game.releaseDate)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
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

export default GameDetail;
