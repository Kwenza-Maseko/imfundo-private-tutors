"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Student",
    image: "/assets/classroom.jpg",
    feedback: "This platform transformed my learning experience! The personalized plans and qualified tutors helped me excel in my studies.",
  },
  {
    name: "Michael Adams",
    role: "Parent",
    image: "/assets/classroom.jpg",
    feedback: "The tutors are amazing, and the small class sizes make a huge difference. My child is now more confident and engaged in learning!",
  },
  {
    name: "Emma Williams",
    role: "Tutor",
    image: "/assets/classroom.jpg",
    feedback: "As a tutor, I love the flexibility and support provided. The platform truly values quality education and student success.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="p-4 pt-16  py-[50px] px-4 md:px-8 md:py-[80px]">
      <div className=" bg-[#15023346] rounded p-2 w-fit text-white mb-4 shadow shadow-lg text-sm">
        Testimonials
      </div>
      <p className='font-bold text-xl capitalize mb-2 headers-div'>View Some Positive Testimonials</p>
      <div className='flex flex-col gap-1 mb-8'>
        <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
        <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
      </div>
      <div className="relative w-full max-w-3xl mx-auto">

        {/* Testimonial Card */}
        <div className="relative bg-gradient-to-r from-purple-800 to-indigo-900 text-white rounded-xl shadow-xl p-8 flex flex-col items-center transition-all duration-500">
          <Quote className="absolute top-4 left-4 text-white opacity-40 w-10 h-10" />

          {/* Profile Image */}
          <Image
            src={testimonials[current].image}
            width={80}
            height={80}
            alt="User"
            className="w-20 h-20 rounded-full border-4 border-white shadow-md"
          />

          {/* Name & Role */}
          <p className="mt-4 text-lg font-bold">{testimonials[current].name}</p>
          <p className="text-sm text-gray-200">{testimonials[current].role}</p>

          {/* Testimonial Text */}
          <p className="mt-4 text-center text-gray-100">&quot;{testimonials[current].feedback}&ldquo;</p>
        </div>

        {/* Controls */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 flex justify-between w-full px-4">
          <button onClick={prevSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition">
            <ChevronLeft className="text-white w-6 h-6" />
          </button>
          <button onClick={nextSlide} className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition">
            <ChevronRight className="text-white w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
