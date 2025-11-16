'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const services = [
    {
      title: "Math Tutoring",
      description: "One-on-one sessions focused on strengthening your math fundamentals and problem-solving strategies. We'll work through practice problems together and build your confidence.",
      price: "$15/hour",
      features: ["Custom lesson plans", "Practice problems", "Progress tracking", "Flexible scheduling"],
      icon: "Math"
    },
    {
      title: "Full SAT Prep",
      description: "Comprehensive preparation covering all sections with personalized strategies, full-length practice tests, and targeted improvement plans.",
      price: "Flexible Pricing",
      features: ["All sections covered", "Full-length tests", "Strategy sessions", "Performance analysis"],
      icon: "SAT"
    }
  ]

  return (
    <section id="services" className="relative px-6 pt-20 md:pt-12 pb-24 overflow-hidden">

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 relative inline-block">
              Services
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 200 12" preserveAspectRatio="none">
              <path d="M0,8 Q50,4 100,8 T200,8" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">Choose what <span className="font-bold text-foreground">you</span> need</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative group border-3 rounded-2xl p-8 lg:p-10 transition-all duration-300 cursor-pointer overflow-hidden bg-white shadow-xl hover:shadow-2xl ${
                index === 0 
                  ? 'border-blue-500 hover:border-blue-600' 
                  : 'border-red-500 hover:border-red-600'
              } ${hoveredIndex === index ? 'scale-110 rotate-1' : 'hover:scale-105'}`}
            >
              {/* Organic shape decoration */}
              <div className={`absolute top-0 right-0 w-40 h-40 organic-shape opacity-15 ${
                index === 0 ? 'bg-blue-500' : 'bg-red-500'
              } -translate-y-1/2 translate-x-1/2 animate-blob`} style={{ animationDelay: `${index * 2}s` }}></div>

              {/* Icon and Price */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className={`text-3xl font-black ${index === 0 ? 'text-blue-600' : 'text-red-600'}`}>
                  {service.icon}
                </div>
                <div className="text-right">
                  <div className={`text-3xl font-black ${index === 0 ? 'text-blue-600' : 'text-red-600'}`}>
                    {service.price}
                  </div>
                </div>
              </div>

              <h3 className="text-3xl font-black text-black mb-3">{service.title}</h3>
              <p className="text-black/70 mb-6 leading-relaxed text-base font-medium">{service.description}</p>

              <div className="space-y-4 mb-6 relative z-10">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className={`mt-1.5 w-3 h-3 ${index === 0 ? 'bg-blue-500' : 'bg-red-500'} organic-shape`} style={{ borderRadius: idx % 2 === 0 ? '60% 40% 30% 70% / 60% 30% 70% 40%' : '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
                    <span className="text-sm text-black/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className={`w-full font-black py-7 text-lg transition-all duration-300 hover:scale-105 relative overflow-hidden shadow-lg hover:shadow-xl ${
                  index === 0 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white' 
                    : 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white'
                }`}
                onClick={() => {
                  const section = document.getElementById('contact')
                  if (section) {
                    // Find the heading (h2) within the section, or use the section itself
                    const heading = section.querySelector('h2') || section.querySelector('h1')
                    const targetElement = heading || section
                    
                    // Get actual header height
                    const header = document.querySelector('header')
                    const headerHeight = header ? header.offsetHeight : 80
                    const margin = 16 // Small margin between navbar and heading
                    
                    const elementPosition = targetElement.getBoundingClientRect().top
                    const offsetPosition = elementPosition + window.pageYOffset - headerHeight - margin
                    
                    window.scrollTo({
                      top: Math.max(0, offsetPosition),
                      behavior: 'smooth'
                    })
                  }
                }}
              >
                <span className="relative z-10">Get Started</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
