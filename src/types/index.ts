export interface Product {
    id: string;
    name: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
  }
  
  export interface CartItem extends Product {
    quantity: number;
  }
  
  export interface ApiProduct {
    id: number;
    name: string;
    title: string;
    price: number;
    description: string;
    image: string;
    category: string;
    rating: {
      rate: number;
      count: number;
    };
  }