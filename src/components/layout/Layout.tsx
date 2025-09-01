// components/Layout.tsx
import { ReactNode, useEffect, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { getCategories, getProductsByCategory } from "../api/product";

interface Props {
  children: ReactNode;
  categories: string;
}

export default function Layout({ children}: Props) {

  const [categories, setCategories] = useState<any[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    getCategories().then(data => setCategories(data));
  }, [])

  const handleSearch = async (category) => {
    try {
      const result = await getProductsByCategory(category);
      setProducts(result);
    } catch (err) {
      console.error(err);
      setProducts([]);
    }
    console.log(products)
  }
  return (
    <div className="flex flex-col min-h-screen">
      <Header categories={categories} onSearch={handleSearch} />
      <main products={products} className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}