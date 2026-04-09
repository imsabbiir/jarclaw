import React from "react";

const statsData = [
  {
    value: "10,000+",
    label: "Active Teams",
    icon: (
      <>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </>
    ),
  },
  {
    value: "320K+",
    label: "GitHub stars on OpenClaw",
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>,
  },
  {
    value: "500+",
    label: "AI models in the Jar",
    icon: (
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
    ),
  },
  {
    value: "0%",
    label: "markup on tokens",
    icon: (
      <>
        <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
        <polyline points="2 17 12 22 22 17"></polyline>
        <polyline points="2 12 12 17 22 12"></polyline>
      </>
    ),
  },
];

function Stats() {
  return (
    <section className="relative z-10 mb-12 sm:mb-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* RESPONSIVE GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          
          {statsData.map((item, index) => (
            <div
              key={index}
              className="hover:-translate-y-2 sm:hover:-translate-y-3 transition-all duration-200 ease-in-out overflow-hidden"
            >
              <div className="holo-card rounded-2xl p-5 sm:p-6 text-center">
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5 sm:w-6 sm:h-6 mx-auto mb-2 sm:mb-3 text-[rgb(255,77,0)] opacity-50"
                >
                  {item.icon}
                </svg>

                <div className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-mono neon-text text-[rgb(255,77,0)]">
                  {item.value}
                </div>

                <p className="text-xs sm:text-sm mt-1 sm:mt-2 font-mono text-[rgba(255,77,0,0.35)]">
                  {item.label}
                </p>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Stats;