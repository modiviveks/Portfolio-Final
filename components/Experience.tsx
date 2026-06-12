"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiBriefcase, HiCheckCircle } from "react-icons/hi";

const experiences = [
  {
    title: "Summer Intern",
    company: "Dell Technologies",
    period: "June 2026 - July 2026",
    location: "Bangalore, India",
    description: "Contributed to enterprise-level software development and infrastructure optimization projects.",
    achievements: [
      "Developed and deployed automated testing frameworks, reducing manual testing time by 40% and improving code quality across multiple product teams",
      "Collaborated with cross-functional teams to optimize cloud infrastructure deployment pipelines, resulting in 25% faster deployment cycles",
      "Implemented data analytics dashboards using Python and SQL, providing real-time insights into system performance metrics for stakeholders",
      "Participated in Agile development sprints, contributing to feature development and bug fixes for Dell's internal management tools",
      "Conducted comprehensive code reviews and documentation, ensuring adherence to industry best practices and coding standards",
    ],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section Title */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Professional <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Experience Timeline */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 to-primary-700 rounded-full hidden md:block"></div>

                {/* Experience Card */}
                <div className="md:ml-12 mb-12">
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="glass rounded-2xl p-8 hover:shadow-2xl transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="absolute -left-4 top-8 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hidden md:flex">
                      <HiBriefcase className="w-4 h-4 text-white" />
                    </div>

                    {/* Header */}
                    <div className="mb-6">
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-xl font-semibold text-primary-500">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-gray-600 dark:text-gray-400 font-medium">
                            {exp.period}
                          </p>
                          <p className="text-gray-500 dark:text-gray-500 text-sm">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">
                        Key Contributions:
                      </h4>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                            transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                            className="flex items-start space-x-3"
                          >
                            <HiCheckCircle className="w-6 h-6 text-primary-500 flex-shrink-0 mt-0.5" />
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                              {achievement}
                            </p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
