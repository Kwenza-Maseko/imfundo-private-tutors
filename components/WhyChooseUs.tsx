import React from 'react'
import {
    Sliders,
    Users,
    GraduationCap,
    Wallet,
    Video
} from 'lucide-react'

const WhyChooseUs = () => {
    return (
        <div className='text-white py-[50px] px-4 md:px-8 md:py-[80px]'>
            <div className=" bg-[#15023346] rounded p-2 w-fit text-white mb-4 shadow shadow-lg text-sm">
                Why Choose Us?
            </div>
            <div className="flex flex-wrap justify-center gap-4">
                <div className="rounded-md w-full md:w-[380px] bg-gradient-to-r from-purple-800 to-indigo-900  h-[230px]">

                    <div className="p-4 pr-8 bg-white w-fit rounded-br-[75px] rounded-tl-md">
                        <Sliders size={35} className='text-indigo-900' />
                    </div>
                    <div className='flex items-center flex-col gap-6 px-4 pb-4'>
                        <p className='text-lg font-bold text-center'>Personalized Learning Plans</p>
                        <p className='text-center text-sm text-zinc-300'>We assess each student&apos;s strengths and weaknesses and create a custom study plan.</p>
                    </div>
                </div>


                <div className="rounded-md w-full md:w-[380px] bg-gradient-to-r from-purple-800 to-indigo-900  h-[230px]">
                    <div className="p-4 pr-8 bg-white w-fit rounded-br-[75px] rounded-tl-md">
                        <Users size={35} className='text-indigo-900' />
                    </div>
                    <div className='flex items-center flex-col gap-6'>
                        <p className='text-lg font-bold text-center'>Small Class Sizes</p>
                        <p className='text-center text-sm text-zinc-300'>Ensuring individual attention and better understanding.</p>
                    </div>
                </div>


                <div className="rounded-md w-full md:w-[380px] bg-gradient-to-r from-purple-800 to-indigo-900  h-[230px]">
                <div className="p-4 pr-8 bg-white w-fit rounded-br-[75px] rounded-tl-md">
                        <GraduationCap size={35} className='text-indigo-900' />
                    </div>
                    <div className='flex items-center flex-col gap-6'>
                        <p className='text-lg font-bold text-center'>Qualified Tutors</p>
                        <p className='text-center text-sm text-zinc-300'>Passionate teachers with years of experience.</p>
                    </div>
                </div>


                <div className="rounded-md w-full md:w-[380px] bg-gradient-to-r from-purple-800 to-indigo-900  h-[230px]">
                <div className="p-4 pr-8 bg-white w-fit rounded-br-[75px] rounded-tl-md">
                        <Wallet size={35} className='text-indigo-900' />
                    </div>
                    <div className='flex items-center flex-col gap-6'>
                        <p className='text-lg font-bold text-center'>Affordable Prices</p>
                        <p className='text-center text-sm text-zinc-300'>Quality education at an affordable rate.</p>
                    </div>
                </div>


                <div className="rounded-md w-full md:w-[380px] bg-gradient-to-r from-purple-800 to-indigo-900  h-[230px]">
                <div className="p-4 pr-8 bg-white w-fit rounded-br-[75px] rounded-tl-md">
                        <Video size={35} className='text-indigo-900' />
                    </div>
                    <div className='flex items-center flex-col gap-6'>
                        <p className='text-lg font-bold text-center'>Online & In-Person Classes </p>
                        <p className='text-center text-sm text-zinc-300'>Learn from anywhere with our flexible options.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs