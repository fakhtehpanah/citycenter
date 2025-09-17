import { useEffect, useState } from "react";

export default function LandingPage() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);

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
    <div className="relative min-h-screen border border-dashed border-amber-300   flex flex-col items-center justify-center  overflow-hidden">

      <svg className="absolute " viewBox="0 0 50 50" >
        <path fill="rgba(245,158,11,1)" d="M83,61.5Q77,73,67.5,83Q58,93,43,90.5Q28,88,20.5,75.5Q13,63,15,50.5Q17,38,25,29.5Q33,21,45,15.5Q57,10,68,17.5Q79,25,84,37.5Q89,50,83,61.5Z"/>
      </svg>
      <img className="absolute w-80 bottom-10 lg:left-5  border border-dashed border-amber-400" src="/Online-Shopping.png" alt="" />
      {/* <svg
        className="absolute top-5 right-10 w-96 h-96 animate-blob animation-delay-2000 transition-all duration-900 hover:scale-125"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#E8DAFF"
          d="M44.2,-46.3C55.9,-32.4,63.2,-16.2,65.7,2.5C68.2,21.3,66,42.5,54.3,57.7C42.5,72.8,21.3,81.8,4.5,77.3C-12.3,72.8,-24.7,54.9,-38,39.8C-51.3,24.7,-65.5,12.3,-65.7,-0.2C-65.9,-12.7,-52.1,-25.5,-38.8,-39.3C-25.5,-53.2,-12.7,-68.2,1.7,-69.9C16.2,-71.7,32.4,-60.1,44.2,-46.3Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute bottom-10 right-20 w-96 h-96 animate-blob transition-all duration-500 hover:scale-125"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#D0E2FF"
          d="M36.5,-43.4C49.2,-32.9,62.5,-23.2,70.5,-8C78.4,7.1,80.9,27.7,71.6,39C62.3,50.4,41.1,52.7,22.6,57.5C4,62.4,-12.1,69.8,-28.8,68.3C-45.5,66.9,-62.9,56.6,-68,42.1C-73.2,27.5,-66,8.5,-61.4,-9.7C-56.9,-28,-54.9,-45.5,-45.1,-56.5C-35.3,-67.5,-17.7,-71.8,-2.9,-68.4C11.9,-65,23.9,-53.8,36.5,-43.4Z"
          transform="translate(100 100)"
        />
      </svg>
      <svg
        className="absolute bottom-10 right-20 w-96 h-96 animate-blob animation-delay-4000 transition-all duration-700 hover:scale-125"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#FFD6E8"
          d="M27.3,-47.7C39,-40.6,54.4,-40.5,61.3,-33.7C68.2,-26.9,66.7,-13.4,63.4,-1.9C60.1,9.6,55.1,19.3,51.9,32.5C48.6,45.7,47.2,62.5,38.9,64.9C30.5,67.3,15.3,55.3,3.7,48.9C-7.9,42.5,-15.8,41.8,-21.6,37.9C-27.5,34.1,-31.2,27.2,-34.4,20.3C-37.5,13.5,-40,6.7,-47.9,-4.5C-55.7,-15.8,-68.9,-31.6,-69.5,-44.9C-70,-58.2,-58,-68.9,-44.4,-74.9C-30.7,-80.8,-15.3,-81.9,-3.7,-75.4C7.8,-68.9,15.7,-54.9,27.3,-47.7Z"
          transform="translate(100 100)"
        />
      </svg> */}

      {/* بلاب‌های معلق */}

      {/* متن خوشامدگویی */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 z-10 mb-10 text-center">
        Welcome to ShopClassic
      </h1>

      {/* کارت اعداد */}
      <div className="flex gap-10 z-10">
        <div className="bg-white/30 p-6 rounded-2xl shadow-lg backdrop-blur-3xl text-center">
          <p className="text-3xl font-bold text-green-600">{count1}</p>
          <p className="text-gray-500">Happy Customers</p>
        </div>
        <div className="bg-white/30 backdrop-blur-3xl p-6 rounded-2xl shadow-lg text-center">
          <p className="text-3xl font-bold text-blue-600">{count2}</p>
          <p className="text-gray-500">Products Sold</p>
        </div>
        <div className="bg-white/30 backdrop-blur-3xl p-6 rounded-2xl shadow-lg text-center">
          <p className="text-3xl font-bold text-pink-600">{count3}</p>
          <p className="text-gray-500">Orders Delivered</p>
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
