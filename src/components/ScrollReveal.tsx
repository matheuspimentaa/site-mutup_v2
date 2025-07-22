'use client'

import { useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function ScrollReveal({ children, className = '', delay = 0 }: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { 
          opacity: 0, 
          y: 50,
          filter: 'blur(10px)'
        },
        visible: {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          transition: {
            duration: 0.8,
            delay,
            ease: 'easeOut'
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}