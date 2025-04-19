import React from 'react'
import WebTechHorzontalInfinite from './WebTechHorzontalInfinite';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
function DeveloperInfo() {
  return (
    <>  
        <p className='text-6xl font-bold bg-gradient-to-r from-indigo-500 text-transparent bg-clip-text xl:text-8xl text-center'>Hi, I'm Hilal</p>
        <p className=' text-3xl font-extrabold whitespace-pre-wrap lg:text-5xl xl:text-5xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text'>A passionate Full-Stack Web Developer dedicated to building intuitive, scalable, and efficient digital solutions.</p>
        <div className=' pb-4 px-0 lg:px-5 my-16 w-full h-auto rounded-xl bg-slate-900 shadow-2xl shadow-blue-600  lg:grid lg:grid-cols-2 gap-10 items-center'>
                  
                <div className='hidden lg:flex justify-center h-[300px] items-center '>
                    <div className='lg:py-10 py-5 px-4 flex lg:gap-12 gap-6 flex-wrap justify-evenly lg:text-5xl text-2xl text-gray-600  '>
                        <img className='w-2/3' src="https://res.cloudinary.com/kentcdodds-com/image/upload/w_900,q_auto,f_auto/kentcdodds.com/illustrations/kody/kody_onewheeling_flying_red" alt="" />
                    </div>
                </div>
            <div className='lg:h-[500px] h-[450px]'>
                <SyntaxHighlighter className='rounded-2xl h-full overflow-auto' style={dark} language="javascript">
                    {`import React from 'react'
import Font, { Text } from 'react-font'
import { FaGithub } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { SiLeetcode } from "react-icons/si";
import { FaWhatsappSquare } from "react-icons/fa";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
function DeveloperInfo() {
    return (
        <>  
            <p className='text-6xl font-bold bg-gradient-to-r from-indigo-500 text-transparent bg-clip-text xl:text-8xl text-center'>Hi, I'm Hilal</p>
            <p className=' text-3xl font-extrabold whitespace-pre-wrap lg:text-5xl xl:text-5xl bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 text-transparent bg-clip-text'>A passionate Full-Stack Web Developer dedicated to building intuitive, scalable, and efficient digital solutions.</p>
            <div className='my-16 w-full h-auto rounded-xl bg-slate-900 shadow-2xl shadow-blue-600  grid grid-cols-2 gap-10'>
                <div className='grid grid-cols-2'>
                    <div>
                        <img className=' rounded-l-2xl h-[450px] w-[420px]' src={ hilalImage } alt="" />
                    </div>
                    <div className=' text-white px-5 py-4'>
                        <Font family='poppins'>
                            <p className=' text-4xl text-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>
                                Hi, I'm Hilal 
                            </p>
                        </Font>
                        <p className=' text-justify px-4 py-6 font-semibold'>
                            With expertise in both front-end and back-end development, I create seamless user experiences backed by robust server-side logic. My journey in web development combines creativity, problem-solving, and a drive to keep up with the latest technologies. Whether it’s crafting responsive designs or implementing complex APIs, I thrive on delivering impactful solutions tailored to user needs.
                        </p>
                        <div className='flex text-white justify-around text-2xl'>
                        <span className='bg-slate-950 px-3 py-3 cursor-pointer  rounded-full'><FaGithub className=''/></span>
                        <span className='bg-slate-950 px-3 py-3 cursor-pointer  rounded-full'><ImLinkedin className=''/></span>
                        <span className='bg-slate-950 px-3 py-3 cursor-pointer  rounded-full'><SiLeetcode className=''/></span>
                        <span className='bg-slate-950 px-3 py-3 cursor-pointer  rounded-full'><FaWhatsappSquare className=''/></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
    }
    export default DeveloperInfo`}
                </SyntaxHighlighter>
            </div>
        </div>
        <div>
            <WebTechHorzontalInfinite />
        </div>
    </>
  )
}
export default DeveloperInfo
