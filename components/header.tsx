"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const links = [
    { name: "About me", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-header text-surface z-50 transition-all duration-300 ${
        isTop ? "" : "shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
      }`}
    >
      <div
        className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300 ${
          isTop ? "px-6 py-6" : "px-3 py-5"
        }`}
      >
        <Link
          href="/"
          className="text-lg font-bold font-montserrat cursor-pointer"
        >
          [<span>NK</span>]
        </Link>

        <nav>
          <ul className="flex space-x-8">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-surface uppercase font-bold hover:text-accent transition-colors duration-300 font-montserrat"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
