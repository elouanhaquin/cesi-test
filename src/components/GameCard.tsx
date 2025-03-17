
import { Link } from 'react-router-dom';
import { Game } from '@/utils/gameData';
import RatingBadge from './RatingBadge';
import { motion } from 'framer-motion';

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -8 }}
      className="cave-card h-full"
    >
      <Link to={`/game/${game.id}`} className="flex flex-col h-full">
        <div className="relative">
          <img 
            src={game.coverImage} 
            alt={game.title}
            className="w-full h-48 object-cover rounded-t-xl"
          />
          <div className="absolute top-2 right-2">
            <RatingBadge rating={game.rating} size="sm" />
          </div>
        </div>
        
        <div className="p-4 flex flex-col flex-grow">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-lg font-bold line-clamp-1">{game.title}</h3>
          </div>
          
          <div className="mb-2 flex flex-wrap gap-1">
            {game.genres.slice(0, 2).map((genre, index) => (
              <span 
                key={index} 
                className="text-xs bg-cave-medium px-2 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
          
          <p className="text-sm text-muted-foreground line-clamp-3 flex-grow mb-3">
            {game.description}
          </p>
          
          <div className="mt-auto flex justify-between items-center text-xs text-muted-foreground">
            <span>{game.developer}</span>
            <span>{new Date(game.releaseDate).getFullYear()}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default GameCard;
