'use client'
import React, { useState } from "react";

function Testimonial() {
  const testimonials = [
    {
      text: "„JarClaw hat unser E-Mail-Triage komplett übernommen. Wir sparen pro Mitarbeiter ca. 10 Stunden die Woche. Die KI versteht den Kontext besser als jedes Regel-Set.\"",
      name: "Marcus Weber",
      role: "Operations Lead, TechFlow",
      initials: "MW",
    },
    {
      text: "„Früher mussten wir manuell Bestände prüfen und nachbestellen. JarClaw macht das jetzt autonom im Browser. Die Fehlerquote sank auf nahezu Null.\"",
      name: "Julia Bauer",
      role: "E-Commerce Manager, ShopGrid",
      initials: "JB",
    },
    {
      text: "„Die Integration war in Minuten erledigt. JarClaw überwacht jetzt unsere Server-Logs und informiert uns via Slack, bevor ein Problem kritisch wird. Ein Gamechanger.\"",
      name: "Lukas Schmidt",
      role: "CTO, CloudScale",
      initials: "LS",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(2);

  return (
    <section id="kunden" className="py-24 border-t border-[rgba(255,77,0,0.1)]">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-[rgb(255,77,0)]"></span>
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-[rgb(255,77,0)]">
                Social Proof
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Actual Results.<span className="text-white/15"> Zero Fluff.</span>
            </h2>
          </div>
        </div>

        {/* Card */}
        <div
          style={{
            opacity: 1,
            transform: "translateY(0px)",
            transition: "0.6s cubic-bezier(0.16, 1, 0.3, 1) 0.1s",
          }}
        >
          <div className="border border-white/6 p-8 md:p-12 relative bg-[rgb(10,10,10)]">
            <div className="absolute top-4 right-8 text-8xl font-bold select-none font-space text-[rgba(255,77,0,0.08)]"></div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#FF4D00"
                  stroke="#FF4D00"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              ))}
            </div>

            {/* Text */}
            <p className="text-xl md:text-2xl font-medium text-white/80 leading-relaxed mb-8 relative z-10 min-h-20">
              {testimonials[activeIndex].text}
            </p>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center font-mono text-sm font-bold text-black bg-[rgb(255,77,0)]">
                  {testimonials[activeIndex].initials}
                </div>
                <div>
                  <div className="font-bold text-white">
                    {testimonials[activeIndex].name}
                  </div>
                  <div className="font-mono text-xs text-white/20">
                    {testimonials[activeIndex].role}
                  </div>
                </div>
              </div>

              {/* Indicators */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-8 h-1 transition-all ${
                      activeIndex === index
                        ? "bg-[rgb(255,77,0)]"
                        : "bg-[rgba(255,255,255,0.1)]"
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;