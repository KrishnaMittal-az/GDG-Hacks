"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Trophy, Calendar, MapPin } from 'lucide-react';

export default function AboutPage() {
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
            <h1 className="text-5xl font-bold mb-8 cyberpunk-glow">About GDG Hacks</h1>
            <p className="text-xl text-white/80 mb-12">
              North India&apos;s premier hackathon bringing together the brightest minds in technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <StatCard
              icon={<Users className="w-8 h-8" />}
              number="1000+"
              label="Participants"
            />
            <StatCard
              icon={<Trophy className="w-8 h-8" />}
              number="₹10L+"
              label="in Prizes"
            />
            <StatCard
              icon={<Calendar className="w-8 h-8" />}
              number="48hrs"
              label="of Hacking"
            />
            <StatCard
              icon={<MapPin className="w-8 h-8" />}
              number="20+"
              label="Cities"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 cyberpunk-glow">Our Journey</h2>
            <div className="space-y-12">
              <TimelineItem
                year="2025"
                title="GDG Hacks Goes National"
                description="Expanding our reach across India with groundbreaking innovations and partnerships."
              />
              <TimelineItem
                year="2024"
                title="Record-Breaking Year"
                description="Over 800 participants from 15 cities came together for 48 hours of non-stop innovation."
              />
              <TimelineItem
                year="2023"
                title="The Beginning"
                description="Started as a local hackathon with 200 participants, setting the foundation for future growth."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 cyberpunk-glow">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMember
              name="Alex Johnson"
              role="Lead Organizer"
              image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
            />
            <TeamMember
              name="Sarah Chen"
              role="Technical Lead"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200"
            />
            <TeamMember
              name="Mike Rodriguez"
              role="Community Manager"
              image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
            />
          </div>
        </div>
      </section>
    </main>
  );
}

function StatCard({ icon, number, label }: { icon: React.ReactNode; number: string; label: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cyberpunk-card text-center"
    >
      <div className="text-[#FFD700] mb-4">{icon}</div>
      <h3 className="text-3xl font-bold mb-2">{number}</h3>
      <p className="text-white/60">{label}</p>
    </motion.div>
  );
}

function TimelineItem({ year, title, description }: { year: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="flex gap-8"
    >
      <div className="text-[#FFD700] text-2xl font-bold">{year}</div>
      <div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-white/60">{description}</p>
      </div>
    </motion.div>
  );
}

function TeamMember({ name, role, image }: { name: string; role: string; image: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cyberpunk-card text-center"
    >
      <div className="w-32 h-32 mx-auto mb-6 relative rounded-full overflow-hidden">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-white/60">{role}</p>
    </motion.div>
  );
}