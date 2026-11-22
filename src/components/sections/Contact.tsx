// src/components/sections/Contact.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const socialLinks = [
    { 
      name: "Email", 
      href: "mailto:hello@example.com", 
      icon: (props: React.SVGProps<SVGSVGElement>) => <Mail {...props} />,
      hoverColor: "group-hover:bg-primary group-hover:text-primary-foreground"
    },
    { 
      name: "GitHub", 
      href: "https://github.com", 
      // Inline GitHub SVG for absolute reliability
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
      ),
      hoverColor: "group-hover:bg-[#24292e] group-hover:text-white dark:group-hover:bg-foreground dark:group-hover:text-background"
    },
    { 
      name: "LinkedIn", 
      href: "https://linkedin.com", 
      // Inline LinkedIn SVG for absolute reliability
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
      hoverColor: "group-hover:bg-[#0a66c2] group-hover:text-white"
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 px-4 md:px-6 bg-background">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question about my projects, or want to discuss a potential collaboration? 
            I am always open to connecting with fellow developers and innovators.
          </p>
        </motion.div>

        <div className="grid gap-12 md:grid-cols-5">
          {/* Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Connect with me</h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <div className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-md bg-secondary text-secondary-foreground transition-all duration-300 shadow-sm",
                        link.hoverColor
                      )}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{link.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-border bg-card p-6 shadow-sm">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting" || status === "success"}
                className={cn(
                  "inline-flex w-full items-center justify-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
                  status === "success" 
                    ? "bg-emerald-600 hover:bg-emerald-700" 
                    : status === "error"
                    ? "bg-destructive hover:bg-destructive/90"
                    : "bg-primary hover:bg-primary/90 disabled:opacity-70"
                )}
              >
                {status === "submitting" ? (
                  "Sending..."
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Message Sent!
                  </>
                ) : status === "error" ? (
                  <>
                    <AlertCircle className="h-4 w-4" />
                    Failed to Send
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}