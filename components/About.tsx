"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { HiAcademicCap, HiCode, HiBrain, HiChip, HiTrophy } from "react-icons/hi";

const interests = [
  {
    title: "Web Development",
    icon: HiCode,
    description:
      "Passionate MERN stack developer crafting responsive, scalable web applications with modern frameworks and best practices.",
  },
  {
    title: "Data Structures & Algorithms",
    icon: HiCode,
    description:
      "Solving complex computational problems with optimized algorithms, enhancing logical thinking and code efficiency.",
  },
  {
    title: "Artificial Intelligence & ML",
    icon: HiBrain,
    description:
      "Exploring AI/ML technologies to build intelligent systems that solve real-world challenges through data-driven approaches.",
  },
  {
    title: "Digital Electronics",
    icon: HiChip,
    description:
      "Deep understanding of logic design and digital systems, bridging the gap between hardware and software engineering.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
              About <span className="gradient-text">Me</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="glass rounded-2xl p-8 md:p-12">
              <div className="flex items-start space-x-4 mb-6">
                <HiAcademicCap className="w-12 h-12 text-primary-500 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-gray-100">
                    Passionate Software Engineer & Problem Solver
                  </h3>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                    I am an undergraduate Electronics and Communication Engineering student at{" "}
                    <span className="font-semibold text-primary-500">BMS College of Engineering</span>{" "}
                    with a strong focus on software development, algorithmic problem-solving, and AI-powered applications.
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                    I thrive on transforming innovative ideas into production-ready solutions, emphasizing{" "}
                    <span className="font-semibold text-primary-500">clean architecture</span>,{" "}
                    <span className="font-semibold text-primary-500">scalability</span>, and{" "}
                    <span className="font-semibold text-primary-500">performance optimization</span>.
                    My journey combines technical excellence with creative problem-solving to build impactful software.
                  </p>
                </div>
              </div>

              {/* Education */}
              <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Education</h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <p className="font-semibold text-gray-800 dark:text-gray-100">
                        B.E. in Electronics and Communication Engineering
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">BMS College of Engineering</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-primary-500">CGPA: 8.78</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Achievements */}
              <div className="mt-8 pt-8 border-t border-gray-300 dark:border-gray-700">
                <h4 className="text-xl font-bold mb-4 text-gray-800 dark:text-gray-100">Notable Achievements</h4>
                <div className="flex items-start space-x-3 bg-primary-500/5 rounded-lg p-4 border-l-4 border-primary-500">
                  <HiTrophy className="w-6 h-6 text-primary-500 flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-gray-100 mb-1">
                      TCS CodeVita Season 13 - Global Rank 9368
                    </p>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Competed in one of the world's largest coding competitions, demonstrating strong algorithmic problem-solving skills among thousands of global participants.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interests Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-500/10 rounded-lg">
                    <interest.icon className="w-8 h-8 text-primary-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-100">
                      {interest.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {interest.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
