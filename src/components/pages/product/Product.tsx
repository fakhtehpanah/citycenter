import { getProductsCategories, getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'

function Product() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
            const fetchData = async () => {
                try {
                    const products = await getProductsItems();
                    const categories = await getProductsCategories();
                    setProducts(products);
                    setCategories(categories);
                } catch(err) {
                    console.error(err)
                }

            }
            fetchData();
    }, [])
  return (
    <div className='bg-pink-500'>
        {products.map((product) => (
            <div key={product} className='flex flex-col gap-y-10'>
                {product.title}
            </div>
        ))}
        <div className='bg-green-600'>
            {categories.map((category) => (
                <h2 key={category}>{category}</h2>
            ))
            }
        </div>
    </div>
  )
}

export default Product