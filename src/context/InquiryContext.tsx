import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product } from '../data/products';

export interface InquiryItem {
  product: Product;
  quantity: number;
  unit: string;
  notes?: string;
}

export interface InquiryFormState {
  fullName: string;
  businessName: string;
  email: string;
  phone: string;
  businessType: 'restaurant' | 'grocery' | 'catering' | 'retail_customer' | 'wholesale_distributor' | 'other';
  serviceType: 'wholesale_quote' | 'retail_preorder' | 'custom_butchery';
  estimatedFulfillmentDate: string;
  deliveryMethod: 'pickup_cawthra' | 'commercial_delivery';
  additionalRequirements: string;
}

interface InquiryContextType {
  items: InquiryItem[];
  addItem: (product: Product, quantity?: number, notes?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearItems: () => void;
  isDrawerOpen: boolean;
  openDrawer: () => void;
  closeDrawer: () => void;
  selectedProductForDetail: Product | null;
  openProductDetail: (product: Product) => void;
  closeProductDetail: () => void;
  activeNavTab: string;
  setActiveNavTab: (tab: string) => void;
  activeCategoryFilter: string;
  setActiveCategoryFilter: (category: string) => void;
}

const InquiryContext = createContext<InquiryContextType | undefined>(undefined);

export const InquiryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<InquiryItem[]>(() => {
    try {
      const saved = localStorage.getItem('odra_inquiry_items');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [activeNavTab, setActiveNavTab] = useState('home');
  const [activeCategoryFilter, setActiveCategoryFilter] = useState('all');

  useEffect(() => {
    try {
      localStorage.setItem('odra_inquiry_items', JSON.stringify(items));
    } catch {
      // storage quota or disabled
    }
  }, [items]);

  const addItem = (product: Product, quantity = 1, notes = '') => {
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + quantity, notes: notes || i.notes } : i
        );
      }
      return [...prev, { product, quantity, unit: product.priceUnit.replace('/', '').trim() || 'lb', notes }];
    });
    setIsDrawerOpen(true);
  };

  const removeItem = (productId: string) => {
    setItems((prev) => prev.filter((i) => i.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId);
      return;
    }
    setItems((prev) =>
      prev.map((i) => (i.product.id === productId ? { ...i, quantity } : i))
    );
  };

  const clearItems = () => setItems([]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const openProductDetail = (product: Product) => setSelectedProductForDetail(product);
  const closeProductDetail = () => setSelectedProductForDetail(null);

  return (
    <InquiryContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearItems,
        isDrawerOpen,
        openDrawer,
        closeDrawer,
        selectedProductForDetail,
        openProductDetail,
        closeProductDetail,
        activeNavTab,
        setActiveNavTab,
        activeCategoryFilter,
        setActiveCategoryFilter,
      }}
    >
      {children}
    </InquiryContext.Provider>
  );
};

export const useInquiry = () => {
  const context = useContext(InquiryContext);
  if (!context) {
    throw new Error('useInquiry must be used within an InquiryProvider');
  }
  return context;
};
