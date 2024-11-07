
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { dispatch } = useCart();
  const { theme } = useTheme();

  return (
    <div className={`${theme.colors.card} rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105`}>
      <div className="relative pt-[100%]">
        <img
          src={product.image}
          alt={product.name}
          className="absolute top-0 left-0 w-full h-full object-contain p-4"
        />
      </div>
      <div className="p-4">
        <h3 className={`text-lg font-semibold ${theme.colors.text} line-clamp-2`}>
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mt-1 line-clamp-3">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className={`text-xl font-bold ${theme.colors.text}`}>
            ${product.price.toFixed(2)}
          </span>
          <button
            onClick={() => dispatch({ type: 'ADD_TO_CART', payload: product })}
            className={`${theme.colors.primary} text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors`}
          >
            <ShoppingCart size={20} />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};