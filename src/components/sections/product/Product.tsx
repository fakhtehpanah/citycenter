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

    const categoryStyles: Record<string, string> = {
  electronics: "bg-gradient-to-r from-pink-50 to-purple-50",
  jewelery: " bg-gradient-to-r from-blue-50 to-indigo-50",
  "men's clothing": "bg-gradient-to-r from-green-50 to-emerald-50",
  "women's clothing": "bg-gradient-to-r from-yellow-50 to-orange-50",
};

    
  return (
    <div className='bg-[#fff0d6] p-5'>
      {/* <Header setProductByCategory={setProductByCategory} /> */}
      <LandingPage/>
      <div className="relative" >
                    <svg className='absolute  w-100 bottom-0 right-0 ' viewBox="0 0 50 100" ><path fill="rgba(251,236,255,1)" d="M96.5,58Q96,66,89,70.5Q82,75,76.5,78.5Q71,82,64.5,81.5Q58,81,52.5,84.5Q47,88,39,90.5Q31,93,29,84Q27,75,18.5,73.5Q10,72,12.5,64Q15,56,13.5,50Q12,44,13,37.5Q14,31,17.5,25Q21,19,26,13Q31,7,38.5,4.5Q46,2,53,5.5Q60,9,64.5,15Q69,21,72,25.5Q75,30,81,33.5Q87,37,92,43.5Q97,50,96.5,58Z"/></svg>
                    <svg className='absolute  w-100 top-0 right-0 ' viewBox="0 0 50 100" ><path fill="rgba(226,236,254,1)" d="M83,63Q71,76,56,82Q41,88,25,79Q9,70,7.5,49.5Q6,29,24.5,23.5Q43,18,60.5,16.5Q78,15,86.5,32.5Q95,50,83,63Z"/></svg> 

        {categories.map((cat, index) => (
          <section key={cat} className= {` p-5 flex flex-col gap-y-5
            ${ categoryStyles[cat] || "bg-white"}`
          }>

            {/* <img className='absolute bottom-0' src="/Shopping-Online-Shopping--Streamline-Bruxelles.png" alt="" /> */}
            <h2 className="text-xl font-bold  capitalize">{cat}</h2>
            <div className="p-2.5 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 border border-dashed border-amber-300">
              {productByCategory[cat]?.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {index === categories.length - 1 && (
              <img className='absolute bottom-5 right-5 ' width={300} src="/happy-shopping.png" alt="" />
            )}
          </section>
        ))}
      </div>
      {/* <div className='p-5 bg-red-400'>
        {products?.map((p) => (
          <ProductCard key={p.id} product={p}/>
        ))}
      </div> */}


      <style jsx>{`
        .animate-blob {
          animation: blob 5s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(10px, -30px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>

    </div>

  )
}

export default Product