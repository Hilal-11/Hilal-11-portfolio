import React from "react";
import MERN from '../../../assets/MERN.avif'
import {aboutSkillsIcons} from '../../Config'
import { aboutMe } from '../../Config'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaWhatsappSquare } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import ConnectForm from "./ConnectForm";
import { FcCallback } from "react-icons/fc"
const About = () => {

    return (
        <div className="w-full h-auto px-4">
            <div className="flex-row flex-wrap lg:flex-nowrap py-0 gap-10 justify-center items-center">

                <div className="w-full lg:w-full rounded-xl lg:px-5 px-2 py-8">
                    <h1 className=" break-words lg:text-center poppins-bolder lg:text-7xl text-3xl bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Hi i am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl lg:text-6xl">Hilal</span> <br />a full stack web developer with latest Technologies.</h1>
                    <p className="py-8 lg:py-10 lg:px-20 text-justify lg:text-center text-slate-500">I’m skilled in modern frontend frameworks and libraries such as React, Three.js, React Three Fiber, and Framer Motion, enabling me to craft immersive, interactive, and responsive user interfaces. On the backend, I ensure robust and scalable solutions tailored to meet complex requirements.</p>
                </div>
                <div className=" w-full lg:w-full rounded-xl ">
                    <div>
                        <h1 className="lg:text-6xl text-5xl text-center poppins-bolder bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">My skills</h1>
                    </div> <br />
                    <div className="flex justify-evenly flex-wrap gap-10 lg:gap-16 py-4">
                     {
                        aboutSkillsIcons.map((favIcon) => (
                            <span key={favIcon.id} className="hover:animate-pulse text-slate-600 cursor-pointer hover:text-white hover:drop-shadow-[0_42px_60px_rgba(137,43,226)] duration-300 text-5xl lg:text-8xl">{favIcon.icon}</span>
                        ))
                     }
                    </div>
                </div>
                
            </div>
            <div className="my-10 grid grid-cols-1 lg:grid-cols-2 py-6 gap-6 lg:gap-10 ">
                <div className="bg-slate-900 h-auto lg:h-[400px] overflow-y-scroll rounded-lg px-4 lg:px-10 py-6">
                    <p className="poppins-bolder bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">{aboutMe.para1}</p> <br />
                    <p className="poppins-bolder bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">{aboutMe.para2}</p> <br />
                    <p className="poppins-bolder bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">{aboutMe.para3}</p> <br />
                    <span className="text-xs px-2 py-2 rounded-lg inline bg-slate-950">Follow me on Social Media Platform </span>
                    <div className='my-4 flex flex-wrap justify-center lg:gap-10 gap-2'>
                        <button className="rounded-full px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-950 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400"><FaGithub/></button>
                        <button className="rounded-full px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-950 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400"><ImLinkedin /></button>
                        <button className="rounded-full px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-950 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400"><FaWhatsappSquare /></button>
                        <button className="rounded-full px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-950 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400"><SiLeetcode /></button>
                        <button className="rounded-full px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-950 hover:scale-[1.1] hover:bg-gradient-to-r hover:from-slate-900 hover:to-slate-700 hover:duration-700 hover:shadow-2xl hover:shadow-blue-400"><FaSquareXTwitter /></button>
                    </div>

                </div>
                <div className=" h-auto rounded-xl">
                    <img className="rounded-xl" src={MERN} alt="MERN"></img>
                </div>
            </div>
            <div className="w-full h-auto py-6">
                <div className="flex flex-wrap lg:flex-nowrap justify-center gap-5">
                <span className="text-8xl"><FcCallback /></span><h1 className="text-5xl lg:text-8xl text-center poppins-bolder text-slate-500">Connect with me</h1>
                </div>
                
                <div>
                    <ConnectForm />
                </div>
            </div>
        </div>
    )
}
export default About;