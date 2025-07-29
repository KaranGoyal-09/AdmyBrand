import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import ThemeToggle from './components/ThemeToggle'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} antialiased font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <ThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
} 