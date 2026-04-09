'use client'
import React, { useState } from "react";
import Glitch from "../Glitch";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData: FAQItem[] = [
    {
      question: "Is JarClaw just another ChatGPT wrapper?",
      answer: "No. While we use Large Language Models for reasoning, JarClaw is an 'Agentic' system. It doesn't just generate text; it uses a custom browser engine and API connectors to navigate websites, click buttons, and execute tasks exactly like a human would.",
    },
    {
      question: "How long does it take to automate a task?",
      answer: "Most basic tasks (like email sorting or data entry) are ready in under 5 minutes. Complex browser workflows can be taught to the agent in about 15 minutes without writing a single line of code.",
    },
    {
      question: "Is my sensitive data (like login info) secure?",
      answer: "Security is our priority. JarClaw uses bank-grade AES-256 encryption. For enterprise clients, we offer an 'Isolated Environment' where the agent runs on your own infrastructure, ensuring your raw data and credentials never leave your network.",
    },
    {
      question: "Does it work with websites that don't have an API?",
      answer: "Yes! That is JarClaw's superpower. Our 'Visual Agent' can see and interact with any web interface, allowing you to automate tasks on old portals, government sites, or niche SaaS tools that lack modern integrations.",
    },
    {
      question: "What happens if the AI makes a mistake?",
      answer: "You have full control. You can set 'Human-in-the-Loop' triggers where JarClaw will pause and ask for your approval before clicking 'Submit' or 'Send' on critical tasks.",
    },
  ];

  return (
    <section id="faq" className="relative z-10 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div style={{ opacity: 1, transform: "none", transition: "0.8s cubic-bezier(0.16, 1, 0.3, 1)" }}>
          <div className="text-center mb-8 sm:mb-12">
            <span className="inline-block px-3 py-1 rounded-full text-xs sm:text-sm font-mono mb-3 sm:mb-4 bg-[rgba(255,77,0,0.06)] border border-[rgba(255,77,0,0.08)] text-[rgb(255,77,0)]">
              FAQ
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-space leading-tight">
              Frequently asked <Glitch text="QUESTION" />
            </h2>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 sm:space-y-6">
          {faqData.map((item, index) => {
            const isOpen = activeIndex === index;

            return (
              <div
                key={index}
                style={{
                  opacity: 1,
                  transform: "none",
                  transition: `0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.05}s`,
                }}
              >
                <div
                  className={`rounded-2xl overflow-hidden bg-[#140a0a] border transition-colors duration-300 ${
                    isOpen ? "border-[rgb(255,77,0)]/30" : "border-[rgba(255,77,0,0.1)]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`w-full px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between text-left transition-colors cursor-pointer ${
                      isOpen ? "text-[rgb(255,77,0)]" : "text-white"
                    } text-sm sm:text-base`}
                  >
                    <span className="font-semibold pr-3 sm:pr-4">{item.question}</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`w-4 sm:w-5 h-4 sm:h-5 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-[rgb(255,77,0)] opacity-100" : "text-[rgb(255,77,0)] opacity-50"
                      }`}
                    >
                      <path d="m6 9 6 6 6-6"></path>
                    </svg>
                  </button>

                  {/* Expandable Content */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 sm:max-h-80 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base leading-relaxed text-[rgba(209,250,229,0.4)]">
                      {item.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;