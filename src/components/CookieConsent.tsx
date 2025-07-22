'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4"
        >
          <div className="max-w-4xl mx-auto bg-gray-900/95 backdrop-blur-md border border-white/10 rounded-lg p-6 shadow-xl">
            <div className="flex items-start gap-4">
              <Cookie className="h-6 w-6 text-white flex-shrink-0 mt-1" />
              <div className="flex-1 text-sm text-gray-300">
                <p className="mb-3">
                  Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo 
                  e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Também compartilhamos 
                  informações sobre seu uso do nosso site com nossos parceiros de análise e publicidade, 
                  conforme nossa <span className="text-white underline cursor-pointer">Política de Privacidade</span>.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button
                    onClick={acceptCookies}
                    variant="cta"
                    size="sm"
                    className="text-sm"
                  >
                    Aceitar todos os cookies
                  </Button>
                  <Button
                    onClick={declineCookies}
                    variant="outline"
                    size="sm"
                    className="text-sm border-white/20 text-white hover:bg-white/10"
                  >
                    Apenas necessários
                  </Button>
                </div>
              </div>
              <button
                onClick={declineCookies}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}