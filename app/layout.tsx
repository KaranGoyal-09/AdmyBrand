import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ADmyBRAND AI Suite - Unleash the Power of AI in Marketing',
  description: 'Automate campaigns, optimize spend, and scale growth effortlessly with our AI-powered marketing suite.',
  keywords: 'AI marketing, campaign automation, marketing optimization, growth marketing',
  authors: [{ name: 'ADmyBRAND Team' }],
  openGraph: {
    title: 'ADmyBRAND AI Suite - Unleash the Power of AI in Marketing',
    description: 'Automate campaigns, optimize spend, and scale growth effortlessly with our AI-powered marketing suite.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
} 