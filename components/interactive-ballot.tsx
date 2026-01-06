"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function InteractiveBallot() {
  const [hoveredBox, setHoveredBox] = useState<"logo" | "number" | null>(null)

  return (
    <div className="space-y-4">
      <p className="text-sm font-semibold text-[#003893] uppercase tracking-wide">Partido Conservador Colombiano</p>

      <div className="bg-white border-4 border-[#003893] rounded-lg p-6 shadow-xl">
        <div className="grid grid-cols-2 gap-4">
          {/* Logo Box */}
          <motion.div
            className="relative bg-[#003893] rounded-lg p-8 cursor-pointer aspect-square flex items-center justify-center"
            onHoverStart={() => setHoveredBox("logo")}
            onHoverEnd={() => setHoveredBox(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* C Logo */}
            <svg viewBox="0 0 100 100" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M70 20C60 12 48 10 38 15C28 20 22 30 22 42C22 54 28 64 38 69C48 74 60 72 70 64"
                stroke="white"
                strokeWidth="12"
                strokeLinecap="round"
              />
            </svg>

            {/* Animated X Mark */}
            <AnimatePresence>
              {hoveredBox === "logo" && (
                <motion.svg
                  className="absolute inset-0 w-full h-full p-4"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.line
                    x1="20"
                    y1="20"
                    x2="80"
                    y2="80"
                    stroke="#60D5F0"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.line
                    x1="80"
                    y1="20"
                    x2="20"
                    y2="80"
                    stroke="#60D5F0"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Number Box */}
          <motion.div
            className="relative bg-white border-4 border-gray-300 rounded-lg p-8 cursor-pointer aspect-square flex items-center justify-center"
            onHoverStart={() => setHoveredBox("number")}
            onHoverEnd={() => setHoveredBox(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Number 106 */}
            <span className="text-5xl md:text-6xl font-black text-gray-900">106</span>

            {/* Animated X Mark */}
            <AnimatePresence>
              {hoveredBox === "number" && (
                <motion.svg
                  className="absolute inset-0 w-full h-full p-4"
                  viewBox="0 0 100 100"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <motion.line
                    x1="20"
                    y1="20"
                    x2="80"
                    y2="80"
                    stroke="#003893"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                  <motion.line
                    x1="80"
                    y1="20"
                    x2="20"
                    y2="80"
                    stroke="#003893"
                    strokeWidth="8"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: 0.15 }}
                  />
                </motion.svg>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <p className="text-xs md:text-sm text-gray-600 text-center italic">
        Pasa el cursor sobre las casillas para aprender cómo votar
      </p>
    </div>
  )
}
