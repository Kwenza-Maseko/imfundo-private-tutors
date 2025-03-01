import React from 'react'
import { Mail, Phone, MapPinIcon } from 'lucide-react'

const FindUs = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center h-full overflow-hidden'>
            <div className='w-full lg:w-[40%] flex flex-col gap-4 p-4 max-h-[500px] overflow-y-auto'>
                <div className='bg-[#150233] rounded-md flex flex-col gap-5 h-[130px] p-4 md:p-8'>
                    <MapPinIcon size={30} className='text-white' />
                    <p className='text-zinc-200 text-sm'>410 Ntendeka | Newcastle | 2940 | South Africa</p>
                </div>
                <div className='bg-[#150233] rounded-md flex flex-col gap-5 h-[130px] p-4 md:p-8'>
                    <Phone size={30} className='text-white' />
                    <p className='text-zinc-200 text-sm'>+27 69 837 9658</p>
                </div>
                <div className='bg-[#150233] rounded-md flex flex-col gap-5 h-[130px] p-4 md:p-8'>
                    <Mail size={30} className='text-white' />
                    <p className='text-zinc-200 text-sm'>mkhwanaziazemahle@gmail.com</p>
                </div>
            </div>
            <div className="w-full lg:w-[60%]">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3528.213515070391!2d30.091600000000003!3d-27.833969999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1eede3a23b1f1f7f%3A0x5b7dcbb6150e2e64!2sNtendeka%20Primary%20School!5e0!3m2!1szu!2sza!4v1740824820380!5m2!1szu!2sza" 
                    width="100%" 
                    height="400px" 
                    loading="lazy" 
                    className="rounded-md shadow-md"
                ></iframe>
            </div>
        </div>
    )
}

export default FindUs
