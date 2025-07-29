'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'
import { Users, Target, TrendingUp } from 'lucide-react'

export default function PricingCalculator() {
  const [campaigns, setCampaigns] = useState(5)
  const [teamMembers, setTeamMembers] = useState(3)
  const [adSpend, setAdSpend] = useState(10000)

  const calculatePrice = () => {
    const basePrice = 29
    const campaignMultiplier = Math.max(1, campaigns / 5)
    const teamMultiplier = Math.max(1, teamMembers / 3)
    const spendMultiplier = Math.max(1, adSpend / 10000)
    
    return Math.round(basePrice * campaignMultiplier * teamMultiplier * spendMultiplier)
  }

  const currentPrice = calculatePrice()

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="glassmorphism p-8 rounded-3xl max-w-4xl mx-auto"
    >
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Custom Pricing Calculator
        </h3>
        <p className="text-gray-600">
          Adjust your needs and see real-time pricing updates
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {/* Campaigns Slider */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-500" />
            <label className="text-sm font-medium text-gray-700">
              Number of Campaigns
            </label>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="50"
              value={campaigns}
              onChange={(e) => setCampaigns(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>50</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-900">{campaigns}</span>
            <span className="text-gray-600 ml-1">campaigns</span>
          </div>
        </div>

        {/* Team Members Slider */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Users className="w-5 h-5 text-green-500" />
            <label className="text-sm font-medium text-gray-700">
              Team Members
            </label>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1"
              max="20"
              value={teamMembers}
              onChange={(e) => setTeamMembers(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>20</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-900">{teamMembers}</span>
            <span className="text-gray-600 ml-1">members</span>
          </div>
        </div>

        {/* Ad Spend Slider */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-purple-500" />
            <label className="text-sm font-medium text-gray-700">
              Monthly Ad Spend
            </label>
          </div>
          <div className="relative">
            <input
              type="range"
              min="1000"
              max="100000"
              step="1000"
              value={adSpend}
              onChange={(e) => setAdSpend(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>$1K</span>
              <span>$100K</span>
            </div>
          </div>
          <div className="text-center">
            <span className="text-2xl font-bold text-gray-900">
              ${(adSpend / 1000).toFixed(0)}K
            </span>
            <span className="text-gray-600 ml-1">/month</span>
          </div>
        </div>
      </div>

      {/* Price Display */}
      <motion.div
        key={currentPrice}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="text-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200"
      >
        <p className="text-sm text-gray-600 mb-2">Estimated Monthly Price</p>
        <div className="flex items-center justify-center gap-2">
          <span className="text-4xl font-bold gradient-text">
            ${currentPrice}
          </span>
          <span className="text-gray-600">/month</span>
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Includes all features + 14-day free trial
        </p>
      </motion.div>

      {/* CTA Button */}
      <div className="text-center mt-6">
        <Button size="lg" variant="gradient" className="group">
          Start Free Trial
          <motion.div
            className="ml-2"
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            →
          </motion.div>
        </Button>
      </div>
    </motion.div>
  )
} 