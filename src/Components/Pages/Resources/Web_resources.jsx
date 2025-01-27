import React from "react";
import { NavLink } from 'react-router-dom'
import {resoursesCoursesLists} from '../../Config'
import './Style.css'
const Web_resources = () => {
    return (
        <div className="w-full h-auto px-4">
            <div className="relative w-full lg:h-[400px] h-[300px] bg-slate-800 shadow-2xl rounded-xl flex justify-center">
                <div className="absolute w-[88%] h-[60px] lg:h-[80px] rounded-xl bg-slate-900 shadow-sm shadow-slate-800 -bottom-10">
                    <input type="text" className="w-full h-full rounded-xl bg-transparent px-5 font-bold text-xl focus:outline-none" placeholder="Search Course :-" />
                </div>
            </div>
            <div className="my-20 flex justify-start lg:justify-center gap-10 overflow-x-auto px-4">
               {
                resoursesCoursesLists.map((dataItem) => (
                    <div key={dataItem.id} className=" bg-slate-900 rounded-md px-10 py-3 font-bold text-sm lg:text-lg hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 hover:duration-700 cursor-pointer">
                        <NavLink to={''}>{dataItem.item}</NavLink>
                    </div>
                ))
               }
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-20 ">
                <div className="relative w-full h-[320px] bg-slate-900 shadow-2xl rounded-xl -my-6 px-2 py-2">
                    <div className="absolute bottom-4 w-full rounded-xl flex justify-between px-6">
                        <button className=" inline-block font-bold  bg-gradient-to-r from-sky-500 to-indigo-500  text-transparent bg-clip-text ">Frontend</button>
                        <button className=" inline-block font-bold  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ">Watch Now</button>
                    </div>
                </div>

                <div className="relative w-full h-[320px] bg-slate-900 shadow-2xl rounded-xl -my-6 px-2 py-2">
                    <div className="absolute bottom-4 w-full rounded-xl flex justify-between px-6">
                        <button className=" inline-block font-bold  bg-gradient-to-r from-sky-500 to-indigo-500  text-transparent bg-clip-text ">Frontend</button>
                        <button className=" inline-block font-bold  bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text ">Watch Now</button>
                    </div>
                </div>
            </div>
            <br />
        </div>
    )
}
export default Web_resources;