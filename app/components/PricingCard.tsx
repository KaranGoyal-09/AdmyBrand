'use client'

import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Check, Star } from 'lucide-react'
import { PricingPlan } from '@/app/data/pricing'

interface PricingCardProps {
  plan: PricingPlan
  index: number
}

export default function PricingCard({ plan, index }: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`
        relative group
        ${plan.popular ? 'scale-105' : ''}
      `}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
        >
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
            <Star className="w-4 h-4" />
            Most Popular
          </div>
        </motion.div>
      )}

      <div className={`
        bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 h-full transition-all duration-300 shadow-2xl
        ${plan.popular 
          ? 'border-2 border-blue-500/50 shadow-2xl shadow-blue-500/20' 
          : 'group-hover:shadow-2xl group-hover:shadow-blue-500/20'
        }
      `}>
        {/* Header */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {plan.name}
          </h3>
          <p className="text-gray-600 mb-6">
            {plan.description}
          </p>
          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900">
              ${plan.price}
            </span>
            <span className="text-gray-600">/month</span>
          </div>
        </div>

        {/* Features List */}
        <div className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <motion.div
              key={featureIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + featureIndex * 0.05 }}
              className="flex items-center gap-3"
            >
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 shadow-sm">
                <Check className="w-3 h-3 text-green-600" />
              </div>
              <span className="text-gray-700">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <Button
          variant={plan.popular ? "gradient" : "outline"}
          size="lg"
          className="w-full group relative overflow-hidden"
        >
          {plan.cta}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
          />
        </Button>
      </div>
    </motion.div>
  )
} 