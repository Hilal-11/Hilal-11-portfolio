import React from "react";
import GlobeGif from '../../../assets/Globe.gif'
import { Link  } from 'react-router-dom'
import { useState , useEffect } from 'react'
import Cpp from '../../../assets/ReposImages/Cpp.jpg'
import C from '../../../assets/ReposImages/C.jpeg'
import Java from '../../../assets/ReposImages/Java.webp'
import DSA from '../../../assets/ReposImages/Data-Structures.webp'
import Javascript from '../../../assets/ReposImages/Javascript.png'
import Javascript2 from '../../../assets/ReposImages/Javascript2.jpg'
import ReactImg from '../../../assets/ReposImages/React1.png'
import Php from '../../../assets/ReposImages/Php.png'
import Scss from '../../../assets/ReposImages/Scss.webp'
import Html from '../../../assets/ReposImages/Html.jpg'
import Crypto from '../../../assets/ReposImages/Crypto.webp'
import { toast, ToastContainer } from 'react-toastify';
import { BsSearchHeart } from "react-icons/bs";
import ShimmerUI from "../../ShimmerUI";
import GithubRepoImage from '../../../assets/GithubRepoImage.jpg'

import { LuLink } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
const Github = () => {

    function searchRepository(quary , repo) {
        return repo.filter((item) => item?.name?.toLowerCase()?.includes(quary?.toLowerCase()))
    }
    const images = [Crypto , C , GithubRepoImage,  DSA , Cpp , Html , Crypto , Java , Javascript, Javascript2 ,Php , ReactImg, GithubRepoImage , GithubRepoImage ,GlobeGif , GithubRepoImage , Scss , Html ,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage,GithubRepoImage ];
    const [shimmer , setShimmer] = useState(true)
    const [repository , setRepository] = useState([]);
    const [filteredRepo , setFilteredRepo] = useState(null);
    const [userQuary , setUserQuary] = useState('');
    const githubURL = 'https://github.com/Hilal-11/';
    useEffect(() => {
        fetchGithubRepositories();

    } , [])
    const fetchGithubRepositories = async () => {
       try {
        setShimmer(true)
        const response =  await fetch('https://api.github.com/users/Hilal-11/repos');
        const data = await response.json();
        setRepository(data)
        setFilteredRepo(data)
        setShimmer(false)
       }catch(err)  {
        console.log(err);
       }
    }
    const searchInputHandler = (event) => {
        setUserQuary(event.target.value)
    }

    function searchHandler() {
        if(userQuary !== '') {
            const newFilteredRepo = searchRepository(userQuary , repository)
            setFilteredRepo(newFilteredRepo)
            setUserQuary('')
        }else{
            toast.error('Please enter a search query' , {
                position: "top-right",
                draggable: true,
            })
        }
    }

    return (
        <div className="w-full h-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2  justify-between gap-2">
                <div className=" h-auto rounded-xl py-5 lg:py-20">
                    <h1 className=" text-3xl lg:text-5xl xl:text-7xl poppins-bolder">
                        <span>Explore the </span><span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text ">Github</span> Repositories, Code, Projects and Code Documentation<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text flex items-center space-x-4">
                            
                            <Link to="https://github.com/Hilal-11" className="flex items-center space-x-4">
                            <span className="text-slate-700 text-6xl px-4"><LuLink /></span> Hilal-11 <span className="text-slate-700 text-6xl"><FaGithub /></span></Link></span>
                            
                    </h1>
                    
                <br /> 
                    <p className='my-2 text-md text-justify poppins-bold'>I leverage the latest technologies like <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Three.js</span>, <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>WebGL,</span> and <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text'>Framer Motion</span> to create immersive 3D web experiences that captivate users and elevate digital storytelling. From interactive 3D models to dynamic animations, I bring cutting-edge visuals to life on the web, ensuring seamless performance across devices.</p>
                <div className="flex justify-evenly flex-wrap my-8 gap-4">  
                    <button className="lg:w-auto w-full bg-gradient-to-r from-sky-500 to-indigo-500 px-20 py-4 rounded-md font-bold my-2 hover:bg-none hover:ring-1 hover:shadow-2xl hover:shadow-blue-600"><Link to={githubURL}>Explore Github</Link></button>
                    <button className="lg:w-auto w-full bg-gradient-to-r from-sky-500 to-indigo-500 px-20 py-4 rounded-md font-bold my-2 hover:bg-none hover:ring-1 hover:shadow-2xl hover:shadow-blue-600"><Link to={githubURL}>Live on Vercel</Link></button>
                </div>
                </div>
                <div className=" rounded-xl  lg:py-16 h-auto flex justify-center">
                    <img className="w-auto lg:w-[800px]" src={GlobeGif} alt="" />
                </div>
            </div>
            <div className="relative w-full lg:w-[80%] mx-auto">
                        <input 
                            type="text"
                            className="lg:py-6 py-4 w-full rounded-xl bg-slate-800 shadow-sm shadow-slate-800 h-full px-5 font-bold text-xl focus:outline-none" 
                            placeholder="Search Course :-"
                            value={userQuary}
                            onChange={searchInputHandler}
                        />
                        <button 
                            onClick={searchHandler} 
                            className="absolute right-2 lg:right-6 top-1/2 transform -translate-y-1/2 text-4xl"
                        >
                            <BsSearchHeart />
                        </button>
                    </div>
            <div className=" my-10 grid lg:grid-cols-3 grid-cols-1 gap-20 py-10 lg:py-20">
                {
                  (shimmer === true) ? (
                    <ShimmerUI className="border"/>
                  ) : (
                    filteredRepo != null && filteredRepo.map((repo , index) => (
                        <div key={repo.id} className="relative w-full h-auto bg-slate-900 shadow-2xl rounded-xl -my-6 px-2 py-2">
                            <p className="poppins-bolder text-lg break-words">{repo.name}</p>
                            <div className="py-2 ">
                                <img className="rounded-xl h-[180] lg:h-[220px] w-full" src={images[index]} alt="C++" />
                            </div>
                            <div className="py-3 w-full rounded-xl flex justify-between px-1">
                                <button className="bg-slate-700 shadow-xl shadow-slate-950 hover:bg-gradient-to-r from-sky-500 to-indigo-500 lg:px-4 px-2 py-1 rounded-md inline-block poppins-bold lg:text-lg text-sm"><Link to={repo.clone_url}>Clone Repeo</Link></button>
                                <button className="bg-slate-700 shadow-xl shadow-slate-950 hover:bg-gradient-to-r from-sky-500 to-indigo-500 lg:px-4 px-2 py-1 rounded-md inline-block poppins-bold lg:text-lg text-sm"><Link to={githubURL}>Visit Github</Link></button>
                            </div>
                        </div>
                    ))
                  )
                  
                }
            </div>  
            <ToastContainer />  
    </div>
    )
}
export default Github;