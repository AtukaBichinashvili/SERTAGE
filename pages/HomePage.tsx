
import React, { useState, useEffect } from 'react';
import CategorySidebar from '../components/CategorySidebar';
import HeroBanner from '../components/HeroBanner';
import FeatureGrid from '../components/FeatureGrid';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/dataService';
import { Product } from '../types';
import { ICONS } from '../constants';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-16">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row gap-8 min-h-[500px]">
        <div className="lg:w-72 flex-shrink-0">
          <CategorySidebar />
        </div>
        <div className="flex-1">
          <HeroBanner />
        </div>
      </section>

      {/* Feature Section */}
      <section>
        <FeatureGrid />
      </section>

      {/* Popular Products */}
      <section className="space-y-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-black text-[#002855]">პოპულარული</h2>
          <div className="flex gap-2">
            <button className="p-2 border border-gray-100 rounded-full text-gray-300 hover:text-[#002855] hover:border-gray-200 transition-all">
              <svg className="rotate-180" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <button className="p-2 border border-gray-100 rounded-full text-gray-300 hover:text-[#002855] hover:border-gray-200 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Call to Action Bar */}
      <div className="w-full bg-[#002855] text-white p-4 rounded-2xl flex items-center justify-center gap-4 cursor-pointer hover:bg-opacity-95 transition-all sticky bottom-6 z-40 shadow-2xl">
        <ICONS.Cart />
        <span className="font-bold">კალათაში დამატება</span>
      </div>
    </main>
  );
};

export default HomePage;
