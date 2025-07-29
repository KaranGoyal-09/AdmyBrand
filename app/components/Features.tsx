'use client'

import { motion } from 'framer-motion'
import FeatureCard from './FeatureCard'
import { features } from '../data/features'

export default function Features() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} feature={feature} index={index} />
      ))}
    </div>
  )
} 