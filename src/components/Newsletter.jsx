import React from 'react'
import { motion } from 'framer-motion'

export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-black text-white py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold"
        >
          Receba curadoria semanal de IA
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-2 text-white/70"
        >
          Insights técnicos, produtos, pesquisas e threads que valem o seu tempo.
        </motion.p>
        <form className="mt-6 flex gap-3 justify-center">
          <input
            type="email"
            placeholder="seu@email.com"
            className="w-full max-w-md px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
          />
          <button type="submit" className="px-5 py-3 rounded-xl bg-white text-black font-medium hover:opacity-90">
            Assinar
          </button>
        </form>
      </div>
    </section>
  )
}
