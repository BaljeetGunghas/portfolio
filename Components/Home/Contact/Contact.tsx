import SectionHeading from '@/Components/Healper/SectionHeading'
import React from 'react'
import ContactInfo from './ContactInfo'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {
    return (
        <div id='contact' className='scroll-mt-16 pt-20 pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-12'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Get In Touch</SectionHeading>
                    <p className='text-center text-slate-400 mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Open to exciting opportunities. Reach out through any of these channels or fill out the contact form.
                    </p>
                </div>

                {/* Contact Info with Icons */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16'>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-duration="800" className='space-y-6'>
                        <ContactInfo />
                    </div>

                    {/* Quick Stats & CTA */}
                    <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" className='space-y-6'>
                        <div className='border border-slate-800 rounded-lg p-6 md:p-8 h-full bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'>
                            <div className='flex items-center gap-3 mb-4'>
                                <div className='w-3 h-3 bg-emerald-400 rounded-full animate-pulse'></div>
                                <span className='text-emerald-300 font-semibold text-sm md:text-base'>Open to Opportunities</span>
                            </div>

                            <h3 className='text-xl md:text-2xl font-bold text-white mb-4'>Ready for Your Next Challenge</h3>

                            <p className='text-slate-300 text-sm md:text-base leading-relaxed mb-6 font-light'>
                                I&apos;m actively exploring <span className='font-bold text-white'>Senior Software Engineer</span> roles where I can drive technical excellence and business impact.
                            </p>

                            <div className='bg-slate-900/50 rounded-lg p-4 md:p-5 border border-slate-800 mb-6'>
                                <p className='text-slate-200 font-semibold text-xs md:text-sm mb-3'>Details:</p>
                                <ul className='text-xs md:text-sm text-slate-400 space-y-2 font-light'>
                                    <li>• Location: Remote, Delhi, Gurgaon, Noida, Chandigarh, Bangalore, Mumbai, Pune</li>
                                    <li>• Start: Immediate</li>
                                    <li>• Response: Within 24 hours</li>
                                </ul>
                            </div>

                            <Link href="/contact" className='w-full bg-white hover:bg-slate-100 text-slate-950 font-semibold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group'>
                                Full Contact Form
                                <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Footer Info */}
                <div className='border border-slate-800 rounded-lg p-6 md:p-8 text-center bg-slate-900/40 backdrop-blur-sm'>
                    <h3 className='text-lg md:text-xl font-bold text-white mb-3'>Want to Learn More?</h3>
                    <p className='text-slate-300 mb-4 text-sm md:text-base font-light'>
                        Explore my <a href="#impact" className='text-slate-200 hover:text-white font-semibold transition-colors'>engineering impact</a>, <a href="#architecture" className='text-slate-200 hover:text-white font-semibold transition-colors'>system design</a>, <a href="#leadership" className='text-slate-200 hover:text-white font-semibold transition-colors'>leadership approach</a>, or <a href="#project" className='text-slate-200 hover:text-white font-semibold transition-colors'>case studies</a>.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Contact
