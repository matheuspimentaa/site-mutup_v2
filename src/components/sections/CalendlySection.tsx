'use client'

import { useEffect } from 'react'
import ScrollReveal from '@/components/ScrollReveal'
import { motion } from 'framer-motion'
import { Clock, Shield, Lightbulb, DollarSign, Users, Wrench, Headphones, BarChart } from 'lucide-react'

const faqs = [
  {
    icon: Clock,
    question: 'Quanto tempo leva para ver resultados com IA?',
    answer: 'Com nossa metodologia única, os primeiros resultados aparecem em até 30 dias. E após 90 dias, você já sente o ROI sobre o que investiu em IA e automação.',
    gradient: 'from-blue-500/20 to-cyan-500/20'
  },
  {
    icon: Shield,
    question: 'Vocês oferecem alguma garantia?',
    answer: 'Sim. Se nossa solução não te satisfazer e não gerar impacto real na sua operação após 90 dias, devolvemos 100% do seu dinheiro investido no projeto. É uma garantia que colocamos sobre contrato para sua segurança.',
    gradient: 'from-green-500/20 to-emerald-500/20'
  },
  {
    icon: Lightbulb,
    question: 'Preciso ter conhecimento técnico para usar as soluções?',
    answer: 'Não. Todos os projetos são 100% "done-for-you". Fornecemos treinamento completo, documentação detalhada e total suporte 24/7 para qualquer problema ou manutenção.',
    gradient: 'from-yellow-500/20 to-orange-500/20'
  },
  {
    icon: DollarSign,
    question: 'Qual o investimento necessário para implementar IA?',
    answer: 'O investimento varia conforme complexidade e escopo. Projetos básicos de automação começam a partir de R$ 5.000. Agentes de IA complexos de R$ 15.000. O ROI típico é de 300-500% no primeiro ano.',
    gradient: 'from-purple-500/20 to-pink-500/20'
  },
  {
    icon: Users,
    question: 'As automações vão substituir minha equipe?',
    answer: 'Não, vão potencializar. A IA elimina tarefas repetitivas para sua equipe focar em atividades estratégicas e relacionamento com clientes. Resultado: mesma equipe produzindo 3-5x mais.',
    gradient: 'from-indigo-500/20 to-purple-500/20'
  },
  {
    icon: Wrench,
    question: 'E se eu já tenho sistemas implementados?',
    answer: 'Perfeito! Integramos com praticamente qualquer sistema: CRMs, e-mail marketing, WhatsApp Business, planilhas Google, ERPs. Seus sistemas tendo APIs abertas, conectamos tudo.',
    gradient: 'from-teal-500/20 to-blue-500/20'
  },
  {
    icon: Headphones,
    question: 'Que tipo de suporte vocês oferecem após a implementação?',
    answer: 'Oferecemos suporte técnico completo durante 60 dias e planos de suporte mensal para evolução contínua das soluções.',
    gradient: 'from-red-500/20 to-pink-500/20'
  },
  {
    icon: BarChart,
    question: 'Como medir o retorno do investimento em IA?',
    answer: 'Implementamos dashboards de acompanhamento que mostram métricas específicas: leads gerados, tempo economizado, taxa de conversão, receita adicional. Relatórios mensais com análise de ROI.',
    gradient: 'from-orange-500/20 to-red-500/20'
  }
]

export default function CalendlySection() {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section id="agendar" className="section-padding bg-gradient-to-b from-gray-900 to-black relative">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-blue-500/20 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Agende agora uma reunião com um{' '}
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                especialista em inteligência artificial
              </span>
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Receba um diagnóstico <strong className="text-white">100% gratuito</strong> e um plano de ação 
              no que você precisa implementar IA no seu negócio e quais serão os impactos financeiros e de 
              produtividade. Não basta automatizar e implementar IA, você precisa ter clareza onde implementar 
              primeiro que vai gerar mais resultado.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-gray-400 mt-4">
              E isso você consegue em <strong className="text-white">45 minutos de conversa</strong> com um 
              especialista em IA da Mutup.
            </p>
          </ScrollReveal>
        </div>

        {/* Calendly Widget - Full Width */}
        <div className="mb-16">
          <ScrollReveal delay={0.4}>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4 max-w-4xl mx-auto">
              <div 
                className="calendly-inline-widget rounded-lg overflow-hidden" 
                data-url="https://calendly.com/mutup/sessao-estrategica?hide_gdpr_banner=1" 
                style={{ minWidth: '320px', height: '700px', width: '100%' }}
              />
            </div>
          </ScrollReveal>
        </div>

        {/* FAQ Section - Full Width Below */}
        <div className="max-w-4xl mx-auto">
          <ScrollReveal delay={0.2}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12 text-center">
              Perguntas frequentes sobre implementação de IA nos negócios
            </h3>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <ScrollReveal key={faq.question} delay={0.3 + index * 0.1}>
                <motion.div
                  className={`bg-gradient-to-br ${faq.gradient} p-6 rounded-lg border border-white/10 group hover:border-white/20 transition-all duration-300 h-full`}
                  whileHover={{ y: -2 }}
                >
                  <div className="flex items-start gap-4 h-full">
                    <div className="p-2 rounded-lg bg-white/10 group-hover:bg-white/20 transition-colors flex-shrink-0">
                      <faq.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-3">
                        {faq.question}
                      </h4>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Bottom Notice */}
        <div className="mt-16 text-center">
          <ScrollReveal delay={0.8}>
            <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 p-6 rounded-xl border border-white/10 max-w-3xl mx-auto">
              <p className="text-gray-300">
                <strong className="text-green-400">Garantia Total:</strong> Você não tem nada a perder, 
                porque todo o risco está nas nossas costas. Se não gerar impacto real em 90 dias, 
                devolvemos 100% do investimento.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}</style>
    </section>
  )
}