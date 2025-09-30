import { Product } from "@/types/types";
import React, { createContext, useContext, useState, ReactNode } from "react";
// import { Product } from "@/types/types";
// import Product from "@/components/sections/product/Product";

interface CardContextType {
  card: Product[];
  setCard: (product: Product[]) => void;
  addToCard: (product: Product) => void;
  removeFromCard: (product: Product) => void;
  deletedItem: Product | undefined;
  handleClickProduct: (product: Product) => void;
}

const CardContext = createContext<CardContextType | undefined>(undefined);

export const CardProvider = ({ children }: { children: ReactNode }) => {
  const [card, setCard] = useState<Product[]>([]);
  const [deletedItem, setDeletedItem] = useState<Product>();

  const addToCard = (product: Product) => {
    setCard(prev => [...prev, product]);
    console.log("Card:", [...card, product]);
  };

  const removeFromCard = (product: Product) => {
    setCard((prev) => {
      const index = prev.findIndex(item => item.id === product.id );
      if (index !== -1) {
        const newItem = [...prev];
        newItem.splice(index, 1);
        setDeletedItem(product);
        return newItem;
      }
      return prev;
    }
  );
  }

    const handleClickProduct = (product: Product) => {
    console.log(product.title)
  }


  return (
    <CardContext.Provider value={{ card,setCard, addToCard, removeFromCard, deletedItem, handleClickProduct}}>
      {children}
    </CardContext.Provider>
  );
};

export const useCard = () => {
  const context = useContext(CardContext);
  if (!context) throw new Error("useCard must be used within CardProvider");
  return context;
};