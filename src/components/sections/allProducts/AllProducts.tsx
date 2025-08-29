import { getProductsByCategory, getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';

function AllProduct() {

  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchAllProductsData = async () => {
      try {
        const allProductsData = await getProductsItems();
        setAllProducts(allProductsData);
      } catch(err) {
        console.log(err);
      }
    }
    fetchAllProductsData();
  })
  return (
    <div className='p-5'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {allProducts.map((product) => (
        <ProductCard key={product.id} product={product}/>
      ))}
      </div>
      


    </div>
  )
}

export default AllProduct