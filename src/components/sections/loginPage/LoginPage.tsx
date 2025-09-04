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
    <div className="min-h-screen flex flex-col lg:flex-row-reverse items-center justify-center bg-gray-100 gap-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Login
        </h2>

        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
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

        <p className="mt-6 text-sm text-gray-600 text-center">
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
    </div>
  );
}