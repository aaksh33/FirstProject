import { Sparkles } from 'lucide-react'
import React from 'react'


const Features = () => {
  return (
    <div id="features" className=' w-full h-full py-10'>
      <div className='text-center pb-10'>
        <h1 className="text-4xl font-bold">Your AI-Powered Career Accelerator</h1>
        <p>Mentormind is built to guide, mentor, and empower you with the best career resources.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7 w-full items-center px-10 sm:px-20 lg:px-28">

        <div className='border-blue border-1 rounded-2xl bg-blue-50 drop-shadow-2xl flex flex-col items-center p-4'>
          <div className='h-12 w-12 rounded-full bg-white my-2 shadow-xl text-center flex items-center justify-center'><Sparkles /></div>
          <div className='space-y-1 text-center pt-2'>
            <h1 className='font-bold'>Smart Skill Finder</h1>
            <p>AI suggests high-demand skills based on your interests & market trends.</p>
          </div>
        </div>

        <div className=''>
          <div className='pt-30 text-center border-blue border-1 rounded-2xl bg-blue-50 drop-shadow-2xl'>
            <h1 className='font-bold'>Interactive Learning Roadmaps</h1>
            <p>A structured step-by-step plan with courses, tutorials, and projects.</p>
          </div>
        </div>
        <div className=''>
          <div className='pt-30 text-center border-blue border-1 rounded-2xl bg-blue-50 drop-shadow-2xl'>
            <h1 className='font-bold'>AI-Powered Mentor</h1>
            <p>Get instant answers to career, skill, and interview-related queries.</p>
          </div>
        </div>
        <div className=''>
          <div className='pt-30 text-center border-blue border-1 rounded-2xl bg-blue-50 drop-shadow-2xl'>
            <h1 className='font-bold'>Hands-On Projects</h1>
            <p>Work on industry-relevant challenges to build real-world experience.</p>
          </div>
        </div>
        <div className=''>
          <div className='pt-30 text-center border-blue border-1 rounded-2xl bg-blue-50 drop-shadow-2xl'>
            <h1 className='font-bold'>Live Progress Tracking</h1>
            <p>Monitor your learning journey, achievements, and certifications.</p>
          </div>
        </div >
        <div className=''>
          <div className='pt-36 text-center border-blue border-1 rounded-2xl bg-blue-50 drop-shadow-2xl'>
            <h1 className='font-bold'>Career Growth Insights</h1>
            <p>Get job trends, salary insights, and expert guidance.</p>
          </div>
        </div>

      </div>


    </div>
  )
}

export default Features
