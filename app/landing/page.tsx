import Navigation from '../components/Navigation';
import Hero from '../components/Hero';

export default function LandingPage() {
  return (
    <main className="bg-[#0F1419] min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Placeholder for additional sections */}
      <div className="py-20 text-center text-white">
        <p className="text-[#4A5568]">Additional sections coming soon...</p>
      </div>
    </main>
  );
}

