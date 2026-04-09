/* eslint-disable react/no-unescaped-entities */
import React from "react";
import {
  Mail,
  Zap,
  Code2,
  FileSearch,
  Cpu,
  MessageSquareShare,
} from "lucide-react";
import Glitch from "@/components/Glitch";

const services = [
  {
    title: "Email & Calendar",
    subTitle: "Triage my inbox and prep me for meetings",
    desc: "Autonomous Gmail management. JarClaw labels, archives, and alerts you only to what requires human eyes.",
    icon: <Mail size={20} />,
  },
  {
    title: "Web Automation",
    subTitle: "Order my groceries and track deliveries",
    desc: "Advanced browser execution without APIs. Works natively with Amazon, Tesco, and custom web portals.",
    icon: <Zap size={20} />,
  },
  {
    title: "Development",
    subTitle: "Review my PRs and monitor CI health",
    desc: "Continuous monitoring for your tech stack. Automated code reviews and deployment notifications.",
    icon: <Code2 size={20} />,
  },
  {
    title: "Research & Writing",
    subTitle: "Summarize these docs and draft a report",
    desc: "Neural document processing. Extract key insights and trends from complex PDFs and spreadsheets.",
    icon: <FileSearch size={20} />,
  },
  {
    title: "Smart Home & IoT",
    subTitle: "Control my 3D printer and monitor servers",
    desc: "Bridging software and hardware. Direct control over local servers, IoT devices, and smart hubs.",
    icon: <Cpu size={20} />,
  },
  {
    title: "Works Where You Are",
    subTitle: "Message me on Telegram or Slack",
    desc: "Zero installation. Command your AI via Telegram, Slack, or Discord—exactly where you already work.",
    icon: <MessageSquareShare size={20} />,
  },
];

function Services() {
  return (
    <section
      id="usecases"
      className="py-16 sm:py-20 md:py-24 bg-[rgb(10,10,10)]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* HEADER */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <span className="w-6 sm:w-8 h-0.5 bg-[#FF4D00]" />
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#FF4D00]">
              PICK A USE CASE
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight sm:leading-[0.95] isolate">
            What can <Glitch text={"JARCLAW"} /> <br></br> do for you
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {services.map((item, index) => (
            <div
              key={index}
              className="group transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0_#FF4D00] border border-[rgb(40,40,40)] hover:border-[#FF4D00]"
            >
              <div className="p-6 sm:p-8 h-full bg-[rgb(15,15,15)] flex flex-col">
                {/* ICON + NUMBER */}
                <div className="flex items-start justify-between mb-6">
                  <div className="w-12 h-12 flex items-center justify-center transition-colors group-hover:bg-[#FF4D00] bg-[rgba(255,77,0,0.08)] border border-[rgba(255,77,0,0.3)] text-[#FF4D00] group-hover:text-black">
                    {item.icon}
                  </div>

                  <span className="font-mono text-[10px] text-white/20 tracking-wider">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* TEXT */}
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>

                <span className="text-sm italic text-[#FF4D00]/60 mb-3 block">
                  "{item.subTitle}"
                </span>

                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
