import React from 'react'
import { Menu, Search, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/60 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center shadow">
            <Sparkles size={18} />
          </div>
          <span className="text-white font-semibold tracking-tight">IA News</span>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50" size={16} />
            <input
              type="text"
              placeholder="Buscar em IA..."
              className="pl-9 pr-3 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
          </div>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-white/10 text-white/80 hover:bg-white/5">
          <Menu size={18} />
        </button>
      </div>
    </header>
  )
}
