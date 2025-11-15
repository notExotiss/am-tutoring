'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    setIsOpen(false)
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-xl supports-[backdrop-filter]:bg-white/90 shadow-lg">
        <nav className="mx-auto max-w-7xl px-4 md:px-2 py-4 md:py-4">
          <div className="flex items-center justify-between">
            {/* Name */}
            <button 
              onClick={scrollToTop} 
              className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent hover:from-blue-700 hover:to-red-700 transition-all duration-300"
              style={{ fontFamily: 'var(--font-allura), cursive' }}
            >
              A.M. Tutoring
            </button>

            {/* Center: Desktop Navigation */}
            <div className="hidden gap-8 md:flex absolute left-1/2 -translate-x-1/2">
              <button
                onClick={() => scrollToSection('services')}
                className="text-sm font-bold text-black hover:text-blue-600 transition-all duration-300 relative group"
              >
                Services
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('credentials')}
                className="text-sm font-bold text-black hover:text-blue-600 transition-all duration-300 relative group"
              >
                Credentials
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-bold text-black hover:text-blue-600 transition-all duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-blue-600 group-hover:w-full transition-all duration-300" />
              </button>
            </div>

            {/* Right: Get Started Button */}
            <Button
              size="sm"
              className="hidden md:inline-flex bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300"
              onClick={() => scrollToSection('contact')}
            >
              Get Started
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-black hover:text-blue-600 transition-colors duration-300 text-2xl font-black"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? '✕' : '☰'}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`absolute left-0 right-0 top-full flex flex-col gap-3 bg-white backdrop-blur-xl px-6 py-4 md:hidden shadow-xl transition-all duration-300 ease-out overflow-hidden ${
              isOpen 
                ? 'max-h-96 opacity-100 translate-y-0' 
                : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
            }`}
          >
            <button 
              onClick={() => scrollToSection('services')} 
              className="text-black hover:text-blue-600 transition-all duration-300 text-base font-bold text-left py-2 border-l-4 border-transparent hover:border-blue-600 pl-3 transform hover:translate-x-2"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('credentials')} 
              className="text-black hover:text-blue-600 transition-all duration-300 text-base font-bold text-left py-2 border-l-4 border-transparent hover:border-blue-600 pl-3 transform hover:translate-x-2"
            >
              Credentials
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-black hover:text-blue-600 transition-all duration-300 text-base font-bold text-left py-2 border-l-4 border-transparent hover:border-blue-600 pl-3 transform hover:translate-x-2"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')} 
              className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-black mt-2 shadow-lg hover:shadow-xl"
            >
              Get Started
            </Button>
          </div>
        </nav>
      </header>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 bg-gradient-to-r from-blue-600/80 to-blue-500/80 hover:from-blue-700/90 hover:to-blue-600/90 backdrop-blur-sm text-white font-black p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Scroll to top"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  )
}
