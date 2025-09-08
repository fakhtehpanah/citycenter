"use client";

import { useCard } from "@/context/CardContext";
import { Product } from "@/types/types";

// import { useCard } from "../context/CardContext";

export interface ProductDashboardProps {
  product: Product;
}


export default function Dashboard() {
  const { card, removeFromCard, deletedItem } = useCard();

  return (
    <div className="py-10 px-5">
      <div className="max-w-4xl  mx-auto p-5 border border-slate-200 rounded-2xl shadow-lg">
      <h2 className="text-3xl font-bold  text-gray-800 py-3">
        🛍️ سبد خرید من
      </h2>

      {card.length === 0 ? (
        <p className="text-gray-500 text-center py-10">
          هیچ محصولی در سبد خرید وجود ندارد.
        </p>
      ) : (
        <ul className="space-y-6 py-5">
          {card.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between border border-slate-200 rounded-lg p-4 shadow-sm hover:shadow-md transition"
            >
              {/* اطلاعات محصول */}
              <div className="flex items-center space-x-4">
                <img
                  src={'/food.JPG'}
                  alt={product.title}
                  className="w-20 h-20 object-cover rounded-lg border"
                />
                <div>
                  <p className="font-semibold text-lg text-gray-800">
                    {product.title}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">
                    {product.price.toLocaleString()} تومان
                  </p>
                </div>
              </div>

              {/* دکمه حذف */}
              <button
                onClick={() => removeFromCard(product)}
                className="px-4 py-2 text-sm font-medium bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition"
              >
                حذف
              </button>
            </li>
          ))}
        </ul>
      )}
      {deletedItem && 
      <div>
        {deletedItem.title}
      </div>
      
      }

      {/* جمع کل */}
      {card.length > 0 && (
        <div className=" border-t border-slate-200 py-4 flex justify-between items-center">
          <span className="text-xl font-semibold text-gray-800">جمع کل:</span>
          <span className="text-2xl font-bold text-blue-600">
            {card.reduce((sum, item) => sum + item.price, 0).toLocaleString()} تومان
          </span>
        </div>
      )}

      {/* دکمه ادامه خرید */}
      {card.length > 0 && (
        <div className="mt-6 text-center">
          <button className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-blue-600 transition">
            ادامه خرید
          </button>
        </div>
      )}
    </div>
  </div>
      
  );
}