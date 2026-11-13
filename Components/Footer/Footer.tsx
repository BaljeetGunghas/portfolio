import { navLinks } from '@/Constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Footer = () => {
    return (
        <div className='pt-12 md:pt-16 pb-12 md:pb-16 bg-slate-950 border-t border-slate-800'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                {/* Logo */}
                <div className='flex justify-center mb-8 md:mb-10'>
                    <div className='flex flex-col leading-none text-center'>
                        <span className='text-5xl md:text-7xl font-black text-white tracking-tighter'>
                            Baljeet
                        </span>
                        <span className='text-lg md:text-2xl font-bold text-slate-500 tracking-widest'>
                            GUNGHAS
                        </span>
                    </div>
                </div>

                {/* Navigation Links */}
                <div className='flex items-center flex-wrap justify-center gap-4 md:gap-6 text-white font-semibold mb-8 md:mb-10'>
                    {navLinks.map((navLink) => {
                        const href = navLink.url.startsWith('#') ? `/${navLink.url}` : navLink.url;
                        return (
                            <Link href={href} key={navLink.id}>
                                <p className='nav__link text-xs sm:text-sm md:text-base hover:text-slate-300 transition-colors'>{navLink.label}</p>
                            </Link>
                        );
                    })}
                </div>

                {/* Divider */}
                <div className='h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-6 md:mb-8'></div>

                {/* Footer Text */}
                <p className='text-slate-400 text-xs md:text-sm text-center font-light'>
                    © {new Date().getFullYear()} Baljeet Gunghas. All rights reserved.
                </p>
            </div>
        </div>
    )
}

export default Footer