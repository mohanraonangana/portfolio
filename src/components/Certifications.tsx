import { motion } from 'framer-motion';
import { CheckBadgeIcon } from '@heroicons/react/24/outline';

const Certifications = () => {
  const certifications = [
    {
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: 'January 2024',
      description: 'Comprehensive understanding of AWS Cloud concepts, services, security, architecture, pricing, and support.',
      skills: ['Cloud Computing', 'AWS Services', 'Cloud Security', 'Cloud Architecture'],
    },
    {
      title: 'Red Hat Certified Enterprise Application Developer',
      issuer: 'Red Hat',
      date: 'December 2023',
      description: 'Expertise in developing enterprise applications using Red Hat technologies and best practices.',
      skills: ['Java EE', 'Spring Boot', 'Microservices', 'Enterprise Development'],
    },
    {
      title: 'Essentials Automation Certification',
      issuer: 'Automation Anywhere',
      date: 'February 2024',
      description: 'Proficiency in implementing automation solutions using industry-standard tools and frameworks.',
      skills: ['RPA', 'Process Automation', 'Workflow Design', 'Bot Development'],
    },
    {
      title: 'Multicloud Network Associate',
      issuer: 'Aviatrix',
      date: 'November 2023',
      description: 'Advanced knowledge in designing and implementing multi-cloud networking solutions.',
      skills: ['Multi-cloud Architecture', 'Network Security', 'Cloud Networking', 'Infrastructure Design'],
    },
    {
      title: 'Salesforce Associate Certification',
      issuer: 'Salesforce',
      date: 'October 2023',
      description: 'Foundation in Salesforce platform capabilities, features, and business solutions.',
      skills: ['Salesforce Administration', 'CRM', 'Business Process', 'Cloud Solutions'],
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
            Professional Certifications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 max-w-2xl text-xl text-muted-foreground lg:mx-auto"
          >
            Industry-recognized certifications demonstrating expertise and commitment to professional growth
          </motion.p>
        </div>

        <div className="mt-16">
          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="bg-card rounded-lg shadow-lg overflow-hidden"
              >
                <div className="px-6 py-8">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center">
                        <CheckBadgeIcon className="h-8 w-8 text-primary mr-3" />
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {cert.title}
                          </h3>
                          <p className="text-primary">{cert.issuer}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        {cert.description}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-muted-foreground">
                        {cert.date}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
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

export default Certifications; 