"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function AnimatedBackground() {
  const [floatingElements, setFloatingElements] = useState<
    Array<{
      id: number
      delay: number
      duration: number
      x: number
      y: number
    }>
  >([])

  useEffect(() => {
    setFloatingElements(
      Array.from({ length: 8 }, (_, i) => ({
        id: i,
        delay: i * 2,
        duration: 20 + i * 3,
        x: Math.random() * 100,
        y: Math.random() * 100,
      })),
    )
  }, [])

  if (floatingElements.length === 0) {
    return null
  }

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute text-[#003893] opacity-[0.03] font-black select-none"
          style={{
            fontSize: `${120 + element.id * 20}px`,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            x: [0, 50, -30, 0],
            y: [0, -30, 50, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: element.duration,
            repeat: Number.POSITIVE_INFINITY,
            delay: element.delay,
            ease: "linear",
          }}
        >
          C106
        </motion.div>
      ))}
    </div>
  )
}
