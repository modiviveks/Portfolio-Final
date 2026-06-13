"use client";

import { motion } from "framer-motion";
import { HiArrowDown, HiCode, HiLightningBolt } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          {/* Greeting */}
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-2 mb-4">
            <HiLightningBolt className="w-6 h-6 text-primary-500" />
            <p className="text-lg text-gray-600 dark:text-gray-400 font-medium">
              Hello, I&apos;m
            </p>
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6"
          >
            <span className="gradient-text">Vivek Modi</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} className="flex items-center justify-center space-x-3 mb-6">
            <HiCode className="w-8 h-8 text-primary-500" />
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 dark:text-gray-200">
              Full-Stack Developer & AI Enthusiast
            </h2>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            Electronics and Communication Engineering student building{" "}
            <span className="text-primary-500 font-semibold">web applications</span>,{" "}
            <span className="text-primary-500 font-semibold">AI-driven tools</span>, and{" "}
            <span className="text-primary-500 font-semibold">efficient software systems</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12"
          >
            <motion.a
              href="#projects"
              className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View My Work</span>
              <HiArrowDown className="w-5 h-5" />
            </motion.a>
            
            <motion.a
              href="#contact"
              className="px-8 py-4 border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white font-bold rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center space-x-6"
          >
            <motion.a
              href="https://github.com/modiviveks"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub className="w-6 h-6" />
            </motion.a>
            
            <motion.a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full hover:bg-primary-500 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaLinkedin className="w-6 h-6" />
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <HiArrowDown className="w-8 h-8 text-primary-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
