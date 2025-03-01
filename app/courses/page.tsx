import Services from '@/components/Services'
import SubBanner from '@/components/SubBanner'
import { Metadata } from 'next';
import React from 'react'

export const metadata: Metadata = {
    title: "Imfundo Private Tutors | Course",
    description: "Learning App",
  };
const page = () => {
    return (
        <div>
            <SubBanner
                pageName="Course We Offer"
            />
            <div className="p-4">
                <Services />
            </div>
        </div>
    )
}

export default page