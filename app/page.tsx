import Hero from './components/Hero'
import FeatureCard from './components/FeatureCard'
import PricingCard from './components/PricingCard'
import PricingCalculator from './components/PricingCalculator'
import TestimonialCarousel from './components/TestimonialCarousel'
import AccordionFAQ from './components/AccordionFAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { features } from './data/features'
import { pricingPlans } from './data/pricing'
import { testimonials } from './data/testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for{' '}
              <span className="gradient-text">Modern Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to automate, optimize, and scale your marketing campaigns with AI.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={feature.id} feature={feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Simple,{' '}
              <span className="gradient-text">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the plan that fits your business needs. All plans include a 14-day free trial.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>

          {/* Dynamic Pricing Calculator */}
          <PricingCalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Loved by{' '}
              <span className="gradient-text">500+ Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our customers have to say about their experience with ADmyBRAND AI Suite.
            </p>
          </div>
          
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about our AI marketing platform.
            </p>
          </div>
          
          <AccordionFAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ready to{' '}
                <span className="gradient-text">Get Started?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Get in touch with our team to learn more about how ADmyBRAND can transform your marketing.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Let's talk about your project
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team of AI marketing experts is here to help you understand how our platform can 
                  automate your campaigns, optimize your ad spend, and scale your growth. 
                  We'll work with you to create a custom solution that fits your business needs.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-700">Free consultation call</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-700">Custom implementation plan</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">✓</span>
                    </div>
                    <span className="text-gray-700">Dedicated support team</span>
                  </div>
                </div>
              </div>
              
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 