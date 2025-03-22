import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navigation = () => {
  const location = useLocation();

  const links = [
    { path: '/', label: 'Skills' },
    { path: '/projects', label: 'Projects' },
    { path: '/internships', label: 'Internships' },
    { path: '/certifications', label: 'Certifications' },
    { path: '/achievements', label: 'Achievements' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full bg-background py-16 flex flex-col items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-primary mb-6"
        >
          <img
            src="/assets/profile.jpg.jpg"
            alt="Mohanrao Nangana"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-4xl font-bold text-foreground mb-2"
        >
          Mohanrao Nangana
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl text-muted-foreground"
        >
          Full Stack Developer
        </motion.p>
      </motion.div>

      <nav className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container flex h-16 items-center mx-auto px-4">
          <Link to="/" className="mr-6 flex items-center space-x-4">
            <motion.span 
              className="font-bold text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Mohanrao Nangana
            </motion.span>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary"
            >
              <img
                src="/assets/profile.jpg.jpg"
                alt="Mohanrao Nangana"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Link>
          <div className="flex flex-1 items-center justify-end space-x-4">
            {links.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors hover:text-primary ${
                  location.pathname === path
                    ? 'bg-secondary text-primary'
                    : 'text-foreground/60 hover:text-foreground/80'
                }`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation; 