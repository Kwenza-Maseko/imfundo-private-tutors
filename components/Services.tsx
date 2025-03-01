import React from 'react';
import Image from 'next/image';
import { services, service_2 } from '@/constants';
import { LocateIcon, TimerIcon, Wallet } from 'lucide-react';

const Services = () => {
    return (
        <div className="study-bg px-4 md:px-8 md:py-[80px]">
            {/* Section Title */}
            <div className="">

                <div className=" bg-[#15023346] rounded p-2 w-fit text-white mb-4 shadow shadow-lg text-sm">
                    Our Services
                </div>


                <p className='font-bold text-xl capitalize mb-2 headers-div'>Extra Classes for Primary & High School Students </p>
                <div className='flex flex-col gap-1 mb-8'>
                    <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
                    <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-white">
                    {services.map((service, index) => (
                        <div key={index} className="relative cal-width h-[150px]">
                            {/* Purple Shadow Effect */}
                            <div className="absolute top-8 left-8 w-full h-fit bg-gradient-to-r from-purple-800 to-indigo-900  rounded-lg shadow-xl z-10 flex flex-col gap-6 items-center p-8">
                                <div className='flex items-center flex-col gap-6'>
                                    <p className='text-lg font-bold text-center'>{service.title}</p>
                                </div>
                            </div>

                            {/* Background Image */}
                            <Image
                                src={service.image}
                                width={1000}
                                height={600}
                                alt="service_image"
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>



                <p className='font-bold text-xl capitalize mt-16 headers-div'>Exam Preparation & Study Skills</p>
                <div className='flex flex-col gap-1 mb-8'>
                    <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
                    <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 text-white">
                    {service_2.map((service, index) => (
                        <div key={index} className="relative cal-width h-[150px]">
                            {/* Purple Shadow Effect */}
                            <div className="absolute top-8 left-8 w-full h-fit bg-gradient-to-r from-purple-800 to-indigo-900  rounded-lg shadow-xl z-10 flex flex-col gap-6 items-center p-8">
                                <div className='flex items-center flex-col gap-6'>
                                    <p className='text-lg font-bold text-center'>{service.title}</p>
                                </div>
                            </div>

                            {/* Background Image */}
                            <Image
                                src={service.image}
                                width={1000}
                                height={600}
                                alt="service_image"
                                className="absolute top-0 left-0 w-full h-full object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    ))}
                </div>


                <p className='font-bold text-xl capitalize mt-16 headers-div'>Online & In-Person Learning</p>
                <div className='flex flex-col gap-1 mb-8'>
                    <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
                    <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
                </div>
                <p>We offer both virtual lessons and in-person tutoring, making it easier for students to learn from the comfort of their homes or at our learning center.</p>

                <div className="flex justify-between gap-4 justify-center mt-8 rounded-md bg-gradient-to-r from-purple-800 to-indigo-900 p-4 text-white">
                    <div className=' w-full flex flex-col gap-2 text-center border-r-2 border-white '>
                        <div className="flex flex-col md:flex-row gap-2 items-center justify-center py-2">
                            <LocateIcon size={20} />
                            <p className='font-bold text-center'>Location</p>
                        </div>
                        <p className='text-sm'>Your Preferred Space / My Work Space</p>
                    </div>

                    <div className=' w-full flex flex-col gap-2 text-center border-r-2 border-white '>
                        <div className="flex flex-col md:flex-row gap-2 items-center justify-center py-2">
                            <TimerIcon size={20} />
                            <p className='font-bold text-center'>Class Duration</p>
                        </div>
                        <p className='text-sm'>1 – 2 Hours Per Session</p>
                    </div>

                    <div className=' w-full flex flex-col gap-2 text-center '>
                        <div className="flex flex-col md:flex-row gap-2 items-center justify-center py-2">
                            <Wallet size={20} />
                            <p className='font-bold text-center'>Pricing</p>
                        </div>
                        <p className='text-sm'>Affordable & Flexible Plans Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
