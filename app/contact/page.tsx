import FAQs from '@/components/FAQs'
import FindUs from '@/components/FindUs'
import SubBanner from '@/components/SubBanner'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Imfundo Private Tutors | Contact Us",
    description: "Learning App",
  };
const page = () => {
    return (
        <div>
            <SubBanner
                pageName="Contact Us"
            />
            <div className='pt-16'>
                
            <FindUs />
            </div>
            <FAQs />
        </div>
    )
}

export default page