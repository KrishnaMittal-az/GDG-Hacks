"use client";

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Brain, Cpu, Globe2, Lock, Code, Blocks } from 'lucide-react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Scene = dynamic(() => import('@/components/Scene'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="hero-container">
        <div className="canvas-container">
          <Scene />
        </div>
        
        <div className="content-container px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 cyberpunk-glow">
              GDG HACKS 2025
            </h1>
            <p className="text-xl sm:text-2xl mb-8 text-[#FFD700]">
              North India&apos;s Largest Hackathon
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-white/80">
                <Calendar className="w-5 h-5 text-[#FFD700]" />
                <span>April 15-17, 2025</span>
              </div>
              <div className="hidden sm:block text-white/50">|</div>
              <div className="flex items-center gap-2 text-white/80">
                <MapPin className="w-5 h-5 text-[#FFD700]" />
                <span>New Delhi, India</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="cyberpunk-button group">
                Register Now
                <ArrowRight className="inline-block ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="cyberpunk-button">
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-8 cyberpunk-glow">About GDG Hacks</h2>
            <p className="text-lg mb-12 text-white/80">
              Join us for North India&apos;s largest hackathon, where innovation meets technology.
              GDG Hacks brings together the brightest minds to create, innovate, and transform ideas into reality.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyberpunk-card">
                <h3 className="text-xl font-bold mb-4">48 Hours</h3>
                <p>Of non-stop hacking and innovation</p>
              </div>
              <div className="cyberpunk-card">
                <h3 className="text-xl font-bold mb-4">₹10,00,000</h3>
                <p>In prizes and rewards</p>
              </div>
              <div className="cyberpunk-card">
                <h3 className="text-xl font-bold mb-4">1000+ Hackers</h3>
                <p>From across the nation</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 cyberpunk-glow">Hackathon Tracks</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TrackCard
              icon={<Brain className="w-12 h-12" />}
              title="AI/ML"
              description="Build the future of artificial intelligence and machine learning"
            />
            <TrackCard
              icon={<Globe2 className="w-12 h-12" />}
              title="AR/VR"
              description="Create immersive experiences in augmented and virtual reality"
            />
            <TrackCard
              icon={<Cpu className="w-12 h-12" />}
              title="IoT & Smart Tech"
              description="Connect the physical and digital worlds through IoT innovation"
            />
            <TrackCard
              icon={<Blocks className="w-12 h-12" />}
              title="Web3 & Blockchain"
              description="Revolutionize the web with blockchain technology"
            />
            <TrackCard
              icon={<Code className="w-12 h-12" />}
              title="Web/App Development"
              description="Develop cutting-edge web and mobile applications"
            />
            <TrackCard
              icon={<Lock className="w-12 h-12" />}
              title="Cybersecurity"
              description="Protect the digital world through ethical hacking"
            />
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section id="sponsors" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 cyberpunk-glow">Our Sponsors</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            {/* Placeholder sponsor logos */}
            <div className="sponsor-card">
              <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
                Sponsor 1
              </div>
            </div>
            <div className="sponsor-card">
              <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
                Sponsor 2
              </div>
            </div>
            <div className="sponsor-card">
              <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
                Sponsor 3
              </div>
            </div>
            <div className="sponsor-card">
              <div className="w-40 h-40 bg-white/10 rounded-lg flex items-center justify-center">
                Sponsor 4
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="cyberpunk-button">
              Become a Sponsor
            </button>
          </div>
        </div>
      </section>

      {/* Community Partners Section */}
      <section id="community-partners" className="py-20 bg-gradient-to-b from-black to-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 cyberpunk-glow">Community Partners</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {/* Community Partner Cards */}
            <PartnerCard name="GDG New Delhi" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="GDG Cloud Delhi" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="GDSC NSUT" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="GDSC DTU" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="WTM Delhi" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="Developer Student Clubs" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="Mozilla Delhi" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="Facebook Developer Circle" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="Microsoft Learn" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="AWS Community" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="Flutter Delhi" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
            <PartnerCard name="React Delhi" logo="https://images.unsplash.com/photo-1636819488537-a9b1ffb315ce?auto=format&fit=crop&q=80&w=200" />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 cyberpunk-glow">Contact Us</h2>
          
          <div className="max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="cyberpunk-input w-full"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="cyberpunk-input w-full"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="cyberpunk-input w-full"
                  placeholder="Your message"
                ></textarea>
              </div>
              <div className="text-center">
                <button type="submit" className="cyberpunk-button">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#FFD700]/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">GDG Hacks 2025</h3>
              <p className="text-white/60">
                North India&apos;s Largest Hackathon
              </p>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-white/60 hover:text-[#FFD700]">About</a></li>
                <li><a href="#tracks" className="text-white/60 hover:text-[#FFD700]">Tracks</a></li>
                <li><a href="#sponsors" className="text-white/60 hover:text-[#FFD700]">Sponsors</a></li>
                <li><a href="#contact" className="text-white/60 hover:text-[#FFD700]">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-white/60 hover:text-[#FFD700]">Twitter</a>
                <a href="#" className="text-white/60 hover:text-[#FFD700]">LinkedIn</a>
                <a href="#" className="text-white/60 hover:text-[#FFD700]">Instagram</a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-bold mb-4">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="cyberpunk-input flex-1"
                />
                <button className="cyberpunk-button ml-2">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/60">
            <p>&copy; 2025 GDG Hacks. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

function TrackCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cyberpunk-card p-6 text-center"
    >
      <div className="text-[#FFD700] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/60">{description}</p>
    </motion.div>
  );
}

function PartnerCard({ name, logo }: { name: string; logo: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cyberpunk-card p-4 flex flex-col items-center justify-center text-center"
    >
      <div className="w-20 h-20 mb-4 relative">
        <Image
          src={logo}
          alt={name}
          fill
          className="object-contain"
        />
      </div>
      <p className="text-sm font-medium text-white/80">{name}</p>
    </motion.div>
  );
}