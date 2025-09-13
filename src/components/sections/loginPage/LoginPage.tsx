'use client'
import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("email:", email, "password:", password);
  };

  return (
    <div className="relative py-10 min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center  gap-10">
      <svg className="absolute top-0 right-0 -z-10 animate-blob animation-delay-2000 " viewBox="0 0 100 100" ><path fill="rgba(244,232,255,1)" d="M84.5,54.5Q84,59,86.5,66.5Q89,74,80.5,73.5Q72,73,70,79Q68,85,62.5,84.5Q57,84,52.5,83Q48,82,40.5,89Q33,96,30,89Q27,82,20.5,80.5Q14,79,17.5,71Q21,63,13,59.5Q5,56,8.5,50.5Q12,45,13,39.5Q14,34,17,30Q20,26,25.5,24.5Q31,23,32.5,13.5Q34,4,40.5,5Q47,6,52.5,9.5Q58,13,62.5,15Q67,17,73.5,17Q80,17,84,22Q88,27,92,32Q96,37,90.5,43.5Q85,50,84.5,54.5Z"/></svg>
      <div className="w-full max-w-md flex flex-col gap-y-4 bg-white rounded-2xl shadow-lg py-2 px-4 lg:p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 py-2">
          Login
        </h2>

        <form className="space-y-6 z-1" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700 py-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          

          <div>
            <label htmlFor="password" className="block text-gray-700 py-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full bg-green-700 text-white py-3 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Login
            </button>
          </Link>
        </form>

        <p className="text-sm text-gray-600 text-center">
          Do you have an account?{" "}
          <a
            href="#"
            className="text-green-700 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>


      <div className="w-full max-w-md lg:max-w-lg">
        <img
          className="rounded-2xl shadow-lg object-cover w-full h-80 lg:h-[28rem]"
          src="/product.webp"
          alt="Login Illustration"
        />
      </div>
      <svg className="absolute -z-20 left-0 animate-blob " viewBox="0 0 100 100" ><path fill="rgba(222,242,255,1)" d="M82,61Q84,72,76.5,82Q69,92,56.5,93.5Q44,95,35.5,85.5Q27,76,19,69Q11,62,15,51.5Q19,41,24,33Q29,25,36.5,17.5Q44,10,56,10Q68,10,78.5,17.5Q89,25,84.5,37.5Q80,50,82,61Z"/></svg>

      <style jsx>{`
        .animate-blob {
          animation: blob 10s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
          .animation-delay-10000 {
          animation-delay: 10s;
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