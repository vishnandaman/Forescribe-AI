import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Forescribe AI',
  description: 'Welcome to Forescribe AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}

