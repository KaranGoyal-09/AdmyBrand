'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, Sparkles, Zap, Brain, TrendingUp } from 'lucide-react'

interface FAQItem {
  question: string
  answer: string
  icon: React.ComponentType<{ className?: string }>
}

const faqData: FAQItem[] = [
  {
    question: "Can AI run my entire marketing department while I nap? 😴",
    answer: "While our AI is incredibly powerful, we recommend staying awake to enjoy the amazing results! Our AI handles campaign creation, optimization, and scaling, but human creativity and strategy are still essential for the best outcomes.",
    icon: Brain
  },
  {
    question: "How quickly will I see results? ⚡",
    answer: "Most customers see measurable improvements within 7-14 days. Our AI starts optimizing immediately, and you'll notice better performance, lower costs, and higher conversions right away.",
    icon: Zap
  },
  {
    question: "What if I'm not tech-savvy? 🤔",
    answer: "No worries! Our platform is designed to be intuitive and user-friendly. Plus, our support team is available 24/7 to help you get the most out of your AI marketing assistant.",
    icon: HelpCircle
  },
  {
    question: "Can I integrate with my existing tools? 🔗",
    answer: "Absolutely! We integrate seamlessly with Google Ads, Facebook Ads, TikTok, LinkedIn, and most major marketing platforms. Your existing campaigns and data are safe and easily imported.",
    icon: TrendingUp
  },
  {
    question: "Is my data secure? 🔒",
    answer: "Security is our top priority. We use enterprise-grade encryption, SOC 2 compliance, and never share your data with third parties. Your campaigns and customer data are completely protected.",
    icon: Sparkles
  },
  {
    question: "What's included in the free trial? 🎁",
    answer: "Your 14-day free trial includes full access to all features, unlimited campaigns, AI optimization, and our complete support. No credit card required, and you can cancel anytime.",
    icon: Sparkles
  }
]

export default function AccordionFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="space-y-4"
      >
        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-200"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <item.icon className="w-4 h-4 text-white" />
                </div>
                <span className="font-semibold text-gray-900">
                  {item.question}
                </span>
              </div>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-4 text-gray-600 leading-relaxed">
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
} 