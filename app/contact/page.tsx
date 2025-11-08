'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main className="relative min-h-screen bg-[#05010b] text-white">
      <div className="absolute top-6 left-6 sm:top-8 sm:left-8 lg:top-10 lg:left-10 z-20">
        <Link href="/">
          <Image
            src="/images/forescribe logo.png"
            alt="Forescribe Logo"
            width={150}
            height={40}
            className="h-8 w-auto cursor-pointer hover:opacity-80 transition-opacity"
            priority
          />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-12 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center"
      >
        <div className="container mx-auto max-w-2xl w-full">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-bold mb-8 text-center"
          >
            Contact Us
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1E1E1E] rounded-2xl p-8 shadow-xl border border-gray-800"
          >
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Your name"
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="Your name"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Your email"
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all text-white placeholder-gray-400"
                  placeholder="your.email@example.com"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-required="true"
                  aria-label="Your message"
                  className="w-full px-4 py-3 bg-[#2A2A2A] border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-purple focus:border-transparent transition-all resize-none text-white placeholder-gray-400"
                  placeholder="Your message..."
                />
              </motion.div>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-purple hover:bg-primary-purple-dark text-white font-medium py-3.5 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-purple focus:ring-offset-2 focus:ring-offset-[#1E1E1E]"
                aria-label="Submit contact form"
              >
                Send Message
              </motion.button>
            </form>
            <div className="mt-8 text-center">
              <Link
                href="/"
                className="text-primary-purple-light hover:underline inline-flex items-center gap-2 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-purple rounded"
                aria-label="Return to home page"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </main>
  )
}

