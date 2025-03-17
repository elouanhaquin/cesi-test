
import { Link } from 'react-router-dom';
import { Game } from '@/utils/gameData';
import RatingBadge from './RatingBadge';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeaturedGameProps {
  game: Game;
}

const FeaturedGame = ({ game }: FeaturedGameProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="overflow-hidden rounded-xl glass-panel relative"
    >
      <div className="relative aspect-video">
        <img 
          src={game.coverImage} 
          alt={game.title} 
          className="object-cover w-full h-full object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-cave-dark via-transparent to-transparent" />
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-start gap-4">
          <div className="flex-grow">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="flex space-x-2 mb-2">
                {game.genres.slice(0, 3).map((genre, index) => (
                  <span 
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-cave-medium/80 backdrop-blur-sm"
                  >
                    {genre}
                  </span>
                ))}
              </div>
            
              <h2 className="text-2xl md:text-4xl font-bold mb-2 glow-text">
                {game.title}
              </h2>
              
              <p className="text-sm md:text-base text-foreground/80 mb-4 max-w-2xl line-clamp-2 md:line-clamp-3">
                {game.description}
              </p>
              
              <Link to={`/game/${game.id}`} className="inline-flex items-center">
                <span className="text-cave-accent font-medium">Voir le jeu</span>
                <ArrowRight className="ml-1 h-4 w-4 text-cave-accent" />
              </Link>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
            className="flex-shrink-0"
          >
            <RatingBadge rating={game.rating} size="lg" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedGame;
