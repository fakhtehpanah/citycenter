import { getCategories, getProductsByCategory, getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


function Product() {
    const [categories, setCategories] = useState<string[]>([]);
    const [productByCategory, setProductByCategory] = useState<Record<string, Product[]>>({});

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const categoriesData = await getCategories();
                    setCategories(categoriesData);

                    const temp: Record<string, Product[]> = {};
                    
                    for (const category of categoriesData) {
                        const productData = await getProductsByCategory(category);
                        temp[category] = productData;
                    }
                    setProductByCategory(temp);

                } catch(err) {
                    console.error(err)
                }

            }
            fetchData();
    }, [])
    
  return (
    <div className="p-5 ">
      {categories.map((cat) => (
        <section key={cat} className="mb-8">
          <h2 className="text-xl font-bold mb-4 capitalize">{cat}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {productByCategory[cat]?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default Product