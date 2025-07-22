'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Clock, Trophy, DollarSign, Puzzle, TrendingUp, Handshake } from 'lucide-react'

const scrollToCalendly = () => {
  const element = document.querySelector('#agendar')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const differentiators = [
  {
    icon: Clock,
    title: 'Implementação Ágil',
    description: 'Enquanto outros demoram meses, entregamos soluções funcionais em semanas. Mais rapidez, menor custo, maior flexibilidade.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Trophy,
    title: 'Experiência Multidisciplinar',
    features: [
      'Combinamos mais de 10 anos de inteligência em marketing, vendas e negócios',
      '+ 50 milhões em receita gerados para nossos clientes e parceiros',
      '+ 10 milhões investidos em campanhas de geração e leads',
      'Pioneiros em IA, no mercado desde quando se ouviu falar em ChatGPT'
    ],
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: DollarSign,
    title: 'Foco Total em ROI e Crescimento',
    features: [
      'Cada projeto é estruturado para gerar retorno financeiro mensurável',
      'Não fazemos IA por fazer',
      'Implementamos soluções que aumentam receita e reduzem custos'
    ],
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Puzzle,
    title: 'Soluções 100% Personalizadas',
    features: [
      'Zero templates genéricos',
      'Cada automação e agente é desenvolvido especificamente para seu negócio',
      'Integramos com suas ferramentas e processos existentes'
    ],
    gradient: 'from-orange-500/20 to-red-500/20'
  },
  {
    icon: TrendingUp,
    title: 'Visão de Escalabilidade',
    features: [
      'Criamos sistemas que crescem junto com seu negócio',
      'As soluções suportam aumento de demanda sem precisar refazer tudo do zero',
      'Projetos que escalam sem limites'
    ],
    gradient: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    icon: Handshake,
    title: 'Parceria Contínua',
    features: [
      'Não entregamos e sumimos',
      'Acompanhamos resultados, otimizamos performance',
      'Evoluímos as soluções conforme seu negócio cresce'
    ],
    gradient: 'from-teal-500/20 to-blue-500/20'
  }
]

export default function WhyMutupSection() {
  return (
    <section id="por-que-mutup" className="section-padding bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="section-title">
              POR QUE ESCOLHER A MUTUP
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                6 diferenciadores
              </span>{' '}
              que nos tornam únicos no mercado
            </h2>
          </ScrollReveal>
        </div>

        {/* Differentiators Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {differentiators.map((diff, index) => (
            <ScrollReveal key={diff.title} delay={0.2 + index * 0.1}>
              <motion.div
                className={`bg-gradient-to-br ${diff.gradient} p-8 rounded-xl border border-white/10 group hover:border-white/20 transition-all duration-300 h-full`}
                whileHover={{ y: -5 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <diff.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {diff.title}
                  </h3>
                  
                  {diff.description ? (
                    <p className="text-gray-300 leading-relaxed text-lg">
                      {diff.description}
                    </p>
                  ) : (
                    <ul className="space-y-3">
                      {diff.features?.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <ScrollReveal delay={0.8}>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Pronto para transformar seu negócio com IA?
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Descubra como nossa abordagem única pode acelerar seus resultados. 
                Agende uma conversa estratégica e veja exatamente onde a IA pode gerar mais impacto no seu negócio.
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