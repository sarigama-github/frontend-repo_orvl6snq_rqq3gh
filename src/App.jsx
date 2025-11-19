import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Feed from './components/Feed'
import Newsletter from './components/Newsletter'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Feed />
      <Newsletter />
      <footer className="border-t border-white/10 py-10 bg-black text-white/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} IA News — feito com ♥️</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Sobre</a>
            <a href="#" className="hover:text-white">Contato</a>
            <a href="#" className="hover:text-white">Privacidade</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
