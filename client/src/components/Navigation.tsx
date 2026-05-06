import { Link } from 'wouter';
import { motion } from 'framer-motion';

/**
 * Navigation Component
 * Design: Ethereal Minimalism with Liquid Glass
 * Sticky navigation with frosted glass effect
 */

export default function Navigation() {
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Order', href: '/order' },
    { label: 'About', href: '/about' },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/5 border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl [font-family:Poppins] font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent cursor-pointer"
          >
            Art Portfolio
          </motion.div>
        </Link>

        <div className="flex gap-8">
          {navItems.map((item, index) => (
            <Link key={item.href} href={item.href}>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-sm [font-family:Inter] font-medium text-gray-300 hover:text-purple-400 transition-colors cursor-pointer"
              >
                {item.label}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
