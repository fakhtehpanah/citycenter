import { getProductsItems } from "@/components/api/product";
import React, { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import type { Product } from "@/types/types";

function AllProduct() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAllProductsData = async () => {
      try {
        const allProductsData = await getProductsItems();
        setAllProducts(allProductsData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProductsData();
  }, []);

  return (
    <div className="relative p-10 ">
      <svg className="absolute  w-100 bottom-0 right-0 " viewBox="0 0 50 100">
        <path
          fill="rgba(251,236,255,1)"
          d="M96.5,58Q96,66,89,70.5Q82,75,76.5,78.5Q71,82,64.5,81.5Q58,81,52.5,84.5Q47,88,39,90.5Q31,93,29,84Q27,75,18.5,73.5Q10,72,12.5,64Q15,56,13.5,50Q12,44,13,37.5Q14,31,17.5,25Q21,19,26,13Q31,7,38.5,4.5Q46,2,53,5.5Q60,9,64.5,15Q69,21,72,25.5Q75,30,81,33.5Q87,37,92,43.5Q97,50,96.5,58Z"
        />
      </svg>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 border-4  border-dashed border-orange-200 p-5">
        {allProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default AllProduct;
