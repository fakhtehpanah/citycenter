import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 mt-10">
      <div className="max-w-7xl mx-auto p-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; 2025 ShopClassic. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
          <Link href="#" className="hover:text-gray-900">Facebook</Link>
          <Link href="#" className="hover:text-gray-900">Twitter</Link>
          <Link href="#" className="hover:text-gray-900">Instagram</Link>
        </div>
      </div>
    </footer>
  );
}