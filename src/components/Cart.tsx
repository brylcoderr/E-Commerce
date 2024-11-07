import React from 'react';
import { X, Minus, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';

export const Cart: React.FC = () => {
  const { state, dispatch } = useCart();
  const { theme } = useTheme();

  return (
    <div className={`${theme.colors.card} rounded-lg shadow-lg p-6`}>
      <h2 className={`text-2xl font-bold mb-4 ${theme.colors.text}`}>Shopping Cart</h2>
      {state.items.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-4">
            {state.items.map((item) => (
              <div key={item.id} className={`flex items-center gap-4 border-b ${theme.colors.border} pb-4`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className={`font-semibold ${theme.colors.text}`}>{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: Math.max(0, item.quantity - 1) }
                        })
                      }
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() =>
                        dispatch({
                          type: 'UPDATE_QUANTITY',
                          payload: { id: item.id, quantity: item.quantity + 1 }
                        })
                      }
                      className="p-1 hover:bg-gray-100 rounded"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => dispatch({ type: 'REMOVE_FROM_CART', payload: item.id })}
                  className="text-red-500 hover:text-red-700"
                >
                  <X size={20} />
                </button>
              </div>
            ))}
          </div>
          <div className={`mt-6 border-t ${theme.colors.border} pt-4`}>
            <div className={`flex justify-between items-center text-xl font-bold ${theme.colors.text}`}>
              <span>Total:</span>
              <span>${state.total.toFixed(2)}</span>
            </div>
            <button className={`w-full mt-4 ${theme.colors.accent} text-white py-3 rounded-lg transition-colors`}>
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};