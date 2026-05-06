import { motion } from 'framer-motion';
import AetherFlowHero from '@/components/AetherFlowHero';
import Dock from '@/components/Dock';
import { MessageCircle } from 'lucide-react';

/**
 * Order Page
 * Design: Ethereal Minimalism with Liquid Glass
 * Centered spotlight with order instructions
 */

export default function Order() {
  return (
    <AetherFlowHero>
      <Dock />
      
      <div className="relative z-10 w-full h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl w-full"
        >
          {/* Spotlight Container */}
          <div className="relative">
            {/* Glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-purple-400/20 blur-3xl rounded-3xl"></div>
            
            {/* Glass Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative glass-card p-12 md:p-16 text-center rounded-3xl"
            >
              {/* Icon */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="mb-8 flex justify-center"
              >
                <div className="p-4 rounded-full bg-purple-500/20 border border-purple-400/30">
                  <MessageCircle className="w-12 h-12 text-purple-300" />
                </div>
              </motion.div>

              {/* Content */}
              <h1 className="text-4xl md:text-5xl [font-family:Poppins] font-bold mb-6 bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
                Ready to Order?
              </h1>

              <p className="text-lg md:text-xl text-gray-300 [font-family:Inter] mb-8 leading-relaxed">
                Contact me in <span className="text-purple-300 font-semibold">Discord</span> to place an order for an artwork of your choice.
              </p>

              {/* Discord Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-500 text-white [font-family:Poppins] font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300 cursor-pointer"
              >
                📱 Discord: @sxamble
              </motion.div>

              {/* Additional Info */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-sm text-gray-400 [font-family:Inter]">
                  I'm available for custom commissions, collaborations, and special requests.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </AetherFlowHero>
  );
}
