// components/Header.tsx
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCard } from "@/context/CardContext";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState('');

  const {card} = useCard()

  // const handleKeyDown = (e) => {
  //   if (categories.length > 0) {
  //     const matchedCategory = categories.find(
  //       (cat) => cat.toLowerCase() === search.trim().toLowerCase()
  //     );
  //     if (matchedCategory) {
  //       onSearch(matchedCategory);
  //       console.log(matchedCategory)
  //     } else {
  //       console.log('not matched')
  //     }


  //   }

  // }

  const menuRef = useRef<HTMLDivElement>(null);

  

  useEffect(() => {

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      if (menuRef.current && !menuRef.current.contains(target)) {
            setMenuOpen(false)
      }
    }
      document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
  }, []);

  



  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl  mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold text-gray-800">ShopClassic</h1>
        </Link>

        {/* Search Box (hidden on small, visible on md+) */}
        <div className="relative w-1/3 hidden md:block">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
          />
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
          {/* <button onClick={handleSearch}>go</button> */}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          <Link href="/">Home</Link>
          <Link href="/all-products">Products</Link>
          <Link href="/">About</Link>
          <Link href="/">Contact</Link>
          <div>{card.length}</div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div ref={menuRef} className="md:hidden px-4 pb-4 space-y-4">
          {/* Search on mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 outline-none transition"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </div>

          {/* Mobile Nav */}
          <nav className="flex flex-col space-y-2 text-gray-600 font-medium">
            <Link onClick={() => setMenuOpen(false)} href="/">Home</Link>
            <Link onClick={() => setMenuOpen(false)} href="/all-products">Products</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </nav>
        </div>
      )}
    </header>
  );
}