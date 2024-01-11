import React from 'react'
import {FaQuoteLeft,FaQuoteRight} from 'react-icons/fa'

export const Card = (props) => {
    const review=props.review;
    const isSpecialImage=review.image==='/assets/about1.png';
  return (
    <div className="flex flex-col md:relative">
        <div className="absolute    top-[-5rem] z-10 mx-auto"><img className={`${isSpecialImage ? ("aspect-square rounded-full w-[7.5rem] h-[7.5rem] z-25 bg-black"):("aspect-square rounded-full w-[7.5rem] h-[7.5rem] z-25")}`}  src={review.image} alt=""/>
        <div className="absolute   w-[7.5rem] h-[7.5rem] bg-violet-500 rounded-full top-[-4px] z-[-20] left-[10px]"></div>
        </div>
        <div className="text-center mt-7">
            <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
            <p className="text-violet-300 uppercase text-sm ">{review.job}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteLeft/>
        </div>
        <div className="text-center mt-4 text-slate-500">
            {review.text}
        </div>
        <div className="text-violet-400 mx-auto mt-5">
            <FaQuoteRight/>
        </div>
       
    </div>
  )
}
