import React from 'react'
import Image from 'next/image';
import { Check, Calendar, PinIcon, PersonStanding } from 'lucide-react';
const Welcome = () => {
    return (
        <div className='py-[50px] px-4 md:px-8 md:py-[80px]'>
            <div className="flex flex-col md:flex-row justify-between gap-[50px] md:gap-[80px] lg:gap-[100px]">
                <div className="relative cal-width h-[300px] md:w-full  md:h-[500px]">
                    {/* Shadow Effect */}
                    <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-r from-purple-800 to-indigo-900 rounded -z-10"></div>

                    {/* Image */}
                    <Image
                        src={"/assets/banner.jpg"}
                        width={1000}
                        height={600}
                        alt="banner_image"
                        className="w-full h-full object-cover rounded relative shadow-lg"
                    />
                </div>



                <div>
                    <div className=" bg-[#15023346] rounded p-2 w-fit text-white mb-4 shadow shadow-lg text-sm">
                        Welcome
                    </div>
                    <p className='font-bold text-xl capitalize mb-2 headers-div text-[#150233]'>Empowering Students, One Lesson at a Time!</p>
                    <div className='flex flex-col gap-1 mb-8'>
                        <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
                        <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
                    </div>

                    <p className='text-gray-700'>At Mfundo Private Tutors, we provide high-quality extra classes for students who want to improve their understanding of key subjects. Our expert tutors are here to guide you every step of the way, helping you build confidence and achieve academic success.
                    </p>

                    <div className="font-bold text-md mt-8">
                        Subjects We Cover
                    </div>

                    <div className="flex flex-col gap-2 mt-4">
                        <div className="flex gap-2 items-center">
                            <div className="p-[3px] bg-[#150233d0] rounded text-white w-fit flex gap-2 items-center">
                                <Check size={15} />
                            </div>

                            <div className="flex gap-2 items-center">
                                <p className='text-sm'>Mathematics</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="p-[3px] bg-[#150233d0] rounded text-white w-fit flex gap-2 items-center">
                                <Check size={15} />
                            </div>

                            <div className="flex gap-2 items-center">
                                <p className='text-sm'>Science</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="p-[3px] bg-[#150233d0] rounded text-white w-fit flex gap-2 items-center">
                                <Check size={15} />
                            </div>

                            <div className="flex gap-2 items-center">
                                <p className='text-sm'>English</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">
                            <div className="p-[3px] bg-[#150233d0] rounded text-white w-fit flex gap-2 items-center">
                                <Check size={15} />
                            </div>

                            <div className="flex gap-2 items-center">
                                <p className='text-sm'>Accounting</p>
                            </div>
                        </div>
                        <div className="flex gap-2 items-center">

                            <div className="flex gap-2 items-center">
                                <p className='text-sm font-bold'>And More!</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between gap-4 justify-center mt-8 rounded-lg bg-gradient-to-r from-purple-800 to-indigo-900 p-4 text-[#fff]">
                        <div className="flex flex-col md:flex-row gap-2 items-center justify-center border-r-2 border-[#dddddd] w-full py-2">
                            <Calendar size={20} />
                            <p className=' text-sm text-center'>Flexible Schedules</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 items-center justify-center border-r-2 border-[#dddddd] w-full py-2">
                            <PinIcon size={20} />
                            <p className=' text-sm text-center'>Personalized Learning</p>
                        </div>

                        <div className="flex flex-col md:flex-row gap-2 items-center justify-center w-full py-2">
                            <PersonStanding size={20} />
                            <p className=' text-sm text-center'>Experienced Tutors</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome