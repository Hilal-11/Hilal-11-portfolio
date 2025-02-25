import React from "react";
import { useState , useEffect } from "react";
import jsIcon from '../../../assets/ReposImages/javascriptIcon.png';
import tsIcon from '../../../assets/ReposImages/typescript.png';
import reactIcon from '../../../assets/ReposImages/react.png';
import nodeIconG from '../../../assets/ReposImages/nodejs.png';
import hilal from '../../../assets/ReposImages/hilal.png'
import {aboutSkillsIcons} from '../../Config'
import { BsThreeDotsVertical } from "react-icons/bs";
import '../Home/Hero.css'
import vite from '../../../assets/vite.svg'
import { SiVercel } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { IoIosLink } from "react-icons/io";
const Projects = () => {
    const [projects , setProjects] = useState([]);
    const [isDeployMenuOpen , setIsDeployMenuOpen] = useState({})
    const API_TOKEN = 'BozxG299fqq0PVREUyyUk8S4'
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch("https://api.vercel.com/v9/projects", {
                    headers: {
                        "Authorization": `Bearer ${API_TOKEN}`,
                        "Content-Type": "application/json"
                    }
                });
                if (!response.ok) throw new Error("Failed to fetch projects");
                const data = await response.json();
                setProjects(data.projects); // Extract the projects array
            } catch (err) {
                console.log(err.message);
            } 
        };
        fetchProjects();
    }, []);
    const handleDeployedMenuBox = (index) => {
        setIsDeployMenuOpen((prev) => ({
            ...prev,
            [index]: !prev[index],
        }));
    };

    return (
        <div className="flex justify-center flex-wrap gap-10 px-4 lg:px-6 py-10">
            <div className="relative w-full lg:h-[500px] h-[300px] bg-slate-800 shadow-2xl rounded-xl flex justify-center">
                <img className=" brightness-50 hover:brightness-100 hover:cursor-pointer lg:w-[130px] lg:h-[130px] w-[60px] h-[60px] absolute lg:left-20 lg:bottom-20 left-5 bottom-10" src={jsIcon}></img>
                <img className=" brightness-50 hover:brightness-100 hover:cursor-pointer lg:w-[130px] lg:h-[130px] w-[60px] h-[60px] absolute lg:right-20 lg:top-10 right-5 top-5" src={tsIcon}></img>
                <img className=" brightness-50 hover:brightness-100 hover:cursor-pointer lg:w-[130px] lg:h-[130px] w-[60px] h-[60px] absolute lg:right-52 lg:bottom-20 right-5 bottom-10" src={reactIcon}></img>
                <img className="brightness-50 hover:brightness-100 hover:cursor-pointer lg:w-[130px] lg:h-[130px] w-[60px] h-[60px] absolute lg:left-60 left-5 " src={nodeIconG}></img>
                    <div className="py-2 px-2 relative w-full">
                        <img className="z-50 mx-auto blur-sm hover:blur-0 cursor-pointer h-full hover:scale-[1.2] duration-700" src={hilal} alt="" />
                        <h1 className="z-0 w-[80%] lg:w-[60%] lg:px-12 py-2 lg:py-8 flex flex-wrap gap-4 justify-center bg-gradient-to-r from-slate-700 via-slate-950 to-slate-900 rounded-md lg:gap-6 absolute top-[50%] left-[50%] -translate-x-[50%] poppins-bolder lg:text-4xl text-sm shadow-2xl shadow-slate-950">
                            {
                                aboutSkillsIcons.map((icon) => (
                                    <span className="bouncing_animation cursor-pointer duration-700 text-orange-600">{icon.icon}</span>
                                ))
                            }
                        </h1>
                    </div>
            </div>
            <div className="py-4 lg:py-10 lg:px-10 poppins-bold text-lg lg:text-3xl">
                <p>Explore my live projects, deployed seamlessly on <span className="poppins-bolder bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">Vercel</span> and <span className="poppins-bolder bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text">Netlify</span>, with open-source code available on <span className="poppins-bolder bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">GitHub</span>. Each project showcases modern technologies, responsive design, and real-world functionality.</p>
            </div>

        <div className="my-0 flex gap-6 justify-evenly  flex-wrap w-full ">
            {
                projects.map((vercel , index) => (
                        <div className="w-full lg:w-[500px] h-auto rounded-lg bg-slate-900 shadow-2xl shadow-slate-950 ring-1 ring-slate-600 px-1 lg:px-6 py-4">
                            <div className="flex justify-between">
                                <div className="flex lg:gap-4 gap-2">
                                    <div>
                                        <img className="w-[45px]" src={vite} alt="" />
                                    </div>
                                    <div>
                                        <p className="poppins-bolder">{vercel.targets.production.meta.githubRepo}</p> <br />
                                        <a className="poppins-bold underline text-gray-500" target="_blank" href={`https://${vercel.targets.production.meta.branchAlias}`}>react-essentials-app.zeta.</a>
                                    </div>
                                </div>
                                <div className="relative">
                                    <span className=" cursor-pointer text-3xl relative right-0"><BsThreeDotsVertical onClick={() => handleDeployedMenuBox(index) } /></span>
                                    {
                                        isDeployMenuOpen[index] && (
                                            <div className="absolute right-8 top-4 w-[130px] h-auto rounded-md bg-slate-950 ring-1 ring-slate-700 px-2 py-2">
                                                <div className="list-none space-y-1 px-0">
                                                    <a target="_blank" href="https://github.com/hilal-11"><li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-800 rounded-sm py-1 px-1"><span><IoIosLink /></span>Github</li></a>
                                                    <a target="_blank" href="https://vercel.com/hilal-11"><li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-800 rounded-sm py-1 px-1"><span><IoIosLink /></span>Vercel</li></a>
                                                    <a target="_blank" href="https://github.com/hilal-11"><li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-800 rounded-sm py-1 px-1"><span><IoIosLink /></span>Netlify</li></a>
                                                    <a target="_blank" href="https://leetcode.com/hilal-11"><li className="flex items-center gap-2 text-sm cursor-pointer hover:bg-slate-800 rounded-sm py-1 px-1"><span><IoIosLink /></span>Leetcode</li></a>
                                                </div>
                                            </div>
                                    )}
                                </div>
                            </div>
                            <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-2 py-4 px-2">
                                <a className="text-sm w-full px-4 py-1 rounded-full bg-slate-800 poppins-bold hover:text-blue-600 hoverbg-slate-600 duration-500" target="_blank" href={"https://github.com/Hilal-11/"+vercel.targets.production.meta.githubRepo}>{`https://github.com/Hilal-11/${vercel.targets.production.meta.githubRepo}`}</a>
                                <a className="text-sm w-full px-4 py-1 rounded-full bg-slate-800 poppins-bold hover:text-blue-600 hoverbg-slate-600 duration-500" target="_blank" href={"https://github.com/"+vercel.targets.production.meta.githubCommitOrg}>{`https://github.com/${vercel.targets.production.meta.githubCommitOrg}`}</a>
                            </div>
                            <div className="px-1">
                                <span className="poppins-bolder text-sm underline">Deployed & Ready to Explore</span>Check out the live version of this project hosted on Vercel/Netlify.
                            </div>
                            <div className="flex justify-center gap-10 py-2 list-none">
                                    <a target="_blank" href="https://vercel.com/hilal-11"><li className="text-2xl cursor-pointer bg-slate-800 rounded-full px-2 py-2 hover:bg-slate-500 shadow-2xl shadow-blue-700"><SiVercel /></li></a>
                                    <a target="_blank" href={"https://netlify.com"}><li className="text-2xl cursor-pointer bg-slate-800 rounded-full px-2 py-2 hover:bg-slate-500 shadow-2xl shadow-blue-700"><SiNetlify /></li></a>
                                    <a target="_blank" href={"https://github.com/"+vercel.targets.production.meta.githubCommitOrg}><li className="text-2xl cursor-pointer bg-slate-800 rounded-full px-2 py-2 hover:bg-slate-500 shadow-2xl shadow-blue-700"><FaGithub /></li></a>
                            </div>
                        </div>
                ))
            }
        </div>

            


          

        </div>
    )
}
export default Projects;