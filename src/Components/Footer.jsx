import React from 'react'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import hilal3 from '../assets/hilal3.png'
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";
import { FaWhatsappSquare } from "react-icons/fa";
import '../../src/App.css'
export const Footer = () => {
  return (
    <div className='w-full h-auto bg-inherit mb-4 bg-slate-950 py-14 ring-1 '>
        <div>
            <div className='flex flex-wrap justify-center gap-5 '>
                <button className="rounded-md px-4 py-4 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400 hover:ring-1"><FaGithub/></button>
                <button className="rounded-md px-4 py-4 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400 hover:ring-1"><ImLinkedin /></button>
                <button className="rounded-md px-4 py-4 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400 hover:ring-1"><FaWhatsappSquare /></button>
                <button className="rounded-md px-4 py-4 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400 hover:ring-1"><SiLeetcode /></button>
                <button className="rounded-md px-4 py-4 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400 hover:ring-1"><FaSquareXTwitter /></button>
            </div>
        </div>
      <div className='flex flex-wrap lg:flex-nowrap gap-4  px-2 lg:px-10 py-5 lg:py-10 relative'>
          <span className='z-1 gradient-animate-spin absolute bottom-40 lg:right-20 lg:bottom-48  border w-[90%] h-[100px]  lg:w-[30%] lg:h-[80px] skew-x-12 rotate-45  rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 blur-[60px] lg:blur-[80px]'></span>
          <span className='z-0 gradient-animate-spin-2 absolute bottom-40 lg:left-20 lg:-top-48  border w-[90%] h-[100px]  lg:w-[30%] lg:h-[80px] -skew-x-12 -rotate-45  rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[60px] lg:blur-[80px]'></span>
        <div className='w-full lg:w-[40%]'>
          <div className=' flex justify-evenly items-center flex-wrap lg:flex-nowrap  '>
            <div className='lg:text-left text-center '>
              <span className='poppins-bolder text-2xl lg:text-3xl'>Web Mastery</span>
            </div>
            <div className='my-10 flex justify-center px-4 py-1 items-center w-[90px] rounded-full overflow-hidden ring-4 shadow-2xl shadow-blue-600'>
              <img className='w-[60px] rounded-full' src={hilal3} alt="" />
            </div>
          </div>
          <div className='px-4 lg:px-10 py-6 text-justify break-words '>
            <p className='poppins-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4 '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat, obcaecati harum. Accusamus eaque provident quidem quaerat pariatur inventore sit, atque, laboriosam assumenda saepe, quas eum enim quo! In nulla possimus, eaque enim expedita.</p>
          </div>
          <div className='flex justify-around items-center w-[170px] h-[40px] rounded-full ring-2 mx-4 lg:mx-10 my-4 lg:my-10 z-50'>
                <span className='z-50 bg-slate-950 py-2 px-2 rounded-full hover:bg-slate-800 hover:py-2 hover:px-2 hover:rounded-full'><LuSun className='cursor-pointer text-xl'/></span>
                <span className='z-50 bg-slate-950 py-2 px-2 rounded-full hover:bg-slate-800 hover:py-2 hover:px-2 hover:rounded-full'><FaGithub className='cursor-pointer text-xl'/></span>
                <span className='z-50 bg-slate-950 py-2 px-2 rounded-full hover:bg-slate-800 hover:py-2 hover:px-2 hover:rounded-full'><LuMoon className='cursor-pointer text-xl'/></span>
          </div>
        </div>
        <div className='w-full lg:w-[60%] lg:grid lg:grid-cols-3 flex flex-wrap justify-between lg:py-10 gap-0 lg:gap-0 '>
          <div className='rounded-md px-5 '>
            <h1 className='poppins-bolder text-xl lg:text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4'>Projects</h1>
            <div className='py-6 lg:px-6'>
              <ul className=' space-y-2 lg:space-y-6 poppins-bold'>
                <li>Crypto Trading</li>
                <li>Gaming App</li>
                <li>Components</li>
                <li>Frammer Motion</li>
              </ul>
            </div>
          </div>
          <div className='rounded-md px-5 '>
            <h1 className='poppins-bolder text-xl lg:text-2xl  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4'>Courses</h1>
            <div className='py-6 lg:px-6'>
              <ul className=' space-y-2 lg:space-y-6 poppins-bold'>
                <li>Crypto Trading</li>
                <li>Gaming App</li>
                <li>Components</li>
                <li>Frammer Motion</li>
              </ul>
            </div>
          </div>
          <div className='rounded-md px-5 '>
            <h1 className=' poppins-bolder text-xl lg:text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4'>Github</h1>
            <div className='py-6 lg:px-6'>
              <ul className=' space-y-2 lg:space-y-6 poppins-bold'>
                <li>Crypto Trading</li>
                <li>Gaming App</li>
                <li>Components</li>
                <li>Frammer Motion</li>
              </ul>
            </div>
          </div>
        </div>
        </div>      
    </div>
  )
}

export default Footer