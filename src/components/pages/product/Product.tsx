import { getCategories, getProductsByCategory, getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';

function Product() {
    // const [products, setProducts] = useState<string[]>([]);
    const [categories, setCategories] = useState([]);
    const [productByCategory, setProductByCategory] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const categoriesData = await getCategories();
                    setCategories(categoriesData);

                    let temp = {};
                    
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
    <div className="p-5">
      {categories.map((cat) => (
        <section key={cat} className="mb-8">
          <h2 className="text-xl font-bold mb-4 capitalize">{cat}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
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