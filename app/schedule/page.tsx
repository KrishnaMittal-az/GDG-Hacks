"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Trophy, Laptop } from 'lucide-react';

export default function SchedulePage() {
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
            <h1 className="text-5xl font-bold mb-8 cyberpunk-glow">Event Schedule</h1>
            <p className="text-xl text-white/80 mb-12">
              48 hours of non-stop innovation, learning, and fun!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Schedule Timeline */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Day 1 */}
            <DaySchedule
              day="Day 1"
              date="April 15, 2025"
              events={[
                {
                  time: "09:00 AM",
                  title: "Registration & Check-in",
                  description: "Get your badges and swag bags",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  time: "10:00 AM",
                  title: "Opening Ceremony",
                  description: "Welcome address and keynote speakers",
                  icon: <Trophy className="w-6 h-6" />
                },
                {
                  time: "11:30 AM",
                  title: "Team Formation",
                  description: "Find your teammates and brainstorm ideas",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  time: "12:30 PM",
                  title: "Hacking Begins",
                  description: "Start working on your projects",
                  icon: <Laptop className="w-6 h-6" />
                },
                {
                  time: "06:00 PM",
                  title: "Workshop: AI/ML",
                  description: "Learn about the latest in artificial intelligence",
                  icon: <Users className="w-6 h-6" />
                }
              ]}
            />

            {/* Day 2 */}
            <DaySchedule
              day="Day 2"
              date="April 16, 2025"
              events={[
                {
                  time: "09:00 AM",
                  title: "Breakfast & Networking",
                  description: "Start your day with energy",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  time: "10:00 AM",
                  title: "Workshop: Web3",
                  description: "Blockchain and cryptocurrency fundamentals",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  time: "02:00 PM",
                  title: "Mentorship Sessions",
                  description: "Get guidance from industry experts",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  time: "06:00 PM",
                  title: "Gaming Tournament",
                  description: "Take a break and have some fun",
                  icon: <Trophy className="w-6 h-6" />
                }
              ]}
            />

            {/* Day 3 */}
            <DaySchedule
              day="Day 3"
              date="April 17, 2025"
              events={[
                {
                  time: "09:00 AM",
                  title: "Final Sprint",
                  description: "Last few hours to complete your projects",
                  icon: <Laptop className="w-6 h-6" />
                },
                {
                  time: "12:30 PM",
                  title: "Hacking Ends",
                  description: "Submit your projects",
                  icon: <Clock className="w-6 h-6" />
                },
                {
                  time: "02:00 PM",
                  title: "Project Presentations",
                  description: "Show off your hard work",
                  icon: <Users className="w-6 h-6" />
                },
                {
                  time: "04:00 PM",
                  title: "Closing Ceremony",
                  description: "Awards and celebrations",
                  icon: <Trophy className="w-6 h-6" />
                }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Venue Information */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 cyberpunk-glow text-center">Venue Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyberpunk-card"
              >
                <div className="text-[#FFD700] mb-4">
                  <MapPin className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Location</h3>
                <p className="text-white/80 text-center">
                  Tech Hub Convention Center<br />
                  Sector 62, Noida<br />
                  Uttar Pradesh, India
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="cyberpunk-card"
              >
                <div className="text-[#FFD700] mb-4">
                  <Calendar className="w-12 h-12 mx-auto" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Date & Time</h3>
                <p className="text-white/80 text-center">
                  April 15-17, 2025<br />
                  9:00 AM - 6:00 PM<br />
                  48 Hours of Innovation
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function DaySchedule({ 
  day, 
  date, 
  events 
}: { 
  day: string; 
  date: string; 
  events: Array<{
    time: string;
    title: string;
    description: string;
    icon: React.ReactNode;
  }>;
}) {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold mb-8">
        <span className="text-[#FFD700]">{day}</span> - {date}
      </h2>
      <div className="space-y-8">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex gap-6"
          >
            <div className="text-[#FFD700] mt-1">{event.icon}</div>
            <div>
              <div className="text-lg font-bold mb-1">{event.time}</div>
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="text-white/60">{event.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}