import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { CircleArrowRight } from 'lucide-react'

const GettingStarted = () => {
  return (
    <section id='getting started' className='w-full h-full py-10 flex items-center justify-center text-white'>
      <div className='bg-teal-900 w-[85%] p-8 border-2 rounded-4xl flex flex-col-reverse items-center lg:flex-row'>
        <div className='lg:w-[65%] py-10 flex flex-col gap-7'>
          <div className='space-y-2'>
            <h1 className='font-bold text-5xl'>
              Your Future Starts Today!
            </h1>
            <p>Let MentorMind analyze your skills and crafts a roadmap to career success. Join now and stay ahead!</p>
          </div>
          <Button variant='outline' className='group w-fit text-teal-800 hover:text-teal-800'>
            Start Now
            <CircleArrowRight className='transition-transform duration-300 translate-x-0 group-hover:translate-x-1' />
          </Button>

        </div>

        <div className=''>
          <Image height={100} width={350} alt='success' src="/success1.png" className='w-72 invert object-cover' />
        </div>
      </div>
    </section>
  
  )
}

export default GettingStarted
