'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Search, Code, Link, Rocket } from 'lucide-react'

const scrollToCalendly = () => {
  const element = document.querySelector('#agendar')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const processSteps = [
  {
    icon: Search,
    title: 'Diagnóstico Profundo',
    shortTitle: 'DIAGNÓSTICO',
    description: 'Mapeamos toda sua operação comercial e operacional, identificamos gargalos, analisamos fluxos de trabalho e descobrimos onde a IA gerará maior impacto. Inclui análise de concorrentes e benchmarking de mercado.',
    position: 'top-right',
    color: 'blue',
    angle: '0deg'
  },
  {
    icon: Code,
    title: 'Desenvolvimento Personalizado',
    shortTitle: 'DESENVOLVIMENTO',
    description: 'Criamos soluções sob medida, integramos com suas ferramentas de preferência e transformamos seu projeto em realidade.',
    position: 'bottom-right',
    color: 'purple',
    angle: '90deg'
  },
  {
    icon: Link,
    title: 'Integração com Sistemas',
    shortTitle: 'INTEGRAÇÃO',
    description: 'Conectamos as soluções de IA com suas ferramentas existentes (CRM, e-mail marketing, WhatsApp, planilhas, sistemas de gestão) garantindo que tudo funcione de forma sincronizada e sem interrupções.',
    position: 'bottom-left',
    color: 'green',
    angle: '180deg'
  },
  {
    icon: Rocket,
    title: 'Lançamento e Otimização',
    shortTitle: 'LANÇAMENTO',
    description: 'Fazemos o go-live monitorado, treinamos sua equipe, acompanhamos performance e implementamos melhorias baseadas em dados reais. Inclui relatórios de ROI e sugestões de expansão.',
    position: 'top-left',
    color: 'orange',
    angle: '270deg'
  }
]

const colorClasses: Record<string, string> = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  orange: 'from-orange-500 to-red-500'
}

export default function ProcessSection() {
  return (
    <section id="metodologia" className="section-padding bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-gradient-radial from-blue-500/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-gradient-radial from-purple-500/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="section-title">
              NOSSO PROCESSO
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Como transformamos sua empresa em uma{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                máquina de crescimento
              </span>
            </h2>
          </ScrollReveal>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Circular Process Visualization */}
          <div className="flex-1 relative">
            <ScrollReveal delay={0.4}>
              <div className="relative w-[500px] h-[500px] mx-auto">
                {/* Central Circle */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-white/20 to-white/5 border-2 border-white/30 flex items-center justify-center"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <div className="text-white font-bold text-center">
                    <div className="text-sm">PROCESSO</div>
                    <div className="text-xs text-gray-300">MUTUP</div>
                  </div>
                </motion.div>

                {/* Process Steps */}
                {processSteps.map((step, index) => {
                  const radius = 200
                  const angle = (index * 90) * (Math.PI / 180)
                  const x = radius * Math.cos(angle - Math.PI / 2)
                  const y = radius * Math.sin(angle - Math.PI / 2)

                  return (
                    <motion.div
                      key={step.title}
                      className="absolute"
                      style={{
                        left: `calc(50% + ${x}px - 80px)`,
                        top: `calc(50% + ${y}px - 80px)`
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.2 }}
                    >
                      {/* Step Circle */}
                      <div className={`relative w-40 h-40 rounded-full bg-gradient-to-br ${colorClasses[step.color]} p-1`}>
                        <div className="w-full h-full rounded-full bg-black/80 flex flex-col items-center justify-center text-center p-4">
                          <step.icon className="h-8 w-8 text-white mb-2" />
                          <div className="text-white font-bold text-xs leading-tight">
                            {step.shortTitle}
                          </div>
                          <div className="text-gray-300 text-xs mt-1">
                            {String(index + 1).padStart(2, '0')}
                          </div>
                        </div>
                      </div>

                      {/* Connecting Line */}
                      <div 
                        className={`absolute top-1/2 left-1/2 transform -translate-y-1/2 w-16 h-px bg-gradient-to-r ${colorClasses[step.color]}`}
                        style={{
                          transformOrigin: 'left center',
                          transform: `translate(-50%, -50%) rotate(${180 + index * 90}deg)`
                        }}
                      />
                    </motion.div>
                  )
                })}

                {/* Orbital Ring */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full border border-dashed border-white/20"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Process Details */}
          <div className="flex-1 space-y-8">
            {processSteps.map((step, index) => (
              <ScrollReveal key={step.title} delay={0.8 + index * 0.1}>
                <motion.div
                  className={`bg-gradient-to-r ${colorClasses[step.color]}/10 p-6 rounded-xl border border-white/10 group hover:border-white/20 transition-all duration-300`}
                  whileHover={{ x: 10 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[step.color]} flex-shrink-0`}>
                      <step.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-gray-400 font-mono text-sm">
                          {String(index + 1).padStart(2, '0')}
                        </div>
                        <h3 className="text-lg font-bold text-white">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <ScrollReveal delay={1.2}>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Comece sua jornada de transformação digital hoje
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Nosso processo comprovado já transformou dezenas de empresas. 
                Agende uma conversa estratégica e descubra como podemos acelerar seus resultados.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="cta"
                  size="cta"
                  onClick={scrollToCalendly}
                >
                  AGENDAR DIAGNÓSTICO DE IA
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}