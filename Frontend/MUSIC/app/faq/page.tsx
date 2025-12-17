"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { Section } from "@/components/ui/Layout";
import { FadeIn } from "@/components/ui/Animations";

export default function FAQPage() {
  const faqs = [
    {
      question: "Can I listen to music for free?",
      answer: "Yes! You can listen to our entire library of 50,000+ tracks completely free. No subscription required to stream and discover music. Create playlists and preview tracks before deciding to subscribe.",
    },
    {
      question: "What is Earthquake Studio?",
      answer: "Earthquake studio, is a record label, publisher and distributor dedicated to empowering up and coming artists through a modern strategy of viral marketing and potential licensing of music",
    },
    {
      question: "Can I use the music commercially with a subscription?",
      answer: "Absolutely! With a Creator or Studio subscription, you can use our music in any commercial project including YouTube videos, Instagram posts, TikTok content, podcasts, client work, and advertisements. No copyright claims or strikes.",
    },
    {
      question: "How can I become an artist with Earthquake Studio?",
      answer: "If you are interested in working with us please go to the \"For Artist\" tab and fill out the form. Or just click HERE",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <>
      <Navbar />
      
      <main className="pt-32">
        <Section>
          <div className="text-center max-w-4xl mx-auto mb-20">
            <FadeIn>
              <Heading as="h1" className="mb-8">
                Frequently Asked Questions
              </Heading>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <Text size="xl" variant="muted">
                Everything you need to know about Earthquakestudio.
              </Text>
            </FadeIn>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div 
                  className="border border-black/10 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm hover:border-black/20 transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors"
                  >
                    <h3 className="text-xl font-medium">{faq.question}</h3>
                    <span className="text-2xl flex-shrink-0">
                      {openIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openIndex === index && (
                    <div className="px-8 pb-6">
                      <Text variant="muted">{faq.answer}</Text>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>
        </Section>
      </main>
    </>
  );
}

