
import React from 'react';
import { ICONS } from '../constants';

const CATEGORIES = [
  { id: '1', name: 'მატრასები', icon: <ICONS.Layers className="w-5 h-5" /> },
  { id: '2', name: 'საწოლები', icon: <div className="border-2 border-current w-5 h-3 rounded-sm"></div> },
  { id: '3', name: 'ორთოპედიული ბალი...', icon: <div className="w-5 h-3 bg-current rounded-full opacity-50"></div> },
  { id: '4', name: 'პლედები', icon: <div className="w-5 h-4 border-b-2 border-current opacity-60"></div> },
];

const CategorySidebar: React.FC = () => {
  return (
    <aside className="w-full lg:w-72 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full">
      <div className="bg-[#002855] text-white p-4 flex items-center gap-3">
        <div className="space-y-1">
          <div className="w-5 h-0.5 bg-yellow-400"></div>
          <div className="w-5 h-0.5 bg-yellow-400"></div>
          <div className="w-5 h-0.5 bg-yellow-400"></div>
        </div>
        <span className="font-semibold text-sm">კატეგორიები</span>
      </div>
      
      <div className="flex-1 py-4">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors text-[#002855] group border-b border-gray-50 last:border-none"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-400 group-hover:text-[#002855] transition-colors">
                {cat.icon}
              </span>
              <span className="text-sm font-medium">{cat.name}</span>
            </div>
            <ICONS.ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#002855] transition-all" />
          </button>
        ))}
      </div>

      <div className="p-6 border-t border-gray-50 mt-auto">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500"></div>
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Premium Quality</span>
        </div>
      </div>
    </aside>
  );
};

export default CategorySidebar;
