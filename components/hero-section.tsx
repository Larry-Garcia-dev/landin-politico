"use client"

import { motion } from "framer-motion"
import InteractiveBallot from "./interactive-ballot"

export default function HeroSection() {
  return (
    <section className="relative pt-32 md:pt-40 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text & Interactive Ballot */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#003893] leading-tight text-balance"
              >
                RECUERDA, MARCA: CÁMARA
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#003893] italic text-pretty"
              >
                Con Humildad se Trabaja por la Gente
              </motion.p>
            </div>

            {/* Interactive Ballot */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <InteractiveBallot />
            </motion.div>
          </motion.div>

          {/* Right Side - Candidate Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/img1.jpeg"
                alt="Gerardo Yepes Caro con simpatizantes"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003893]/20 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
