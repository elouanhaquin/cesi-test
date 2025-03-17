
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, GamepadIcon, ListFilter } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-cave-dark/80 border-b border-cave-light/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <GamepadIcon className="h-7 w-7 text-cave-accent" />
            <span className="text-xl font-bold tracking-tight">CaveGaming</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink to="/" isActive={isActive("/")}>
              <Home className="w-4 h-4 mr-2" />
              Accueil
            </NavLink>
            <NavLink to="/games" isActive={isActive("/games")}>
              <ListFilter className="w-4 h-4 mr-2" />
              Tous les jeux
            </NavLink>
          </nav>

          <div className="md:hidden">
            <button className="text-cave-accent">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const NavLink = ({ 
  children, 
  to, 
  isActive 
}: { 
  children: React.ReactNode; 
  to: string; 
  isActive: boolean;
}) => {
  return (
    <Link
      to={to}
      className={`relative flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
        isActive 
          ? 'text-cave-accent' 
          : 'text-muted-foreground hover:text-foreground'
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-cave-accent"
          transition={{ duration: 0.2 }}
        />
      )}
    </Link>
  );
};

export default Navbar;
