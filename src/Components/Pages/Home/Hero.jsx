import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
import heroVideo from '../../../assets/Video.mp4'
import DeveloperInfo from './DeveloperInfo'
import { FaLevelDownAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Skills from './Skills'
import Information from './Information'
import animatedLogo from '../../../assets/animatedLogo.svg'
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Home() {
  const navigate = useNavigate();
  return (
    <div className='px-5'>
    <div className='  py-2 lg:my-10 lg:grid grid-cols-2 justify-center gap-20 h-auto'>
      <div className=''>
      <span className='hidden lg:flex animate-pulse absolute top-10 left-0 w-[50%] h-[30%] lg:left-20 lg:top-20 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[130px]'></span>
          <h1 className=" text-3xl font-extrabold whitespace-pre-wrap lg:text-5xl xl:text-7xl">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Master</span> Modern Web Development <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">with me</span>
          </h1>
        <br /> 
          <p className='my-2 text-md text-justify poppins-bold'>I leverage the latest technologies like <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Three.js</span>, <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>WebGL,</span> and <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Framer Motion</span> to create immersive 3D web experiences that captivate users and elevate digital storytelling. From interactive 3D models to dynamic animations, I bring cutting-edge visuals to life on the web, ensuring seamless performance across devices.</p>
          <div className='z-10 bouncing_animation lg:flex justify-evenly py-10 gap-20 lg:space-y-0 space-y-6 text-lg'>
            
              <button onClick={() => { navigate('/FreatureProjects') }} className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 w-full py-4 rounded-md flex justify-center gap-6 duration-500 poppins-bolder'
                  style={{
                    boxShadow: '2px 2px 6px #01030b, -2px -2px 6px #030923'
                  }}
                >Get Free Projects<span className='text-3xl'><SiVercel /></span></button>
                
                <button onClick={() => { navigate('/Github')}} className='w-full py-4 rounded-md bg-grad bg-gradient-to-r from-indigo-500 flex justify-center gap-6 items-center hover:slale-[1.2] duration-500 poppins-bolder'
                    style={{
                      boxShadow: '2px 2px 6px #01030b, -2px -2px 6px #000000'
                    }}  
                >  Explore Repositorise<span className='text-3xl'><FaGithub /></span></button>
              </div>
      </div>
      <div className=' lg:h-[600px] bouncing_animation flex '>
          <video autoPlay loop className='z-50 hover:scale-[1.1] duration-700' src={heroVideo} ></video>
      </div>
    </div>
    <div className='z-50 my-10 w-full flex justify-around py-10 text-4xl font-extrabold lg:text-5xl xl:text-8xl text-slate-800'>
        <FaLevelDownAlt/>
        <FaReact className='animate-spin text-8xl lg:text-[200px] text-blue-500'/>
        <FaLevelDownAlt/>
      </div>
    <div className='my-6'>
      <DeveloperInfo />
    </div>
    <div>
      <Skills/>
    </div>
    <div className='w-full px-2 py-6 flex justify-center items-center gap-20'>
      <SiVercel className='hidden lg:flex text-[15rem] text-slate-800'/>
      <img className='w-[90%] lg:w-[50%] animate' src={animatedLogo} alt="error" />
      <FaGithub className='hidden lg:flex text-[15rem] text-slate-800'/>
    </div>
    <div>
      <Information />
    </div>

    <br /> <br /> 
  </div>
  )
}

export default Home
