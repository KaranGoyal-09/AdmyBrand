'use client'

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { cn } from '@/lib/utils'
import { 
  Brain, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Users 
} from 'lucide-react'
import { useState } from 'react'

interface FeatureCardProps {
  feature: {
    id: string
    title: string
    description: string
    iconName: string
    gradient: string
  }
  index: number
}

const iconMap = {
  Brain,
  TrendingUp,
  Target,
  BarChart3,
  Zap,
  Users
}

export default function FeatureCard({ feature, index }: FeatureCardProps) {
  const Icon = iconMap[feature.iconName as keyof typeof iconMap]
  const [isHovered, setIsHovered] = useState(false)
  
  // Tilt effect
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [30, -30])
  const rotateY = useTransform(x, [-100, 100], [-30, 30])
  
  const springConfig = { damping: 20, stiffness: 300 }
  const springRotateX = useSpring(rotateX, springConfig)
  const springRotateY = useSpring(rotateY, springConfig)

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const mouseX = event.clientX - centerX
    const mouseY = event.clientY - centerY
    
    x.set(mouseX)
    y.set(mouseY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative perspective-1000"
    >
      <motion.div
        style={{
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d"
        }}
        className="glassmorphism p-8 h-full transition-all duration-300 group-hover:shadow-2xl group-hover:shadow-blue-500/20"
      >
        {/* Enhanced Icon Container */}
        <div className="relative mb-6">
          <motion.div 
            className={cn(
              "w-16 h-16 rounded-2xl bg-gradient-to-r flex items-center justify-center relative",
              feature.gradient
            )}
            animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-8 h-8 text-white" />
            
            {/* Glow effect */}
            <motion.div
              className="absolute inset-0 rounded-2xl bg-gradient-to-r opacity-0 group-hover:opacity-30 blur-xl"
              style={{ background: `linear-gradient(to right, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})` }}
              animate={isHovered ? { scale: 1.5 } : { scale: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Floating particles */}
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              delay: index * 0.2 
            }}
            className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full"
          />
          <motion.div
            animate={{ 
              y: [0, 20, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              delay: index * 0.3 
            }}
            className="absolute -bottom-2 -left-2 w-2 h-2 bg-purple-400 rounded-full"
          />
        </div>

        {/* Enhanced Content */}
        <div className="relative z-10">
          <motion.h3 
            className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors"
            animate={isHovered ? { x: 5 } : { x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {feature.title}
          </motion.h3>
          <motion.p 
            className="text-gray-600 leading-relaxed"
            animate={isHovered ? { y: -2 } : { y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {feature.description}
          </motion.p>
        </div>

        {/* Enhanced Hover Effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/5 to-purple-500/5"
        />

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-2xl border-2 border-transparent"
          style={{
            background: `linear-gradient(45deg, transparent, ${feature.gradient.split(' ')[1]}, transparent)`,
            backgroundSize: '200% 200%'
          }}
          animate={isHovered ? {
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </motion.div>
  )
} 