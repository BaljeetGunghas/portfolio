import { contactData } from '@/Data/data'
import React from 'react'
import { FaAddressCard, FaEnvelope, FaMapMarked, FaPhone } from 'react-icons/fa'

const ContactInfo = () => {
    return (
        <>
            <div className='flex items-center space-x-8 '>
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col '>
                    <FaPhone className='w-4 h-4 md:w-7 md:h-7 text-white ' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold '>Phone</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70 '>{contactData.phone}</h4>
                </div>
            </div>
            <div className='flex items-center space-x-8 '>
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col '>
                    <FaEnvelope className='w-4 h-4 md:w-7 md:h-7 text-white ' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold '>Email Address </h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70 '>{contactData.email}</h4>
                </div>
            </div>
            <div className='flex items-center space-x-8 '>
                <div className='w-10 h-10 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-900 flex items-center justify-center flex-col '>
                    <FaMapMarked className='w-4 h-4 md:w-7 md:h-7 text-white ' />
                </div>
                <div>
                    <h4 className='text-lg sm:text-xl text-white font-bold '>Address</h4>
                    <h4 className='text-base sm:text-lg text-white text-opacity-70 '>{contactData.address}</h4>
                </div>
            </div>
        </>
    )
}

export default ContactInfo
