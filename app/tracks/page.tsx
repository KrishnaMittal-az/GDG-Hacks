"use client";

import { motion } from 'framer-motion';
import { Brain, Globe2, Cpu, Blocks, Code, Lock } from 'lucide-react';

export default function TracksPage() {
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
            <h1 className="text-5xl font-bold mb-8 cyberpunk-glow">Hackathon Tracks</h1>
            <p className="text-xl text-white/80 mb-12">
              Choose your challenge and make your mark in one of our six innovative tracks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tracks Grid */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <TrackCard
              icon={<Brain className="w-16 h-16" />}
              title="AI/ML"
              description="Build the future of artificial intelligence and machine learning. Create innovative solutions using cutting-edge AI technologies."
              prizes="₹2,00,000"
              requirements={[
                "TensorFlow or PyTorch experience",
                "Data preprocessing skills",
                "Model deployment knowledge"
              ]}
            />
            <TrackCard
              icon={<Globe2 className="w-16 h-16" />}
              title="AR/VR"
              description="Create immersive experiences in augmented and virtual reality. Push the boundaries of spatial computing."
              prizes="₹1,50,000"
              requirements={[
                "Unity or Unreal Engine",
                "3D modeling skills",
                "AR/VR SDK experience"
              ]}
            />
            <TrackCard
              icon={<Cpu className="w-16 h-16" />}
              title="IoT & Smart Tech"
              description="Connect the physical and digital worlds through IoT innovation. Build the future of connected devices."
              prizes="₹1,75,000"
              requirements={[
                "Hardware programming",
                "Sensor integration",
                "Network protocols"
              ]}
            />
            <TrackCard
              icon={<Blocks className="w-16 h-16" />}
              title="Web3 & Blockchain"
              description="Revolutionize the web with blockchain technology. Create decentralized applications that change the game."
              prizes="₹2,00,000"
              requirements={[
                "Smart contract development",
                "Web3.js or Ethers.js",
                "Blockchain fundamentals"
              ]}
            />
            <TrackCard
              icon={<Code className="w-16 h-16" />}
              title="Web/App Development"
              description="Develop cutting-edge web and mobile applications. Create seamless user experiences across platforms."
              prizes="₹1,50,000"
              requirements={[
                "Full-stack development",
                "Mobile app development",
                "UI/UX design skills"
              ]}
            />
            <TrackCard
              icon={<Lock className="w-16 h-16" />}
              title="Cybersecurity"
              description="Protect the digital world through ethical hacking. Build secure systems and find vulnerabilities."
              prizes="₹1,75,000"
              requirements={[
                "Network security",
                "Penetration testing",
                "Security protocols"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 cyberpunk-glow">Track Rules</h2>
            <div className="cyberpunk-card">
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700]">•</span>
                  <p>Teams must consist of 2-4 members</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700]">•</span>
                  <p>All code must be written during the hackathon</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700]">•</span>
                  <p>Teams can only participate in one track</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700]">•</span>
                  <p>Projects must be open source</p>
                </li>
                <li className="flex items-start gap-4">
                  <span className="text-[#FFD700]">•</span>
                  <p>Use of third-party APIs and libraries is allowed</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function TrackCard({ 
  icon, 
  title, 
  description, 
  prizes, 
  requirements 
}: { 
  icon: React.ReactNode; 
  title: string; 
  description: string;
  prizes: string;
  requirements: string[];
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="cyberpunk-card"
    >
      <div className="text-[#FFD700] mb-6">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <p className="text-white/80 mb-6">{description}</p>
      <div className="mb-6">
        <h4 className="text-lg font-bold mb-2">Prize Pool</h4>
        <p className="text-[#FFD700] text-xl">{prizes}</p>
      </div>
      <div>
        <h4 className="text-lg font-bold mb-2">Requirements</h4>
        <ul className="space-y-2">
          {requirements.map((req, index) => (
            <li key={index} className="text-white/60 flex items-center gap-2">
              <span className="text-[#FFD700]">•</span>
              {req}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}