
import { Product } from '../types';

const STORAGE_KEY = 'serta_products';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Ortho Support',
    category: 'მატრასები',
    type: 'ორთოპედიული მატრასი',
    price: 0,
    rating: 5,
    image: 'https://picsum.photos/800/600?random=1',
    isBestSeller: true
  },
  {
    id: '2',
    name: 'Serta Perfect Sleeper',
    category: 'მატრასები',
    type: 'ჰიბრიდული მატრასი',
    price: 0,
    rating: 5,
    image: 'https://picsum.photos/800/600?random=2'
  }
];

export const getProducts = (): Product[] => {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PRODUCTS));
    return INITIAL_PRODUCTS;
  }
  return JSON.parse(stored);
};

export const saveProducts = (products: Product[]): void => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(products));
};

export const addProduct = (product: Omit<Product, 'id'>): Product[] => {
  const products = getProducts();
  const newProduct = { ...product, id: Date.now().toString() };
  const updated = [...products, newProduct];
  saveProducts(updated);
  return updated;
};

export const deleteProduct = (id: string): Product[] => {
  const products = getProducts();
  const updated = products.filter(p => p.id !== id);
  saveProducts(updated);
  return updated;
};
