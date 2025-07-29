'use client'

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from 'framer-motion'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn("border-b border-gray-200", className)}
    {...props}
  />
))
AccordionItem.displayName = "AccordionItem"

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-6 text-left font-medium transition-all hover:text-blue-600 [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn("pb-6 pt-0", className)}>{children}</div>
  </AccordionPrimitive.Content>
))
AccordionContent.displayName = AccordionPrimitive.Content.displayName

interface FAQItem {
  id: string
  question: string
  answer: string
  emoji: string
}

const faqData: FAQItem[] = [
  {
    id: '1',
    question: 'Can AI run my entire marketing department while I nap? 😴',
    answer: 'Yes. But don\'t let your boss know. Our AI can handle campaign creation, optimization, and reporting while you focus on strategic decisions. Just make sure to check in occasionally to review performance!',
    emoji: '😴'
  },
  {
    id: '2',
    question: 'What platforms do you integrate with? 🔗',
    answer: 'We integrate with all major advertising platforms including Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, TikTok Ads, and more. We also support e-commerce platforms like Shopify and WooCommerce.',
    emoji: '🔗'
  },
  {
    id: '3',
    question: 'Is there a free trial available? 🎁',
    answer: 'Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can upgrade to a paid plan at any time during or after the trial.',
    emoji: '🎁'
  },
  {
    id: '4',
    question: 'How quickly can I see results? ⚡',
    answer: 'Most customers see improvements within the first week of using our platform. The AI typically needs 3-7 days to gather enough data to start making optimizations. Significant ROI improvements are usually visible within 30 days.',
    emoji: '⚡'
  },
  {
    id: '5',
    question: 'Do you provide customer support? 🤝',
    answer: 'Yes, we offer comprehensive customer support including email support for all plans, priority support for Pro and Enterprise plans, and dedicated account management for Enterprise customers.',
    emoji: '🤝'
  },
  {
    id: '6',
    question: 'Can I cancel my subscription anytime? 🚪',
    answer: 'Absolutely! You can cancel your subscription at any time from your account dashboard. There are no long-term contracts or cancellation fees. You\'ll continue to have access until the end of your current billing period.',
    emoji: '🚪'
  },
  {
    id: '7',
    question: 'Will AI take over the world? 🤖',
    answer: 'Only the marketing world. Our AI is focused on optimizing campaigns and improving ROI, not world domination. We promise!',
    emoji: '🤖'
  },
  {
    id: '8',
    question: 'What if I don\'t like the AI suggestions? 🤔',
    answer: 'You\'re always in control! You can review, modify, or reject any AI suggestions. The AI learns from your preferences to provide better recommendations over time.',
    emoji: '🤔'
  }
]

export default function AccordionFAQ() {
  return (
    <div className="max-w-4xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <AccordionItem value={item.id} className="glassmorphism hover:shadow-lg transition-all duration-300">
              <AccordionTrigger className="px-6 text-lg font-semibold group">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{item.emoji}</span>
                  <span className="group-hover:text-blue-600 transition-colors">
                    {item.question}
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 text-gray-600 leading-relaxed">
                <div className="flex items-start gap-3">
                  <span className="text-lg mt-1">💡</span>
                  <div>{item.answer}</div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </div>
  )
} 