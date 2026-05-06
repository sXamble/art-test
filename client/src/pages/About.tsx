import { motion } from 'framer-motion';
import AetherFlowHero from '@/components/AetherFlowHero';
import Dock from '@/components/Dock';

/**
 * About Me Page
 * Design: Ethereal Minimalism with Liquid Glass
 * Personal bio and artist information with Buy Me a Coffee button
 */

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <AetherFlowHero>
      <Dock />
      
      <div className="relative z-10 w-full min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl [font-family:Poppins] font-bold mb-4 bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-gray-400 [font-family:Inter] text-lg">
              Get to know the artist behind the art
            </p>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-8"
          >
            {/* Bio Section */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl [font-family:Poppins] font-bold text-white mb-6">
                Hi, I'm Eepy
              </h2>
              <div className="space-y-6 text-gray-300 [font-family:Inter] leading-relaxed">
                <p>
                  I'm a digital artist from India. I've been drawing various video game characters and fictional characters since I was a teenager. I've always been massively interested in drawing and now I'm trying to make a name of myself in the Art world.
                </p>
              </div>
            </motion.div>

            {/* Services Section */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl"
            >
              <h2 className="text-2xl [font-family:Poppins] font-bold text-white mb-6">
                What I Offer
              </h2>
              <div className="space-y-4 text-gray-300 [font-family:Inter] leading-relaxed">
                <p>
                  I offer commission based artwork of any character of your choice. I mostly excel in Video Game characters and Anime characters.
                </p>
                <div className="bg-purple-500/10 border border-purple-500/20 rounded-lg p-4">
                  <p className="text-purple-300 font-semibold">
                    ⚠️ I do NOT do NSFW. Do not contact me for that.
                  </p>
                </div>
                <p>
                  All other commissions are welcomed :D
                </p>
              </div>
            </motion.div>

            {/* Thank You Section */}
            <motion.div
              variants={itemVariants}
              className="glass-card p-8 rounded-2xl text-center"
            >
              <p className="text-lg [font-family:Inter] text-gray-300 mb-8">
                Thank you for checking me out!
              </p>
              <a href="https://www.buymeacoffee.com/sxamble" target="_blank" rel="noopener noreferrer">
                <img 
                  src="https://img.buymeacoffee.com/button-api/?text=Buy me a jeff&emoji=🦈&slug=sxamble&button_colour=11071a&font_colour=ffffff&font_family=Poppins&outline_colour=ffffff&coffee_colour=FFDD00" 
                  alt="Buy me a coffee"
                  className="mx-auto hover:scale-105 transition-transform duration-300"
                />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </AetherFlowHero>
  );
}
