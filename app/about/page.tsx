import AboutUs from '@/components/AboutUs'
import SubBanner from '@/components/SubBanner'
import Testimonials from '@/components/Testimonials';
import WhyChooseUs from '@/components/WhyChooseUs'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Imfundo Private Tutors | About",
    description: "Learning App",
  };

const page = () => {
  return (
    <div>
        <SubBanner 
        pageName="About Us"
        />
        <AboutUs/>
        <WhyChooseUs/>
        <Testimonials/>
    </div>
  )
}

export default page