"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/types/supabase';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const supabase = createClientComponentClient<Database>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const { error } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message
          }
        ]);

      if (error) throw error;

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

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
            <h1 className="text-5xl font-bold mb-8 cyberpunk-glow">Contact Us</h1>
            <p className="text-xl text-white/80 mb-12">
              Have questions? We&apos;re here to help!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <ContactCard
              icon={<Mail className="w-8 h-8" />}
              title="Email"
              info="info@gdghacks.com"
            />
            <ContactCard
              icon={<Phone className="w-8 h-8" />}
              title="Phone"
              info="+91 98765 43210"
            />
            <ContactCard
              icon={<MapPin className="w-8 h-8" />}
              title="Address"
              info="Tech Hub, Sector 62, Noida"
            />
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="cyberpunk-input w-full"
                  placeholder="Your name"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="cyberpunk-input w-full"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                  className="cyberpunk-input w-full"
                  placeholder="Your message"
                  required
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`cyberpunk-button ${status === 'loading' ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {status === 'loading' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
              {status === 'success' && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-500 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-gradient-to-b from-[#1a1a1a] to-black">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 cyberpunk-glow">Find Us</h2>
            <div className="cyberpunk-card h-[400px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0435750510387!2d77.36543931508346!3d28.627338982418868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5214010b6e1%3A0x93334e5dc7f38435!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e0!3m2!1sen!2sin!4v1647927437316!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ 
  icon, 
  title, 
  info 
}: { 
  icon: React.ReactNode; 
  title: string; 
  info: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="cyberpunk-card text-center"
    >
      <div className="text-[#FFD700] mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-white/80">{info}</p>
    </motion.div>
  );
}