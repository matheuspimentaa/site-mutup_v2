import Image from 'next/image'
import Link from 'next/link'
import { Linkedin, Instagram, Youtube, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex flex-col items-center md:items-start space-y-4 md:space-y-6">
          <Image
            src="/images/Logo Mutup - Branco Transparente.png"
            alt="Mutup"
            width={120}
            height={40}
            className="h-10 w-auto"
          />
          <p className="text-sm text-gray-400 text-center md:text-left max-w-md">
            Transformando empresas em máquinas de gerar lucro com inteligência artificial
          </p>
          
          <div className="flex flex-col space-y-2 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4" />
              <Link 
                href="mailto:matheus@mutup.com.br"
                className="hover:text-white transition-colors"
              >
                matheus@mutup.com.br
              </Link>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <Link 
                href="tel:+5511972572348"
                className="hover:text-white transition-colors"
              >
                +55 11 97257-2348
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 md:mt-0 flex flex-col items-center md:items-end space-y-4">
          <div className="flex space-x-6">
            <Link 
              href="https://www.linkedin.com/company/mutup"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link 
              href="https://instagram.com/mutup.ai"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="h-6 w-6" />
            </Link>
            <Link 
              href="https://youtube.com/@MatheusPimentaIA"
              className="text-gray-400 hover:text-white transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
          
          <p className="text-xs text-gray-500 text-center md:text-right">
            © 2025 MUTUP. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}