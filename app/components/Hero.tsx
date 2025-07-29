'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Play, ArrowRight, Star } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
            x: [0, 100, 0],
            y: [0, -50, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
            x: [0, -100, 0],
            y: [0, 50, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-40 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1, 1.3, 1],
            rotate: [180, 0, 180],
            x: [0, 50, 0],
            y: [0, -30, 0]
          }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      {/* Enhanced Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left">
            {/* Enhanced Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm font-medium text-gray-700 mb-8"
            >
              <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
              AI-Powered Marketing Suite
            </motion.div>

            {/* Enhanced Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            >
              Unleash the Power of{' '}
              <span className="gradient-text">AI in Marketing</span>
            </motion.h1>

            {/* Enhanced Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed"
            >
              Automate campaigns, optimize spend, and scale growth effortlessly with our intelligent AI suite.
            </motion.p>

            {/* Enhanced CTA Buttons with Magnetic Effect */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button size="lg" variant="gradient" className="relative overflow-hidden">
                  <span className="relative z-10">Try for Free</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline" className="group backdrop-blur-sm bg-white/20 border-white/30">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </motion.div>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-gray-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  500+
                </motion.div>
                <div className="text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-gray-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                >
                  300%
                </motion.div>
                <div className="text-gray-600">Average ROI Increase</div>
              </div>
              <div className="text-center">
                <motion.div 
                  className="text-3xl font-bold text-gray-900"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.4, type: "spring" }}
                >
                  24/7
                </motion.div>
                <div className="text-gray-600">AI Optimization</div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Platform Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Glassmorphism Card with Company Logos */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="absolute -top-10 -left-10 rounded-3xl backdrop-blur-md bg-white/10 border border-white/20 shadow-2xl p-6 max-w-sm"
            >
              <p className="text-sm text-gray-600 mb-3">Trusted by leading companies</p>
              <div className="flex space-x-4 items-center">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">T</div>
                <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">G</div>
                <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">A</div>
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white text-xs font-bold">M</div>
                <div className="text-xs text-gray-500">+497 more</div>
              </div>
            </motion.div>

            {/* Platform Mockup */}
            <div className="relative">
              <div className="glassmorphism p-8 rounded-3xl shadow-2xl">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-500">ADmyBRAND Dashboard</div>
                  </div>
                  
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
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-pink-400 to-red-400 rounded-full opacity-20"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 