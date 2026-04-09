import React from "react";

function Analycis() {
  return (
    <div className="max-w-4xl mx-auto neon-glow rounded-2xl px-3 sm:px-0">
      
      <div className="w-full min-h-125 sm:min-h-150 md:h-125 mb-10 sm:mb-16 md:mb-20 border border-[rgba(255,77,0,0.1)] bg-[#0c0c0c]">
        
        {/* Top Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 px-4 sm:px-5 py-3 border-b border-[rgba(255,77,0,0.25)]">
          
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#fe5104]"></div>
            <div className="w-3 h-3 bg-white/10"></div>
            <div className="w-3 h-3 bg-white/10"></div>
          </div>

          <span className="font-mono text-[9px] sm:text-[10px] text-white/20">
            neuralforge — model-dashboard
          </span>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-4 font-mono text-[10px] sm:text-xs">
          
          <div className="text-white/20">$ nf status --production</div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2">
            <div className="border border-[rgba(255,77,0,0.25)] p-2 sm:p-3">
              <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-wider mb-1">
                Models Active
              </div>
              <div className="text-base sm:text-lg font-bold text-[#fe5104]">
                24
              </div>
            </div>

            <div className="border border-[rgba(255,77,0,0.25)] p-2 sm:p-3">
              <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-wider mb-1">
                Accuracy
              </div>
              <div className="text-base sm:text-lg font-bold text-[rgb(34,197,94)]">
                96.8%
              </div>
            </div>

            <div className="border border-[rgba(255,77,0,0.25)] p-2 sm:p-3">
              <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-wider mb-1">
                Latency
              </div>
              <div className="text-base sm:text-lg font-bold text-[rgb(59,130,246)]">
                12ms
              </div>
            </div>

            <div className="border border-[rgba(255,77,0,0.25)] p-2 sm:p-3">
              <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-wider mb-1">
                Requests/s
              </div>
              <div className="text-base sm:text-lg font-bold text-[rgb(168,85,247)]">
                8.4K
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="border border-[rgba(255,77,0,0.25)] p-3">
            <div className="text-white/20 text-[8px] sm:text-[9px] uppercase tracking-wider mb-3">
              Inference Volume — 7d
            </div>

            <div className="flex items-end gap-1 h-12 sm:h-16">
              <div className="flex-1 bg-[rgba(255,77,0,0.25)] h-[20%]"></div>
              <div className="flex-1 bg-[rgba(255,77,0,0.25)] h-[55%]"></div>
              <div className="flex-1 bg-[rgba(255,77,0,0.25)] h-[70%]"></div>
              <div className="flex-1 bg-[rgba(255,77,0,0.25)] h-[45%]"></div>
              <div className="flex-1 bg-[rgba(255,77,0,0.25)] h-[80%]"></div>
              <div className="flex-1 bg-[rgb(255,77,0)] h-[95%]"></div>
              <div className="flex-1 bg-[rgba(255,77,0,0.25)] h-[75%]"></div>
            </div>

            <div className="flex justify-between mt-1 text-[7px] sm:text-[8px] text-white/10">
              <span>Mo</span>
              <span>Di</span>
              <span>Mi</span>
              <span>Do</span>
              <span>Fr</span>
              <span className="font-bold text-[#fe5104]">Sa</span>
              <span>So</span>
            </div>
          </div>

          {/* Status */}
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px]">
            <span className="w-2 h-2 rounded-full animate-pulse bg-[rgb(34,197,94)]"></span>
            <span className="text-white/30">
              Pipeline healthy · Last deploy 2h ago
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Analycis;