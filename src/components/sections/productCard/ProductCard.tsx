import { useCard } from '@/context/CardContext';
import { Product } from '@/types/types';
import React from 'react';


export interface ProductCardProps {
  product: Product;
}

function ProductCard({ product }: ProductCardProps) {

  const {addToCard} = useCard();

  return (
    <div className="flex flex-col items-center gap-2 bg-white border border-green-700 rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="">
        <img
          src='/food.JPG'
          className="rounded"
        />
      </div>
      <h2 className="text-sm font-semibold text-center line-clamp-2">{product.title}</h2>
      <p className="text-green-700 font-bold">${product.price}</p>
      <p className="text-gray-500 text-xs capitalize">{product.category}</p>
      <button onClick={() => addToCard(product)} className='border p-2 border-green-700 rounded-lg hover:bg-green-700 hover:text-white'>add to Card</button>
    </div>
  );
}

export default ProductCard;