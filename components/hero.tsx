'use client'

import { Button } from '@/components/ui/button'
import { useState, useEffect, useRef } from 'react'

// List of fonts to cycle through for the cryptography effect - expanded and randomized
const BASE_FONTS = [
  'Arial',
  'Times New Roman',
  'Courier New',
  'Georgia',
  'Verdana',
  'Trebuchet MS',
  'Impact',
  'Comic Sans MS',
  'Lucida Console',
  'Palatino',
  'Garamond',
  'Bookman',
  'Avant Garde',
  'Helvetica',
  'Tahoma',
  'Century Gothic',
  'Franklin Gothic',
  'Brush Script MT',
  'Copperplate',
  'Papyrus',
  'Futura',
  'Baskerville',
  'Optima',
  'Geneva',
  'Monaco',
  'Didot',
  'Bodoni',
  'Minion',
  'Myriad',
  'Frutiger',
  'Univers',
  'Gill Sans',
  'Futura',
  'Rockwell',
  'Bembo',
  'Caslon',
  'Goudy',
  'Perpetua',
  'Sabon',
  'Syntax',
  'Meta',
  'Rotis',
  'FF Meta',
  'FF Scala',
  'FF DIN',
  'FF Kievit',
  'FF Unit',
  'FF Tisa',
  'FF Dax',
  'FF Mark',
]

