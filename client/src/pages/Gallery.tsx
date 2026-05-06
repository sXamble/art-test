import { motion } from 'framer-motion';
import AetherFlowHero from '@/components/AetherFlowHero';
import Dock from '@/components/Dock';

/**
 * Gallery Page
 * Design: Ethereal Minimalism with Liquid Glass
 * Showcases artwork in a responsive grid with frosted glass cards
 */

const artworks = [
  {
    id: 1,
    title: 'Psylocke Vengeance Skin',
    image: '/manus-storage/eepy_artwork_7f556a91.jpg',
  },
  {
    id: 2,
    title: 'Luna Snow Cake Skin',
    image: '/manus-storage/luna_snow_cake_skin_c956486a.webp',
  },
  {
    id: 3,
    title: 'Psylocke Cake Skin',
    image: '/manus-storage/psylocke_cake_skin_eb8e4c97.webp',
  },
  {
    id: 4,
    title: 'Psylocke Emoji Artwork',
    image: '/manus-storage/psylocke_emoji_artwork_b31d7371.png',
  },
  {
    id: 5,
    title: 'Cosmic Journey',
    image: '/manus-storage/artwork5_c7d90490.jpg',
  },
];

export default function Gallery() {
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
        <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl [font-family:Poppins] font-bold mb-4 bg-gradient-to-b from-white to-purple-300 bg-clip-text text-transparent">
              My Gallery
            </h1>
            <p className="text-gray-400 [font-family:Inter] text-lg">
              A collection of my finest digital artwork and creative pieces
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {artworks.map((artwork) => (
              <motion.div
                key={artwork.id}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group glass-card overflow-hidden cursor-pointer"
              >
                <div className="relative h-64 md:h-72 overflow-hidden rounded-xl">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-xl [font-family:Poppins] font-bold text-white">
                        {artwork.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </AetherFlowHero>
  );
}
