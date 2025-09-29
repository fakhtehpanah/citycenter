import { useRouter } from "next/router";
import { getProductsItems } from "@/components/api/product";
import { Product } from "@/types/types";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleMenu = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const menuItems = [
    {
      title: "Technical details",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean justo erat, fringilla id malesuada ac, vehicula ut orci. In vel ante nisl. Maecenas commodo dignissim dolor. Mauris orci sapien, mollis nec vulputate vel, sagittis nec nunc. Proin nec fringilla justo, eget tincidunt nisi. Nullam sollicitudin neque ac iaculis volutpat. Quisque et ex aliquet orci tincidunt convallis. Mauris accumsan porttitor nisl, vitae luctus risus ullamcorper a. Fusce feugiat enim id nunc ultrices lobortis.",
    },
    {
      title: "Benefits and uniqueness",
      answer: "Aliquam elit nibh, mattis vitae congue eu, iaculis a ligula. Cras porta, augue in pharetra porttitor, diam felis sodales nunc, a laoreet nisl quam rhoncus risus. Duis at ligula laoreet, malesuada sapien sed, commodo dui. Suspendisse placerat tempus nisi a ultricies.",
    },
  ];

  useEffect(() => {
    if (!id) return;

    const fetchProduct = async () => {
      const allProducts = await getProductsItems();
      const found = allProducts.find((p: Product) => p.id.toString() === id);
      console.log(product);
      setProduct(found || null);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="bg-[#fff0d6] relative flex flex-col justify-between p-5 lg:py-10">
      <div className="p-10   flex flex-col lg:flex-row lg:justify-center lg:gap-x-10  gap-y-5 items-center ">
        <img
          src="/food.JPG"
          alt={product.title}
          className="rounded lg:w-[400px]"
        />
        <div className="flex flex-col gap-y-5 lg:w-1/3 ">
          <h1 className="text-2xl  font-bold lg:line-clamp-2">
            {product.title}
          </h1>
          <p className=" font-bold text-4xl">${product.price}</p>
          <p className="text-gray-500 capitalize">{product.category}</p>
          <button className="border w-full bg-black text-white hover:bg-white hover:text-black rounded-3xl cursor-pointer p-3 ">
            add to Card
          </button>
          <div className="flex flex-col gap-y-5">
            {menuItems.map((item, index) => (
              <div
                className="border flex flex-col gap-y-5 border-slate-300 px-5 py-2.5 rounded-md"
                key={index}
              >
                <div className="flex justify-between">
                  <button
                    className="flex gap-x-18 cursor-pointer "
                    onClick={() => toggleMenu(index)}
                  >
                    {item.title}
                  </button>
                  <ChevronDown
                    className={`w-5 h-5  transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180 " : ""
                    }`}
                  />
                </div>

                {openIndex === index && <div className="bg-amber-100 p-2.5">{item.answer}</div>}
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
