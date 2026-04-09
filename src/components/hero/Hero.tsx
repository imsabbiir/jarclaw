import React from "react";
import Glitch from "../Glitch";
import TwoDButton from "../twoDButton";
import SimpleButton from "../SimpleButton";

function Hero() {
  return (
    <section className="w-full min-h-screen relative overflow-hidden md:py-10">
      {/* Background shape */}
      <div
        className="absolute -top-20 -right-20 w-72 h-72 md:w-96 md:h-150 pointer-events-none hidden lg:block"
        style={{
          background: "rgb(255, 77, 0)",
          opacity: 0.04,
          transform: "rotate(15deg)",
        }}
      ></div>

      <div className="w-11/12 mx-auto">
        <div className="w-full min-h-screen flex flex-col items-center justify-center text-center py-16">

          {/* Badge */}
          <div className="border border-[rgba(255,77,0,0.3)] rounded-4xl py-2 px-6 sm:px-10 md:px-16">
            <li className='text-[#fe5104] uppercase text-xs sm:text-sm font-ibm list-none relative after:content-[""] after:absolute after:w-2 after:h-2 sm:after:w-2.5 sm:after:h-2.5 after:rounded-full after:bg-[#fe5104] after:-left-4 sm:after:-left-6 after:top-1/2 after:-translate-y-1/2 after:shadow-[0_0_10px_#fe5104]'>
              trusted by 10,000+ teams worldwide
            </li>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-white font-bold max-w-5xl leading-tight lg:leading-18 mt-8 md:mt-10">
            Your <Glitch text={"AI"} /> assistant <Glitch text={"that"} />{" "}
            actually does <Glitch text="things" />.
          </h1>

          {/* Description */}
          <span className="mx-auto mb-8 md:mb-10 max-w-xl text-base sm:text-lg md:text-xl leading-relaxed text-[#666] font-geist mt-6 md:mt-10">
            JarClaw connects your tools and executes complex tasks autonomously, so you can focus on strategy, not clicks.
          </span>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center w-full">
            <TwoDButton text={"Start free trial"} className="px-6 py-3 sm:px-8 sm:py-4 w-full sm:w-auto" />
            <SimpleButton text={"see it in action"} />
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;