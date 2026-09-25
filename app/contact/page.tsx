'use client'

import React, { Suspense } from 'react'
import dynamic from 'next/dynamic'
import ContactInfo from '@/Components/Home/Contact/ContactInfo'
import { FaCalendarAlt, FaFileDownload, FaEnvelope, FaArrowLeft } from 'react-icons/fa'
import Link from 'next/link'

const ContactForm = dynamic(() => import('@/Components/Home/Contact/ContactForm'), {
    ssr: false,
    loading: () => <div className='h-96 bg-[#0f0715] rounded-lg animate-pulse'></div>
})

const ContactPage = () => {
    return (
        <div className='bg-[#050709] min-h-screen pt-24 pb-16'>
            {/* Header */}
            <div className='text-center mb-12 md:mb-16 px-4'>
                <h1 className='text-4xl md:text-5xl font-bold text-white mb-4'>Let&apos;s Work Together</h1>
                <p className='text-gray-400 max-w-2xl mx-auto text-base md:text-lg'>
                    I&apos;m open to Senior Software Engineer opportunities. Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
            </div>

            {/* Quick CTAs */}
            <div className='w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-0 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16'>
                {/* Resume Download */}
                <a
                    href="BALJEETSINGHRESUME.pdf"
                    download
                    className='group'
                >
                    <div className='bg-[#1a0f26] border-2 border-blue-900 hover:border-blue-600 hover:bg-[#241834] rounded-lg p-5 md:p-6 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 h-full'>
                        <div className='w-12 h-12 md:w-14 md:h-14 bg-blue-900 group-hover:bg-blue-800 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all'>
                            <FaFileDownload className='text-blue-400 w-6 h-6 md:w-7 md:h-7' />
                        </div>
                        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Download Resume</h3>
                        <p className='text-xs md:text-sm text-gray-400'>PDF overview of experience & skills</p>
                    </div>
                </a>

                {/* Schedule Call */}
                <a
                    href="https://calendly.com/baljeetgunghas5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group block'
                >
                    <div className='bg-[#1a0f26] border-2 border-purple-900 hover:border-purple-600 hover:bg-[#261a34] rounded-lg p-5 md:p-6 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 h-full'>
                        <div className='w-12 h-12 md:w-14 md:h-14 bg-purple-900 group-hover:bg-purple-800 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all'>
                            <FaCalendarAlt className='text-purple-400 w-6 h-6 md:w-7 md:h-7' />
                        </div>
                        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Schedule a Call</h3>
                        <p className='text-xs md:text-sm text-gray-400'>30-min technical discussion</p>
                    </div>
                </a>

                {/* Email */}
                <a
                    href="mailto:baljeetgunghas5@gmail.com?subject=Senior%20Engineer%20Opportunity"
                    className='group'
                >
                    <div className='bg-[#1a0f26] border-2 border-emerald-900 hover:border-emerald-600 hover:bg-[#1a2624] rounded-lg p-5 md:p-6 text-center transition-all duration-300 cursor-pointer transform hover:scale-105 h-full'>
                        <div className='w-12 h-12 md:w-14 md:h-14 bg-emerald-900 group-hover:bg-emerald-800 rounded-lg flex items-center justify-center mx-auto mb-3 md:mb-4 transition-all'>
                            <FaEnvelope className='text-emerald-400 w-6 h-6 md:w-7 md:h-7' />
                        </div>
                        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Email Me</h3>
                        <p className='text-xs md:text-sm text-gray-400'>Quick message about opportunity</p>
                    </div>
                </a>
            </div>

            {/* Main Content */}
            <div className='w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-0 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start'>
                {/* Form */}
                <div>
                    <div className='bg-gradient-to-br from-[#1a0f26] to-[#0f0715] border border-blue-900 rounded-xl p-6 md:p-8 shadow-lg'>
                        <Suspense fallback={<div className='h-96 bg-[#0f0715] rounded-lg animate-pulse'></div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>

                {/* Contact Info & Availability */}
                <div className='space-y-6 md:space-y-8'>
                    <div>
                        <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>Contact Information</h3>
                        <p className='text-gray-400 text-sm md:text-base'>Multiple ways to reach out</p>
                    </div>

                    <div className='space-y-6'>
                        <ContactInfo />
                    </div>

                    {/* Availability Section */}
                    <div className='bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-800 rounded-lg p-6 md:p-8 mt-8'>
                        <div className='flex items-center gap-3 mb-3'>
                            <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                            <span className='text-green-300 font-semibold text-sm md:text-base'>Currently Open to Opportunities</span>
                        </div>
                        <p className='text-gray-300 text-sm md:text-base leading-relaxed'>
                            Actively exploring <span className='font-bold text-white'>Senior Software Engineer</span> roles at companies focused on engineering excellence, product innovation, and meaningful work.
                        </p>
                        <div className='mt-4 pt-4 border-t border-blue-800'>
                            <p className='text-blue-300 font-semibold text-xs md:text-sm mb-3'>Details:</p>
                            <ul className='text-xs md:text-sm text-gray-400 space-y-2'>
                                <li>✓ Location: Remote, Delhi, Gurgaon, Noida, Chandigarh, Bangalore, Mumbai, Pune</li>
                                <li>✓ Notice Period: Immediate</li>
                                <li>✓ Response Time: Within 24 hours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className='w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-0 mt-12 md:mt-16 bg-gradient-to-r from-purple-900 to-blue-900 border border-purple-800 rounded-lg p-6 md:p-8 text-center'>
                <h3 className='text-lg md:text-xl font-bold text-white mb-3'>Want to Explore My Work?</h3>
                <p className='text-gray-300 mb-6 text-sm md:text-base'>
                    Check out my portfolio to learn more about my engineering impact, system design, leadership approach, and featured case studies.
                </p>
                <Link href="/" className='inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm md:text-base rounded-lg transition-colors'>
                    <FaArrowLeft className='w-4 h-4' />
                    Back to Portfolio
                </Link>
            </div>
        </div>
    )
}

export default ContactPage
