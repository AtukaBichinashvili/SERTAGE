
import React from 'react';
import { ICONS, COLORS } from '../constants';
import { ViewType } from '../types';

interface HeaderProps {
  onViewChange: (view: ViewType) => void;
  currentView: ViewType;
}

const Header: React.FC<HeaderProps> = ({ onViewChange, currentView }) => {
  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <div 
            className="flex-shrink-0 cursor-pointer flex items-center bg-[#002855] text-white px-6 py-3 rounded"
            onClick={() => onViewChange('home')}
          >
            <span className="text-2xl font-bold tracking-tight italic">Serta</span>
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <div className="w-8 h-8 rounded-full border-2 border-[#FFED00]"></div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-xl hidden md:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                <ICONS.Search />
              </div>
              <input
                type="text"
                placeholder="ძიება..."
                className="block w-full pl-10 pr-3 py-2 border-none bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#002855] transition-all text-sm"
              />
            </div>
          </div>

          {/* Nav Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium text-[#002855]">
            <button className="hover:text-opacity-70 transition-colors">მაღაზია</button>
            <button className="hover:text-opacity-70 transition-colors">ჩვენს შესახებ</button>
            <button className="hover:text-opacity-70 transition-colors">გარანტია</button>
            <button className="hover:text-opacity-70 transition-colors"><ICONS.Layers /></button>
          </nav>

          {/* Cart & Actions */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#002855] text-white px-5 py-2.5 rounded-lg hover:bg-opacity-90 transition-all text-sm font-medium whitespace-nowrap">
              <ICONS.Cart />
              <span className="hidden sm:inline">კალათა</span>
            </button>
            
            <button className="flex items-center gap-1 border border-gray-200 px-3 py-2 rounded text-xs font-medium text-gray-600 hover:bg-gray-50">
              <ICONS.Globe />
              <span>EN</span>
            </button>

            {currentView !== 'admin' && (
              <button 
                onClick={() => onViewChange('admin')}
                className="p-2 text-gray-400 hover:text-[#002855] transition-colors"
                title="Admin Panel"
              >
                <ICONS.Warranty />
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
