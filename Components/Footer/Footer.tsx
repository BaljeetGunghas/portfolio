import { navLinks } from '@/Constant/constant'
import Image from 'next/image'
import React from 'react'


const Footer = () => {
    return (
        <div className=' pt-16 pb-16 bg-[#050715] '>
            {/* Logo */}
            <div>
                <Image
                    src={'/images/logo.png'}
                    alt='Baljeet Gunghas'
                    width={220}
                    height={220}
                    className=' filter invert brightness-200 contrast-150 mx-auto'
                />
            </div>

            {/* Navigation Links */}
            <div className='flex items-center flex-wrap justify-center space-x-10 space-y-4 text-white font-bold mt-6'>
                {navLinks.map((link, index) => (
                    <div key={index} className='my-0'>
                        {link.label}
                    </div>
                ))}
            </div>

            {/* Footer Text */}
            <p className='text-white text-opacity-60 mt-6 text-center '>
                © {new Date().getFullYear()} Baljeet Gunghas. All rights reserved.
            </p>
        </div>
    )
}

export default Footer