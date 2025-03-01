import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { MailIcon, LocateIcon } from 'lucide-react'
import { socials } from '@/constants';
import JoinUs from './JoinUs';

const Footer = () => {
  return (
    <div className='bg-zinc-200'>
      <div className='flex flex-col gap-8 md:flex-row justify-between px-4 md:px-8 py-[60px]'>
        <Link href={"/"}
          className='w-full njn'>
          <div className="w-fit text-center">
            <Image
              src={"/assets/imfundoLogo.png"}
              width={70}
              height={70}
              alt="logo"
              className="w-[50px] md:w-[70px] flex justify-center"
            />

            <div className="w-fit">
              <p className="pacifico-regular md:text-xl text-md md:tracking-[2px]">Imfundo Private Tutors</p>
              <p className="text-xs capitalize text-gray-600 text-center">combination of intelligence</p>
            </div>
          </div>
        </Link>

        <div className='w-full'>
          <p className='font-bold text-lg pb-4 text-gray-600'>Contacts</p>


          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <div
              className='flex items-center gap-2'>
              <LocateIcon size={15} />
              <p>531 Ntendeka | Newcastle | 2940 | South Africa</p>
            </div>
            <div
              className='flex items-center gap-2'
            >
              <MailIcon size={15} />
              <p>azermahle@gmail.com</p>

            </div>
            <div
              className='flex items-center gap-2'
            >

              <div className="flex flex-col gap-1 mt-6">
                <span className="font-bold text-lg text-gray-600">
                  <Link href="tel:+27698379658">
                    +27 69 837 9658
                  </Link></span>

                <JoinUs />
              </div>
            </div>
          </div>
        </div>



        <div className='w-full'>
          <p className='font-bold text-lg pb-4 text-gray-600'>Quick Links</p>


          <div className="flex flex-col gap-2 text-sm text-gray-500">
            <Link href={"/about"}>
              About Us
            </Link><Link href={"/course"}>
              Courses / Subejcts
            </Link>
            <Link href={"/contact"}>
              Contact
            </Link>
            <Link href={"/contact"}>
              FAQ&apos;s
            </Link>
          </div>
        </div>




      </div>
      <div className='h-[1px] w-full bg-gray-300' />

      <div className='flex flex-col md:flex-row gap-4 justify-between p-4'>

        <div className="flex gap-2">
          <Link
            href={"/"}
            className='font-bold text-sm'>
            imfundo-private-tutors.co.za
          </Link>

          <div className='border-l-2 border-gray-400 pl-2'>
            <p className='font-bold text-sm'>
              All 2025 right reserved
            </p>
          </div>
        </div>

        <div className="flex gap-8 items-center text-zinc-400">
          {socials.map((social) => (
            <Link
              key={social.id}
              href={`${social.link}`}
              className='font-bold capitalize'
            >
              {social.name}
            </Link>
          ))}

        </div>
      </div>
    </div>
  )
}

export default Footer