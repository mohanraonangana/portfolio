import { motion } from 'framer-motion';
import { TrophyIcon } from '@heroicons/react/24/outline';

const Achievements = () => {
  const achievements = [
    {
      title: 'College Hackathon - 3rd Place',
      event: 'KL University Tech Fest 2023',
      description: 'Developed an innovative solution for automated waste segregation using computer vision and IoT technologies.',
      impact: [
        'Implemented real-time image processing for waste classification',
        'Achieved 92% accuracy in waste categorization',
        'Integrated IoT sensors for automated sorting',
      ],
      technologies: ['Python', 'TensorFlow', 'Raspberry Pi', 'OpenCV'],
    },
    {
      title: 'Competitive Programming',
      event: 'Various Coding Platforms',
      description: 'Consistently solved complex algorithmic problems and participated in coding competitions.',
      impact: [
        'Solved 500+ problems across different platforms',
        'Achieved 4-star rating on CodeChef',
        'Regular participant in weekly coding contests',
      ],
      technologies: ['Data Structures', 'Algorithms', 'Problem Solving', 'C++'],
    },
    {
      title: 'Technical Paper Presentation',
      event: 'International Conference on Emerging Technologies',
      description: 'Presented research work on "Optimizing Cloud Resource Allocation using Machine Learning".',
      impact: [
        'Published in conference proceedings',
        'Received best paper award in student category',
        'Implemented findings in a real-world project',
      ],
      technologies: ['Cloud Computing', 'Machine Learning', 'Resource Optimization'],
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
            Notable Achievements
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            Recognition and accomplishments that showcase my dedication and expertise
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <div className="flex items-center mb-6">
                    <TrophyIcon className="h-8 w-8 text-primary mr-3" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {achievement.title}
                      </h3>
                      <p className="text-primary">{achievement.event}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6">
                    {achievement.description}
                  </p>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Impact & Results
                      </h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        {achievement.impact.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {achievement.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Achievements; 