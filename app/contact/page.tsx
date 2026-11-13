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
        <div className='bg-slate-950 min-h-screen pt-24 pb-16'>
            {/* Header */}
            <div className='text-center mb-12 md:mb-16 px-6 md:px-12'>
                <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4'>Let&apos;s Work Together</h1>
                <p className='text-slate-400 max-w-2xl mx-auto text-sm md:text-base font-light'>
                    I&apos;m open to Senior Software Engineer opportunities. Fill out the form below and I&apos;ll get back to you within 24 hours.
                </p>
            </div>

            {/* Quick CTAs */}
            <div className='w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16'>
                {/* Resume Download */}
                <a
                    href="/BALJEETSINGHRESUME.pdf"
                    download
                    className='group'
                >
                    <div className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 text-center transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm h-full'>
                        <div className='w-12 h-12 md:w-14 md:h-14 bg-slate-800 group-hover:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 md:mb-5 transition-all'>
                            <FaFileDownload className='text-slate-400 group-hover:text-white w-6 h-6 md:w-7 md:h-7 transition-colors' />
                        </div>
                        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Download Resume</h3>
                        <p className='text-xs md:text-sm text-slate-400'>PDF overview of experience & skills</p>
                    </div>
                </a>

                {/* Schedule Call */}
                <a
                    href="https://calendly.com/baljeetgunghas5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='group block'
                >
                    <div className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 text-center transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm h-full'>
                        <div className='w-12 h-12 md:w-14 md:h-14 bg-slate-800 group-hover:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 md:mb-5 transition-all'>
                            <FaCalendarAlt className='text-slate-400 group-hover:text-white w-6 h-6 md:w-7 md:h-7 transition-colors' />
                        </div>
                        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Schedule a Call</h3>
                        <p className='text-xs md:text-sm text-slate-400'>30-min technical discussion</p>
                    </div>
                </a>

                {/* Email */}
                <a
                    href="mailto:baljeetgunghas5@gmail.com?subject=Senior%20Engineer%20Opportunity"
                    className='group'
                >
                    <div className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 text-center transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm h-full'>
                        <div className='w-12 h-12 md:w-14 md:h-14 bg-slate-800 group-hover:bg-slate-700 rounded-lg flex items-center justify-center mx-auto mb-4 md:mb-5 transition-all'>
                            <FaEnvelope className='text-slate-400 group-hover:text-white w-6 h-6 md:w-7 md:h-7 transition-colors' />
                        </div>
                        <h3 className='text-white font-bold mb-2 text-base md:text-lg'>Email Me</h3>
                        <p className='text-xs md:text-sm text-slate-400'>Quick message about opportunity</p>
                    </div>
                </a>
            </div>

            {/* Main Content */}
            <div className='w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start'>
                {/* Form */}
                <div>
                    <div className='border border-slate-800 rounded-lg p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm'>
                        <Suspense fallback={<div className='h-96 bg-slate-900/40 rounded-lg animate-pulse'></div>}>
                            <ContactForm />
                        </Suspense>
                    </div>
                </div>

                {/* Contact Info & Availability */}
                <div className='space-y-6 md:space-y-8'>
                    <div>
                        <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>Contact Information</h3>
                        <p className='text-slate-400 text-sm md:text-base font-light'>Multiple ways to reach out</p>
                    </div>

                    <div className='space-y-6'>
                        <ContactInfo />
                    </div>

                    {/* Availability Section */}
                    <div className='border border-slate-800 rounded-lg p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm mt-8'>
                        <div className='flex items-center gap-3 mb-3'>
                            <div className='w-3 h-3 bg-emerald-500 rounded-full animate-pulse'></div>
                            <span className='text-emerald-400 font-semibold text-sm md:text-base'>Currently Open to Opportunities</span>
                        </div>
                        <p className='text-slate-300 text-sm md:text-base leading-relaxed font-light'>
                            Actively exploring <span className='font-bold text-white'>Senior Software Engineer</span> roles at companies focused on engineering excellence, product innovation, and meaningful work.
                        </p>
                        <div className='mt-4 pt-4 border-t border-slate-800'>
                            <p className='text-slate-300 font-semibold text-xs md:text-sm mb-3'>Details:</p>
                            <ul className='text-xs md:text-sm text-slate-400 space-y-2 font-light'>
                                <li>✓ Location: Remote, Delhi, Gurgaon, Noida, Chandigarh, Bangalore, Mumbai, Pune</li>
                                <li>✓ Notice Period: Immediate</li>
                                <li>✓ Response Time: Within 24 hours</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Info */}
            <div className='w-full max-w-7xl mx-auto px-6 md:px-12 mt-16 md:mt-20 mb-0'>
                <div className='border border-slate-800 rounded-lg p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm text-center'>
                    <h3 className='text-xl md:text-2xl font-bold text-white mb-4 md:mb-5'>Want to Explore My Work?</h3>
                    <p className='text-slate-300 mb-6 md:mb-8 text-sm md:text-base font-light leading-relaxed'>
                        Check out my portfolio to learn more about my engineering impact, system design, leadership approach, and featured case studies.
                    </p>
                    <Link href="/" className='inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-white hover:bg-slate-100 text-slate-950 font-semibold text-sm md:text-base rounded-lg transition-colors'>
                        <FaArrowLeft className='w-4 h-4' />
                        Back to Portfolio
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
