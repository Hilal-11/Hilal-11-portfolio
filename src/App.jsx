import React, { useState } from 'react'
import {Routes , Route} from 'react-router-dom'
import Navigation from './Components/Navigation/Navigation'
import Hero from './Components/Pages/Home/Hero'
import About from './Components/Pages/About/About'
import Projects from './Components/Pages/FeatureProjects/Projects'
import Github from './Components/Pages/Github/Github'
import Web_resources from './Components/Pages/Resources/Web_resources'

import Footer from './Components/Footer';
export default function App() {
  // 020617
  // f6d5f7
  const [test , setTest] = useState(true);
  const [background , setBackground] = useState('020617')
  const [color , setColor] = useState('ffffff');


  localStorage.setItem('backgroundColor' , background);
  localStorage.setItem('color' , color);


  const handleTheme = () => {
    if(test) {
      setBackground('f6d5f7');
      setColor('000000');
      setTest(false)
    }else{
      setBackground('020617');
      setColor('ffffff');
      setTest(true)

    }
  }

  return (
    <div className="h-auto w-[100%]"
      style={{
        background : `#${localStorage.getItem('backgroundColor')}`,
        color : `#${localStorage.getItem('color')}`
      }}
    >
      <div className=''>
        <Navigation />
        
      </div>
      <div className='relative w-full lg:max-w-[80%] lg:mx-auto'>

          {/* {
            test ? (<LuMoonStar onClick={ handleTheme } className='text-4xl rounded-md px-2 py-2 text-blue-100 shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center  absolute  -top-[3.8rem] right-36'/>) : (<RiSunLine onClick={ handleTheme } className='text-4xl rounded-md px-2 py-2 text-blue-100  shadow-inner bg-slate-900 shadow-slate-800 hover:bg-blue-600 hover:shadow-2xl text-center absolute  -top-[3.8rem] right-36 '/>)
          } */}

        <div className="mx-auto py-6"> 
          <Routes>
            <Route path="/" element={<Hero/>}></Route>
            <Route path="/About" element={<About/>}></Route>
            <Route path="/FreatureProjects" element={<Projects/>}></Route>
            <Route path="/Github" element={<Github/>}></Route>
            <Route path="/Resourses" element={<Web_resources/>}></Route>
          </Routes>
        </div>
      </div>
    <Footer />
          
      
    </div>
  )
}