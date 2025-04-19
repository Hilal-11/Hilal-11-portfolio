import React from 'react'
import WebTechHorzontalInfinite from './WebTechHorzontalInfinite';
import { delay, motion } from "motion/react"
import { FaCode } from 'react-icons/fa';
function DeveloperInfo() {

    
const codeExample = `<motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.3, ease: "easeOut" }}
    className="relative">
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
</motion.div></motion.div>`;
  return (
    <>  
        <p className='text-6xl font-bold bg-gradient-to-r from-indigo-500 text-transparent bg-clip-text xl:text-8xl text-center'>Hi, I'm Hilal</p>
        <p className=' text-3xl font-extrabold whitespace-pre-wrap lg:text-5xl xl:text-5xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text'>A passionate Full-Stack Web Developer dedicated to building intuitive, scalable, and efficient digital solutions.</p>
        <div className=' pb-4 px-0 lg:px-5 my-16 w-full h-auto rounded-xl   lg:grid lg:grid-cols-2 gap-10 items-center'>
                  
                <div className='hidden lg:flex justify-center h-[300px] items-center '>
                    <div className='lg:py-10 py-5 px-4 flex lg:gap-12 gap-6 flex-wrap justify-evenly lg:text-5xl text-2xl text-gray-600  '>
                        <img className='w-2/3' src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_onewheeling_flying_red" alt="" />
                    </div>
                </div>
            <div className='lg:h-auto h-[550px] overflow-y-auto'>
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
            className="bg-gray-900 rounded-xl shadow-neo p-6 overflow-hidden"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaCode className="text-blue-500 text-xl" />
              <span className="text-gray-400 text-sm">motion.jsx</span>
            </div>
            <div className="relative">
              <pre className="text-sm text-gray-300 overflow-x-auto lg:overflow-x-hidden">
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
        <div>
            <WebTechHorzontalInfinite />
        </div>
    </>
  )
}
export default DeveloperInfo
