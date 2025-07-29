import { Check } from 'lucide-react'

export interface PricingPlan {
  id: string
  name: string
  price: number
  description: string
  features: string[]
  popular?: boolean
  cta: string
}

export interface PricingFeature {
  name: string
  starter: boolean
  pro: boolean
  enterprise: boolean
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    price: 29,
    description: 'Perfect for small businesses getting started with AI marketing',
    features: [
      'Up to 5 campaigns',
      'Basic AI automation',
      'Standard analytics',
      'Email support',
      '1 team member'
    ],
    cta: 'Start Free Trial'
  },
  {
    id: 'pro',
    name: 'Pro',
    price: 99,
    description: 'Advanced features for growing businesses',
    features: [
      'Unlimited campaigns',
      'Advanced AI automation',
      'Real-time optimization',
      'Priority support',
      'Up to 10 team members',
      'Custom integrations',
      'Advanced analytics'
    ],
    popular: true,
    cta: 'Start Free Trial'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: 299,
    description: 'Full suite for large organizations',
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Custom AI models',
      'Dedicated account manager',
      'API access',
      'White-label options',
      'Advanced security',
      'Custom reporting'
    ],
    cta: 'Contact Sales'
  }
]

export const pricingFeatures: PricingFeature[] = [
  {
    name: 'Campaign Management',
    starter: true,
    pro: true,
    enterprise: true
  },
  {
    name: 'AI Automation',
    starter: true,
    pro: true,
    enterprise: true
  },
  {
    name: 'Real-time Optimization',
    starter: false,
    pro: true,
    enterprise: true
  },
  {
    name: 'Advanced Analytics',
    starter: false,
    pro: true,
    enterprise: true
  },
  {
    name: 'Custom Integrations',
    starter: false,
    pro: true,
    enterprise: true
  },
  {
    name: 'API Access',
    starter: false,
    pro: false,
    enterprise: true
  },
  {
    name: 'Dedicated Support',
    starter: false,
    pro: false,
    enterprise: true
  },
  {
    name: 'White-label Options',
    starter: false,
    pro: false,
    enterprise: true
  }
] 