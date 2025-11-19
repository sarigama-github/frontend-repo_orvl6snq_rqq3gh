import React from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, Flame, Brain, Crown, Sparkles } from 'lucide-react'

const posts = [
  {
    id: 1,
    tag: 'Pesquisa',
    title: 'Modelo supera benchmarks em raciocínio multimodal',
    excerpt: 'Novo paper apresenta arquitetura que combina agentes simbólicos e modelos de difusão para planejamento.',
    badge: 'Em alta',
    icon: Brain,
  },
  {
    id: 2,
    tag: 'Lançamento',
    title: 'Plataforma de agentes autônomos chega ao público',
    excerpt: 'Sistema orquestra ferramentas e memória de longo prazo com segurança e interpretabilidade.',
    badge: 'Novo',
    icon: Sparkles,
  },
  {
    id: 3,
    tag: 'Opinião',
    title: 'Por que modelos menores vencem com dados melhores',
    excerpt: 'Curadoria, sintéticos e instruções estruturadas destravam resultados com custo reduzido.',
    badge: 'Destaque',
    icon: Crown,
  },
]

function Card({ item, index }) {
  const Icon = item.icon || Flame
  return (
    <motion.a
      href="#"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition overflow-hidden"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_30%_-10%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_100%_120%,rgba(255,255,255,0.1),transparent_30%)]" />
      <div className="p-6 relative">
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="inline-flex items-center gap-2 px-2 py-1 rounded-full bg-white/10 border border-white/10">
            <Icon size={14} /> {item.tag}
          </span>
          <span className="px-2 py-1 rounded-full bg-white/5 border border-white/10 text-white/50">{item.badge}</span>
        </div>
        <h3 className="mt-4 text-xl font-semibold text-white group-hover:underline underline-offset-4 decoration-white/30">{item.title}</h3>
        <p className="mt-2 text-white/60">{item.excerpt}</p>
        <div className="mt-5 inline-flex items-center gap-1 text-white/80">
          Ler matéria <ArrowUpRight size={16} />
        </div>
      </div>
    </motion.a>
  )
}

export default function Feed() {
  return (
    <section id="feed" className="relative bg-black text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Feed de notícias</h2>
            <p className="text-white/60 mt-1">Atualizado com o melhor do mundo de IA</p>
          </div>
          <a href="#" className="text-white/70 hover:text-white">Ver tudo</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <Card key={p.id} item={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
