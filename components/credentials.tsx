'use client'

import { useState } from 'react'

export default function Credentials() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section id="credentials" className="relative border-b border-border px-6 py-24 overflow-hidden">

      <div className="mx-auto max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4 relative inline-block">
            Why 
            <span className="text-red-600"> Me?</span>
            <svg className="absolute -bottom-2 left-0 w-full h-3" viewBox="0 0 300 12" preserveAspectRatio="none">
              <path d="M0,8 Q75,4 150,8 T300,8" stroke="#2563eb" strokeWidth="4" fill="none" strokeLinecap="round" />
            </svg>
          </h2>
          <p className="text-lg text-black/70 max-w-2xl mx-auto font-medium">Proven results from a top-performing tutor who understands your journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div 
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative border-3 border-blue-500 rounded-2xl bg-white p-10 transition-all duration-300 hover:border-blue-600 hover:shadow-2xl hover:scale-110 hover:rotate-1 overflow-hidden shadow-xl"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 organic-shape -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="text-7xl font-black text-blue-600 mb-3">1530</div>
              <div className="font-bold text-black text-xl mt-2">Overall SAT Score</div>
              <p className="text-sm text-black/60 mt-2 font-medium">99th percentile nationwide</p>
            </div>
          </div>

          <div 
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative border-3 border-red-500 rounded-2xl bg-white p-10 transition-all duration-300 hover:border-red-600 hover:shadow-2xl hover:scale-110 hover:-rotate-1 overflow-hidden shadow-xl"
          >
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-red-500/20 organic-shape translate-y-1/2 -translate-x-1/2" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
            <div className="relative z-10">
              <div className="text-7xl font-black text-red-600 mb-3">800</div>
              <div className="font-bold text-black text-xl mt-2">Math Score</div>
              <p className="text-sm text-black/60 mt-2 font-medium">A perfect score</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative border-3 border-blue-500 rounded-xl bg-white p-6 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="absolute top-[15%] right-[10%] w-24 h-24 bg-red-500/15 organic-shape" style={{ borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' }}></div>
            <div className="relative z-10">
              <h4 className="font-black text-black text-xl mb-2">Recent Student Perspective</h4>
              <p className="text-black/70 leading-relaxed text-sm font-medium">The SAT is constantly changing and brings out new challenges for students to overcome. As a recent test taker who’s overcome them, I know exactly how to get you to do the same
              </p>
            </div>
          </div>

          <div className="group relative border-3 border-red-500 rounded-xl bg-white p-6 hover:border-red-600 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="absolute bottom-[20%] left-[8%] w-16 h-16 bg-blue-500/15 organic-shape" style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' }}></div>
            <div className="relative z-10">
              <h4 className="font-black text-black text-xl mb-2">Personalized Approach</h4>
              <p className="text-black/70 leading-relaxed text-sm font-medium">The SAT is a lot like a puzzle, wherein success doesn&apos;t always rely on knowing the right answer immediately, but on finding the method that works. I&apos;ve spent months studying and developed strategies to procedurally answer each question correctly.
              </p>
            </div>
          </div>

          <div className="group relative border-3 border-blue-500 rounded-xl bg-white p-6 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="absolute top-[25%] left-[12%] w-20 h-20 bg-red-500/15 organic-shape" style={{ borderRadius: '50% 50% 30% 70% / 50% 30% 70% 50%' }}></div>
            <div className="relative z-10">
              <h4 className="font-black text-black text-xl mb-2">Math Specialization</h4>
              <p className="text-black/70 leading-relaxed text-sm font-medium">When I first started, my math score was a 690, something I wasn’t proud of in the slightest. But constant reps and figuring out how to approach each problem is exactly what I hope to bring to you.
              </p>
            </div>
          </div>
          


          <div className="group relative border-3 border-blue-500 rounded-xl bg-white p-6 hover:border-blue-600 hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden shadow-lg">
            <div className="absolute bottom-[12%] right-[15%] w-28 h-28 bg-blue-500/15 organic-shape" style={{ borderRadius: '40% 60% 60% 40% / 60% 40% 60% 40%' }}></div>
            <div className="relative z-10">
              <h4 className="font-black text-black text-xl mb-2">Affordable & Flexible</h4>
              <p className="text-black/70 leading-relaxed text-sm font-medium">Just like you, I’m a high school student, so I know what it’s like to have a jam-packed schedule. What I hope to offer you and show why I work is that I can meet whenever you can at rates that work for you, not against you.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
