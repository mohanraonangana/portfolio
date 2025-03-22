import { motion } from 'framer-motion';
import { CodeBracketIcon, CommandLineIcon, ServerIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <CodeBracketIcon className="h-8 w-8 text-primary" />,
      skills: ['Java', 'Python', 'C', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Web Development',
      icon: <CommandLineIcon className="h-8 w-8 text-primary" />,
      skills: ['React', 'Django', 'Spring Boot', 'HTML', 'CSS', 'Node.js'],
    },
    {
      title: 'Databases & Cloud',
      icon: <ServerIcon className="h-8 w-8 text-primary" />,
      skills: ['MySQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Tools & Technologies',
      icon: <WrenchScrewdriverIcon className="h-8 w-8 text-primary" />,
      skills: ['Git', 'Selenium', 'Jenkins', 'Hibernate', 'AI/ML', 'JUnit'],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen pt-24 pb-12"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-3xl font-extrabold text-foreground sm:text-4xl"
          >
            Technical Skills
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            My expertise in various technologies and tools
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <div className="flex items-center gap-4 mb-6">
                    {category.icon}
                    <h3 className="text-xl font-bold text-foreground">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-12 bg-card rounded-lg shadow-lg overflow-hidden"
          >
            <div className="px-6 py-8">
              <h3 className="text-xl font-bold text-foreground mb-4">
                Additional Expertise
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <ul className="space-y-2">
                  <li>• Strong problem-solving abilities</li>
                  <li>• Object-Oriented Programming</li>
                  <li>• RESTful API Design</li>
                  <li>• Test-Driven Development</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Agile Methodologies</li>
                  <li>• System Design</li>
                  <li>• Performance Optimization</li>
                  <li>• Technical Documentation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills; 