// components/Header.tsx
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCard } from "@/context/CardContext";
import { ShoppingCart } from "lucide-react";

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
  const buttonRef = useRef<HTMLButtonElement>(null);


  

  useEffect(() => {

    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;

      if (!menuOpen) return;


      if (
        (menuRef.current && menuRef.current.contains(target)) ||
        (buttonRef.current && buttonRef.current.contains(target))
      ) {
        return;
      }
      setMenuOpen(false);
    }
      document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
  }, [menuOpen]);

  



  return (
    <header className=" sticky top-0 z-50 rounded-b-4xl">
      <div className="max-w-7xl  text-white rounded-b-4xl shadow bg-black  mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-xl font-semibold">ShopClassic</h1>
        </Link>

        {/* Search Box (hidden on small, visible on md+) */}
        <div className="relative  hidden md:block" >
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search products..."
            className="w-full px-10 py-2  rounded-lg border border-gray-700   outline-none transition"
          />
          <svg
            className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 "
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
        <nav className="hidden md:flex space-x-10 items-center font-medium px-5">
          <Link className="" href="/">Home</Link>
          <Link className="" href="/all-products">Products</Link>
          <Link className="" href="/">About</Link>
          <Link className="" href="/">Contact</Link>
          <Link className="bg-white text-black w-auto px-5 py-2.5  rounded-4xl hover:border hover:bg-black hover:text-white" href="/login-page">Login</Link>
          <Link href={'/dashboard'} className="relative">
              <ShoppingCart/>
              {card.length > 0 && (
                <span className="absolute -top-2 -right-4 text-amber-300 font-bold text-xl">{card.length}</span>
              )}
            </Link>
        </nav>


        {/* Mobile Menu Button */}
        <button ref={buttonRef}
          className="md:hidden p-2 rounded-lg  "
          onClick={() => {
            setMenuOpen(prev => !prev)

          }
          }
        >
          <svg
            className="w-6 h-6"
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
        <div ref={menuRef}  className={`md:hidden overflow-hidden transition-[max-height] duration-500 ease-in-out  ${
    menuOpen ? "max-h-96 opacity-100 p-4 bg-black text-white border-t rounded-4xl" : "max-h-0 opacity-0"
  } space-y-4`}>
          {/* Search on mobile */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 transition-all duration-700  rounded-lg border  border-gray-700 outline-none "
            />
         
            <svg
              className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 "
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
          <nav className="flex flex-col items-center space-y-2 font-medium">
            <Link className="" onClick={() => setMenuOpen(false)} href="/">Home</Link>
            <Link className="" onClick={() => setMenuOpen(false)} href="/all-products">Products</Link>
            <Link className="" onClick={() => setMenuOpen(false)} href="/">About</Link>
            <Link className="" onClick={() => setMenuOpen(false)} href="/">Contact</Link>
            <Link href={'/dashboard'} className="relative">
              <ShoppingCart/>
              {card.length > 0 && (
                <span className="absolute -top-2 -right-4 text-amber-300 font-bold text-xl">{card.length}</span>
              )}
            </Link>
            <Link className="bg-white text-black w-auto px-10 py-2 rounded hover:border hover:bg-black hover:text-white  text-center" onClick={() => setMenuOpen(false)} href="/login-page">Login</Link>

          </nav>
        </div>
      
    </header>
  );
}