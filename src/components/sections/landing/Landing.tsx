import { useEffect, useState } from "react";

export default function LandingPage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

  const [quote, setQuote] = useState("");

  const handleQuote = () => {
    console.log(quote);
  };

  // تابع انیمیشن اعداد
  useEffect(() => {
    const interval1 = setInterval(() => {
      setCount1((prev) => (prev < 3000 ? prev + 50 : 3000));
    }, 30);

    const interval2 = setInterval(() => {
      setCount2((prev) => (prev < 3500 ? prev + 40 : 3500));
    }, 30);

    const interval3 = setInterval(() => {
      setCount3((prev) => (prev < 4000 ? prev + 60 : 4000));
    }, 30);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  return (
    <div className=" min-h-screen  rounded-4xl flex flex-col gap-10 lg:flex-row-reverse p-5 items-center lg:justify-between  overflow-hidden ">
        <div className="bg-orange-800/30 rounded-full ">
          <img
            className="lg:w-200 border-t"
            src="/a-woman-smiles-with-arms-crossed-PhotoRoom (16)@2x.png"
            alt=""
          />
      </div>


      <div className="flex flex-col gap-y-5 lg:border-l-4 lg:px-10">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 ">
          Welcome to ShopClassic
        </h1>
        <p className="lg:w-1/2">
          Pellen tesque in ipsum id orci porta dapibus. Sed port titor lectus
          nibh. Vivamus accumsan tincidunt. Vestibulum ac diam sit amet quam
          vehicula elementum sed suscipit tortor eghet felis porttitor volutpat.
          Vivamus
        </p>
                    

        <div className="flex flex-row  justify-around lg:w-1/2 z-10 bg-white rounded items-center gap-y-2.5">
          <input
            value={quote}
            onChange={(e) => setQuote(e.target.value)}
            type="text"
            placeholder="Enter your E-mail Address"
            className="p-5  rounded focus:outline-none"
          />
          <button
            onClick={handleQuote}
            className="bg-black  text-white p-2.5 rounded"
          >
            Get a Quote
          </button>
        </div>
              
<div className="flex  gap-1.5 z-10">
        <div className="bg-orange-400 p-3 lg:p-6 rounded-2xl shadow-lg backdrop-blur-3xl text-center">
          <p className="text-3xl font-bold text-green-600">{count1}</p>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div className="bg-orange-300 p-3 lg:p-6 backdrop-blur-3xl rounded-2xl shadow-lg text-center">
          <p className="text-3xl font-bold text-blue-600">{count2}</p>
          <p className="text-gray-500">Products Sold</p>
        </div>
        <div className="bg-orange-200 p-3 lg:p-6 backdrop-blur-3xl rounded-2xl shadow-lg text-center">
          <p className="text-3xl font-bold text-pink-600">{count3}</p>
          <p className="text-gray-500">Orders Delivered</p>
        </div>
      </div>
      </div>

     


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
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
      `}</style>
    </div>
  );
}
