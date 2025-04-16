import { AlertTriangle, AlignLeftIcon, AlignVerticalSpaceAround, Book, ComputerIcon, Sparkles } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { IoBookOutline } from "react-icons/io5"

const About = () => {
  return (
    <section id="about" className="w-full h-full flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-white">
      <div className="lg:w-1/2 w-full flex justify-center mb-10 md:mb-0">
        <Image
          src="/about-image.svg"
          alt="Illustration of learning and mentorship"
          width={500}
          height={500}
          priority
        />
      </div>
      <div className="lg:w-1/2 w-full px-4 mr-10">
        <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-gray-800 leading-snug">
          Empowering Learners, Transforming Careers
        </h1>
        <p className="text-lg text-gray-600">
          At MentorMind, we simplify career growth by using AI to suggest trending skills,
          learning paths, and mentorship opportunities. Whether you're a beginner or an expert,
          our platform ensures you stay ahead in your career journey.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-5">
          <div className='text-lg py-2'>
            <div className='py-5'>
              <div className='bg-white p-4 w-fit rounded-full drop-shadow-2xl'>
                <Sparkles className='h-7 w-7 text-black' />
              </div>
            </div>
            <h1 className="font-bold ">AI-Powered Skill Recommendations</h1>
            <p>Get the best skill suggestionsbased on your goals & market trends.</p>
          </div>
          <div className='text-lg py-2'>
            <div className='py-5'>
              <div className='bg-white p-4 w-fit rounded-full drop-shadow-2xl'>
                <IoBookOutline className='h-7 w-7 text-black' />
              </div>
            </div>
            <h1 className="font-bold">Personalized Learning Roadmaps</h1>
            <p>Structured learning plans tailored just for you.</p>
          </div>
          <div className='text-lg py-2'>
            <div className='py-5'>
              <div className='bg-white p-4 w-fit rounded-full drop-shadow-2xl'>
                <ComputerIcon className='h-7 w-7 text-black' />
              </div>
            </div>
            <h1 className="font-bold">
              Real-World Project Challenges</h1>
            <p>Hands-on your projects to strengthen your expertise.</p>
          </div>
          <div className='text-lg py-2'>
            <div className='py-5'>
              <div className='bg-white p-4 w-fit rounded-full drop-shadow-2xl'>
                <AlignVerticalSpaceAround className='h-7 w-7 text-black' />
              </div>
            </div>
            <h1 className="font-bold">AI-Driven Mentorship</h1>
            <p>Instant AI guidance for career, interviews, and skill doubts.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
