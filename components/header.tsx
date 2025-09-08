"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const links = [
    { name: "Home", href: "#home" },
    { name: "About me", href: "#about" },
    { name: "Technologies", href: "#technologies" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const [isTop, setIsTop] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const handleScroll = () => {
      setIsTop(window.scrollY === 0);

      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      let currentSection = "home";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + scrollY;

        if (scrollY >= top - viewportHeight / 2) {
          currentSection = section.id;
        }
      });

      // футер: если дошли до низа страницы
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2
      ) {
        currentSection = "contact";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // сразу выставляем правильную подсветку

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-header-footer text-surface z-50 transition-all duration-300 ${
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
            {links.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className={`uppercase font-bold transition-colors duration-300 font-montserrat ${
                      isActive
                        ? "text-accent"
                        : "text-surface hover:text-accent"
                    }`}
                  >
                    {link.name}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-1 w-full h-[2px] bg-accent origin-left transform transition-transform duration-500 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
