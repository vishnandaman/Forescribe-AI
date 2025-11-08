'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface ProfileCardProps {
  name: string
  description: string
  image: string
  bgColor: string
}

export default function ProfileCard({ name, description, image, bgColor }: ProfileCardProps) {
  const cardBg = 'bg-white'
  const textColor = 'text-gray-900'
  const descColor = 'text-gray-600'

  const baseCardWidth = 374.04
  const baseCardHeight = 543.12
  const baseImageWidth = 330.5491638183594
  const baseImageHeight = 189.57965087890625
  const baseContainerWidth = 1901.95

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
      className={`${cardBg} rounded-2xl overflow-hidden shadow-lg cursor-pointer flex flex-col card-hover group relative`}
      style={{
        width: `${baseCardWidth * scale}px`,
        height: `${baseCardHeight * scale}px`,
      }}
    >
      <div 
        className="rounded-xl shadow-lg group-hover:shadow-glow transition-shadow duration-300 mx-auto mt-6 relative z-10"
        style={{
          width: `${baseImageWidth * scale}px`,
          height: `${baseImageHeight * scale}px`,
          backgroundColor: bgColor,
        }}
      >
        <div 
          className="relative w-full h-full"
          style={{
            padding: `${20 * scale}px`,
            boxSizing: 'border-box',
          }}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-contain"
            sizes={`${baseImageWidth * scale}px`}
          />
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-6 relative z-10 text-center" style={{ marginTop: `${32 * scale}px` }}>
        <div className="w-full">
          <h3 
            className={`${textColor} mb-3`}
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
            className={descColor}
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontWeight: 400,
              fontSize: `${24 * scale}px`,
              lineHeight: 1,
              letterSpacing: '0%',
              textAlign: 'center',
            }}
          >
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

