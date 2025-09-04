import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/types/types";

interface CardContextType {
  card: Product[];
  addToCard: (product: Product) => void;
  removeFromCard: (id: number) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [card, setCard] = useState<Product[]>([]);

  const addToCard = (product: Product) => {
    setCard(prev => [...prev, product]);
    console.log("Cart:", [...card, product]);
  };
  const removeFromCard = (id: number) => {
    setCard((prev) => prev.filter((item) =>item.id !== id));
  }

  return (
    <CardContext.Provider value={{ card, addToCard, removeFromCard }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
};