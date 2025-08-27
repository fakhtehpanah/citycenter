import Image from 'next/image';
import React from 'react';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
  };
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="flex flex-col items-center gap-2 bg-white border rounded-lg shadow hover:shadow-lg transition p-4">
      <div className="">
        <img
          src='/food.JPG'
          className="rounded"
        />
      </div>
      <h2 className="text-sm font-semibold text-center line-clamp-2">{product.title}</h2>
      <p className="text-green-700 font-bold">${product.price}</p>
      <p className="text-gray-500 text-xs capitalize">{product.category}</p>
    </div>
  );
}

export default ProductCard;