import Hero from './components/Hero'
import Features from './components/Features'
import Pricing from './components/Pricing'
import TestimonialCarousel from './components/TestimonialCarousel'
import AccordionFAQ from './components/AccordionFAQ'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import PricingCalculator from './components/PricingCalculator'
import { testimonials } from './data/testimonials'

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative">
        <Hero />
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400/20 to-blue-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful Features for{' '}
              <span className="text-gradient-primary">Modern Marketing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to automate, optimize, and scale your marketing campaigns with AI-powered intelligence.
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple,{' '}
              <span className="text-gradient-primary">Transparent Pricing</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choose the plan that fits your business needs. All plans include our core AI features and 24/7 support.
            </p>
          </div>
          <Pricing />
          
          {/* Enhanced Pricing Calculator */}
          <div className="mt-20">
            <PricingCalculator />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by{' '}
              <span className="text-gradient-primary">500+ Companies</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              See what our customers have to say about their experience with ADmyBRAND AI Suite.
            </p>
          </div>
          <TestimonialCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-purple-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '3s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked{' '}
              <span className="text-gradient-primary">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Everything you need to know about ADmyBRAND AI Suite. Can't find the answer you're looking for? Contact our support team.
            </p>
          </div>
          <AccordionFAQ />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-blob" style={{ animationDelay: '4s' }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Ready to{' '}
                <span className="text-gradient-primary">Get Started?</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Let's discuss how ADmyBRAND AI Suite can transform your marketing campaigns and drive real results for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Our team is here to help you get started with AI-powered marketing. Whether you have questions about features, pricing, or implementation, we're ready to assist.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-semibold">📧</span>
                    </div>
                    <span>hello@admybrand.ai</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span className="text-purple-600 font-semibold">📞</span>
                    </div>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-600">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span className="text-green-600 font-semibold">📍</span>
                    </div>
                    <span>San Francisco, CA</span>
                  </div>
                </div>
              </div>
              
              <div>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
} 