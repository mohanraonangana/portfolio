import { motion } from 'framer-motion';
import { CodeBracketIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

const Projects = () => {
  const projects = [
    {
      title: 'Campus Placement Management System',
      description: 'A comprehensive web application that streamlines the campus placement process, featuring student profiles, company listings, and interview scheduling.',
      technologies: ['React', 'MongoDB', 'Node.js', 'Express'],
      features: [
        'Role-based authentication for students, companies, and administrators',
        'Real-time interview scheduling and notifications',
        'Analytics dashboard for placement statistics',
        'Resume builder and management',
      ],
      github: 'https://github.com/Mohanrao1319/placement-management',
    },
    {
      title: 'Seafood Export-Import Website',
      description: 'An e-commerce platform for seafood trading companies with order management and tracking capabilities.',
      technologies: ['Spring Boot', 'Thymeleaf', 'MySQL', 'Bootstrap'],
      features: [
        'Secure authentication and authorization',
        'Order tracking and management system',
        'Inventory management',
        'Payment gateway integration',
      ],
      github: 'https://github.com/Mohanrao1319/seafood-export',
    },
    {
      title: 'Health & Nutrient Management System',
      description: 'A web application for tracking personal health metrics and nutritional information with customized meal planning.',
      technologies: ['Spring Boot', 'MySQL', 'React', 'Redux'],
      features: [
        'Personalized diet plans',
        'Nutritional analysis',
        'Progress tracking',
        'Recipe recommendations',
      ],
      github: 'https://github.com/Mohanrao1319/health-nutrient',
    },
    {
      title: 'Event Management System',
      description: 'A Django-based platform for event planning and booking with automated email notifications.',
      technologies: ['Python', 'Django', 'PostgreSQL', 'Celery'],
      features: [
        'Event creation and management',
        'Ticket booking system',
        'Automated email notifications',
        'Calendar integration',
      ],
      github: 'https://github.com/Mohanrao1319/event-management',
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
            Projects
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            Showcasing my technical expertise through real-world applications
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">
                      {project.title}
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <CodeBracketIcon className="h-6 w-6" />
                      </a>
                      <a
                        href="#"
                        className="text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <GlobeAltIcon className="h-6 w-6" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Technologies Used:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-2">
                      Key Features:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                      {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects; 