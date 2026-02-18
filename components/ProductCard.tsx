
import React from 'react';
import { Product } from '../types';
import { ICONS } from '../constants';

interface ProductCardProps {
  product: Product;
  onDelete?: (id: string) => void;
  isAdmin?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onDelete, isAdmin }) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-shadow group flex flex-col h-full">
      <div className="relative aspect-[4/3] overflow-hidden">
        {product.isBestSeller && (
          <div className="absolute top-4 left-4 z-10 bg-[#FFED00] text-[#002855] text-[10px] font-bold px-3 py-1.5 rounded-lg uppercase tracking-wider">
            ბესტსელერი
          </div>
        )}
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {isAdmin && (
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onDelete?.(product.id);
            }}
            className="absolute top-4 right-4 z-10 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
          >
            <ICONS.Trash />
          </button>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex gap-0.5 mb-3">
          {[...Array(5)].map((_, i) => (
            <ICONS.Star key={i} className={i < product.rating ? 'text-[#FFED00]' : 'text-gray-200'} />
          ))}
          <span className="ml-2 text-[10px] font-medium text-gray-400 uppercase tracking-widest">ვერიფიცირებული არჩევანი</span>
        </div>

        <h3 className="text-xl font-bold text-[#002855] mb-1">{product.name}</h3>
        <p className="text-sm text-gray-400 mb-6">{product.type}</p>

        <div className="mt-auto">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-baseline gap-1">
              <span className="text-xs text-gray-400 font-medium">დან</span>
              <span className="text-2xl font-black text-[#002855]">{product.price}</span>
              <span className="text-sm font-bold text-[#002855]">₾</span>
            </div>
            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">0 სმ</span>
          </div>

          <button className="w-full bg-[#002855] text-white py-4 rounded-xl font-bold flex items-center justify-center gap-3 hover:bg-opacity-95 transition-all active:scale-95">
            <ICONS.Cart />
            კალათაში დამატება
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
