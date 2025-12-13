"use client";

import { useState } from "react";
import GradientBackground from "@/components/GradientBackground";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - will integrate with backend later
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <GradientBackground />
      <Navbar />
      
      <main className="pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <FadeIn>
                <Heading as="h1" className="mb-8">
                  Get In Touch
                </Heading>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                <Text size="xl" variant="muted">
                  Have a question? We'd love to hear from you. Send us a message 
                  and we'll respond as soon as possible.
                </Text>
              </FadeIn>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <FadeIn delay={0.3}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">📧</div>
                  <h3 className="font-medium mb-2">Email</h3>
                  <Text size="sm" variant="muted">hello@earthquakestudio.com</Text>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">💬</div>
                  <h3 className="font-medium mb-2">Support</h3>
                  <Text size="sm" variant="muted">Average response: 2 hours</Text>
                </div>
              </FadeIn>

              <FadeIn delay={0.5}>
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🌍</div>
                  <h3 className="font-medium mb-2">Global</h3>
                  <Text size="sm" variant="muted">Available 24/7</Text>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={0.6}>
              <form onSubmit={handleSubmit} className="space-y-6 bg-white/30 backdrop-blur-sm p-8 rounded-3xl border border-black/10">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:outline-none focus:border-black/30 transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:outline-none focus:border-black/30 transition-colors"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:outline-none focus:border-black/30 transition-colors"
                    placeholder="How can we help?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-black/10 bg-white/50 focus:outline-none focus:border-black/30 transition-colors resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  );
}

