'use client'

import ScrollReveal from '@/components/ScrollReveal'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Bot, Workflow, BrainCircuit } from 'lucide-react'

const scrollToCalendly = () => {
  const element = document.querySelector('#agendar')
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}

const services = [
  {
    icon: Bot,
    title: 'Agentes de IA Comerciais',
    description: 'Desenvolvemos agentes inteligentes que trabalham 24/7 na sua operação comercial: SDRs automatizados para qualificação de leads, assistentes de vendas que nutrem prospects, chatbots de atendimento que convertem visitantes em clientes.',
    result: 'Mais vendas com a mesma equipe',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Workflow,
    title: 'Automações de Processos',
    description: 'Criamos fluxos automatizados que eliminam trabalho manual repetitivo em todas as áreas: marketing, vendas, atendimento, RH e operações. Usando ferramentas como n8n e integrações inteligentes, transformamos tarefas que tomam horas em processos que rodam sozinhos.',
    result: 'Eficiência operacional máxima',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: BrainCircuit,
    title: 'Consultoria Estratégica em IA',
    description: 'Realizamos diagnóstico completo do seu negócio para identificar onde a IA gerará maior impacto financeiro. Criamos roadmap personalizado de implementação, priorizando soluções que trazem ROI imediato e crescimento sustentável.',
    result: 'Crescimento exponencial garantido',
    gradient: 'from-green-500/20 to-emerald-500/20'
  }
]

export default function ServicesSection() {
  return (
    <section id="servicos" className="section-padding bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <ScrollReveal>
            <div className="section-title">
              O QUE FAZEMOS
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Três pilares de{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                transformação digital
              </span>{' '}
              que aceleram seus resultados
            </h2>
          </ScrollReveal>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={0.3 + index * 0.2}>
              <motion.div
                className={`bg-gradient-to-br ${service.gradient} p-8 rounded-xl border border-white/10 group hover:border-white/20 transition-all duration-300 h-full`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center mb-6">
                    <div className="p-3 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors">
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 leading-relaxed flex-grow mb-6">
                    {service.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="bg-white/10 rounded-lg p-4 border border-white/20">
                      <p className="text-sm text-blue-300 font-semibold">
                        Resultado: {service.result}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Additional Section */}
        <div className="text-center space-y-8">
          <ScrollReveal delay={0.8}>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                Transformamos a sua ideia em realidade
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8">
                Não importa o quão complexa, específica ou "impossível" sua ideia pareça. Nossa especialização 
                em IA e automação nos permite criar soluções que outros consideram inviáveis.{' '}
                <strong className="text-white">Se você consegue imaginar, nós conseguimos construir.</strong>
              </p>
            </div>
          </ScrollReveal>

          {/* How We Do It */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <ScrollReveal delay={0.9}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Entendemos Sua Visão</h4>
                <p className="text-gray-400 text-sm">
                  Mergulhamos profundamente na sua ideia e negócio, por mais complexa que pareça. 
                  Mapeamos requisitos técnicos e validamos viabilidade.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1.0}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Arquitetamos a Solução</h4>
                <p className="text-gray-400 text-sm">
                  Combinamos IA avançada com automação personalizada. Criamos arquitetura técnica 
                  que transforma sua ideia em sistema funcional.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={1.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">Implementamos e Iteramos</h4>
                <p className="text-gray-400 text-sm">
                  Desenvolvemos em sprints ágeis, testamos constantemente e refinamos baseado 
                  em feedback real até funcionar perfeitamente.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Final CTA */}
          <ScrollReveal delay={1.2}>
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-8 rounded-xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4">
                Tem uma ideia que parece impossível de implementar?
              </h4>
              <p className="text-gray-300 mb-6">
                Uma automação que todos dizem ser "muito complexa"? Um sonho de IA que parece ficção científica? 
                Conte para nós. Em 30 minutos de conversa, mostramos exatamente como transformar sua visão em realidade.
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