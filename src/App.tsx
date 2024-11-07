import React, { useState, useEffect } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/Navbar';
import { ProductCard } from './components/ProductCard';
import { Cart } from './components/Cart';
import { Product, ApiProduct } from './types';
import { Loader2 } from 'lucide-react';
import { useTheme } from './context/ThemeContext';

function AppContent() {
  const { theme } = useTheme();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) throw new Error('Failed to fetch products');
        
        const data: ApiProduct[] = await response.json();
        
        const transformedProducts: Product[] = data.map(item => ({
          id: item.id.toString(),
          name: item.title,
          price: item.price,
          description: item.description,
          image: item.image,
          category: item.category
        }));

        setProducts(transformedProducts);
        const uniqueCategories = Array.from(new Set(data.map(p => p.category)));
        setCategories(uniqueCategories);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-red-600 text-center">
          <h2 className="text-2xl font-bold mb-2">Error</h2>
          <p>{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${theme.colors.background}`}>
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Loader2 className={`w-8 h-8 animate-spin ${theme.colors.text}`} />
          </div>
        ) : (
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-3/4">
              <div className="mb-8">
                <h2 className={`text-2xl font-bold mb-4 ${theme.colors.text}`}>
                  Categories
                </h2>
                <div className="flex gap-4 flex-wrap">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`px-4 py-2 rounded-full ${
                      selectedCategory === null
                        ? theme.colors.primary + ' text-white'
                        : theme.colors.secondary + ' ' + theme.colors.text
                    }`}
                  >
                    All
                  </button>
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full capitalize ${
                        selectedCategory === category
                          ? theme.colors.primary + ' text-white'
                          : theme.colors.secondary + ' ' + theme.colors.text
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
            <div className="md:w-1/4">
              <Cart />
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <AppContent />
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;