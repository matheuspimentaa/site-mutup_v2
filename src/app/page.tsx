'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import CookieConsent from '@/components/CookieConsent'

import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import WhyMutupSection from '@/components/sections/WhyMutupSection'
import ProcessSection from '@/components/sections/ProcessSection'
import BenefitsSection from '@/components/sections/BenefitsSection'
import CalendlySection from '@/components/sections/CalendlySection'

export default function Home() {
  return (
    <>
      <Header />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyMutupSection />
        <ProcessSection />
        <BenefitsSection />
        <CalendlySection />
      </main>
      <Footer />
      <BackToTop />
      <CookieConsent />
    </>
  )
}