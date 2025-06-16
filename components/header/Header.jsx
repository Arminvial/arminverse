// components/Header.jsx
"use client";

import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="w-full py-1 md:py-7 px-6 bg-zinc-900 border-b border-zinc-800 relative ">
      <div className="max-w-6xl ml-10 flex justify-between items-center">
        <Link
          href="/resume"
          className="text-s px-1 md:px-6 py-2  bg-purple-600 hover:bg-purple-700 text-white rounded-full transition"
        >
          مشاهده بیشتر رزومه
        </Link>

        <div className="relative md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
          <Image
            src="/logopic.png"
            alt="Armin Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
