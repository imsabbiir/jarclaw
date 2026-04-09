'use client'
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TwoDButton from "./twoDButton";

function Header() {
  const [open, setOpen] = useState(false);
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");
  const [sticky, setSticky] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef(0);

  // Detect scroll direction and sticky state
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 50) setSticky(true);
      else setSticky(false);

      if (currentScrollY > lastScrollY.current) setScrollDir("down");
      else setScrollDir("up");

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    if (open) document.addEventListener("mousedown", handleClickOutside);
    else document.removeEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  // Smooth scroll handler
  const handleSmoothScroll = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu after click
    }
  };

  return (
    <nav
      ref={headerRef}
      className={`w-full fixed left-0 top-0 z-50 transform transition-transform duration-300 ${
        scrollDir === "down" ? "-translate-y-full" : "translate-y-0"
      } ${sticky ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-transparent"}`}
    >
      <div className="w-11/12 mx-auto flex justify-between items-center p-3">
        {/* Logo */}
        <div className="logo flex items-center gap-3">
          <div className="flex items-center justify-center w-8 h-8 bg-[#fe5104]">
            <Image
              src="/arc.png"
              alt="Logo"
              width={500}
              height={500}
              className="object-cover h-5 w-5"
            />
          </div>
          <h1 className="text-lg sm:text-xl uppercase text-white font-bold font-space">
            jar<span className="text-[#fe5104]">claw</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <menu className="hidden lg:flex text-xs tracking-widest font-jetbrains items-center gap-10 uppercase">
          <ul className="flex gap-8">
            <button onClick={() => handleSmoothScroll("#usecases")} className="text-[#ffffff4d] hover:text-white transition cursor-pointer">
              use cases
            </button>
            <button onClick={() => handleSmoothScroll("#howitworks")} className="text-[#ffffff4d] hover:text-white transition cursor-pointer">
              how it works
            </button>
            <button onClick={() => handleSmoothScroll("#action")} className="text-[#ffffff4d] hover:text-white transition cursor-pointer">
              see it in action
            </button>
            <button onClick={() => handleSmoothScroll("#pricing")} className="text-[#ffffff4d] hover:text-white transition cursor-pointer">
              pricing
            </button>
          </ul>
          <TwoDButton text={"start free trial"} />
        </menu>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
          <span className="w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-md transition-all duration-300 ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="flex flex-col items-center gap-6 py-8 text-xs uppercase tracking-widest font-jetbrains">
          <button
            onClick={() => handleSmoothScroll("#usecases")}
            className="text-white/70 hover:text-white"
          >
            use cases
          </button>
          <button
            onClick={() => handleSmoothScroll("#howitworks")}
            className="text-white/70 hover:text-white"
          >
            how it works
          </button>
          <button
            onClick={() => handleSmoothScroll("#action")}
            className="text-white/70 hover:text-white"
          >
            see it in action
          </button>
          <button
            onClick={() => handleSmoothScroll("#pricing")}
            className="text-white/70 hover:text-white"
          >
            pricing
          </button>

          <TwoDButton text={"start free trial"} />
        </div>
      </div>
    </nav>
  );
}

export default Header;