'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface IntegrationCardProps {
  name: string
  category: string
  color: string
  logo: string
  textColor?: string
}

export default function IntegrationCard({ name, category, color, logo, textColor = 'text-white' }: IntegrationCardProps) {
  const cardBg = 'bg-white'
  const titleColor = 'text-gray-900'
  const categoryColor = 'text-gray-600'

  const baseCardWidth = 374.04
  const baseCardHeight = 543.12
  const baseLogoWidth = 330.5491638183594
  const baseLogoHeight = 189.57965087890625
  const baseContainerWidth = 1901.95

  const hexToRgba = (hex: string, alpha: number): string => {
    const r = parseInt(hex.slice(1, 3), 16)
    const g = parseInt(hex.slice(3, 5), 16)
    const b = parseInt(hex.slice(5, 7), 16)
    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  const [scale, setScale] = useState(1)
  
  useEffect(() => {
    const updateScale = () => {
      const container = document.getElementById('cards-container')
      if (container) {
        const containerWidth = container.offsetWidth
        const scaleFactor = containerWidth / baseContainerWidth
        setScale(Math.min(scaleFactor, 1))
      }
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    const observer = new ResizeObserver(updateScale)
    const container = document.getElementById('cards-container')
    if (container) {
      observer.observe(container)
    }

    return () => {
      window.removeEventListener('resize', updateScale)
      observer.disconnect()
    }
  }, [baseContainerWidth])

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={`${cardBg} rounded-2xl shadow-lg cursor-pointer flex flex-col card-hover group relative overflow-hidden`}
      style={{
        width: `${baseCardWidth * scale}px`,
        height: `${baseCardHeight * scale}px`,
      }}
    >
      <div 
        className="absolute left-0 right-0 rounded-b-2xl pointer-events-none"
        style={{
          top: `${(baseLogoHeight * scale) + (24 * scale) + (24 * scale)}px`,
          bottom: 0,
          background: `linear-gradient(0deg, ${hexToRgba(color, 0.5)} 0%, ${hexToRgba(color, 0.25)} 8%, ${hexToRgba(color, 0.15)} 18%, ${hexToRgba(color, 0.10)} 30%, ${hexToRgba(color, 0.06)} 45%, ${hexToRgba(color, 0.03)} 60%, rgba(255, 255, 255, 0.5) 80%, #FFFFFF 100%)`,
          zIndex: 1,
        }}
      />
      
      <div 
        className="rounded-xl shadow-lg group-hover:shadow-glow transition-shadow duration-300 mx-auto mt-6 relative z-10"
        style={{
          width: `${baseLogoWidth * scale}px`,
          height: `${baseLogoHeight * scale}px`,
          backgroundColor: color,
          padding: `${20 * scale}px`,
          boxSizing: 'border-box',
        }}
      >
        <div 
          className="relative w-full h-full"
          style={{
            width: '100%',
            height: '100%',
          }}
        >
          <Image
            src={logo}
            alt={name}
            fill
            className="object-contain"
            sizes={`${(baseLogoWidth - 40) * scale}px`}
            style={{
              objectPosition: 'center',
            }}
          />
        </div>
      </div>
      
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 pb-6" style={{ marginTop: `${32 * scale}px` }}>
        <div className="text-center w-full">
          <h3 
            className={`${titleColor} mb-2`}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: `${32 * scale}px`,
              lineHeight: 1,
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            {name}
          </h3>
          <p 
            className={categoryColor}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: `${24 * scale}px`,
              lineHeight: 1,
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            {category}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

