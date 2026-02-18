
import React from 'react';
import { ICONS } from '../constants';

const HeroBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[450px] bg-[#002855] rounded-3xl overflow-hidden shadow-xl flex items-center p-8 lg:p-16">
      <div className="z-10 max-w-lg space-y-6">
        <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
          საგაზაფხულო ფასდაკლებები
        </h1>
        <p className="text-lg text-white opacity-80">
          მიიღეთ 30%-მდე ფასდაკლება შერჩეულ მოდელებზე
        </p>
        <button className="bg-[#FFED00] text-[#002855] px-8 py-4 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition-transform">
          იხილეთ კატალოგი
          <ICONS.ArrowRight />
        </button>
      </div>

      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-20 pointer-events-none">
        <img 
          src="https://picsum.photos/1200/800?grayscale" 
          alt="Serta Bed" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute bottom-6 right-8 flex gap-2">
        <div className="w-8 h-1 bg-[#FFED00] rounded-full"></div>
        <div className="w-4 h-1 bg-white opacity-30 rounded-full"></div>
        <div className="w-4 h-1 bg-white opacity-30 rounded-full"></div>
      </div>
    </div>
  );
};

export default HeroBanner;
