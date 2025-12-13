"use client";

import { useState } from "react";
import { FadeIn } from "@/components/ui/Animations";
import { Heading, Text } from "@/components/ui/Typography";

export function FAQSection() {
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
    <section className="py-32">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <Heading as="h2" className="mb-4">
              Frequently Asked Questions
            </Heading>
            <Text size="lg" variant="muted">
              Everything you need to know about Earthquakestudio
            </Text>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={`faq-${index}`} delay={0.05 * index}>
              <div className="border border-black/10 rounded-2xl overflow-hidden bg-white/30 backdrop-blur-sm hover:border-black/20 transition-all">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between gap-4 hover:bg-black/[0.02] transition-colors"
                >
                  <h3 className="text-lg font-medium pr-4">{faq.question}</h3>
                  <span className="text-3xl flex-shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                    +
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-8 pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                    <Text variant="muted">{faq.answer}</Text>
                  </div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

