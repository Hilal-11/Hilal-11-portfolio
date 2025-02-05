import React from 'react';
import star from '../../../assets/star.png'
import {reviews} from '../../Config'
function Information() {
  return (
    <div className='w-full h-auto bg-transparent grid grid-cols-1 lg:grid-cols-3 gap-10 '>
            {
              reviews.map((review) => (
                <div key={review.id} className='bg-slate-900 rounded-2xl px-4 py-4 shadow-2xl shadow-slate-950 ring-1 ring-slate-700'>
                  <div className='flex gap-2'>
                    <img className='w-[40px]' src={star} alt="" />
                    <img className='w-[40px]' src={star} alt="" />
                    <img className='w-[40px]' src={star} alt="" />
                  </div>
                  <div className='py-2 px-0'>
                    <p className='px-1'>{review.response}</p>
                  </div>
                  <div className='flex items-center gap-2'>
                    <img className='w-[45px] rounded-full' src={review.image} alt="" />
                    <div className=' bouncing_animation text-xs bg-slate-800 px-3 py-2 rounded-md'>
                        <span className='block poppins-bolder text-center'>{review.name}</span>
                        <p className=' poppins-bold'>{review.profession}</p>
                    </div>
                  </div>
                </div>
              ))
            }
        </div>
  )
}

export default Information