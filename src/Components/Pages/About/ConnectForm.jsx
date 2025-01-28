import React from "react";
import sideImage from '../../../assets/sideImage.avif'
const ConnectForm = () => {

    return (
        <div className="py-20 flex flex-wrap lg:flex-nowrap h-auto "> 
            <div className="w-full lg:w-[40%] shadow-2xl shadow-black">
                <img className="h-[500px] w-full rounded-l-xl" src={sideImage} alt="Error not found "></img>
            </div>
            <div className="w-full lg:w-[60%] h-auto rounded-r-xl bg-slate-800 px-4 lg:px-10 py-4 lg:py-10 shadow-2xl shadow-black">
                <form className=" space-y-4">
                    <div className="w-full ">
                        <input className="px-4 w-full py-5 rounded-lg bg-slate-900 focus:outline-none" required  type="email" placeholder="Email :- " />
                    </div>
                    <div className="flex gap-5">
                        <input className="px-4 w-full py-5 rounded-lg bg-slate-900 focus:outline-none" required  type="username" placeholder="Username :- " />
                        <input  className="px-4 w-full py-5 rounded-lg bg-slate-900 focus:outline-none" required type="password" placeholder="Password :- " />
                    </div>
                    <div>
                        <textarea className="px-4 w-full py-5 rounded-lg bg-slate-900 focus:outline-none resize-none" required rows={5}  name="textarea" id="" placeholder="user quary :-"></textarea>
                    </div>
                    <div className="flex justify-end">
                        <button className="poppins-bolder px-10 w-full py-5 rounded-lg bg-black">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConnectForm;