import React from 'react'
import Image from "next/image"
import JoinUs from './JoinUs'

const Banner = () => {
  return (
    <div className='relative'>
      {/* Background Image */}
      <div className="w-full h-[400px] md:h-[500px] relative">
        <Image
          src={"/assets/classroom.jpg"}
          width={1000}
          height={600}
          alt="banner_image"
          className="w-full h-full object-cover"
        />
      </div>


      {/* Overlay with Centered Text */}
      <div className="absolute inset-0 bg-[#1502339a] flex flex-col justify-center gap-6 p-4">
        <p className='capitalize md:text-[50pt] text-3xl font-black text-white w-[80%] md:w-[50%] leading-[1]'>
          Unlock Your Full Potential After Class!
        </p>

        <div className="py-2 rounded  w-fit">
          <p className='capitalize text-zinc-300 text-sm'>
            Learn, Practice, and Grow Beyond the Classroom
          </p>

        </div>
        
        <JoinUs/>
      </div>
    </div>
  )
}

export default Banner
