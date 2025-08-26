import { getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
            const getProductsHandler = async () => {
                try {
                    const data = await getProductsItems();
                    console.log(data)
                    setProducts(data)
                } catch(err) {
                    console.error(err)
                }

            }
            getProductsHandler();
    }, [])
  return (
    <div>
        {products.map((product) => (
            <div key={product} className='flex flex-col gap-y-10'>
                {product.title}
            </div>
        ))}
    </div>
  )
}

export default Product