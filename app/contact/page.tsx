'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 -z-10 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      <Header />
      
      <section className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 border-b border-border/50">
        {/* Enhanced gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-3xl text-center z-10">
          <h1 className="text-6xl md:text-7xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-foreground/70 max-w-2xl mx-auto">
            Ready to improve your SAT score? Let&apos;s start your tutoring journey together.
          </p>
        </div>
      </section>

      <section className="relative px-4 py-24 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/8 rounded-full blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl relative z-10">
          {submitted ? (
            <div className="border-2 border-primary/50 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent p-10 text-center backdrop-blur-sm shadow-xl shadow-primary/20">
              <div className="text-5xl mb-4 animate-pulse-slow">✓</div>
              <p className="text-2xl font-bold text-foreground mb-2">Message sent successfully!</p>
              <p className="text-foreground/70">
                I&apos;ll be in touch within 24 hours to discuss your tutoring needs and goals.
              </p>
            </div>
          ) : (
            <div className="border-2 border-primary/30 rounded-2xl bg-card/50 backdrop-blur-sm p-8 lg:p-10 shadow-xl shadow-primary/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                    Phone Number <span className="text-foreground/50 font-normal">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 placeholder:text-foreground/40"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-border rounded-xl bg-card text-foreground focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all duration-300 resize-none placeholder:text-foreground/40"
                    placeholder="Tell me about your SAT goals and what areas you need help with..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base py-6 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] transition-all duration-300"
                >
                  Send Message
                </Button>
              </form>
            </div>
          )}

          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="group border-2 border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📍</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">Location</h3>
                  <p className="text-foreground/70">
                    New Jersey<br />
                    <span className="text-sm">John P. Stevens High School</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group border-2 border-border/50 rounded-2xl bg-card/50 backdrop-blur-sm p-8 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:scale-[1.02]">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🗓️</div>
                <div>
                  <h3 className="font-bold text-foreground text-lg mb-2 group-hover:text-primary transition-colors">Availability</h3>
                  <p className="text-foreground/70">
                    Flexible scheduling<br />
                    <span className="text-sm">Online & in-person options</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
