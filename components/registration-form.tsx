"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    cedula: "",
    role: "",
    acceptPolicy: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData)
    setSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        fullName: "",
        email: "",
        cedula: "",
        role: "",
        acceptPolicy: false,
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  return (
    <section className="relative py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#003893] mb-4 text-balance">
            Somos el partido del ORDEN
          </h2>
          <p className="text-xl sm:text-2xl text-[#003893] font-semibold text-pretty">Únete al equipo</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="p-6 sm:p-8 lg:p-10 shadow-2xl border-2 border-[#003893]/20">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-[#003893] mb-2">¡Gracias por unirte!</h3>
                <p className="text-gray-600">Nos pondremos en contacto contigo pronto.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombre Completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/20 outline-none transition-all"
                    placeholder="Ingresa tu nombre completo"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Correo Electrónico <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/20 outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>

                {/* Cedula */}
                <div>
                  <label htmlFor="cedula" className="block text-sm font-semibold text-gray-700 mb-2">
                    Cédula <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="cedula"
                    name="cedula"
                    required
                    value={formData.cedula}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/20 outline-none transition-all"
                    placeholder="Número de cédula"
                  />
                </div>

                {/* Role Selection */}
                <div>
                  <label htmlFor="role" className="block text-lg font-semibold text-gray-700 mb-2">
                    ¿Cúal es tu función dentro de la organización? <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="role"
                    name="role"
                    required
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="Escribe tu rol aquí"
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-[#003893] focus:ring-2 focus:ring-[#003893]/20 outline-none transition-all bg-white"
                  />
                </div>

                {/* Privacy Policy Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="acceptPolicy"
                    name="acceptPolicy"
                    required
                    checked={formData.acceptPolicy}
                    onChange={handleChange}
                    className="mt-1 w-5 h-5 rounded border-2 border-gray-300 text-[#003893] focus:ring-2 focus:ring-[#003893]/20"
                  />
                  <label htmlFor="acceptPolicy" className="text-sm text-gray-700">
                    He leído y acepto la{" "}
                    <a href="#" className="text-[#003893] font-semibold hover:underline">
                      Política de Tratamiento de Datos Personales
                    </a>{" "}
                    <span className="text-red-500">*</span>
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#003893] to-[#0052cc] hover:from-[#002870] hover:to-[#003f9e] text-white font-bold py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  ENVIAR MIS DATOS
                </Button>
              </form>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
