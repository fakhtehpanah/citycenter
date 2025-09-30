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
    <div  className="relative px-5 min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center  gap-10">
      
      <div className="w-full max-w-md flex flex-col py-10  gap-y-4 bg-white rounded-2xl shadow-lg p-5 lg:p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 py-2">
          Login
        </h2>

        <form className="space-y-6" onSubmit={handleLogin}>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
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
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none"
            />
          </div>

          <Link href="/dashboard">
            <button
              type="submit"
              className="w-full bg-black  text-white py-3 rounded-lg font-medium transition"
            >
              Login
            </button>
          </Link>
        </form>

        <p className="text-sm text-gray-600 text-center">
          Do you have an account?{" "}
          <a
            href="#"
            className=" font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </div>
      {/* <img width={300} className="absolute bottom-0  left-20 py-5 " src="/Group.png" alt="" /> */}

    </div>
    
  );
}