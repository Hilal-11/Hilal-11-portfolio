import React from 'react'

function ShimmerUI() {
  return (
    <>
      {
        Array(9).fill("").map((shimmer , index) => (
               <div key={index} className='w-full lg:w-[400px] h-[340px] bg-slate-900 shadow-2xl rounded-xl px-2 my-2'>
               </div>
        ))
      }
    </>
  )
}

export default ShimmerUI
