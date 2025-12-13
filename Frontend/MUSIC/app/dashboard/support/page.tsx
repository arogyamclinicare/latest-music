"use client";

import { useState } from "react";
import { DashboardNav } from "@/components/DashboardNav";
import { Heading, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";

export default function SupportPage() {
  const [formData, setFormData] = useState({
    subject: "",
    priority: "normal",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Support ticket submitted:", formData);
  };

  return (
    <>
      <DashboardNav />
      
      <main className="pt-32 min-h-screen bg-gradient-to-b from-white to-gray-50">
        <Section>
          <div className="max-w-3xl mx-auto">
            <FadeIn>
              <div className="text-center mb-12">
                <Heading as="h1" className="mb-4">
                  Contact Support
                </Heading>
                <Text variant="muted">
                  We typically respond within 2 hours during business hours
                </Text>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-black/10 p-8">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 focus:outline-none focus:border-black/30 transition-colors"
                      placeholder="What do you need help with?"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="priority" className="block text-sm font-medium mb-2">
                      Priority
                    </label>
                    <select
                      id="priority"
                      value={formData.priority}
                      onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 focus:outline-none focus:border-black/30 transition-colors"
                    >
                      <option value="low">Low - General question</option>
                      <option value="normal">Normal - Need assistance</option>
                      <option value="high">High - Urgent issue</option>
                    </select>
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
                      className="w-full px-4 py-3 rounded-xl border border-black/10 bg-gray-50 focus:outline-none focus:border-black/30 transition-colors resize-none"
                      placeholder="Describe your issue or question in detail..."
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    Submit Ticket
                  </Button>
                </div>
              </form>
            </FadeIn>

            <FadeIn delay={0.3}>
              <div className="mt-8 grid md:grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-2xl border border-black/10">
                  <div className="text-3xl mb-2">📧</div>
                  <Text size="sm" variant="muted">support@earthquakestudio.com</Text>
                </div>
                <div className="text-center p-6 bg-white rounded-2xl border border-black/10">
                  <div className="text-3xl mb-2">⏱️</div>
                  <Text size="sm" variant="muted">Average response: 2 hours</Text>
                </div>
              </div>
            </FadeIn>
          </div>
        </Section>
      </main>
    </>
  );
}

