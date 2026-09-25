import SectionHeading from '@/Components/Healper/SectionHeading'
import React from 'react'
import ContactInfo from './ContactInfo'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
    return (
        <div id='contact' className='scroll-mt-16 pt-8 md:pt-16 pb-8 md:pb-16 bg-[#050709]'>
            <div className='text-center mb-8 md:mb-12'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Get In Touch</SectionHeading>
                <p className='text-center text-gray-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base px-4'>
                    Open to exciting opportunities. Reach out through any of these channels or fill out the contact form.
                </p>
            </div>

            <div className='w-full max-w-6xl mx-auto px-4 md:px-8 lg:px-0'>
                {/* Contact Info with Icons */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-12 md:mb-16'>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" className='space-y-6'>
                        <ContactInfo />
                    </div>

                    {/* Quick Stats & CTA */}
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className='space-y-6'>
                        <div className='bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-800 rounded-lg p-6 md:p-8 h-full'>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='w-3 h-3 bg-green-400 rounded-full animate-pulse'></div>
                                <span className='text-green-300 font-semibold text-sm md:text-base'>Open to Opportunities</span>
                            </div>

                            <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>Ready for Your Next Challenge</h3>

                            <p className='text-gray-300 text-sm md:text-base leading-relaxed mb-6'>
                                I&apos;m actively exploring <span className='font-bold text-white'>Senior Software Engineer</span> roles where I can drive technical excellence and business impact.
                            </p>

                            <div className='bg-[#0f0715] rounded-lg p-4 md:p-5 border border-blue-900 mb-6'>
                                <p className='text-blue-300 font-semibold text-xs md:text-sm mb-3'>Details:</p>
                                <ul className='text-xs md:text-sm text-gray-400 space-y-2'>
                                    <li>• Location: Remote, Delhi, Gurgaon, Noida, Chandigarh, Bangalore, Mumbai, Pune</li>
                                    <li>• Start: Immediate</li>
                                    <li>• Response: Within 24 hours</li>
                                </ul>
                            </div>

                            <Link href="/contact" className='w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group'>
                                Full Contact Form
                                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className='bg-gradient-to-r from-purple-900 to-blue-900 border border-purple-800 rounded-lg p-6 md:p-8 text-center'>
                    <h3 className='text-lg md:text-xl font-bold text-white mb-3'>Want to Learn More?</h3>
                    <p className='text-gray-300 mb-4 text-sm md:text-base'>
                        Explore my <a href="#impact" className='text-blue-400 hover:text-blue-300 font-semibold'>engineering impact</a>, <a href="#architecture" className='text-blue-400 hover:text-blue-300 font-semibold'>system design</a>, <a href="#leadership" className='text-blue-400 hover:text-blue-300 font-semibold'>leadership approach</a>, or <a href="#project" className='text-blue-400 hover:text-blue-300 font-semibold'>case studies</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
