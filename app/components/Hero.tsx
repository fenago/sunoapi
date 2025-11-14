'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Gradient */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: 'linear-gradient(180deg, #1A1F2E 0%, #0F1419 100%)',
        }}
      />

      {/* Animated Music Notes Background (from existing design) */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-10 left-10 text-6xl opacity-20 animate-float">🎵</div>
        <div className="absolute top-20 right-20 text-4xl opacity-15 animate-float-delayed">🎶</div>
        <div className="absolute bottom-40 left-20 text-5xl opacity-10 animate-float-slow">🎼</div>
        <div className="absolute bottom-20 right-32 text-7xl opacity-10 animate-float">🎹</div>
        <div className="absolute top-1/3 left-1/4 text-3xl opacity-15 animate-float-delayed">🎸</div>
        <div className="absolute top-2/3 right-1/4 text-4xl opacity-20 animate-float-slow">🎤</div>
        <div className="absolute bottom-1/2 left-10 text-5xl opacity-10 animate-float">🎺</div>
        <div className="absolute top-1/2 right-10 text-6xl opacity-15 animate-float-delayed">🎧</div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #FF6B35 0%, transparent 70%)',
            animationDuration: '4s',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #4ECDC4 0%, transparent 70%)',
            animationDuration: '6s',
            animationDelay: '2s',
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-96 h-96 rounded-full blur-3xl opacity-15 animate-pulse"
          style={{
            background: 'radial-gradient(circle, #9B59B6 0%, transparent 70%)',
            animationDuration: '5s',
            animationDelay: '1s',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Eyebrow */}
            <div className="animate-fade-in">
              <p
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: '#4ECDC4' }}
              >
                FOR ASPIRING CREATORS
              </p>
            </div>

            {/* Headline */}
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-tight animate-fade-in-up"
              style={{
                background: 'linear-gradient(135deg, #FF6B35 0%, #FDC830 30%, #4ECDC4 50%, #9B59B6 85%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animationDelay: '0.1s',
              }}
            >
              Your Ideas. Real Music. In Minutes.
            </h1>

            {/* Subheadline */}
            <p
              className="text-lg sm:text-xl text-[#E2E8F0] leading-relaxed max-w-2xl animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              Stop letting technical barriers trap your creativity. Resonance turns the melody in your head into a finished track—no music theory, no expensive gear, no years of training required.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Link
                href="/signup"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-200 hover:scale-105 hover:shadow-2xl"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #F7931E 15%, #FDC830 30%, #4ECDC4 50%, #556FB5 70%, #9B59B6 85%, #E91E63 100%)',
                  boxShadow: '0 10px 15px -3px rgba(255, 107, 53, 0.3)',
                }}
              >
                Start Creating Free
              </Link>

              <Link
                href="#demo"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg transition-all duration-200 hover:bg-[rgba(78,205,196,0.1)] relative group"
                style={{
                  border: '2px solid transparent',
                  backgroundClip: 'padding-box',
                  color: '#4ECDC4',
                }}
              >
                <span
                  className="absolute inset-0 rounded-lg"
                  style={{
                    background: 'linear-gradient(135deg, #FF6B35 0%, #E91E63 100%)',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                    padding: '2px',
                  }}
                />
                <span className="relative flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                  </svg>
                  Watch How It Works
                </span>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div
              className="flex flex-wrap items-center gap-6 text-sm text-[#4A5568] animate-fade-in-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4ECDC4]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4ECDC4]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                </svg>
                <span>10,000+ creators</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[#4ECDC4]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span>247 songs created today</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visualization */}
          <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            <div className="relative">
              {/* Animated Gradient Border Card */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  background: 'linear-gradient(135deg, rgba(255, 107, 53, 0.1) 0%, rgba(233, 30, 99, 0.1) 100%)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(78, 205, 196, 0.3)',
                }}
              >
                <div className="p-8 space-y-6">
                  {/* Mock Creation Flow */}
                  <div className="space-y-4">
                    {/* Step 1: Text Input */}
                    <div className="bg-[rgba(15,20,25,0.8)] rounded-lg p-4 border border-[rgba(78,205,196,0.2)]">
                      <p className="text-xs text-[#4ECDC4] mb-2 font-medium">STEP 1: DESCRIBE</p>
                      <p className="text-sm text-[#E2E8F0] italic">
                        &ldquo;A warm, pulsing bassline that feels like a heartbeat...&rdquo;
                      </p>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg className="w-6 h-6 text-[#4ECDC4] animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* Step 2: Generation */}
                    <div className="bg-[rgba(15,20,25,0.8)] rounded-lg p-4 border border-[rgba(78,205,196,0.2)]">
                      <p className="text-xs text-[#4ECDC4] mb-2 font-medium">STEP 2: GENERATE</p>
                      <div className="flex items-center gap-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-2 border-[#4ECDC4] border-t-transparent" />
                        <p className="text-sm text-[#E2E8F0]">Creating your music...</p>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-center">
                      <svg className="w-6 h-6 text-[#4ECDC4] animate-bounce" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                      </svg>
                    </div>

                    {/* Step 3: Result */}
                    <div className="bg-[rgba(15,20,25,0.8)] rounded-lg p-4 border-2 border-[#4ECDC4]">
                      <p className="text-xs text-[#4ECDC4] mb-3 font-medium">STEP 3: YOUR TRACK</p>
                      <div className="flex items-center gap-3 mb-3">
                        <button
                          className="w-10 h-10 rounded-full flex items-center justify-center"
                          style={{
                            background: 'linear-gradient(135deg, #FF6B35 0%, #E91E63 100%)',
                          }}
                        >
                          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" />
                          </svg>
                        </button>
                        <div className="flex-1">
                          <p className="text-sm font-semibold text-white">2AM Thoughts</p>
                          <p className="text-xs text-[#4A5568]">Your Creation</p>
                        </div>
                      </div>
                      {/* Waveform mockup */}
                      <div className="h-12 flex items-end justify-between gap-1">
                        {[...Array(32)].map((_, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-full"
                            style={{
                              height: `${Math.random() * 100}%`,
                              background: 'linear-gradient(180deg, #4ECDC4 0%, #556FB5 100%)',
                              minHeight: '20%',
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full font-semibold text-sm text-white shadow-lg"
                style={{
                  background: 'linear-gradient(135deg, #FF6B35 0%, #E91E63 100%)',
                }}
              >
                ✨ Try it now
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-[#4ECDC4]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

