// components/Layout.tsx
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface Props {
  children: ReactNode;
}

export default function Layout({ children, setProductByCategory }: Props) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header setProductByCategory={setProductByCategory}/>
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}