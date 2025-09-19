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
      console.log(product);
      setProduct(found || null);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-[#fff0d6] relative flex flex-col justify-between p-5 lg:py-10">
      <div className=" py-10 rounded shadow  flex flex-col lg:flex-row-reverse lg:justify-center lg:gap-x-10  gap-y-5 items-center ">
        <img
          src="/food.JPG"
          alt={product.title}
          className="rounded"
          width={300}
        />
        <div className="flex flex-col gap-y-5">
          <h1 className="text-2xl  font-bold">{product.title}</h1>
          <p className="text-green-700 font-bold">${product.price}</p>
          <p className="text-gray-500 capitalize">{product.category}</p>
          <div>
            <button className="border bg-black text-white hover:bg-white hover:text-black rounded cursor-pointer p-2 ">
              add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
