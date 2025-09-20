import Link from "next/link";

// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black rounded-t-4xl text-white relative lg:p-10">
<svg className="absolute top-0 lg:hidden" viewBox="0 100 500 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="#F2F4F8" d="M40.8,19.5C30.6,41.4,-15.5,38.5,-28.3,15.2C-41.1,-8.1,-20.5,-51.8,2.5,-50.4C25.6,-48.9,51.1,-2.3,40.8,19.5Z" transform="translate(100 100)" />
</svg>
      <div className="max-w-7xl   mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm z-30">&copy; 2025 ShopClassic. All rights reserved.</p>
        <div className="flex space-x-4 mt-2 md:mt-0 text-sm">
          <Link href="#" className="hover:text-gray-900">Facebook</Link>
          <Link href="#" className="hover:text-gray-900">Twitter</Link>
          <Link href="#" className="hover:text-gray-900">Instagram</Link>
        </div>
      </div>
      <svg className="absolute z-10 bottom-0 right-0" viewBox="0 0 500 100" ><path fill="rgba(245,158,11,1)" d="M93.5,57Q95,64,93,71Q91,78,80.5,77Q70,76,69,86Q68,96,60,85.5Q52,75,46.5,82.5Q41,90,39,81.5Q37,73,28,75.5Q19,78,24.5,68.5Q30,59,16.5,58Q3,57,4,50Q5,43,12,39Q19,35,22,31Q25,27,26.5,19.5Q28,12,33.5,7Q39,2,45.5,11.5Q52,21,57,20Q62,19,70.5,16.5Q79,14,84,19Q89,24,80,33.5Q71,43,81.5,46.5Q92,50,93.5,57Z"/></svg>
    </footer>
  );
}