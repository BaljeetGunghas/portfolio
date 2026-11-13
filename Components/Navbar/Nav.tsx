"use client";
import { navLinks } from '@/Constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import { useRouter } from 'next/navigation';

type Props = {
    openNav: () => void
}

const Nav = ({ openNav }: Props) => {
    const [navBg, setNavebg] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavebg(true);
            }
            if (window.scrollY < 90) {
                setNavebg(false);
            }
        }

        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler)
        }

    }, [])

    return (
        <div className={`fixed h-16 md:h-24 z-40 transition-all duration-300 w-full border-b ${navBg ? 'bg-slate-950/95 backdrop-blur-md border-slate-800' : 'bg-slate-950/50 backdrop-blur-sm border-slate-900'}`}>
            <div className='flex items-center h-full justify-between max-w-7xl mx-auto px-6 md:px-12 w-full'>
                {/* Logo - Text */}
                <div className='flex-shrink-0 flex flex-col leading-none'>
                    <span className='text-2xl md:text-4xl font-black text-white tracking-tighter'>
                        Baljeet
                    </span>
                    <span className='text-xs md:text-sm font-bold text-slate-500 tracking-widest'>
                        GUNGHAS
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className='flex items-center gap-6'>
                    <div className='hidden lg:flex items-center gap-8'>
                        {navLinks.slice(0, 6).map((navLink) => {
                            const href = navLink.url.startsWith('#') ? `/${navLink.url}` : navLink.url;
                            return (
                                <Link href={href} key={navLink.id}>
                                    <p className='nav__link text-xs md:text-sm text-slate-400 hover:text-white transition-colors font-medium'>{navLink.label}</p>
                                </Link>
                            )
                        })}
                    </div>

                    {/* CTA Button & Mobile Menu */}
                    <div className='flex items-center gap-4'>
                        <button
                            onClick={() => router.push('/contact')}
                            className='px-4 md:px-6 py-2 md:py-2.5 text-slate-950 font-semibold text-xs md:text-sm bg-white hover:bg-slate-100 transition-all duration-200 rounded-lg cursor-pointer whitespace-nowrap'
                        >
                            Let&apos;s Talk
                        </button>
                        <HiBars3BottomRight onClick={openNav} className='w-6 h-6 md:w-7 md:h-7 cursor-pointer text-slate-300 hover:text-white lg:hidden transition-colors' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav
