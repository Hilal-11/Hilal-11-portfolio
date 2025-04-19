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
import { FaCode } from 'react-icons/fa';

function Home() {
  const navigate = useNavigate();

const codeExample = `import React from 'react';
import { motion } from 'framer-motion';

const App = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1>Welcome to Web.mastery.pro</h1>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Get Started
      </motion.button>
    </motion.div>
  );
};

export default App;`;


  return (
    <div className='px-4 '>

    {/* HERO SECESSION */}

    <div className='grid grid-cols-1 lg:grid-cols-2 h-auto lg:my-20 my-0 gap-14 p-0 '>
      <span className='hidden lg:flex animate-pulse absolute top-10 left-0 w-[50%] h-[30%] lg:left-20 lg:top-20 lg:w-[400px] lg:h-[400px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[130px]'></span>

      {/* LEFT SIDE */}
      <motion.div
        
        initial={{
          opacity: 0,
          y: -100,
          scale: 0.98,
          filter: 'blur(12px)'
          
        }}
        animate={{
          opacity: 1,
          y: 20,
          scale: 1,
          filter: 'blur(0px)'
        }}
        transition={{
          duration: 1.5,
          delay: 0.6,
        }}


      className=''>
        <div>
          <h1 className=" text-3xl font-extrabold whitespace-pre-wrap lg:text-5xl xl:text-7xl">
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Master</span> Modern Web Development 
                <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">with me</span>
          </h1>
          <br />
          <p className='my-2 text-md poppins-bold'>I leverage the latest technologies like <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Three.js</span>, <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>WebGL,</span> and <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Framer Motion</span> to create immersive 3D web experiences that captivate users and elevate digital storytelling. From interactive 3D models to dynamic animations, I bring cutting-edge visuals to life on the web, ensuring seamless performance across devices.
          </p>

        </div>

      {/* BUTTONS */}
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="z-10 lg:flex lg:flex-nowrap md:flex-wrap justify-left py-10 lg:px-10 lg:py-20 gap-10 lg:space-y-0 space-y-6 text-md"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full poppins-bolder px-0 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-md shadow-neo hover:bg-blue-700 transition-colors flex justify-center text-center items-center gap-4  "
              onClick={() => { navigate('/FreatureProjects') }}
            >
              My Projects<span className='lg:none text-3xl'><SiVercel /></span>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full poppins-bolder px-0 py-4 bg-white text-gray-800 rounded-md shadow-neo hover:bg-gray-50 transition-colors flex justify-center text-center items-center gap-4 " 
              onClick={() => { navigate('/Github')}}
            >
              Repositorise<span className='text-3xl'><FaGithub /></span>
            </motion.button>
          </motion.div>



      </motion.div>

      {/* RIGHT SIDE */}
      <div className=''>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="bg-gray-900 rounded-xl shadow-neo p-4 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-blue-500 text-xl" />
              <span className="text-gray-400 text-sm">Example.jsx</span>
            </div>
            <div className="relative">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{codeExample}</code>
              </pre>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className=" absolute top-0 right-0 h-full w-full bg-gradient-to-r from-transparent via-blue-500/10 to-transparent"
              />
            </div>
          </motion.div>
        </motion.div>




      </div>


    </div>


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
