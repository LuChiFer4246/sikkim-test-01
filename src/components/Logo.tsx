import React from 'react';
import { Link } from 'react-router-dom';
const Logo: React.FC = () => {
  return <Link to="/" className="flex items-center gap-2 group">
      <div className="relative w-14 h-14 overflow-hidden rounded-full">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-red-700 group-hover:from-orange-500 group-hover:to-red-600 transition-colors duration-500"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Sikkim Monastery and Cultural Heritage Logo */}
          <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg">
            {/* Himalayan Mountains Background */}
            <path d="M2 18L6 8L10 12L14 6L18 10L22 4V18H2Z" fill="#e8f5e9" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Monastery Structure */}
            <rect x="8" y="12" width="8" height="6" fill="#8d6e63" stroke="currentColor" strokeWidth="0.8" />
            
            {/* Monastery Roof */}
            <path d="M7 12L12 8L17 12H7Z" fill="#d32f2f" stroke="currentColor" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
            
            {/* Dharma Wheel */}
            <circle cx="12" cy="15" r="1.5" fill="none" stroke="#ffeb3b" strokeWidth="0.8" />
            <path d="M11 15H13M12 14V16M11.3 14.3L12.7 15.7M12.7 14.3L11.3 15.7" stroke="#ffeb3b" strokeWidth="0.6" />
            
            {/* Prayer Flags */}
            <path d="M4 6L6 8L8 6L10 8L12 6" stroke="#1976d2" strokeWidth="0.8" strokeLinecap="round" />
            <path d="M4 7L6 9L8 7L10 9L12 7" stroke="#f57c00" strokeWidth="0.8" strokeLinecap="round" />
            
            {/* Stupa/Chorten */}
            <circle cx="6" cy="16" r="0.8" fill="#ffb74d" />
            <rect x="5.6" y="15.2" width="0.8" height="1.6" fill="#ff8f00" />
            
            {/* Traditional Door */}
            <rect x="10.5" y="15" width="3" height="3" fill="#5d4037" stroke="currentColor" strokeWidth="0.5" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <span className="text-lg font-display font-bold text-orange-700 leading-tight group-hover:text-orange-600 transition-colors duration-300">
          Sikkim Monasteries360
        </span>
        
      </div>
    </Link>;
};
export default Logo;