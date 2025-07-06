import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { Product } from '../data/products';

interface QuoteItem {
  product: Product;
  quantity: number;
  brandName: string;
}

interface QuoteContextType {
  items: QuoteItem[];
  addToQuote: (product: Product, brandName: string) => void;
  removeFromQuote: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearQuote: () => void;
  getTotalItems: () => number;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<QuoteItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem('alcayato-quote');
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (error) {
        console.error('Error loading quote from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('alcayato-quote', JSON.stringify(items));
  }, [items]);

  const addToQuote = (product: Product, brandName: string) => {
    setItems(prev => {
      const existingItem = prev.find(item => item.product.id === product.id);
      if (existingItem) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1, brandName }];
      }
    });
  };

  const removeFromQuote = (productId: string) => {
    setItems(prev => prev.filter(item => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromQuote(productId);
      return;
    }
    setItems(prev =>
      prev.map(item =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearQuote = () => {
    setItems([]);
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <QuoteContext.Provider
      value={{
        items,
        addToQuote,
        removeFromQuote,
        updateQuantity,
        clearQuote,
        getTotalItems,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (context === undefined) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
