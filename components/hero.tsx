'use client'

import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
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
  }

  return (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pb-20 sm:pb-8">

      <div 
        className="mx-auto max-w-6xl relative z-10 w-full"
        style={{ transform: `translateY(${Math.min(scrollY * 0.3, 200)}px)` }}
      >
        <div className={`mb-6 inline-block rounded-full border-2 border-blue-500 bg-white px-8 py-3 text-sm font-bold text-blue-600 shadow-lg transition-smooth transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
          1530 SAT
        </div>

        <h1 className={`text-5xl md:text-7xl font-black tracking-tight transition-smooth transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-black">Personalized SAT Prep</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">That Actually Works</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" preserveAspectRatio="none">
              <path d="M0,8 Q100,2 200,8 T400,8" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        <p className={`mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed transition-smooth transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
          I&apos;m <span className="font-semibold text-foreground">Aarit Malhotra</span>, a sophomore at John P. Stevens High School. I scored a 1530 on the SAT with a perfect 800 in Math. I&apos;ve taken the SAT 2 times, many more practice tests, and have logged countless hours at big-name testing facilities to no avail. The SAT is just pattern recognition, so, with my experience, I can help you find those patterns and give you an exact plan to work your way up.
        </p>

        <div className={`mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4 transition-smooth transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <Button 
            size="lg"
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold px-10 py-7 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 relative overflow-hidden group"
            onClick={() => scrollToSection('contact')}
          >
            <span className="relative z-10">Get Started</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            size="lg"
            variant="outline"
            className="border-3 border-black bg-white hover:bg-black hover:text-white text-black font-bold px-10 py-7 transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl relative overflow-hidden"
            onClick={() => scrollToSection('services')}
          >
            <span className="relative z-10">View Services</span>
          </Button>
        </div>

      </div>
    </section>
  )
}
