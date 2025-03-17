
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Award, Clock, BarChart3 } from 'lucide-react';
import FeaturedGame from '@/components/FeaturedGame';
import GameCard from '@/components/GameCard';
import { getFeaturedGames, getGamesByRating } from '@/utils/gameData';
import Navbar from '@/components/Navbar';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const featuredGames = getFeaturedGames();
  const topRatedGames = getGamesByRating(8);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-cave-dark">
        <div className="flex flex-col items-center">
          <GamepadAnimated />
          <p className="text-lg mt-4 animate-pulse">Chargement en cours...</p>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <section className="py-8 md:py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight glow-text">
                CaveGaming
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Mes notes et avis sur les jeux qui ont marqué mon expérience de joueur
              </p>
            </motion.div>
            
            {featuredGames.length > 0 && (
              <div className="mb-16">
                <div className="mb-8 flex justify-between items-center">
                  <h2 className="section-title">
                    <Award className="inline mr-2 mb-1 text-cave-accent" />
                    Jeux à l'honneur
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {featuredGames.map(game => (
                    <FeaturedGame key={game.id} game={game} />
                  ))}
                </div>
              </div>
            )}
            
            <div className="mb-12">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="section-title">
                  <Star className="inline mr-2 mb-1 text-cave-accent" />
                  Les mieux notés
                </h2>
                <Link 
                  to="/games" 
                  className="flex items-center text-sm text-cave-accent hover:underline"
                >
                  Voir tous les jeux
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {topRatedGames.slice(0, 3).map(game => (
                  <GameCard key={game.id} game={game} />
                ))}
              </div>
            </div>
            
            <div className="bg-cave-medium/30 rounded-2xl p-8 backdrop-blur-sm border border-white/5">
              <h2 className="text-xl font-bold mb-6 flex items-center">
                <BarChart3 className="mr-2 text-cave-accent" />
                Statistiques de jeu
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard 
                  title="Jeux évalués"
                  value={topRatedGames.length.toString()}
                  icon={<GamepadIcon className="h-5 w-5 text-cave-accent" />}
                />
                <StatCard 
                  title="Note moyenne"
                  value={(topRatedGames.reduce((acc, game) => acc + game.rating, 0) / topRatedGames.length).toFixed(1)}
                  icon={<Star className="h-5 w-5 text-cave-accent" />}
                />
                <StatCard 
                  title="Heures de jeu"
                  value={topRatedGames.reduce((acc, game) => acc + game.playtime, 0).toString()}
                  icon={<Clock className="h-5 w-5 text-cave-accent" />}
                />
                <StatCard 
                  title="Taux complétion moyen"
                  value={`${Math.round(topRatedGames.reduce((acc, game) => acc + game.completionRate, 0) / topRatedGames.length)}%`}
                  icon={<Award className="h-5 w-5 text-cave-accent" />}
                />
              </div>
            </div>
          </div>
        </section>
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

const StatCard = ({ 
  title, 
  value, 
  icon 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
}) => {
  return (
    <div className="bg-cave-medium/30 p-4 rounded-xl border border-white/5">
      <div className="flex items-center space-x-3">
        <div className="rounded-full p-2 bg-cave-light/30">
          {icon}
        </div>
        <div>
          <p className="text-muted-foreground text-sm">{title}</p>
          <p className="text-2xl font-bold text-white">{value}</p>
        </div>
      </div>
    </div>
  );
};

const GamepadIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <line x1="6" y1="12" x2="10" y2="12"></line>
    <line x1="8" y1="10" x2="8" y2="14"></line>
    <circle cx="15" cy="13" r="1"></circle>
    <circle cx="18" cy="11" r="1"></circle>
    <rect x="2" y="6" width="20" height="12" rx="2"></rect>
  </svg>
);

const GamepadAnimated = () => (
  <div className="relative animate-glow">
    <GamepadIcon className="h-12 w-12 text-cave-accent animate-pulse" />
    <div className="absolute inset-0 bg-cave-accent rounded-full blur-xl opacity-20 animate-pulse"></div>
  </div>
);

export default Index;
