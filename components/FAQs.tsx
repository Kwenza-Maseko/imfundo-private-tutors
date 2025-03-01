'use client'
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { faqs } from "@/constants";

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-2xl py-16 px-6">
             <div className=" bg-[#15023346] rounded p-2 w-fit text-white mb-4 shadow shadow-lg text-sm">
                        FAQ&apos;s
                    </div>
            <p className='font-bold text-xl capitalize mb-2 headers-div'>Frequantly Asked Questions!</p>
            <div className='flex flex-col gap-1 mb-8'>
                <div className='w-[110px] h-[2px] bg-[#150233] rounded' />
                <div className='w-[80px] h-[2px] bg-[#150233] rounded' />
            </div>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center py-4 text-md font-semibold text-[#150233] focus:outline-none"
                        >
                            {faq.question}
                            <ChevronDown
                                size={20}
                                className={`transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                            />
                        </button>
                        {openIndex === index && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="text-gray-700 p-2"
                            >
                                <p className="text-sm">{faq.answer}</p>
                            </motion.div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FAQs;
