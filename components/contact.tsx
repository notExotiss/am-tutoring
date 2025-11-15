'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { CheckCircle, MapPin, Phone, Calendar } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      // Show success message
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', message: '' })
    } catch (err) {
      setError('Failed to send message. Please try again or contact me directly.')
      console.error('Error sending email:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section id="contact" className="relative px-6 py-24 overflow-hidden" style={{ scrollMarginTop: '5rem' }}>

      <div className="mx-auto max-w-3xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 relative inline-block">
            Get in Touch
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 250 12" preserveAspectRatio="none">
              <path d="M0,8 Q62,4 125,8 T250,8" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">Send me a message to get your journey started!</p>
        </div>

        {submitted ? (
          <div className="border-3 border-blue-500 rounded-2xl bg-white p-10 text-center relative overflow-hidden shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/15 organic-shape -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <CheckCircle className="w-16 h-16 text-blue-600" strokeWidth={2.5} />
              </div>
              <p className="text-2xl font-black text-black mb-2">Message sent successfully!</p>
              <p className="text-black/70 font-medium">I&apos;ll be in touch within 24 hours to discuss your tutoring needs and goals.</p>
            </div>
          </div>
        ) : (
          <div className="border-3 border-blue-500 rounded-2xl bg-white p-8 lg:p-10 relative overflow-hidden shadow-xl">
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 organic-shape translate-y-1/2 -translate-x-1/2" style={{ borderRadius: '70% 30% 50% 50% / 30% 50% 50% 70%' }}></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-black text-black mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                    className="w-full px-4 py-3 border-2 border-black/20 rounded-lg bg-white text-black focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all duration-200 placeholder:text-black/40 font-medium"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-black text-black mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                    className="w-full px-4 py-3 border-2 border-black/20 rounded-lg bg-white text-black focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all duration-200 placeholder:text-black/40 font-medium"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-black text-black mb-2">
                  Phone <span className="text-black/50 font-normal">(optional)</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-black/20 rounded-lg bg-white text-black focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all duration-200 placeholder:text-black/40 font-medium"
                  placeholder="(555) 123-4567"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-black text-black mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border-2 border-black/20 rounded-lg bg-white text-black focus:outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-600/20 transition-all duration-200 resize-none placeholder:text-black/40 font-medium"
                  placeholder="Tell me about your SAT goals and what areas you need help with..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 border-2 border-red-500 rounded-lg text-red-700 font-medium">
                  {error}
                </div>
              )}
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black py-7 text-lg transition-all duration-300 hover:scale-110 shadow-xl hover:shadow-2xl relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="relative z-10">
                  {isLoading ? 'Sending...' : 'Send Message'}
                </span>
              </Button>
            </form>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="group relative border-3 border-blue-500 rounded-2xl bg-white p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-1 overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/15 organic-shape -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-start gap-4 relative z-10">
              <MapPin className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h3 className="font-black text-black text-xl mb-2">Location</h3>
                <p className="text-black/70 font-medium">
                  Edison, New Jersey<br />
                </p>
              </div>
            </div>
          </div>

          <div className="group relative border-3 border-red-500 rounded-2xl bg-white p-8 hover:border-red-600 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-1 overflow-hidden shadow-lg">
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500/15 organic-shape translate-y-1/2 -translate-x-1/2" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
            <div className="flex items-start gap-4 relative z-10">
              <Phone className="w-12 h-12 text-red-600 flex-shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h3 className="font-black text-black text-xl mb-2">Phone</h3>
                <p className="text-black/70 font-medium">
                  <a href="tel:18482090996" className="hover:text-blue-600 transition-colors">(848) 209-0996</a>
                </p>
              </div>
            </div>
          </div>

          <div className="group relative border-3 border-blue-500 rounded-2xl bg-white p-8 hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-110 hover:rotate-1 overflow-hidden shadow-lg">
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/15 organic-shape -translate-y-1/2 translate-x-1/2"></div>
            <div className="flex items-start gap-4 relative z-10">
              <Calendar className="w-12 h-12 text-blue-600 flex-shrink-0 mt-1" strokeWidth={2} />
              <div>
                <h3 className="font-black text-black text-xl mb-2">Availability</h3>
                <p className="text-black/70 font-medium">
                  Flexible scheduling<br />
                  <span className="text-sm">Online & in-person options</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
