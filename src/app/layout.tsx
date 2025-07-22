import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mutup - Acelere 10X suas vendas com IA e Automação',
  description: 'Soluções personalizadas de Inteligência Artificial e automação para escalar suas vendas e otimizar processos operacionais. A primeira aceleradora de IA do Brasil focada em resultados exponenciais.',
  keywords: 'inteligência artificial, automação, IA, vendas, marketing digital, agentes de IA, mutup, crescimento exponencial',
  authors: [{ name: 'Mutup' }],
  creator: 'Mutup',
  publisher: 'Mutup',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mutup.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Mutup - Acelere 10X suas vendas com IA e Automação',
    description: 'Soluções personalizadas de Inteligência Artificial e automação para escalar suas vendas e otimizar processos operacionais.',
    url: 'https://mutup.com.br',
    siteName: 'Mutup',
    images: [
      {
        url: '/images/Logo Mutup - Branco Transparente.png',
        width: 1200,
        height: 630,
        alt: 'Mutup - IA e Automação',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mutup - Acelere 10X suas vendas com IA e Automação',
    description: 'Soluções personalizadas de Inteligência Artificial e automação para escalar suas vendas.',
    images: ['/images/Logo Mutup - Branco Transparente.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.png',
    apple: '/images/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-54BNB2R6');`}
        </Script>
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GTM-54BNB2R6"
            height="0" 
            width="0" 
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        
        {children}
      </body>
    </html>
  )
}