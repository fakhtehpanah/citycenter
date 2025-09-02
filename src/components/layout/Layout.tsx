// components/Layout.tsx
import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { CardProvider } from "@/context/CardContext";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children}: LayoutProps) {

  // const [categories, setCategories] = useState<any[]>([]);
  // const [products, setProducts] = useState<any[]>([]);

  // useEffect(() => {
  //   getCategories().then(data => setCategories(data));
  // }, [])

  // const handleSearch = async (category) => {
  //   try {
  //     const result = await getProductsByCategory(category);
  //     setProducts(result);
  //   } catch (err) {
  //     console.error(err);
  //     setProducts([]);
  //   }
  //   console.log(products)
  // }
  return (
    <CardProvider>
      <div className="flex flex-col min-h-screen">
      <Header />
      <main  className="flex-1">
        {children}              
      </main>
      <Footer />
    </div>
    </CardProvider>
    
  );
}