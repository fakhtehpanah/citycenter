import { useRouter } from "next/router";
import { getProductsItems } from "@/components/api/product";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const allProducts = await getProductsItems();
      const found = allProducts.find((p: Product) => p.id.toString() === id);
      console.log(product)
      setProduct(found || null);
    }

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{product.title}</h1>
      <p className="text-green-700 font-bold">${product.price}</p>
      <p className="text-gray-500 capitalize">{product.category}</p>
      <img src="/food.JPG" alt={product.title} className="rounded mt-4" />
    </div>
  );
}