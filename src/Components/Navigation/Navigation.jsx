import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import {NavLink , Link, useNavigate} from 'react-router-dom'
import { FaGithub } from "react-icons/fa";
import { LuMoon } from "react-icons/lu";
import { SiGmail } from "react-icons/si";
import {navLinksScreen} from '../Config'
import { ToastContainer, toast } from 'react-toastify';
function Navigation() {
    const navigate = useNavigate('')
    const[light , setLight] = useState(false);
    const [isSideBar , SetSideBar] = useState(false);
    function menuBarHandler () {
        SetSideBar(true);
    }
    const [isMenuBar , setIsMenuBar] = useState(false);
    function handleIsMenuBar () {
        setIsMenuBar(!isMenuBar);
    }
  return (
    <div>
        <nav className=' border-b border-slate-700 z-50 flex justify-between px-4 items-center lg:py-4 py-3 bg-[#010B13] text-white fixed left-0 right-0 top-0 '>
                  <div className=' flex justify-between w-[80%] lg:mx-auto'>
                    <div className='flex items-center '>
                            <p onClick={() => { navigate('/') }} className='poppins-bolder lg:text-sm'><span className='bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text poppins-bolder text-2xl lg:text-3xl'>Hilal</span>-11</p>
                    </div>
                    <div className='hidden lg:flex gap-2'>
                        <button className=" rounded-md px-2 py-2 text-blue-100 text-lg text-center shadow-inner bg-slate-900 shadow-slate-800"><Link target='_blank' to={"https://github.com/Hilal-11"}><FaGithub /></Link></button>
                        <a href="mailto:hilalahmadcode123@gmail.com" target='_blank'><button className=" rounded-md px-2 py-2 text-blue-100 text-xl text-center shadow-inner bg-slate-900 "><SiGmail/></button></a>
                        <button onClick={() => toast("Sorry theme feature is not avaliable yet 🙇‍♀️", {
                            draggable: true,
                        })} className=" rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 text-center"><LuMoon/></button>
                        <GiHamburgerMenu className='text-4xl rounded-md px-2 py-2 text-blue-100 shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center' onClick={ handleIsMenuBar }/>
                    </div>
                    {/* Big screens menu bar secession */}
                    {
                        isMenuBar ? (
                            <div className={'z-50 py-2 px-2 lg: w-[300px] h-auto rounded-lg bg-slate-800 absolute right-10 top-[5.3rem] shadow-xl shadow-slate-900'}>
                                {
                                    navLinksScreen.map((link) => (
                                        <NavLink key={link.id} to={link.to}><li onClick={ ()=> {setIsMenuBar(false)}}  className='flex gap-2 font-sans font-bold text-xl list-none py-3 hover:bg-blue-500 hover:ring-1 hover:shadow-sm rounded-sm px-2 cursor-pointer'>
                                            <span className=' text-3xl '>{link.icon}</span><span></span>{link.label}</li></NavLink>
                                    ))
                                }
                            </div>
                         ) : ""
                    }
                  </div>
                    {/* Side bar section */}
                            {/* inside section */}
                            {isSideBar && <section className='z-40 bg-slate-900 h-screen w-[90%] flex-col absolute top-0 left-0 p-6 gap-10 text-white'>
                                    <div className=' flex justify-between' >
                                            <p onClick={() => { navigate('/') }} className='font-bold text-md'>WEB MASTERY</p>
                                        <IoCloseSharp className='relative -top-2 text-3xl cursor-pointer' onClick={() => {SetSideBar(false)}} />
                                    </div>
                                    <div>
                                        <div className='py-2 px-0 text-black flex-col gap-40 '>
                                            {
                                                navLinksScreen.map((link) => (
                                                    <NavLink  className="px-3" to={link.to}><li onClick={ ()=> {SetSideBar(false)}} className='text-white flex text-lg font-sans font-bold list-none gap-2 py-2 hover:bg-blue-600 hover:rounded-lg hover:shadow-sm rounded-sm px-0 '>
                                                        <span className=' text-2xl'>{link.icon}</span>{link.label}</li></NavLink>
                                                ))
                                            }
                                        </div>
                                    </div>
                            </section>  }
                    <div className='flex gap-1 lg:hidden'>
                        <button className=" rounded-md px-2 py-2 text-blue-100 text-lg text-center shadow-inner bg-slate-900 "><FaGithub /></button>
                        <a href="mailto:hilalahmadcode123@gmail.com" target='_blank'><button className=" rounded-md px-2 py-2 text-blue-100 text-xl text-center shadow-inner bg-slate-900 "><SiGmail/></button></a>
                        <button onClick={() => { toast("Sorry theme feature is not avaliable yet 🙇‍♀️" , {
                            draggable: true,
                        })  }} className=" rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 text-center"><LuMoon/></button>
                        
                        <GiHamburgerMenu className='text-4xl rounded-md px-2 py-2 text-blue-100 shadow-inner bg-slate-900 shadow-slate-800  text-center ' onClick={ menuBarHandler } />
                    </div>  
            <ToastContainer /> 
        </nav>
    </div>
  )
}
export default Navigation



