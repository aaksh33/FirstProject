import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const Hero = () => {
  return (
    <section id='home' className='relative h-full w-full py-48 overflow-hidden'>
    {/* Background Image */}
    <Image
      src='/hero-bg.svg'
      alt='bg-image'
      fill
      className='absolute inset-0 -z-10 object-contain'
    />
  
    {/* Foreground Content */}
    <div className='flex flex-col items-center justify-center gap-5 text-center h-full'>
      <h1 className='text-5xl md:text-7xl w-[65%] font-bold'>
        Unlock Your Potential with AI-Powered Mentorship
      </h1>
      <div className='w-[35%]'>
        Need the right skills for your career? MentorMind provides AI-driven skill suggestions, personalized roadmaps, hands-on projects to fast-track your growth. Start your journey today!
      </div>
      <div className='space-x-6'>
        <Button variant='outline' className='bg-teal-700 text-white border-none' >Get Started</Button>
        <Button className="bg-transparent text-black shadow-none hover:bg-white hover:cursor-pointer border hover:border-black">
          Explore
        </Button>
      </div>
    </div>
  </section>
  
  )
}

export default Hero
