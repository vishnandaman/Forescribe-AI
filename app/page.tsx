'use client'

import CardGrid from '@/components/CardGrid'
import WelcomeModal from '@/components/WelcomeModal'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#05010b] text-white">
      <section className="relative w-full overflow-hidden">
        <div 
          className="relative w-full mx-auto"
          style={{
            width: '100%',
            maxWidth: '1920px',
            aspectRatio: '1920 / 1049',
            minHeight: '100vh',
          }}
        >
          <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 z-20">
            <Image
              src="/images/forescribe logo.png"
              alt="Forescribe Logo"
              width={150}
              height={40}
              className="h-8 w-auto"
              priority
            />
          </div>
          
          <div 
            className="absolute inset-0 w-full h-full z-0"
            style={{
              backgroundImage: 'url(/images/bg_first_section.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              opacity: 1,
            }}
          />

          <div 
            className="absolute inset-0 z-[1] pointer-events-none"
            style={{
              background: 'linear-gradient(118.88deg, rgba(0, 0, 0, 0.5) 38.24%, rgba(139, 61, 255, 0.5) 97.48%, rgba(139, 61, 255, 0.5) 108.58%)',
              width: '100%',
              height: '100%',
            }}
          />

          <div className="relative z-10 w-full h-full flex items-center justify-center">
            <WelcomeModal isOpen presentation="inline" showClose={false} />
          </div>
        </div>
      </section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative z-10 w-full bg-[#1E1E1E] min-h-screen"
      >
        <div className="relative flex justify-center items-start w-full px-4 sm:px-6 lg:px-8 xl:px-12">
          <div 
            className="relative w-full"
            style={{
              maxWidth: '1901.95px',
              aspectRatio: '1901.95 / 2194',
            }}
            id="cards-container"
          >
            <CardGrid />
          </div>
        </div>
      </motion.section>
    </main>
  )
}
