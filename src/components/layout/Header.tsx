// components/Header.tsx
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <Link href="/">
          <h1 className="text-xl font-semibold text-gray-800">ShopClassic</h1>
        </Link>
        <nav className="space-x-6 text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/">Products</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
        </nav>
      </div>
    </header>
  );
}