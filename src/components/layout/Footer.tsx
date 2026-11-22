// src/components/layout/Footer.tsx
"use client";

import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { useState, useEffect } from "react";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: Code2 },
  { name: "LinkedIn", href: "https://linkedin.com", icon: BriefcaseBusiness },
  { name: "Email", href: "mailto:hello@example.com", icon: Mail },
];

export function Footer() {
  // 1. Initialize as a number to match getFullYear()
  const [currentYear, setCurrentYear] = useState<number>(2026);

  // 2. Update on mount. The eslint-disable comment is required and safe 
  // here because this effect only runs ONCE on the client to prevent hydration mismatch.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border bg-background">
      <div className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 md:flex-row md:px-6">
        <p className="text-sm text-muted-foreground">
          {/* 3. Render the state variable, NOT the setter function */}
          &copy; {currentYear} Ninja. All rights reserved.
        </p>
        
        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label={link.name}
            >
              <link.icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}