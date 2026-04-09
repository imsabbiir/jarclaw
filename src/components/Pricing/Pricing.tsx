import React from "react";

const plans = [
  {
    name: "Starter",
    subtitle: "For Individuals",
    price: "$29",
    period: "/mo",
    features: [
      "500 AI Executions/mo",
      "Connect 3 Apps",
      "Email & Slack Integration",
      "Standard Browser Agent",
    ],
    button: { text: "Get Started →", className: "text-white border border-white/10 hover:border-white/30 hover:text-white" },
    cardClass: "border border-white/6 bg-[rgb(10,10,10)]",
  },
  {
    name: "Pro",
    subtitle: "For Power Users",
    price: "$79",
    period: "/mo",
    features: [
      "Unlimited Executions",
      "Unlimited Integrations",
      "Priority Agent Speed",
      "Custom Workflow Builder",
      "24/7 Priority Support",
    ],
    button: { text: "Go Pro Now →", className: "text-black bg-[rgb(255,77,0)] hover:translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[3px_3px_0_#fff]" },
    cardClass: "bg-[rgba(255,77,0,0.04)] border-2 border-[rgb(255,77,0)] relative",
    badge: "Most Popular",
  },
  {
    name: "Enterprise",
    subtitle: "For Large Teams",
    price: "Custom",
    features: [
      "Dedicated Infrastructure",
      "On-Premise Deployment",
      "Custom Fine-tuned Models",
      "SLA 99.9% Uptime",
      "Advanced Security & SSO",
      "Dedicated Account Manager",
    ],
    button: { text: "Contact Sales →", className: "text-white border border-white/10 hover:border-white/30 hover:text-white" },
    cardClass: "border border-white/6 bg-[rgb(10,10,10)]",
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none hidden lg:block">
        <div className="text-[16vw] font-black text-white/5 tracking-tighter whitespace-nowrap">
          PLANS
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-20">
          <div className="flex items-center gap-2 justify-center mb-3 sm:mb-4">
            <span className="w-6 h-0.5 bg-[rgb(255,77,0)]"></span>
            <span className="font-mono text-[10px] sm:text-xs uppercase tracking-[0.3em] text-[rgb(255,77,0)]">
              Pricing
            </span>
            <span className="w-6 h-0.5 bg-[rgb(255,77,0)]"></span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
            Simple Pricing.<span className="text-white/15"> No Hidden Fees.</span>
          </h2>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-3">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`flex flex-col p-6 sm:p-8 h-full ${plan.cardClass} relative`}
              style={{
                opacity: 1,
                transform: "translateY(0px)",
                transition: `0.6s cubic-bezier(0.16, 1, 0.3, 1) ${idx * 0.1}s`,
              }}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] sm:text-xs font-bold tracking-widest uppercase bg-[rgb(255,77,0)] text-black rounded">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-1">{plan.name}</h3>
              {plan.subtitle && <p className="font-mono text-xs text-white/20 mb-6">{plan.subtitle}</p>}

              <div className="mb-8 flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-bold text-white">{plan.price}</span>
                {plan.period && <span className="text-sm text-white/20">{plan.period}</span>}
              </div>

              <div className="flex-1 space-y-3 mb-8">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3 text-sm text-white/30">
                    <div className="w-1.5 h-1.5 shrink-0 bg-[rgb(255,77,0)] rounded-full"></div>
                    {feat}
                  </div>
                ))}
              </div>

              <button
                className={`w-full py-3.5 font-mono text-sm font-bold uppercase tracking-wider transition-all rounded ${plan.button.className}`}
              >
                {plan.button.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;