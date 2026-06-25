"use client";
import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/config/site";
import { MessageSquare, MapPin, Calendar, Send, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const ref = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Website",
    budget: "$5k - $15k",
    message: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = ["Website", "Mobile App", "Admin Panel", "API Development", "Security Audit"];
  const budgetRanges = ["<$5k", "$5k - $15k", "$15k - $30k", "$30k+"];

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Message is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when typing
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const selectProjectType = (type: string) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
  };

  const selectBudget = (budget: string) => {
    setFormData((prev) => ({ ...prev, budget: budget }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Construct formatted WhatsApp message
    const text = encodeURIComponent(
      `Hi Satyam,\n\nI want to discuss a new project:\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Project Type:* ${formData.projectType}\n*Budget:* ${formData.budget}\n*Details:* ${formData.message}`
    );

    // Redirect to WhatsApp instantly (synchronously in response to click) to bypass popup blockers
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Trigger Vercel-style confetti celebration
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#00D600", "#ffffff", "#008800"]
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "Website",
        budget: "$5k - $15k",
        message: ""
      });
    }, 800);
  };

  const handleBookCall = () => {
    const text = encodeURIComponent(
      "Hi Satyam, I'd like to book a free call to discuss a new project."
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="relative bg-[#050505] py-24 md:py-32">
      {/* Background decorations */}
      <div className="absolute left-1/2 bottom-0 -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-accent/5 blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-20" />

      <div ref={ref} className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Let&apos;s Build Together
          </h2>
          <p className="mt-4 text-base text-secondary-text max-w-2xl mx-auto">
            Ready to kickstart your next project? Fill out the form or schedule a session to get started.
          </p>
          <div className="mx-auto mt-4 h-1 w-20 bg-accent text-glow" />
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h3 className="font-display text-2xl font-bold text-white">Project Details</h3>
              <p className="mt-3 text-sm text-secondary-text leading-relaxed">
                Have an idea for a mobile application, dynamic web app, or security audit? I provide design, architectural engineering, and full launch execution services. Let&apos;s turn your vision into a reality.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center p-4 glass rounded-xl border border-white/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <MessageSquare className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <span className="text-xs text-secondary-text block">Chat on WhatsApp</span>
                  <a 
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-accent transition-colors"
                  >
                    +91 {siteConfig.whatsappNumber.slice(2, 6)} {siteConfig.whatsappNumber.slice(6, 12)}
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 glass rounded-xl border border-white/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <MapPin className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <span className="text-xs text-secondary-text block">Location</span>
                  <span className="text-sm font-semibold text-white">Mumbai, Maharashtra, India</span>
                </div>
              </div>

              <div className="flex items-center p-4 glass rounded-xl border border-white/5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent">
                  <Calendar className="h-5 w-5" />
                </div>
                <div className="ml-4">
                  <span className="text-xs text-secondary-text block">Response Rate</span>
                  <span className="text-sm font-semibold text-white">Within 12 Hours</span>
                </div>
              </div>
            </div>

            {/* Book Calendar Button */}
            <button
              onClick={handleBookCall}
              className="w-full flex items-center justify-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:text-black hover:shadow-[0_0_20px_rgba(0,214,0,0.3)] cursor-pointer"
            >
              <Calendar className="h-4 w-4" />
              Book a Free Call
            </button>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="glass p-6 sm:p-8 rounded-2xl border border-white/5 bg-gradient-to-br from-[#101010] to-[#0a0a0a] shadow-xl relative overflow-hidden">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="contact-form"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border bg-[#050505] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors ${
                          errors.name ? "border-[#ff3b30]" : "border-white/10"
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-xs text-[#ff3b30] mt-1 block">{errors.name}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border bg-[#050505] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors ${
                          errors.email ? "border-[#ff3b30]" : "border-white/10"
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-xs text-[#ff3b30] mt-1 block">{errors.email}</span>}
                    </div>

                    {/* Project Type Picker */}
                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Project Type
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {projectTypes.map((type) => (
                          <button
                            key={type}
                            type="button"
                            onClick={() => selectProjectType(type)}
                            className={`rounded-md px-3.5 py-2 text-xs font-semibold border transition-all duration-300 ${
                              formData.projectType === type
                                ? "bg-accent border-accent text-black font-bold shadow-[0_0_15px_rgba(0,214,0,0.2)]"
                                : "bg-[#050505] border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget Slider/Grid */}
                    <div>
                      <label className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Estimated Budget
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {budgetRanges.map((range) => (
                          <button
                            key={range}
                            type="button"
                            onClick={() => selectBudget(range)}
                            className={`rounded-md py-2.5 text-xs font-semibold border text-center transition-all duration-300 ${
                              formData.budget === range
                                ? "bg-accent border-accent text-black font-bold shadow-[0_0_15px_rgba(0,214,0,0.2)]"
                                : "bg-[#050505] border-white/10 text-white/70 hover:border-white/20 hover:text-white"
                            }`}
                          >
                            {range}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-white uppercase tracking-wider mb-2">
                        Project Details & Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className={`w-full rounded-lg border bg-[#050505] px-4 py-3 text-sm text-white placeholder-white/30 focus:border-accent focus:outline-none transition-colors resize-none ${
                          errors.message ? "border-[#ff3b30]" : "border-white/10"
                        }`}
                        placeholder="Tell me more about your requirements, timelines, etc..."
                      />
                      {errors.message && <span className="text-xs text-[#ff3b30] mt-1 block">{errors.message}</span>}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-4 text-sm font-bold text-black shadow-lg shadow-accent/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(0,214,0,0.4)] active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                          <span>Sending request...</span>
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          <span>Let&apos;s Build Together</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-screen"
                    className="flex flex-col items-center justify-center py-12 text-center"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 border border-accent/20 text-accent mb-6 animate-bounce">
                      <CheckCircle2 className="h-8 w-8 text-glow" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-white">Inquiry Received!</h3>
                    <p className="mt-3 text-sm text-secondary-text max-w-sm">
                      Thank you for reaching out. I have received your request and will get back to you within 12 hours with initial insights.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 rounded-lg border border-white/10 hover:border-accent/40 bg-white/5 hover:bg-accent/5 px-6 py-2.5 text-xs font-semibold text-white hover:text-accent transition-all duration-300"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
