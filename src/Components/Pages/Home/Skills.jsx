import React from 'react'

import  {skillsData}  from '../../Config'

function Skills() {
  return (
    <div>
            <div className='flex justify-center'>
                    <h1 className='text-center poppins-bolder text-5xl lg:text-8xl  bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text'>SKILLS</h1>
            </div>
        <div className='relative w-full h-auto'>
        <span className='absolute w-[60%] h-[600px] rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-[100px] right-0  animate-pulse'></span>
        <span className='absolute w-[60%] h-[600px] rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 blur-[100px] top-1/2  animate-pulse'></span>
        <span className='lg:hidden absolute w-[60%] h-[600px] rounded-full bg-gradient-to-r from-red-500 to-orange-500 bottom-0 animate-pulse blur-[100px]'></span>
            <div className='relative grid grid-cols-2 md:grid-cols-3 lg:grid lg:grid-cols-3 xl:grid-cols-4 justify-evenly  gap-4 lg:gap-10 py-10 lg:px-5'>
                {
                    skillsData.map((item) => (
                        <div key={item.id} className='flex flex-wrap justify-center gap-10 w-auto lg:w-[280px] h-auto lg:h-[160px] rounded-md bg-slate-900 shadow-sm shadow-slate-700 hover:shadow-2xl hover:shadow-blue-800 lg:hover:scale-[1.2] duration-500'>
                            <div className='grid justify-center py-2 '>
                                <span className='text-6xl lg:text-8xl' style={{
                                    color: item.color
                                }}>{item.icon}</span>
                                <p className='py-4 text-2xl font-extrabold text-white'>{item.skill}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
  )
}

export default Skills
