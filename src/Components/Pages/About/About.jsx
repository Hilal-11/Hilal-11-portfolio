import React from "react";
import MERN from '../../../assets/MERN.avif'
import {skillsData} from '../../Config'

const About = () => {

    return (
        <div className="w-full h-auto px-4">
            <div className="flex-row flex-wrap lg:flex-nowrap py-0 gap-10 justify-center items-center">

                <div className="w-full lg:w-full rounded-xl lg:px-5 px-2 py-8">
                    <h1 className=" break-words lg:text-center poppins-bolder lg:text-7xl text-3xl bg-gradient-to-r from-sky-500 to-indigo-500 text-transparent bg-clip-text">Hi i am <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text text-3xl lg:text-6xl">Hilal</span> <br />a full stack web developer with latest Technologies.</h1>
                    <p className="py-8 lg:py-10 lg:px-20 text-justify lg:text-center text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quo recusandae explicabo quis quam corrupti nulla, doloremque, numquam tenetur veniam nemo hic officia. Numquam consectetur nisi distinctio voluptatibus asperiores saepe qui perspiciatis ut itaque in exercitationem odit eius quasi corrupti enim, aliquam amet pariatur quo harum iste ab. Vel ad facere dolores beatae incidunt possimus veritatis voluptates voluptas illum cum fugiat aspernatur odit, tenetur ipsa repudiandae esse optio rerum velit, aliquid officia asperiores distinctio animi! Consequuntur pariatur placeat quae reprehenderit!</p>
                </div>
                <div className=" w-full lg:w-full rounded-xl ">
                    <div>
                        <h1 className="lg:text-6xl text-5xl text-center poppins-bolder bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">My skills</h1>
                    </div> <br />
                    <div className="flex justify-evenly flex-wrap gap-16 py-4">
                     {
                        skillsData.map((favIcon) => (
                            <span key={favIcon.id} className="className='text-6xl drop-shadow-[0_22px_20px_rgba(255,15,89,10.25)] hover:drop-shadow-[0_42px_60px_rgba(137,43,226)] duration-300 text-5xl lg:text-7xl">{favIcon.icon}</span>
                        ))
                     }
                    </div>
                </div>
                
            </div>
            <div className="grid grid-cols-2 py-6 gap-2 lg:gap-4 ">
                <div className="bg-slate-900 h-[200px] rounded-lg"></div>
                <div className="bg-slate-900 h-[200px] rounded-lg"></div>
            </div>
        </div>
    )
}
export default About;