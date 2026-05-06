import React, { useState } from 'react';
import { Home, Image, ShoppingCart, User } from 'lucide-react';
import { Link } from 'wouter';

/**
 * Dock Navigation Component
 * Design: Ethereal Minimalism with Liquid Glass
 * Minimalist dock with glass morphism effect
 */

interface DockItem {
  id: string;
  icon: React.ReactNode;
  label: string;
  href: string;
}

const dockItems: DockItem[] = [
  { id: 'home', icon: <Home size={20} />, label: 'Home', href: '/' },
  { id: 'gallery', icon: <Image size={20} />, label: 'Gallery', href: '/gallery' },
  { id: 'order', icon: <ShoppingCart size={20} />, label: 'Order', href: '/order' },
  { id: 'about', icon: <User size={20} />, label: 'About', href: '/about' },
];

interface DockItemProps {
  item: DockItem;
  isHovered: boolean;
  onHover: (id: string | null) => void;
}

const DockItemComponent: React.FC<DockItemProps> = ({ item, isHovered, onHover }) => {
  return (
    <Link href={item.href}>
      <div
        className="relative group cursor-pointer"
        onMouseEnter={() => onHover(item.id)}
        onMouseLeave={() => onHover(null)}
      >
        <div
          className={`
            relative flex items-center justify-center
            w-11 h-11 rounded-lg
            bg-white/5 backdrop-blur-[2px]
            border border-white/10
            transition-all duration-300 ease-out
            cursor-pointer
            shadow-none
            ${isHovered 
              ? 'scale-110 bg-white/10 border-white/20 -translate-y-1 shadow-lg shadow-white/10' 
              : 'hover:scale-105 hover:bg-white/7 hover:-translate-y-0.5'
            }
          `}
          style={{
            boxShadow: isHovered
              ? '0 4px 24px 0 rgba(255,255,255,0.08)'
              : undefined,
            transitionProperty: 'box-shadow, transform, background, border-color'
          }}
        >
          <div className={`
            text-white transition-all duration-300
            ${isHovered ? 'scale-105 drop-shadow-[0_1px_4px_rgba(255,255,255,0.10)]' : ''}
          `}>
            {item.icon}
          </div>
        </div>
        
        {/* Tooltip */}
        <div className={`
          absolute -bottom-10 left-1/2 transform -translate-x-1/2
          px-2.5 py-1 rounded-md
          bg-black/70 backdrop-blur
          text-white text-xs font-normal
          border border-white/5
          transition-all duration-200
          pointer-events-none
          whitespace-nowrap
          ${isHovered 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-1'
          }
          shadow-sm
        `}>
          {item.label}
          <div className="absolute bottom-full left-1/2 transform -translate-x-1/2">
            <div className="w-2 h-2 bg-black/70 rotate-45 border-l border-t border-white/5"></div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Dock: React.FC = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <div className="fixed top-8 left-1/2 transform -translate-x-1/2 z-50">
      {/* Dock Container */}
      <div className={`
        flex items-center gap-3 px-6 py-4
        rounded-2xl
        bg-black/40 backdrop-blur-xl
        border border-white/10
        shadow-2xl
        transition-all duration-500 ease-out
        ${hoveredItem ? 'scale-105' : ''}
      `}>
        {dockItems.map((item) => (
          <DockItemComponent
            key={item.id}
            item={item}
            isHovered={hoveredItem === item.id}
            onHover={setHoveredItem}
          />
        ))}
      </div>
    </div>
  );
};

export default Dock;
