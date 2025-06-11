import { contactData } from '@/Data/data'
import React from 'react'
import {
    FaAddressCard,
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
            <a href={`tel:${contactData.phone}`} className='flex items-center space-x-8'>
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center'>
                    <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold'>Phone</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.phone}</h4>
                </div>
            </a>

            {/* Email */}
            <a href={`mailto:baljeetgunghas5@gmail.com?subject=Full Stack Developer Opportunity&body=Hi Baljeet,%0D%0A%0D%0AI saw your portfolio and was impressed with your work. Let's connect regarding a potential opportunity.%0D%0A%0D%0ABest regards,%0D%0A[Your Name]`}
                className='flex items-center space-x-8'>
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center'>
                    <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold'>Email Address</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.email}</h4>
                </div>
            </a>

            {/* Address */}
            <div className='flex items-center space-x-8'>
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center'>
                    <FaMapMarked className='w-4 h-4 md:w-7 md:h-7 text-white' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold'>Address</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.address}</h4>
                </div>
            </div>

            {/* LinkedIn */}
            <a
                href={contactData.linkdin}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-8'
            >
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center'>
                    <FaLinkedin className='w-4 h-4 md:w-7 md:h-7 text-white' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold'>LinkedIn</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.linkdin.slice(0, 35)}...</h4>
                </div>
            </a>

            {/* GitHub */}
            <a
                href={contactData.github}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center space-x-8'
            >
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center'>
                    <FaGithub className='w-4 h-4 md:w-7 md:h-7 text-white' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold'>GitHub</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.github}</h4>
                </div>
            </a>

            {/* Instagram - Optional */}
            {contactData.instagram && (
                <a
                    href={contactData.instagram}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='flex items-center space-x-8'
                >
                    <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center'>
                        <FaInstagram className='w-4 h-4 md:w-7 md:h-7 text-white' />
                    </div>
                    <div>
                        <h4 className='text-lg sm:text-xl text-white font-bold'>Instagram</h4>
                        <h4 className='text-base sm:text-lg text-white text-opacity-70'>{contactData.instagram}</h4>
                    </div>
                </a>
            )}
        </>
    )
}

export default ContactInfo
