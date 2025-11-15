'use client'

export default function Footer() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id)
    if (section) {
      // Find the heading (h2) within the section, or use the section itself
      const heading = section.querySelector('h2') || section.querySelector('h1')
      const targetElement = heading || section
      
      // Get actual header height
      const header = document.querySelector('header')
      const headerHeight = header ? header.offsetHeight : 80
      
      const elementPosition = targetElement.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight
      
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="relative px-6 py-8 overflow-hidden bg-white">
      {/* Fun background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-500/10 organic-shape blur-3xl" />
        
        {/* Diagonal lines */}
        <div className="absolute inset-0 pattern-diagonal opacity-10" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-1 items-start justify-items-center">
          <div>
            <h4 className="font-black text-black text-xl mb-4 border-b-2 border-blue-500 pb-2 inline-block">About</h4>
            <p className="text-sm text-black/70 leading-relaxed font-medium">
              Expert SAT tutoring <br/> by a student, for students.
            </p>
          </div>

          <div>
            <h4 className="font-black text-black text-xl mb-4 border-b-2 border-red-500 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-sm text-black/70 hover:text-blue-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-block border-b border-transparent hover:border-blue-600"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('credentials')}
                  className="text-sm text-black/70 hover:text-blue-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-block border-b border-transparent hover:border-blue-600"
                >
                  Credentials
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-sm text-black/70 hover:text-blue-600 font-semibold transition-all duration-300 hover:translate-x-2 inline-block border-b border-transparent hover:border-blue-600"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-black text-black text-xl mb-1 border-b-2 border-black pb-2 inline-block">Contact</h4>
            <p className="text-sm text-black/70 leading-relaxed font-medium">
              <a href="tel:18482090996" className="hover:text-blue-600 transition-colors">(848) 209-0996</a><br />
              <span className="text-xs opacity-80">Edison, New Jersey</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
