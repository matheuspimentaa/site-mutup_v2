'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ScrollReveal from '@/components/ScrollReveal'

const scrollToCalendly = () => {
  const element = document.querySelector('#agendar')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Badge */}
        <ScrollReveal delay={0.2}>
          <div className="section-title">
            AUTOMATIZE O SEU NEGÓCIO E ESCALE SEUS RESULTADOS
          </div>
        </ScrollReveal>

        {/* Main Headline */}
        <ScrollReveal delay={0.4}>
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Escale{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              10X suas vendas
            </span>{' '}
            e lucro com{' '}
            <span className="relative">
              agentes de IA
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              />
            </span>
          </motion.h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={0.6}>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed max-w-3xl mx-auto">
            Soluções personalizadas de <strong className="text-white">Inteligência Artificial</strong> e automação, 
            para escalar suas vendas e otimizar seus processos operacionais e manuais{' '}
            <strong className="text-white">sem aumentar seu time</strong>
          </p>
        </ScrollReveal>

        {/* CTA Button */}
        <ScrollReveal delay={0.8}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="cta"
              size="cta"
              onClick={scrollToCalendly}
              className="text-lg font-bold shadow-2xl hover:shadow-white/25"
            >
              AGENDAR DIAGNÓSTICO DE IA
            </Button>
          </motion.div>
        </ScrollReveal>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 hidden lg:block">
          <motion.div
            className="w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 1, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        <div className="absolute top-1/3 right-16 hidden lg:block">
          <motion.div
            className="w-1 h-1 bg-purple-400 rounded-full"
            animate={{
              y: [10, -10, 10],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Scroll Indicator */}
      <ScrollReveal delay={1.2}>
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-px h-8 bg-gradient-to-b from-transparent to-gray-400 mb-2" />
            <span className="text-sm font-medium">Role para baixo</span>
          </div>
        </motion.div>
      </ScrollReveal>
    </section>
  )
}