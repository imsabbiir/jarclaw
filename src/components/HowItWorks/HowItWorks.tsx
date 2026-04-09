import React from "react";
import Glitch from "../Glitch";

const steps = [
  {
    title: "Link Your Ecosystem",
    desc: "Connect JarClaw to your digital life. Grant access to your email, workspace, or browser in seconds through our secure integration vault.",
    icon: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
      </>
    ),
  },
  {
    title: "Define Your Mission",
    desc: "Simply tell JarClaw what needs to happen. Use natural language commands like 'Triage my inbox' or 'Order my weekly essentials'—no logic gates required.",
    icon: (
      <>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
      </>
    ),
  },
  {
    title: "Autonomous Execution",
    desc: "Sit back while JarClaw navigates the web, manages your schedule, or monitors your systems. You get results delivered directly to your favorite chat app.",
    icon: (
      <>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
      </>
    ),
  },
];

function HowItWorks() {
  return (
    <section id="howitworks" className="relative z-10 py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-16">
          <span className="inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-mono mb-3 sm:mb-4 bg-[rgba(255,77,0,0.06)] border border-[rgba(255,77,0,0.08)] text-[rgb(255,77,0)]">
            HOW IT WORKS
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-space uppercase leading-tight">
            Up and running in{" "}
            <Glitch text="MINUTES" />
          </h2>
        </div>

        <div className="relative">
          
          {/* BACKGROUND TEXT */}
          <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[5rem] md:text-[10rem] font-extrabold number-outline select-none pointer-events-none opacity-20 tracking-tighter">
            FLOW
          </div>

          {/* STEPS */}
          <div className="relative space-y-4 sm:space-y-6">
            
            {steps.map((step, index) => (
              <div key={index}>
                <div className="holo-card rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
                  
                  {/* NUMBER */}
                  <div className="shrink-0 relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl flex items-center justify-center neon-glow bg-[rgba(255,77,0,0.08)] border border-[rgba(255,77,0,0.2)]">
                      <span className="text-base sm:text-lg font-extrabold font-mono text-[rgb(255,77,0)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* LINE */}
                    {index !== steps.length - 1 && (
                      <div className="absolute top-14 sm:top-16 left-1/2 -translate-x-1/2 w-px h-6 sm:h-8 bg-linear-to-b from-[rgba(255,77,0,0.3)] to-transparent hidden sm:block"></div>
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                      <h3 className="text-base sm:text-xl font-bold text-white/80">
                        {step.title}
                      </h3>

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 text-[rgb(255,77,0)] opacity-50"
                      >
                        {step.icon}
                      </svg>
                    </div>

                    <p className="text-xs sm:text-sm leading-relaxed text-white/40">
                      {step.desc}
                    </p>
                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;