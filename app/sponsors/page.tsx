"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Diamond, Award, Medal } from 'lucide-react';

export default function SponsorsPage() {
  return (
    <main className="pt-20 bg-black text-white">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-8 cyberpunk-glow">Our Sponsors</h1>
            <p className="text-xl text-white/80 mb-12">
              Meet the amazing companies that make GDG Hacks possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sponsor Tiers */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          {/* Platinum Sponsors */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <Diamond className="w-8 h-8 text-[#FFD700]" />
              <h2 className="text-4xl font-bold cyberpunk-glow">Platinum Sponsors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <SponsorCard
                name="Tech Giant Corp"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Leading technology company specializing in AI and cloud computing."
                tier="platinum"
              />
              <SponsorCard
                name="Future Systems"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Innovative solutions for tomorrow's challenges."
                tier="platinum"
              />
            </div>
          </div>

          {/* Gold Sponsors */}
          <div className="mb-20">
            <div className="flex items-center justify-center gap-4 mb-12">
              <Award className="w-8 h-8 text-[#FFD700]" />
              <h2 className="text-4xl font-bold cyberpunk-glow">Gold Sponsors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SponsorCard
                name="Cloud Solutions"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Enterprise cloud infrastructure provider."
                tier="gold"
              />
              <SponsorCard
                name="Dev Tools Inc"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Development tools and platforms."
                tier="gold"
              />
              <SponsorCard
                name="Security Pro"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Cybersecurity solutions for modern threats."
                tier="gold"
              />
            </div>
          </div>

          {/* Silver Sponsors */}
          <div>
            <div className="flex items-center justify-center gap-4 mb-12">
              <Medal className="w-8 h-8 text-[#FFD700]" />
              <h2 className="text-4xl font-bold cyberpunk-glow">Silver Sponsors</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <SponsorCard
                name="StartUp Hub"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Empowering next-gen entrepreneurs."
                tier="silver"
              />
              <SponsorCard
                name="Code Academy"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Learning platform for developers."
                tier="silver"
              />
              <SponsorCard
                name="Data Systems"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Big data and analytics solutions."
                tier="silver"
              />
              <SponsorCard
                name="AI Research"
                logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=300"
                description="Advancing AI technology."
                tier="silver"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Become a Sponsor */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 cyberpunk-glow">Become a Sponsor</h2>
            <p className="text-xl text-white/80 mb-12">
              Join us in shaping the future of technology. Partner with GDG Hacks 2025.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <SponsorTier
                name="Platinum"
                price="₹5,00,000"
                benefits={[
                  "Premium booth space",
                  "Main stage keynote",
                  "First-tier branding",
                  "10 VIP passes",
                  "Recruitment access"
                ]}
              />
              <SponsorTier
                name="Gold"
                price="₹3,00,000"
                benefits={[
                  "Booth space",
                  "Workshop session",
                  "Second-tier branding",
                  "5 VIP passes",
                  "Talent pool access"
                ]}
              />
              <SponsorTier
                name="Silver"
                price="₹1,00,000"
                benefits={[
                  "Display space",
                  "Logo placement",
                  "Third-tier branding",
                  "2 VIP passes",
                  "Brand visibility"
                ]}
              />
            </div>
            <button className="cyberpunk-button mt-12">
              Contact for Sponsorship
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

function SponsorCard({ 
  name, 
  logo, 
  description, 
  tier 
}: { 
  name: string; 
  logo: string; 
  description: string;
  tier: 'platinum' | 'gold' | 'silver';
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`cyberpunk-card p-8 text-center ${
        tier === 'platinum' ? 'border-[#FFD700]' :
        tier === 'gold' ? 'border-[#FFA500]' :
        'border-[#C0C0C0]'
      }`}
    >
      <div className="w-32 h-32 mx-auto mb-6 relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
}

function SponsorTier({ 
  name, 
  price, 
  benefits 
}: { 
  name: string; 
  price: string; 
  benefits: string[];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cyberpunk-card"
    >
      <h3 className="text-2xl font-bold mb-4">{name}</h3>
      <p className="text-[#FFD700] text-3xl mb-6">{price}</p>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="text-white/80 flex items-center gap-2">
            <span className="text-[#FFD700]">•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}