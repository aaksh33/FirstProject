import React from 'react'
import Image from 'next/image'
import { FiTwitter,  FiYoutube } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='' id='getting-started'>
      <div className='w-full h-full flex justify-between bg-green-100 px-10'>

        <div className=' h-40 '>
          <Image height={200} width={250} alt='logo' className='pt-12 ' src="/logo-ltr-dark.png" />
        </div>
        <div className='py-6 flex items-center gap-10'>
          <div className='grid sm:grid-cols-1 lg:grid-cols-2 items-center gap-3'>
            <h1>Home</h1>
            <h1>About</h1>
            <h1>Features</h1>
            <h1>Getting Started</h1>
          </div>

          <div className='bg-gray-300 h-16 w-[2px] rounded-md'></div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3'>
            <h1>Careers</h1>
            <h1>Hackathon</h1>
            <h1>Documentation</h1>
            <h1>Blogs</h1>
            <h1>Contact Us</h1>
            <h1>Privacy Policy</h1>
          </div>
        </div>
      </div>
      <div className='flex items-center bg-green-100 border-t border-gray-300'>
        <h1 className='w-[82%] pl-8'>
          @ Mentor Mind 2025 | All Rights Reserved
        </h1 >
        <div className='flex items-center justify-between w-[18%] m-4 pr-4'>
          <div className='text-3xl'><FiTwitter /></div>
          <div className='text-3xl'><LuFacebook /></div>
          <div className='text-3xl'><FaInstagram /></div>
          <div className='text-3xl'><FiYoutube /></div>
          <div className='text-3xl'><FaLinkedinIn /></div>
          <div className='text-3xl'><IoMailOpenOutline /></div>
        </div>
      </div>
    </div>

  )
}

export default Footer
