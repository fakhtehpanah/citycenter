import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black text-white relative">
              {/* <svg className="absolute top-0" viewBox="0 0 50 100" ><path fill="rgba(245,158,11,1)" d="M61,67.5Q30,85,29,48.5Q28,12,60,31Q92,50,61,67.5Z"/></svg> */}

      <div className="max-w-7xl  mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
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