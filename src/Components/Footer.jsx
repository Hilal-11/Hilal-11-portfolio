import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import hilal3 from '../assets/hilal3.png'
import { LuSun } from "react-icons/lu";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { LuMoon } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import { footerDataNext } from './Config'
import { footerInfo } from './Config'
import '../../src/App.css'
export const Footer = () => {
  return (
    <div className='w-full h-auto bg-inherit mb-4 bg-slate-950 py-14 ring-1 '>
        <div>
            <div className='flex flex-wrap justify-center gap-10 '>
                <button className="text-slate-700 text-4xl hover:text-white duration-300"><Link target='_blank' to="https://github.com/Hilal-11"><FaGithub/></Link></button>
                <button className="text-slate-700 text-4xl hover:text-white duration-300"><Link target='_blank' to="https://www.linkedin.com/in/hilal-ahmad-ab5466347/"><ImLinkedin /></Link></button>
                <button className="text-slate-700 text-4xl hover:text-white duration-300"><a target='_blank' href="mailto:hilalahmadcodedev123@gmail.com"><SiGmail /></a></button>
                <button className="text-slate-700 text-4xl hover:text-white duration-300"><Link target='_blank' to="https://leetcode.com/Hilal-11"><SiLeetcode /></Link></button>
                <button className="text-slate-700 text-4xl hover:text-white duration-300"><Link target='_blank' to="https://x.com/Hilal3884871845"><FaSquareXTwitter /></Link></button>
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
          <div className='px-4 lg:px-10 py-6 break-words '>
            <p className='poppins-bold bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4 text-sm '>{footerInfo}</p>
          </div>
          <div className='lg:mx-10 mx-6 flex justify-evenly items-center w-[160px] h-[40px] gap-0 bg-slate-950 shadow-xl shadow-blue-400 rounded-full border-t-2 border-blue-500'>
                <span className='z-50 bg-slate-950 py-2 px-2 rounded-full hover:bg-slate-800 hover:py-2 hover:px-2 hover:rounded-full'><LuSun className='cursor-pointer text-xl'/></span>
                <span className='z-50 bg-slate-950 py-2 px-2 rounded-full hover:bg-slate-800 hover:py-2 hover:px-2 hover:rounded-full'><HiMiniComputerDesktop className='cursor-pointer text-xl'/></span>
                <span className='z-50 bg-slate-950 py-2 px-2 rounded-full hover:bg-slate-800 hover:py-2 hover:px-2 hover:rounded-full'><LuMoon className='cursor-pointer text-xl'/></span>
          </div>
        </div>
        <div className='w-full lg:w-[60%] lg:grid lg:grid-cols-3 flex flex-wrap justify-between lg:py-10 gap-0 lg:gap-0 '>
          <div className='rounded-md px-5 '>
            <h1 className='poppins-bolder text-xl lg:text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4'>Projects</h1>
            <div className='py-6 lg:px-6'>
                  <ul className='space-y-2 lg:space-y-6 poppins-bold'>
                    {
                      footerDataNext[0].projects.map((item , index) => (
                        <li className='text-sm lg:text-sm cursor-pointer text-red-50 hover:underline hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text duration-500' key={index}><Link target='_blank' to={item.link}>{item.projectItem}</Link></li>
                      ))
                    }
                  </ul>
            </div>
          </div>
          <div className='rounded-md px-5 '>
            <h1 className='poppins-bolder text-xl lg:text-2xl  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4'>Courses</h1>
            <div className='py-6 lg:px-6'>
              <ul className=' space-y-2 lg:space-y-6 poppins-bold'>
                    {
                      footerDataNext[1].courses.map((item , index) => (
                        <li className='text-sm lg:text-sm cursor-pointer text-red-50 hover:underline hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text duration-500' key={index}><Link target='_blank' to={item.link}>{item.courseItem}</Link></li>
                      ))
                    }
              </ul>
            </div>
          </div>
          <div className='rounded-md px-5 '>
            <h1 className=' poppins-bolder text-xl lg:text-2xl bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text lg:px-4'>Github</h1>
            <div className='py-6 lg:px-6'>
              <ul className=' space-y-2 lg:space-y-6 poppins-bold'>
                    {
                      footerDataNext[2].github.map((item , index) => (
                        <li className='text-sm lg:text-sm cursor-pointer text-red-50 hover:underline hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-transparent hover:bg-clip-text duration-500' key={index}><Link target="_blank" to={item.link}>{item.githubItem}</Link></li>
                      ))
                    }
              </ul>
            </div>
          </div>
        </div>
        </div>      
    </div>
  )
}

export default Footer