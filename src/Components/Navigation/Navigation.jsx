import React, { useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import {NavLink , Link, useNavigate} from 'react-router-dom'
import { clsx } from 'clsx';
import { FaGithub } from "react-icons/fa";
import { AiOutlineUserAdd } from "react-icons/ai";
import { LuSun } from "react-icons/lu";
import { LuMoon } from "react-icons/lu";

import {navLinksScreen} from '../Config'
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
        <nav className=' border-b border-slate-700 z-50 flex justify-between px-4 items-center py-6 bg-[#010B13] text-white '>
                  <div className=' flex justify-between w-[80%] lg:mx-auto'>
                    <div className=''>
                            <p onClick={() => { navigate('/') }} className=' font-bold text-xl'>WEB MASTERY</p>
                    </div>
                    <div className='hidden lg:flex gap-2'>
                        <button className=" rounded-md px-2 py-2 text-blue-100 text-lg text-center shadow-inner bg-slate-900 shadow-slate-800 hover:shadow-custom"><FaGithub /></button>
                        <button onClick={() => { setLight(!light) }} className=" rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:shadow-custom text-center">
                            {
                                (light === false) ? (<LuSun />) : ( < LuMoon/>)
                            }
                        </button>
                        <GiHamburgerMenu className='text-4xl rounded-md px-2 py-2 text-blue-100 shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center' onClick={ handleIsMenuBar }/>
                    </div>
                    
                    {/* Big screens menu bar secession */}
                    {
                        isMenuBar ? (
                            <div className={'z-50 py-2 px-2 lg: w-[300px] h-auto rounded-lg bg-slate-800 absolute right-10 top-[5.3rem] shadow-xl shadow-slate-900'}>
                                {
                                    navLinksScreen.map((link) => (
                                        <li onClick={ ()=> {setIsMenuBar(false)}} key={link.id} className='flex gap-2 font-sans font-bold text-xl list-none py-3 hover:bg-blue-500 hover:ring-1 hover:shadow-sm rounded-sm px-2 cursor-pointer'>
                                            <span className=' text-3xl '>{link.icon}</span><span></span><NavLink to={link.to}>{link.label}</NavLink>
                                        </li>
                                    ))
                                }
                            </div>
                         ) : ""
                    }
                  </div>
        
                    {/* Side bar section */}
                            {/* inside section */}
                            {isSideBar && <section className='z-40 bg-slate-950 h-screen w-[90%] flex-col absolute top-0 left-0 p-6 gap-10 text-white'>
                                    <div className=' flex justify-between' >
                                            <p onClick={() => { navigate('/') }} className=' font-bold text-xl'>WEB MASTERY</p>
                                        <IoCloseSharp className='relative -top-2 text-4xl cursor-pointer' onClick={() => {SetSideBar(false)}} />
                                    </div>
                                        <hr className='bg-black w-screen my-2 relative -left-6  shadow-sm shadow-stone-200' />
                                    <div>
                                        <div className='py-2 px-0 text-black flex-col gap-40 '>
                                            {
                                                navLinksScreen.map((link) => (
                                                    <li onClick={ ()=> {SetSideBar(false)}} key={link.id} className='text-white flex text-xl font-sans font-bold list-none gap-2 py-4 hover:bg-blue-600 hover:rounded-lg hover:shadow-sm rounded-sm px-2 '>
                                                        <span className=' text-3xl'>{link.icon}</span><NavLink className="px-3" to={link.to}>{link.label}</NavLink>
                                                    </li>
                                                ))
                                            }
                                        </div>
                                    </div>
                            </section>  }
                    
                    <div className='flex gap-2 lg:hidden'>
                        <button className=" rounded-md px-2 py-2 text-blue-100 text-lg text-center shadow-inner bg-slate-900 shadow-slate-800 hover:shadow-custom"><FaGithub /></button>
                        <button onClick={() => { setLight(!light) }} className=" rounded-md px-2 py-2 text-blue-100 text-lg shadow-inner bg-slate-900 shadow-slate-800 hover:shadow-custom text-center">
                            {
                                (light === false) ? (<LuSun />) : ( < LuMoon/>)
                            }
                        </button>
                        <GiHamburgerMenu className='text-4xl rounded-md px-2 py-2 text-blue-100 shadow-inner bg-slate-900 shadow-slate-800  text-center ' onClick={ menuBarHandler } />
                    </div>   
        </nav>
    </div>
  )
}
export default Navigation


//  shadow-inner bg-slate-900 shadow-slate-800
// shadow-inner bg-slate-900 shadow-slate-800
