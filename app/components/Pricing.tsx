'use client'

import { motion } from 'framer-motion'
import PricingCard from './PricingCard'
import { pricingPlans } from '../data/pricing'

export default function Pricing() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
      {pricingPlans.map((plan, index) => (
        <PricingCard key={plan.id} plan={plan} index={index} />
      ))}
    </div>
  )
} 