import { getCategories, getProductsByCategory, getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';
import Header from '@/components/layout/Header';
import Layout from '@/components/layout/Layout';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}


function Product({products}) {
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
    <div>
      {/* <Header setProductByCategory={setProductByCategory} /> */}
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
      <div className='p-5 bg-red-400'>
        {products?.map((p) => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div>

    </div>

  )
}

export default Product