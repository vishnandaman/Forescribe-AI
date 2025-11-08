'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import IntegrationCard from './IntegrationCard'
import ProfileCard from './ProfileCard'
import { cards } from './data/cards'

type CardGridVariant = 'default' | 'overlay'

interface CardGridProps {
  variant?: CardGridVariant
  withContainer?: boolean
  className?: string
  gridClassName?: string
}

export default function CardGrid({
  variant = 'default',
  withContainer = true,
  className = '',
  gridClassName = '',
}: CardGridProps) {
  const wrapperBase = withContainer ? '' : ''
  const spacing = variant === 'default' ? '' : ''
  const wrapperClasses = [spacing, wrapperBase, className].filter(Boolean).join(' ')

  const variantClasses =
    variant === 'overlay'
      ? 'pointer-events-none select-none opacity-30 md:opacity-40 blur-[1.5px]'
      : ''

  if (variant === 'overlay') {
    const gridClasses = [
      'grid gap-4 sm:gap-6',
      'grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 w-full h-full items-center justify-items-center',
      variantClasses,
      gridClassName,
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <div className={wrapperClasses}>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, staggerChildren: 0.03 }}
          className={gridClasses}
        >
          {cards.slice(0, 12).map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                delay: index * 0.05,
                duration: 0.5 
              }}
              className="w-full max-w-[260px] sm:max-w-[280px]"
            >
              {card.type === 'integration' ? (
                <div className="pointer-events-none">
                  <IntegrationCard
                    name={card.name}
                    category={card.category || ''}
                    color={card.color || '#000000'}
                    logo={card.logo || ''}
                    textColor={card.textColor}
                  />
                </div>
              ) : (
                <div className="pointer-events-none">
                  <ProfileCard
                    name={card.name}
                    description={card.description || ''}
                    image={card.image || ''}
                    bgColor={card.bgColor || '#FFFFFF'}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    )
  }

  const column1Cards = cards.slice(0, 4)
  const column2Cards = cards.slice(4, 7)
  const column3Cards = cards.slice(7, 11)
  const column4Cards = cards.slice(11, 14)
  const column5Cards = cards.slice(14, 18)

  const baseContainerWidth = 1901.95
  const baseCardWidth = 374.04
  const baseCardHeight = 543.12
  const baseGap = 7.94
  const baseCardGap = 2.5
  const baseOffset = 221

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
    <div className={wrapperClasses} style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div 
        className="flex justify-center items-start w-full h-full"
        style={{
          gap: `${baseGap * scale}px`,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col"
          style={{
            gap: `${baseCardGap * scale}px`,
          }}
        >
          {column1Cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {card.type === 'integration' ? (
                <IntegrationCard
                  name={card.name}
                  category={card.category || ''}
                  color={card.color || '#000000'}
                  logo={card.logo || ''}
                  textColor={card.textColor}
                />
              ) : (
                <ProfileCard
                  name={card.name}
                  description={card.description || ''}
                  image={card.image || ''}
                  bgColor={card.bgColor || '#FFFFFF'}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="flex flex-col"
          style={{ 
            paddingTop: `${baseOffset * scale}px`,
            paddingBottom: `${baseOffset * scale}px`,
            gap: `${baseCardGap * scale}px`,
          }}
        >
          {column2Cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
            >
              {card.type === 'integration' ? (
                <IntegrationCard
                  name={card.name}
                  category={card.category || ''}
                  color={card.color || '#000000'}
                  logo={card.logo || ''}
                  textColor={card.textColor}
                />
              ) : (
                <ProfileCard
                  name={card.name}
                  description={card.description || ''}
                  image={card.image || ''}
                  bgColor={card.bgColor || '#FFFFFF'}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
          style={{
            gap: `${baseCardGap * scale}px`,
          }}
        >
          {column3Cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
            >
              {card.type === 'integration' ? (
                <IntegrationCard
                  name={card.name}
                  category={card.category || ''}
                  color={card.color || '#000000'}
                  logo={card.logo || ''}
                  textColor={card.textColor}
                />
              ) : (
                <ProfileCard
                  name={card.name}
                  description={card.description || ''}
                  image={card.image || ''}
                  bgColor={card.bgColor || '#FFFFFF'}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col"
          style={{ 
            paddingTop: `${baseOffset * scale}px`,
            paddingBottom: `${baseOffset * scale}px`,
            gap: `${baseCardGap * scale}px`,
          }}
        >
          {column4Cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + index * 0.1, duration: 0.5 }}
            >
              {card.type === 'integration' ? (
                <IntegrationCard
                  name={card.name}
                  category={card.category || ''}
                  color={card.color || '#000000'}
                  logo={card.logo || ''}
                  textColor={card.textColor}
                />
              ) : (
                <ProfileCard
                  name={card.name}
                  description={card.description || ''}
                  image={card.image || ''}
                  bgColor={card.bgColor || '#FFFFFF'}
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col"
          style={{
            gap: `${baseCardGap * scale}px`,
          }}
        >
          {column5Cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
            >
              {card.type === 'integration' ? (
                <IntegrationCard
                  name={card.name}
                  category={card.category || ''}
                  color={card.color || '#000000'}
                  logo={card.logo || ''}
                  textColor={card.textColor}
                />
              ) : (
                <ProfileCard
                  name={card.name}
                  description={card.description || ''}
                  image={card.image || ''}
                  bgColor={card.bgColor || '#FFFFFF'}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

