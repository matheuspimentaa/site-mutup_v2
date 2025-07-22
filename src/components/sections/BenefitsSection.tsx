'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { X, Check } from 'lucide-react'

const scrollToCalendly = () => {
  const element = document.querySelector('#agendar')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const comparisons = [
  {
    without: 'Leads perdidos por falta de atendimento rápido',
    with: 'Atendimento instantâneo 24/7 com IA'
  },
  {
    without: 'Time comercial perdendo tempo com leads não qualificados',
    with: 'Apenas leads qualificados chegam ao time'
  },
  {
    without: 'Processos manuais lentos e sujeitos a erros',
    with: 'Automação inteligente e precisão de dados'
  },
  {
    without: 'Crescimento limitado pela capacidade da equipe',
    with: 'Escalabilidade exponencial sem aumentar headcount'
  },
  {
    without: 'Decisões baseadas em intuição',
    with: 'Insights baseados em dados e IA'
  },
  {
    without: 'Competitividade diminuindo no mercado',
    with: 'Vantagem competitiva através da tecnologia'
  },
  {
    without: 'ROI incerto em investimentos de marketing',
    with: 'ROI otimizado com automação inteligente'
  },
  {
    without: 'Dependência total da equipe interna',
    with: 'Sistemas que funcionam 24/7 independentemente'
  }
]

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="section-padding bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="section-title">
              BENEFÍCIOS DE QUEM TRABALHA COM A GENTE
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Veja a diferença que a{' '}
              <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                Mutup faz
              </span>{' '}
              no seu negócio
            </h2>
          </ScrollReveal>
        </div>

        {/* Comparison Table */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Without Mutup */}
          <ScrollReveal delay={0.3}>
            <motion.div
              className="bg-gradient-to-br from-red-500/10 to-red-900/10 p-8 rounded-xl border border-red-500/20"
              whileHover={{ y: -5 }}
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-red-500/20 px-6 py-3 rounded-full border border-red-500/30">
                  <X className="h-6 w-6 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">Sem a Mutup</h3>
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-red-500/5 border border-red-500/10"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <X className="h-5 w-5 text-red-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{item.without}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <p className="text-red-300 font-semibold">
                    Resultado: Crescimento lento e limitado
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* With Mutup */}
          <ScrollReveal delay={0.4}>
            <motion.div
              className="bg-gradient-to-br from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-green-500/20 relative"
              whileHover={{ y: -5 }}
            >
              {/* Winner Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                  ⚡ ESCOLHA VENCEDORA
                </div>
              </div>

              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-3 bg-green-500/20 px-6 py-3 rounded-full border border-green-500/30">
                  <Check className="h-6 w-6 text-green-400" />
                  <h3 className="text-2xl font-bold text-white">Com a Mutup</h3>
                </div>
              </div>

              <div className="space-y-4">
                {comparisons.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-4 rounded-lg bg-green-500/5 border border-green-500/10"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    <Check className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-100 font-medium">{item.with}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 rounded-lg p-4">
                  <p className="text-green-300 font-semibold">
                    Resultado: Crescimento exponencial garantido
                  </p>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* ROI Section */}
        <ScrollReveal delay={0.6}>
          <div className="text-center mb-12">
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Transformação Real em Números
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">300-500%</div>
                  <div className="text-gray-300">ROI no primeiro ano</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">3-5x</div>
                  <div className="text-gray-300">Aumento de produtividade</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Operação automatizada</div>
                </div>
              </div>

              <p className="text-gray-300 text-lg mb-6">
                Não basta apenas implementar IA - você precisa saber <strong className="text-white">onde</strong> implementar 
                primeiro para gerar mais resultado. E isso você consegue em 45 minutos de conversa com um especialista da Mutup.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Final CTA */}
        <div className="text-center">
          <ScrollReveal delay={0.8}>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para ver esses resultados na sua empresa?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Agende um diagnóstico gratuito de 45 minutos e descubra exatamente onde a IA pode 
                gerar mais impacto no seu negócio. Zero compromisso, máximo valor.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="cta"
                  size="cta"
                  onClick={scrollToCalendly}
                  className="text-lg shadow-2xl"
                >
                  AGENDAR DIAGNÓSTICO GRATUITO
                </Button>
              </motion.div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}