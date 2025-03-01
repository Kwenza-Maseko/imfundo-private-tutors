import React from 'react'
import Image from 'next/image';
const AboutUs = () => {
    return (
        <div className='py-[40px] px-4 md:px-8 md:py-[80px]'>
            <div className="flex flex-col md:flex-row justify-between gap-[50px] md:gap-[80px] lg:gap-[100px]">
                <div className="relative cal-width h-[300px] md:w-full  md:h-[500px]">
                    {/* Shadow Effect */}
                    <div className="absolute top-8 left-8 w-full h-full bg-gradient-to-r from-purple-800 to-indigo-900 rounded -z-10"></div>

                    {/* Image */}
                    <Image
                        src={"/assets/about.jpeg"}
                        width={1000}
                        height={600}
                        alt="banner_image"
                        className="w-full h-full object-cover rounded relative shadow-lg"
                    />
                </div>



                <div>
                    <div className=" bg-[#15023346] rounded p-2 w-fit text-white mb-4 shadow shadow-lg text-sm">
                        About Us
                    </div>
                    <p className='font-bold text-xl capitalize mb-2 headers-div'>Who We Are?</p>
                    <div className='flex flex-col gap-1 mb-8'>
                        <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
                        <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
                    </div>

                    <p className='text-gray-700'>At Mfundo Private Tutorsis dedicated to helping students excel in their studies by providing high-quality tutoring services. We understand that every student learns differently, and our goal is to create a supportive and engaging learning environment where they can thrive
                    </p>

                    <p className='text-gray-700 mt-2'>With a team of <b>qualified and experienced educators</b> , we tailor our teaching methods to suit each student's unique needs. Whether you’re struggling with complex topics or simply want to boost your academic performance, we’re here to help!
                    </p>

                </div>
            </div>
        </div>
    )
}

export default AboutUs