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
        background : 'hsla(234 , 91% , 4% , 1)',
        color : `#${localStorage.getItem('color')}`
      }}
    >
      <div className=''>
        <Navigation />
      </div>
      <div className='relative w-full lg:max-w-[80%] lg:mx-auto'> <br /> <br />
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