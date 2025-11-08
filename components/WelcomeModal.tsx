'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X } from 'lucide-react'
import { useEffect, useState } from 'react'
import Image from 'next/image'

type WelcomeModalPresentation = 'modal' | 'inline'

interface WelcomeModalProps {
  isOpen: boolean
  onClose?: () => void
  presentation?: WelcomeModalPresentation
  showClose?: boolean
}

export default function WelcomeModal({
  isOpen,
  onClose,
  presentation = 'modal',
  showClose,
}: WelcomeModalProps) {
  const handleGoogleAuth = () => console.log('Google auth clicked')
  const handleMicrosoftAuth = () => console.log('Microsoft auth clicked')

  const shouldShowClose = showClose ?? presentation === 'modal'

  const baseScreenWidth = 1920
  const baseModalWidth = 459
  const baseModalHeight = 368
  const baseButtonWidth = 319
  const baseButtonHeight = 43

  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      const viewportWidth = window.innerWidth
      const scaleFactor = viewportWidth / baseScreenWidth
      setScale(Math.min(scaleFactor, 1))
    }

    updateScale()
    window.addEventListener('resize', updateScale)
    return () => window.removeEventListener('resize', updateScale)
  }, [])

  const modalWidth = baseModalWidth * scale
  const modalHeight = baseModalHeight * scale
  const buttonWidth = baseButtonWidth * scale
  const buttonHeight = baseButtonHeight * scale

  const card = (
    <div 
      className="relative overflow-hidden rounded-2xl"
      style={{
        width: `${modalWidth}px`,
        height: `${modalHeight}px`,
        background: 'rgba(0, 0, 0, 0.32)',
        boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }}
    >
      {shouldShowClose && onClose && (
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition z-20"
          aria-label="Close dialog"
        >
          <X size={24} />
        </button>
      )}

      <div 
        className="flex flex-col items-center justify-center h-full text-center relative z-10"
        style={{
          padding: `${32 * scale}px ${32 * scale}px`,
        }}
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center justify-center"
          style={{ marginBottom: `${16 * scale}px` }}
        >
          <Image
            src="/images/forescribe logo.png"
            alt="Forescribe Logo"
            width={120}
            height={32}
            className="h-8 w-auto"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-white"
          style={{
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 600,
            fontSize: `${22 * scale}px`,
            lineHeight: '100%',
            letterSpacing: '0%',
            marginBottom: `${24 * scale}px`,
          }}
        >
          Welcome to Forescribe
        </motion.h2>

        <div 
          className="w-full flex flex-col items-center"
          style={{
            gap: `${12 * scale}px`,
            marginBottom: `${16 * scale}px`,
          }}
        >
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleGoogleAuth}
            className="flex items-center justify-center gap-3 rounded-lg bg-[#8B3DFF] text-white transition-all hover:bg-[#7A2EE6] shadow-lg hover:shadow-glow focus:outline-none focus:ring-2 focus:ring-[#8B3DFF]/40"
            style={{
              width: `${buttonWidth}px`,
              height: `${buttonHeight}px`,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: `${16 * scale}px`,
              lineHeight: '30px',
              letterSpacing: '0%',
            }}
          >
            <svg 
              className="flex-shrink-0" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              style={{ width: `${16 * scale}px`, height: `${16 * scale}px` }}
            >
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Continue with Google
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleMicrosoftAuth}
            className="flex items-center justify-center gap-3 rounded-lg bg-[#4A4A4A] text-white transition-all hover:bg-[#555555] shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-gray-600/40"
            style={{
              width: `${buttonWidth}px`,
              height: `${buttonHeight}px`,
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 400,
              fontSize: `${16 * scale}px`,
              lineHeight: '30px',
              letterSpacing: '0%',
            }}
          >
            <svg 
              className="flex-shrink-0" 
              viewBox="0 0 23 23" 
              fill="currentColor"
              style={{ width: `${16 * scale}px`, height: `${16 * scale}px` }}
            >
              <path d="M0 0h10.9v10.9H0V0zm11.8 0H22.7v10.9H11.8V0zM0 12.1h10.9V23H0V12.1zm11.8 0H22.7V23H11.8V12.1z" />
            </svg>
            Continue with Microsoft
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-justify w-full font-normal"
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 400,
            fontSize: `${12 * scale}px`,
            lineHeight: '18px',
            letterSpacing: '0%',
            padding: `0 ${8 * scale}px`,
          }}
        >
          By clicking &quot;Continue with Google/Microsoft&quot; above, you acknowledge that you have read and understood, and agree to Forescribe&apos;s{' '}
          <a href="#" className="text-[#A78BFA] hover:underline font-normal">
            Terms & Conditions
          </a>{' '}
          and{' '}
          <a href="#" className="text-[#A78BFA] hover:underline font-normal">
            Privacy Policy
          </a>
          .
        </motion.p>
      </div>
    </div>
  )

  if (presentation === 'modal') {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-[#080313]/90 backdrop-blur-2xl"
              onClick={onClose}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{ duration: 0.6, type: 'spring', stiffness: 160, damping: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              {card}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    )
  }

  return card
}
