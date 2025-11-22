'use client';

import { useEffect, useRef, useState } from 'react';

export default function ProblemSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full py-24 md:py-32 bg-gradient-to-br from-gray-50 to-blue-50"
      id="problem"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#556FB5] mb-6">
            We Know That Feeling
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            The melody that haunts you at 2 AM. The idea that feels perfect in your head but impossible to make real. The frustration of watching others succeed while your music stays trapped inside.
          </p>
        </div>

        {/* Three-Column Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1: Trapped Ideas */}
          <ProblemCard
            icon={<TrappedIdeasIcon />}
            quote="I have so many ideas for songs, but I get stuck trying to make them real. It's like the music is trapped in my head."
            attribution="— Alex, Graphic Designer"
            delay={0}
            isVisible={isVisible}
          />

          {/* Card 2: Technical Overwhelm */}
          <ProblemCard
            icon={<TechnicalOverwhelmIcon />}
            quote="I opened Ableton tonight. Stared at that empty grid for forty-five minutes. All those knobs and menus—it's like a thousand locked doors."
            attribution="— Alex's Journal, March 15th"
            delay={150}
            isVisible={isVisible}
          />

          {/* Card 3: Comparison Anxiety */}
          <ProblemCard
            icon={<ComparisonAnxietyIcon />}
            quote="I watched this kid post his new track. 47,000 likes. How does he just... do it? What does he know that I don't?"
            attribution="— Alex's Journal, 2:47 AM"
            delay={300}
            isVisible={isVisible}
          />
        </div>
      </div>
    </section>
  );
}

function ProblemCard({
  icon,
  quote,
  attribution,
  delay,
  isVisible,
}: {
  icon: React.ReactNode;
  quote: string;
  attribution: string;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`bg-white rounded-xl p-8 border border-gray-200 hover:border-[#4ECDC4] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{
        transitionDelay: isVisible ? `${delay}ms` : '0ms',
      }}
    >
      {/* Icon */}
      <div className="mb-6">{icon}</div>

      {/* Quote */}
      <p className="text-lg text-gray-700 leading-relaxed italic mb-4">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Attribution */}
      <p className="text-sm font-medium text-[#4ECDC4] text-right">{attribution}</p>
    </div>
  );
}

// Icon Components with brand colors

function TrappedIdeasIcon() {
  return (
    <svg
      className="w-16 h-16"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Cage bars */}
      <rect x="12" y="16" width="4" height="36" fill="#556FB5" opacity="0.6" rx="2" />
      <rect x="22" y="16" width="4" height="36" fill="#556FB5" opacity="0.4" rx="2" />
      <rect x="32" y="16" width="4" height="36" fill="#556FB5" opacity="0.6" rx="2" />
      <rect x="42" y="16" width="4" height="36" fill="#556FB5" opacity="0.4" rx="2" />
      <rect x="52" y="16" width="4" height="36" fill="#556FB5" opacity="0.6" rx="2" />
      
      {/* Music note trapped inside */}
      <circle cx="32" cy="28" r="6" fill="#4ECDC4" />
      <rect x="37" y="18" width="3" height="14" fill="#4ECDC4" />
      <circle cx="38.5" cy="17" r="4" fill="#4ECDC4" opacity="0.8" />
      
      {/* Lock */}
      <rect x="26" y="44" width="12" height="8" fill="#556FB5" rx="2" />
      <path d="M28 44 V40 A4 4 0 0 1 36 40 V44" stroke="#556FB5" strokeWidth="2" fill="none" />
    </svg>
  );
}

function TechnicalOverwhelmIcon() {
  return (
    <svg
      className="w-16 h-16"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Maze/complex interface */}
      <rect x="8" y="8" width="48" height="48" stroke="#556FB5" strokeWidth="3" fill="none" rx="4" />
      
      {/* Complex grid inside */}
      <line x1="24" y1="8" x2="24" y2="56" stroke="#556FB5" strokeWidth="2" opacity="0.4" />
      <line x1="40" y1="8" x2="40" y2="56" stroke="#556FB5" strokeWidth="2" opacity="0.4" />
      <line x1="8" y1="24" x2="56" y2="24" stroke="#556FB5" strokeWidth="2" opacity="0.4" />
      <line x1="8" y1="40" x2="56" y2="40" stroke="#556FB5" strokeWidth="2" opacity="0.4" />
      
      {/* Small confused person in center */}
      <circle cx="32" cy="32" r="8" fill="#4ECDC4" />
      <text x="32" y="36" fontSize="12" textAnchor="middle" fill="white" fontWeight="bold">?</text>
      
      {/* Knobs and sliders scattered around */}
      <circle cx="16" cy="16" r="3" fill="#556FB5" opacity="0.6" />
      <circle cx="48" cy="16" r="3" fill="#556FB5" opacity="0.6" />
      <circle cx="16" cy="48" r="3" fill="#556FB5" opacity="0.6" />
      <circle cx="48" cy="48" r="3" fill="#556FB5" opacity="0.6" />
    </svg>
  );
}

function ComparisonAnxietyIcon() {
  return (
    <svg
      className="w-16 h-16"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Social media interface */}
      <rect x="8" y="8" width="48" height="48" stroke="#556FB5" strokeWidth="3" fill="white" rx="4" />
      
      {/* Profile picture */}
      <circle cx="20" cy="20" r="6" fill="#4ECDC4" />
      
      {/* Post content bars */}
      <rect x="30" y="16" width="20" height="3" fill="#556FB5" opacity="0.3" rx="1.5" />
      <rect x="30" y="22" width="16" height="3" fill="#556FB5" opacity="0.3" rx="1.5" />
      
      {/* Image/content area */}
      <rect x="12" y="32" width="40" height="16" fill="#556FB5" opacity="0.1" rx="2" />
      
      {/* Likes counter with high number */}
      <g transform="translate(12, 52)">
        <path d="M8 0 L10 2 L10 6 L8 8 L2 8 L0 6 L0 2 L2 0 Z" fill="#EF4444" />
        <text x="16" y="7" fontSize="8" fill="#EF4444" fontWeight="bold">47K</text>
      </g>
      
      {/* Sad emoji */}
      <circle cx="48" cy="54" r="4" fill="#4ECDC4" opacity="0.5" />
      <text x="48" y="57" fontSize="6" textAnchor="middle">😔</text>
    </svg>
  );
}

