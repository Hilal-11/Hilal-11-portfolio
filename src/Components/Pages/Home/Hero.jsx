import React from 'react'
import './Hero.css'
import { useNavigate } from 'react-router-dom'
import DeveloperInfo from './DeveloperInfo'
import { FaLevelDownAlt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import Skills from './Skills'
import Information from './Information'
import animatedLogo from '../../../assets/animatedLogo.svg'
import { SiVercel } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { delay, motion } from "motion/react"
function Home() {
  const navigate = useNavigate();
  return (
    <div className='px-5'>
    <motion.div
      initial={{
        opacity: 0,
        y: -100,
        scale: 0.98,
        filter: 'blur(12px)'
        
      }}
      animate={{
        opacity: 1,
        y: 40,
        scale: 1,
        filter: 'blur(0px)'
      }}
      transition={{
        duration: 1.5,
        delay: 0.6,
      }}
    className='py-2 lg:my-10 lg:grid grid-cols-2 justify-center gap-20 h-auto'>
      <div className=''>
      <span className='hidden lg:flex animate-pulse absolute top-10 left-0 w-[50%] h-[30%] lg:left-20 lg:top-20 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[130px]'></span>
          <h1 className=" text-3xl font-extrabold whitespace-pre-wrap lg:text-5xl xl:text-7xl">
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Master</span> Modern Web Development <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">with me</span>
          </h1>
        <br /> 
          <p className='my-2 text-md text-justify poppins-bold'>I leverage the latest technologies like <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Three.js</span>, <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>WebGL,</span> and <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Framer Motion</span> to create immersive 3D web experiences that captivate users and elevate digital storytelling. From interactive 3D models to dynamic animations, I bring cutting-edge visuals to life on the web, ensuring seamless performance across devices.</p>
          <div className='z-10 lg:flex lg:flex-nowrap md:flex-wrap justify-center py-10 lg:py-20 gap-10 lg:space-y-0 space-y-6 text-md '>
              <motion.button
                initial={{
                  opacity: 0,
                  scale: 0.98,
                  filter: 'blur(12px)',
                  x: -400
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  filter: 'blur(0px)',
                  x: 0,
                }}
                whileHover={{
                y : -8,
                translateZ: 100,
                transition: { duration: 0.1 }
                }}
                style={{
                  translateZ : 100
                }}
                transition={{
                  delay: 2.6,
                  duration: 0.5,
                  ease: 'easeInOut'
                }}
                
              onClick={() => { navigate('/FreatureProjects') }} className='px-2 bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 w-full py-4 rounded-md flex justify-center gap-6 duration-500 poppins-bolder'

                >Get Free Projects<span className='lg:none text-3xl'><SiVercel /></span></motion.button>
                
                <motion.button
                   whileHover={{
                    y : -8,
                    translateZ: 100,
                    transition: { duration: 0.1 }
                    }}
                    style={{
                      translateZ : 100
                    }}
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: 'blur(12px)',
                    x: 400
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: 'blur(0px)',
                    x: 0,
                  }}
                  transition={{
                    delay: 2.6,
                    duration: 0.5,
                    ease: 'easeInOut'
                  }}
                onClick={() => { navigate('/Github')}} className='px-2 w-full py-4 rounded-md bg-grad bg-gradient-to-r from-indigo-500 flex justify-center gap-6 items-center hover:slale-[1.2] duration-500 poppins-bolder '
 
                >Repositorise<span className='text-3xl'><FaGithub /></span></motion.button>
              </div>
      </div>
      <motion.div
        initial={{
          opacity: 0,
          y: 1000,

        }}
        animate={{
          opacity: 1,
          x: 0,

        }}
        transition={{
          duration: 3,
          delay: 0.2,
          ease: 'easeInOut'
        }}
      className='lg:h-[600px] bouncing_animation flex '>
          <video autoPlay loop className='z-50 hover:scale-[1.1] duration-700' src='/Video.mp4' type='video/mp4'/>
      </motion.div>
    </motion.div>
    <div className='z-50 my-28 w-full flex justify-around py-10 text-4xl font-extrabold lg:text-5xl xl:text-8xl text-slate-800'>
        <motion.span
          initial={{
            opacity: 0,
            filter: 'blur(12px)',
            scale: 0.98,
            x: -400
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            x: 0
          }}
          transition={{
            delay: 1.1,
            duration: 1.6,
            ease: 'easeInOut'
          }}
        ><FaLevelDownAlt></FaLevelDownAlt></motion.span>
        <FaReact className='animate-spin text-8xl lg:text-[200px] text-blue-500'/>
        <motion.span
          initial={{
            opacity: 0,
            filter: 'blur(12px)',
            scale: 0.98,
            x: 400
    
          }}
          animate={{
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            x: 0
          }}
          transition={{
            delay: 1.1,
            duration: 1.6,
            ease: 'easeInOut'
          }}
        ><FaLevelDownAlt></FaLevelDownAlt></motion.span>
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
