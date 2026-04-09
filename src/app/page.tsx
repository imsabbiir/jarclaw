import Analycis from '@/components/Analycis/Analycis'
import AnimatedMarque from '@/components/AnimatedMarque'
import FAQ from '@/components/FAQ/FAQ'
import Hero from '@/components/hero/Hero'
import HowItWorks from '@/components/HowItWorks/HowItWorks'
import Pricing from '@/components/Pricing/Pricing'
import Services from '@/components/Services/Services'
import Stats from '@/components/Stats'
import Testimonial from '@/components/Testimonial/Testimonial'
import React from 'react'

function page() {
  return (
    <div className='w-full min-h-screen'>
      <Hero />
      <Analycis />
      <AnimatedMarque />
      <Stats />
      <Services />
      <HowItWorks />
      <Testimonial />
      <Pricing />
      <FAQ />
    </div>
  )
}

export default page