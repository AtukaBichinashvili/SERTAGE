
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { getProducts, addProduct, deleteProduct } from '../services/dataService';
import ProductCard from '../components/ProductCard';
import { ICONS } from '../constants';

const AdminPanel: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: '',
    type: '',
    category: 'მატრასები',
    price: 0,
    rating: 5,
    image: 'https://picsum.photos/800/600?random=' + Math.floor(Math.random() * 1000)
  });

  useEffect(() => {
    setProducts(getProducts());
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = addProduct(newProduct);
    setProducts(updated);
    setIsAdding(false);
    setNewProduct({
      name: '',
      type: '',
      category: 'მატრასები',
      price: 0,
      rating: 5,
      image: 'https://picsum.photos/800/600?random=' + Math.floor(Math.random() * 1000)
    });
  };

  const handleDelete = (id: string) => {
    if (confirm('დარწმუნებული ხართ, რომ გსურთ წაშლა?')) {
      const updated = deleteProduct(id);
      setProducts(updated);
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-12">
        <h1 className="text-4xl font-black text-[#002855]">ადმინ პანელი</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="bg-[#FFED00] text-[#002855] px-6 py-3 rounded-xl font-bold hover:scale-105 transition-transform"
        >
          {isAdding ? 'გაუქმება' : '+ ახალი პროდუქტი'}
        </button>
      </div>

      {isAdding && (
        <section className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 mb-12">
          <form onSubmit={handleAdd} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">პროდუქტის სახელი</label>
              <input 
                required
                value={newProduct.name}
                onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#002855]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">ტიპი</label>
              <input 
                required
                value={newProduct.type}
                onChange={e => setNewProduct({...newProduct, type: e.target.value})}
                className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#002855]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">ფასი</label>
              <input 
                required
                type="number"
                value={newProduct.price}
                onChange={e => setNewProduct({...newProduct, price: parseInt(e.target.value) || 0})}
                className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#002855]"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">რეიტინგი (1-5)</label>
              <input 
                required
                type="number"
                min="1"
                max="5"
                value={newProduct.rating}
                onChange={e => setNewProduct({...newProduct, rating: parseInt(e.target.value) || 5})}
                className="w-full bg-gray-50 border-none rounded-xl p-4 focus:ring-2 focus:ring-[#002855]"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button className="w-full bg-[#002855] text-white py-4 rounded-xl font-bold hover:bg-opacity-95 transition-all">
                პროდუქტის დამატება
              </button>
            </div>
          </form>
        </section>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard 
            key={product.id} 
            product={product} 
            isAdmin 
            onDelete={handleDelete} 
          />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-24 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
          <p className="text-gray-400 font-bold uppercase tracking-widest">პროდუქტები ვერ მოიძებნა</p>
        </div>
      )}
    </main>
  );
};

export default AdminPanel;
