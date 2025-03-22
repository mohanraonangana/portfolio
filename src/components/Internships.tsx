import { motion } from 'framer-motion';
import { BeakerIcon, ChartBarIcon, CpuChipIcon } from '@heroicons/react/24/outline';

const Internships = () => {
  const internship = {
    title: 'AI/ML Virtual Internship',
    company: 'Eduskills',
    duration: 'June 2023 - August 2023',
    description: 'Participated in an intensive AI/ML internship program focusing on practical applications of machine learning algorithms and data analysis.',
    responsibilities: [
      {
        icon: <BeakerIcon className="h-6 w-6" />,
        title: 'Data Preprocessing',
        description: 'Cleaned and preprocessed large datasets, handling missing values and outliers to prepare data for machine learning models.',
      },
      {
        icon: <ChartBarIcon className="h-6 w-6" />,
        title: 'Feature Engineering',
        description: 'Developed and selected relevant features to improve model performance using various feature engineering techniques.',
      },
      {
        icon: <CpuChipIcon className="h-6 w-6" />,
        title: 'Model Development',
        description: 'Implemented and fine-tuned machine learning models for classification and regression tasks.',
      },
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'TensorFlow',
      'Pandas',
      'NumPy',
      'Jupyter Notebook',
    ],
    achievements: [
      'Achieved 95% accuracy in a classification project',
      'Developed an automated data preprocessing pipeline',
      'Created comprehensive documentation for model deployment',
      'Presented findings to senior data scientists',
    ],
  };

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
            Internship Experience
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            Practical experience in AI/ML and data science
          </motion.p>
        </div>

        <div className="mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-card rounded-lg shadow-lg overflow-hidden"
          >
            <div className="px-6 py-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground">
                  {internship.title}
                </h3>
                <p className="text-primary mt-1">{internship.company}</p>
                <p className="text-muted-foreground">{internship.duration}</p>
              </div>

              <p className="text-muted-foreground mb-8">
                {internship.description}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {internship.responsibilities.map((resp) => (
                  <motion.div
                    key={resp.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="h-12 w-12 text-primary mb-4">
                      {resp.icon}
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {resp.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {resp.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mb-8">
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">
                  Key Achievements
                </h4>
                <ul className="list-disc list-inside text-muted-foreground space-y-2">
                  {internship.achievements.map((achievement) => (
                    <li key={achievement}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Internships; 