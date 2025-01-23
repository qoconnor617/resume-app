/*
  Home Page
  Includes Hero Section, Project List, and About Me sections
*/

/*Hero section w/ 
      Photo:
        Photo of me
      Headline:
        Large and bold. Something like:
        Hi, I'm [Your Name], a Frontend Developer with a passion for creating seamless user experiences."
      Subtext (Smaller Text):
        "I specialize in building modern web applications using React, Next.js, and Tailwind CSS."
      CTA Buttons:
        View Resume (Links to your resume or downloads it).
        Explore My Projects (Scrolls down or navigates to the projects section).
*/

import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Home() {
    return (
      <>
      <Navbar />

  
      <div className='grid grid-cols-2 gap-4'>
        <div className='flex flex-col justify-center items-center'>
          <img className='rounded-full w-60 h-60' src="/img/me.jpg" alt="" />
        </div>
        <div className='flex flex-col justify-center items-center text-gray-600'>
          <h1 className='text-2xl'>Hi, I'm <span className='text-4xl text-black'>Quinn O'Connor</span>, a Frontend Developer with a passion for creating seamless user experiences.</h1>
          <h2 className='text-xl'>I specialize in building modern web applications using React, Next.js, and Tailwind CSS.</h2>
          <button>
            button to resume and button to explore projects
          </button>
        </div>
      </div>


      </>
    )
}