// Randomize font order
const FONT_FAMILIES = [...BASE_FONTS].sort(() => Math.random() - 0.5)

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const [stoppedChars, setStoppedChars] = useState<Set<number>>(new Set())
  const [fontIndices, setFontIndices] = useState<number[]>([])
  const isLoadedRef = useRef(false)
  const stoppedCharsRef = useRef<Set<number>>(new Set())
  
  // Hero text content - split into characters for all text elements
  const badgeText = "1530 SAT"
  const titleLine1 = "Personalized SAT Prep"
  const titleLine2 = "That Actually Works"
  const paragraphText = "I'm Aarit Malhotra, a sophomore at John P. Stevens High School. I scored a 1530 on the SAT with a perfect 800 in Math. I've taken the SAT 2 times, many more practice tests, and have logged countless hours at big-name testing facilities to no avail. The SAT is just pattern recognition, so, with my experience, I can help you find those patterns and give you an exact plan to work your way up."
  
  // Combine all text for character-by-character animation (no newlines in display)
  const allText = `${badgeText} ${titleLine1} ${titleLine2} ${paragraphText}`
  const characters = allText.split('')
  
  // Calculate character index offsets
  const badgeEnd = badgeText.length
  const title1Start = badgeEnd + 1 // +1 for space
  const title1End = title1Start + titleLine1.length
  const title2Start = title1End + 1 // +1 for space
  const title2End = title2Start + titleLine2.length
  const paraStart = title2End + 1 // +1 for space
  
  // Initialize font indices for all characters
  useEffect(() => {
    if (fontIndices.length === 0 && characters.length > 0) {
      setFontIndices(new Array(characters.length).fill(0).map(() => Math.floor(Math.random() * FONT_FAMILIES.length)))
    }
  }, [characters.length, fontIndices.length])

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typography loading animation effect - character by character
  useEffect(() => {
    if (fontIndices.length === 0) return

    const handleLoad = () => {
      isLoadedRef.current = true
      setIsLoaded(true)
    }

    // Always show animation for at least 3 seconds
    const minAnimationTime = setTimeout(() => {
      if (document.readyState === 'complete') {
        isLoadedRef.current = true
        setIsLoaded(true)
      }
    }, 3000)

    // Listen for load event
    window.addEventListener('load', handleLoad)

    // Fallback: stop after 6 seconds max
    const maxTimeout = setTimeout(() => {
      isLoadedRef.current = true
      setIsLoaded(true)
    }, 6000)

    // Cycle fonts for all characters (slower - 200ms per cycle)
    const fontCycleInterval = setInterval(() => {
      if (!isLoadedRef.current) {
        setFontIndices(prev => {
          return prev.map((idx, charIndex) => {
            // If character has stopped, keep it at current font
            if (stoppedCharsRef.current.has(charIndex)) {
              return idx
            }
            // Otherwise cycle to next font
            return (idx + 1) % FONT_FAMILIES.length
          })
        })
      }
    }, 200) // Slower cycling - 200ms

    // Sequential stopping - start after 500ms, then stop one character every 50ms from left to right
    let currentCharIndex = 0
    let stopIntervalRef: NodeJS.Timeout | null = null
    const stopDelay = setTimeout(() => {
      stopIntervalRef = setInterval(() => {
        if (isLoadedRef.current || currentCharIndex >= characters.length) {
          if (stopIntervalRef) clearInterval(stopIntervalRef)
          return
        }

        // Stop current character
        stoppedCharsRef.current.add(currentCharIndex)
        setStoppedChars(new Set(stoppedCharsRef.current))
        currentCharIndex++
      }, 50) // Stop one character every 50ms
    }, 500) // Start stopping after 500ms

    return () => {
      clearInterval(fontCycleInterval)
      if (stopIntervalRef) clearInterval(stopIntervalRef)
      clearTimeout(stopDelay)
      clearTimeout(minAnimationTime)
      clearTimeout(maxTimeout)
      window.removeEventListener('load', handleLoad)
    }
  }, [fontIndices.length, characters.length])

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
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center px-6 pb-32 sm:pb-8">

      <div 
        className="mx-auto max-w-6xl relative z-10 w-full"
        style={{ transform: `translateY(${Math.min(scrollY * 0.3, 200)}px)` }}
      >
        {/* Badge */}
        <div className={`mb-6 inline-block rounded-full border-2 border-blue-500 bg-white px-8 py-3 text-sm font-bold text-blue-600 shadow-lg transition-smooth transform ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <span className="inline-block w-2 h-2 rounded-full bg-red-500 mr-2 animate-pulse"></span>
          {badgeText.split('').map((char, idx) => {
            const charIndex = idx
            const fontIdx = fontIndices[charIndex] ?? Math.floor(Math.random() * FONT_FAMILIES.length)
            return (
              <span
                key={idx}
                style={{
                  fontFamily: isLoaded 
                    ? 'var(--font-inter), sans-serif' 
                    : `${FONT_FAMILIES[fontIdx]}, sans-serif`
                }}
              >
                {char}
              </span>
            )
          })}
        </div>

        {/* Title */}
        <h1 
          className={`text-5xl md:text-7xl font-black tracking-tight transition-smooth transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="text-black">
            {titleLine1.split('').map((char, idx) => {
              const charIndex = title1Start + idx
              const fontIdx = fontIndices[charIndex] ?? Math.floor(Math.random() * FONT_FAMILIES.length)
              return (
                <span
                  key={idx}
                  style={{
                    fontFamily: isLoaded 
                      ? 'var(--font-inter), sans-serif' 
                      : `${FONT_FAMILIES[fontIdx]}, sans-serif`
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              )
            })}
          </span>
          <br />
          <span className="relative inline-block">
            <span className="bg-gradient-to-r from-blue-600 to-red-600 bg-clip-text text-transparent">
              {titleLine2.split('').map((char, idx) => {
                const charIndex = title2Start + idx
                const fontIdx = fontIndices[charIndex] ?? Math.floor(Math.random() * FONT_FAMILIES.length)
                return (
                  <span
                    key={idx}
                    style={{
                      fontFamily: isLoaded 
                        ? 'var(--font-inter), sans-serif' 
                        : `${FONT_FAMILIES[fontIdx]}, sans-serif`
                    }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </span>
                )
              })}
            </span>
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 400 12" preserveAspectRatio="none">
              <path d="M0,8 Q100,2 200,8 T400,8" stroke="#dc2626" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Paragraph */}
        <p className={`mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl leading-relaxed transition-smooth transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '100ms' }}>
          {paragraphText.split('').map((char, idx) => {
            const charIndex = paraStart + idx
            const fontIdx = fontIndices[charIndex] ?? Math.floor(Math.random() * FONT_FAMILIES.length)
            const isName = paragraphText.substring(idx, idx + 15) === "Aarit Malhotra"
            return (
              <span
                key={idx}
                style={{
                  fontFamily: isLoaded 
                    ? 'var(--font-inter), sans-serif' 
                    : `${FONT_FAMILIES[fontIdx]}, sans-serif`,
                  fontWeight: isName ? '600' : 'normal'
                }}
                className={isName ? 'font-semibold text-foreground' : ''}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            )
          })}
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
