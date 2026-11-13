import { contactData } from '@/Data/data'
import React from 'react'
import {
    FaEnvelope,
    FaGithub,
    FaLinkedin,
    FaMapMarked,
    FaPhone,
    FaInstagram,
} from 'react-icons/fa'

const ContactInfo = () => {
    return (
        <>
            {/* Phone */}
            <a href={`tel:${contactData.phone}`} className='flex items-center gap-6 sm:gap-8 group hover:opacity-80 transition-opacity'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                    <FaPhone className='w-5 h-5 sm:w-7 sm:h-7 text-slate-300' />
                </div>
                <div>
                    <h4 className='text-sm sm:text-lg text-white font-bold'>Phone</h4>
                    <h4 className='text-xs sm:text-base text-slate-400'>{contactData.phone}</h4>
                </div>
            </a>

            {/* Email */}
            <a href={`mailto:baljeetgunghas5@gmail.com?subject=Full Stack Developer Opportunity&body=Hi Baljeet,%0D%0A%0D%0AI saw your portfolio and was impressed with your work. Let's connect regarding a potential opportunity.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                className='flex items-center gap-6 sm:gap-8 group hover:opacity-80 transition-opacity'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                    <FaEnvelope className='w-5 h-5 sm:w-7 sm:h-7 text-slate-300' />
                </div>
                <div>
                    <h4 className='text-sm sm:text-lg text-white font-bold'>Email</h4>
                    <h4 className='text-xs sm:text-base text-slate-400'>{contactData.email}</h4>
                </div>
            </a>

            {/* Address */}
            <div className='flex items-center gap-6 sm:gap-8'>
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0'>
                    <FaMapMarked className='w-5 h-5 sm:w-7 sm:h-7 text-slate-300' />
                </div>
                <div>
                    <h4 className='text-sm sm:text-lg text-white font-bold'>Location</h4>
                    <h4 className='text-xs sm:text-base text-slate-400'>{contactData.address}</h4>
                </div>
            </div>

            {/* LinkedIn */}
            <a
                href={contactData.linkdin}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-6 sm:gap-8 group hover:opacity-80 transition-opacity'
            >
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                    <FaLinkedin className='w-5 h-5 sm:w-7 sm:h-7 text-slate-300' />
                </div>
                <div>
                    <h4 className='text-sm sm:text-lg text-white font-bold'>LinkedIn</h4>
                    <h4 className='text-xs sm:text-base text-slate-400'>{contactData.linkdin.slice(0, 35)}...</h4>
                </div>
            </a>

            {/* GitHub */}
            <a
                href={contactData.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-6 sm:gap-8 group hover:opacity-80 transition-opacity'
            >
                <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                    <FaGithub className='w-5 h-5 sm:w-7 sm:h-7 text-slate-300' />
                </div>
                <div>
                    <h4 className='text-sm sm:text-lg text-white font-bold'>GitHub</h4>
                    <h4 className='text-xs sm:text-base text-slate-400'>{contactData.github}</h4>
                </div>
            </a>

            {/* Instagram - Optional */}
            {contactData.instagram && (
                <a
                    href={contactData.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center gap-6 sm:gap-8 group hover:opacity-80 transition-opacity'
                >
                    <div className='w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-slate-800 flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                        <FaInstagram className='w-5 h-5 sm:w-7 sm:h-7 text-slate-300' />
                    </div>
                    <div>
                        <h4 className='text-sm sm:text-lg text-white font-bold'>Instagram</h4>
                        <h4 className='text-xs sm:text-base text-slate-400'>{contactData.instagram}</h4>
                    </div>
                </a>
            )}
        </>
    )
}

export default ContactInfo
