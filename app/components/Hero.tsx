'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Play, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg"
    >
      {/* Animated Blobs */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], rotate: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="absolute -top-10 -left-10 z-0"
      >
        <Image src="/blob1.svg" width={400} height={400} alt="blob" />
      </motion.div>
      {/* Existing blobs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360], x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [360, 180, 0], x: [0, -100, 0], y: [0, 50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [180, 0, 180], x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium text-gray-700 mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              AI-Powered Marketing Suite
            </motion.div>
            {/* Headline from left */}
            <motion.h1
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              Unleash the Power of{' '}
              <span className="gradient-text">AI in Marketing</span>
            </motion.h1>
            {/* Subtext from right */}
            <motion.p
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-lg leading-relaxed text-gray-600 mb-8"
            >
              Automate campaigns, optimize spend, and scale growth effortlessly with our intelligent AI suite.
            </motion.p>
            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex gap-4 mt-8"
            >
              <Button size="lg" variant="gradient" className="relative overflow-hidden">
                <span className="relative z-10">Try for Free</span>
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="relative overflow-hidden">
                <span className="relative z-10">Watch Demo</span>
                <Play className="ml-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              </Button>
            </motion.div>
          </div>
          {/* Right Content: Platform Mockup and Glassmorphism Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Glassmorphism Card with Company Logos */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              viewport={{ once: true }}
              className="absolute -top-10 -left-10 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-6 max-w-sm"
            >
              <p className="text-sm text-gray-600 mb-3">Trusted by leading companies</p>
              <div className="flex space-x-4 items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">T</div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">M</div>
                <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">B</div>
              </div>
            </motion.div>
            {/* Platform Mockup */}
            <div className="relative">
              <div className="glassmorphism p-8 rounded-3xl shadow-2xl">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                  {/* Mock Dashboard Content */}
                  <div className="space-y-4">
                    <div className="h-4 bg-gradient-to-r from-blue-200 to-purple-200 rounded"></div>
                    <div className="h-4 bg-gradient-to-r from-green-200 to-blue-200 rounded w-3/4"></div>
                    <div className="h-4 bg-gradient-to-r from-orange-200 to-red-200 rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-2 mt-4">
                      <div className="h-8 bg-gradient-to-r from-blue-300 to-purple-300 rounded"></div>
                      <div className="h-8 bg-gradient-to-r from-green-300 to-blue-300 rounded"></div>
                      <div className="h-8 bg-gradient-to-r from-orange-300 to-red-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
} 