import { getCategories, getProductsByCategory } from '@/components/api/product';
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';
import type { Product } from '@/types/types';
import Landing from '../landing/Landing';
import LandingPage from '../landing/Landing';

// interface ProductProps {
//   product: Product;
//   onAddToCard: (product: Product) => void;

// }


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
    }, []);

    
  return (
    <div>
      {/* <Header setProductByCategory={setProductByCategory} /> */}
      <LandingPage/>
      <div className="p-5 ">
        {categories.map((cat) => (
          <section key={cat} className="py-5 flex flex-col gap-y-5">
            <h2 className="text-xl font-bold  capitalize">{cat}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
              {productByCategory[cat]?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        ))}
      </div>
      {/* <div className='p-5 bg-red-400'>
        {products?.map((p) => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div> */}

    </div>

  )
}

export default Product