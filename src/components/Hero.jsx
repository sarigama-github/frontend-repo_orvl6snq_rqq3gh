import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[78vh] w-full bg-black text-white overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/vc19ejtcC5VJjy5v/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pt-28 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-white/80 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
            Tendências de IA em tempo real
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">Seu hub moderno de notícias sobre IA</h1>
          <p className="text-white/70 mt-4 text-lg">Acompanhe pesquisas, lançamentos e opiniões que moldam o futuro. Tudo em um feed elegante, rápido e atualizado.</p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#feed" className="px-5 py-3 rounded-full bg-white text-black font-medium hover:opacity-90 transition">Explorar o feed</a>
            <a href="#newsletter" className="px-5 py-3 rounded-full border border-white/20 text-white hover:bg-white/5 transition">Assinar newsletter</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
