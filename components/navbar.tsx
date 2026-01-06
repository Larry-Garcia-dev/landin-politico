"use client"

import { useEffect, useState } from "react"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#003893] shadow-lg" : "bg-[#003893]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-3 sm:py-0 sm:h-16 md:h-20">
          <div className="flex-shrink-0">
            <h1 className="text-white font-bold text-lg md:text-xl lg:text-2xl tracking-tight text-center sm:text-left">
              GERARDO YEPES CARO
            </h1>
          </div>
          <div className="flex-shrink-0">
            <div className="bg-white px-4 py-2 rounded-lg shadow-md">
              <span className="text-[#003893] font-extrabold text-base md:text-lg lg:text-xl">CÁMARA C-106</span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
