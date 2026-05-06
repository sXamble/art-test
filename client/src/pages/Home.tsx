import { motion } from 'framer-motion';
import AetherFlowHero from '@/components/AetherFlowHero';
import Dock from '@/components/Dock';
import { Link } from 'wouter';

/**
 * Home Page
 * Design: Ethereal Minimalism with Liquid Glass
 * Landing page with welcoming message and call-to-action
 */

export default function Home() {
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2 + 0.3,
        duration: 0.8,
      },
    }),
  };

  return (
    <AetherFlowHero>
      <Dock />
      
      <div className="relative z-10 text-center px-4 pt-20">
        <motion.div
          custom={0}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
            <span className="text-sm [font-family:Inter] font-medium text-gray-200">
              Welcome to my art gallery
            </span>
          </div>
        </motion.div>

        <motion.h1
          custom={1}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="text-6xl md:text-8xl [font-family:Poppins] font-bold tracking-tight mb-6 bg-gradient-to-b from-white via-purple-200 to-purple-400 bg-clip-text text-transparent"
        >
          Eepy's Art Domain
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-300 [font-family:Inter] mb-10 leading-relaxed"
        >
          Welcome to my creative space. Here you'll find a curated collection of my digital artwork, 
          each piece crafted with passion and attention to detail. Explore the gallery and discover 
          the stories behind every creation.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8 }}
          className="flex gap-4 justify-center"
        >
          <Link href="/gallery">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white [font-family:Poppins] font-semibold rounded-lg shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
            >
              Explore Gallery
            </motion.button>
          </Link>

          <Link href="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass-card text-white [font-family:Poppins] font-semibold rounded-lg transition-all duration-300 cursor-pointer"
            >
              Learn About Me
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </AetherFlowHero>
  );
}
