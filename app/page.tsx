'use client'

import { useEffect } from 'react'
import Header from '@/components/header'
import Hero from '@/components/hero'
import Credentials from '@/components/credentials'
import Services from '@/components/services'
import Footer from '@/components/footer'
import Contact from '@/components/contact'

export default function Home() {
  useEffect(() => {
    // Scroll to top on page load/reload
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="min-h-screen text-foreground relative">
      {/* Background - colorful and smooth */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        {/* Grid pattern - smoother */}
        <div className="absolute inset-0 pattern-grid opacity-25" />
        
        {/* Diagonal stripes */}
        <div className="absolute inset-0 pattern-diagonal opacity-15" />
        
        {/* Large colorful blobs - smooth and continuous, larger for seamless transitions */}
        <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-blue-500/10 organic-shape animate-blob blur-3xl" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-0 left-0 w-[1100px] h-[1100px] bg-red-500/10 organic-shape animate-blob blur-3xl" style={{ animationDelay: '3s', borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-blue-600/8 organic-shape animate-blob blur-3xl" style={{ animationDelay: '6s', borderRadius: '70% 30% 50% 50% / 30% 50% 50% 70%' }} />
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-red-600/8 organic-shape animate-blob blur-3xl" style={{ animationDelay: '4s' }} />
        
        {/* Colorful lines - no animation */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-15" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path d="M0,200 Q300,100 600,200 T1200,200" stroke="#2563eb" strokeWidth="3" fill="none" />
          <path d="M0,400 Q400,300 800,400 T1600,400" stroke="#dc2626" strokeWidth="3" fill="none" />
          <path d="M0,600 Q200,500 600,600 T1200,600" stroke="#1e40af" strokeWidth="2.5" fill="none" />
          <path d="M0,100 Q150,50 400,100 T1200,100" stroke="#dc2626" strokeWidth="2" fill="none" />
        </svg>
        
        {/* Floating colorful shapes - no squares, just organic shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-red-500/20 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-blue-500/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-red-600/15 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-28 h-28 bg-blue-600/15 rounded-full blur-lg animate-float" style={{ animationDelay: '3s' }} />
      </div>
      
      <Header />
      <Hero />
      <Services />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  )
}
