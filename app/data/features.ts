import { 
  Brain, 
  TrendingUp, 
  Target, 
  BarChart3, 
  Zap, 
  Users 
} from 'lucide-react'

export interface Feature {
  id: string
  title: string
  description: string
  iconName: string
  gradient: string
}

export const features: Feature[] = [
  {
    id: 'ai-automation',
    title: 'AI Campaign Automation',
    description: 'Automatically create, optimize, and scale campaigns across all platforms with intelligent AI algorithms.',
    iconName: 'Brain',
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    id: 'performance-optimization',
    title: 'Performance Optimization',
    description: 'Real-time optimization of ad spend, targeting, and creative performance for maximum ROI.',
    iconName: 'TrendingUp',
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    id: 'audience-targeting',
    title: 'Smart Audience Targeting',
    description: 'Advanced AI-powered audience segmentation and targeting for higher conversion rates.',
    iconName: 'Target',
    gradient: 'from-green-500 to-emerald-500'
  },
  {
    id: 'analytics-insights',
    title: 'Advanced Analytics',
    description: 'Comprehensive dashboards and insights to track performance and identify growth opportunities.',
    iconName: 'BarChart3',
    gradient: 'from-orange-500 to-red-500'
  },
  {
    id: 'real-time-optimization',
    title: 'Real-time Optimization',
    description: 'Instant campaign adjustments based on performance data and market conditions.',
    iconName: 'Zap',
    gradient: 'from-yellow-500 to-orange-500'
  },
  {
    id: 'team-collaboration',
    title: 'Team Collaboration',
    description: 'Seamless team workflows with role-based access and real-time collaboration tools.',
    iconName: 'Users',
    gradient: 'from-indigo-500 to-purple-500'
  }
] 