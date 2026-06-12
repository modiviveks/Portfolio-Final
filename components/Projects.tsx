"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiTypescript, SiJavascript } from "react-icons/si";

const projects = [
  {
    title: "mailz-app",
    subtitle: "AI Email Marketing SaaS Platform",
    description:
      "Comprehensive full-stack email campaign platform leveraging LLaMA AI (Groq) for intelligent content generation. Features include automated scheduling, subscriber management, campaign analytics, and real-time performance tracking.",
    technologies: [
      { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-600 dark:text-gray-400" },
      { name: "React", icon: SiReact, color: "text-blue-500" },
      { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
    ],
    github: "https://github.com/modiviveks/mailz-app",
    live: null,
    gradient: "from-green-400 to-blue-500",
  },
  {
    title: "contentflow-cms",
    subtitle: "Full-Stack Content Management System",
    description:
      "Enterprise-grade CMS platform built with modern web technologies, enabling streamlined content creation, editing, and management workflows. Features role-based access control, version history, and real-time collaboration.",
    technologies: [
      { name: "React", icon: SiReact, color: "text-blue-500" },
      { name: "Express", icon: SiExpress, color: "text-gray-600 dark:text-gray-400" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-600" },
    ],
    github: "https://github.com/modiviveks/contentflow-cms",
    live: null,
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "mailzapp",
    subtitle: "AI-Powered Email Writing Tool",
    description:
      "Intelligent email generation tool that creates personalized, professional email content instantly. Utilizes advanced AI to understand campaign context, audience intent, and brand voice for optimal engagement.",
    technologies: [
      { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
    ],
    github: "https://github.com/modiviveks/mailzapp",
    live: null,
    gradient: "from-yellow-400 to-orange-500",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
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
              Featured <span className="gradient-text">Projects</span>
            </motion.h2>
            <motion.div
              initial={{ width: 0 }}
              animate={isInView ? { width: "100px" } : { width: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="h-1 bg-primary-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  {/* Gradient Header */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 + index * 0.2 }}
                        className="text-white text-6xl font-bold opacity-20 group-hover:opacity-30 transition-opacity"
                      >
                        {index + 1}
                      </motion.div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-primary-500 font-semibold mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6 flex-grow">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <motion.div
                            key={tech.name}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            className="flex items-center space-x-2 px-3 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg"
                          >
                            <tech.icon className={`w-5 h-5 ${tech.color}`} />
                            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                              {tech.name}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-600 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FaGithub className="w-5 h-5" />
                        <span>Code</span>
                      </motion.a>
                      
                      {project.live && (
                        <motion.a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600 transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <FaExternalLinkAlt className="w-4 h-4" />
                          <span>Live Demo</span>
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View More */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center mt-12"
          >
            <motion.a
              href="https://github.com/modiviveks"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-bold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaGithub className="w-6 h-6" />
              <span>View More on GitHub</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
