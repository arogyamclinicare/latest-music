"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Heading, Text } from "@/components/ui/Typography";
import { FadeIn } from "@/components/ui/Animations";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResult("");

    const formDataToSend = new FormData();
    formDataToSend.append("access_key", "5d013109-a952-4a90-ac3f-593b3b7ad488");
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setResult("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
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
                  Have a question? We&apos;d love to hear from you. Send us a message 
                  and we&apos;ll respond as soon as possible.
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

                <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {result && (
                  <p className={`text-center mt-4 ${result.includes("success") ? "text-green-600" : "text-red-600"}`}>
                    {result}
                  </p>
                )}
              </form>
            </FadeIn>
          </div>
        </div>
      </main>
    </>
  );
}

