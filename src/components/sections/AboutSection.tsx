'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Target, TrendingUp, Users, Zap } from 'lucide-react'

const scrollToCalendly = () => {
  const element = document.querySelector('#agendar')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const features = [
  {
    icon: Target,
    title: 'Foco em Resultados',
    description: 'Cada projeto é estruturado para gerar ROI mensurável'
  },
  {
    icon: TrendingUp,
    title: 'Crescimento Exponencial',
    description: 'Soluções que escalam junto com seu negócio'
  },
  {
    icon: Users,
    title: 'Experiência Multidisciplinar',
    description: '+8 anos em marketing digital, IA e business intelligence'
  },
  {
    icon: Zap,
    title: 'Implementação Ágil',
    description: 'Entregamos soluções funcionais em semanas, não meses'
  }
]

export default function AboutSection() {
  return (
    <section id="quem-somos" className="section-padding bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="section-title">
              QUEM SOMOS
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              A primeira aceleradora de inteligência artificial do Brasil{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                focada em resultados exponenciais
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <ScrollReveal delay={0.3}>
              <p className="text-lg text-gray-300 leading-relaxed">
                A <strong className="text-white">Mutup</strong> nasceu da visão de que toda empresa pode escalar 
                exponencialmente usando IA de forma estratégica e personalizada. Fundada por{' '}
                <strong className="text-white">Matheus Rafael Pimenta</strong>, especialista com mais de 8 anos 
                de experiência em marketing digital, análise de dados e inteligência artificial, criamos soluções 
                que transformam negócios em máquinas de crescimento.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-lg text-gray-300 leading-relaxed">
                Nossa trajetória única combina expertise em <strong className="text-white">marketing digital</strong>,{' '}
                <strong className="text-white">vendas</strong>, <strong className="text-white">business intelligence</strong>{' '}
                e <strong className="text-white">desenvolvimento de IA</strong>, garantindo que cada implementação 
                gere impacto real no faturamento e operações dos nossos clientes.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-lg border border-white/10">
                <p className="text-xl font-semibold text-white mb-2">
                  Não somos mais uma consultoria de IA.
                </p>
                <p className="text-gray-300">
                  Somos aceleradores de negócios que usam inteligência artificial como ferramenta de crescimento exponencial.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="cta"
                  size="cta"
                  onClick={scrollToCalendly}
                  className="mt-4"
                >
                  AGENDAR DIAGNÓSTICO DE IA
                </Button>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={0.3 + index * 0.1}>
                <motion.div
                  className="glass-effect p-6 rounded-lg group hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <feature.icon className="h-8 w-8 text-blue-400 mb-4 group-hover:text-purple-400 transition-colors" />
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          <ScrollReveal delay={0.7}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">+50M</div>
              <div className="text-gray-400">Em receita gerada para clientes</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.8}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">+10M</div>
              <div className="text-gray-400">Investidos em campanhas de leads</div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.9}>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">+8</div>
              <div className="text-gray-400">Anos de experiência em IA</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}