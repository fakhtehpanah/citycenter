import { getProductsItems } from '@/components/api/product';
import React, { useEffect, useState } from 'react'
import ProductCard from '../productCard/ProductCard';
import type { Product } from '@/types/types';

function AllProduct() {

  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [card, setCard] = useState<Product[]>([]);
  

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
  }, []);

  const addToCard = (product: Product) => {
        setCard([...card, product]);
        console.log('card: ', [...card, product])
  
      }   

  return (
    <div className='p-5'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
        {allProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCard={addToCard}/>
      ))}
      </div>
      


    </div>
  )
}

export default AllProduct