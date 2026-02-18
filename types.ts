
export interface Product {
  id: string;
  name: string;
  category: string;
  type: string;
  price: number;
  rating: number;
  image: string;
  isBestSeller?: boolean;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export type ViewType = 'home' | 'admin';
