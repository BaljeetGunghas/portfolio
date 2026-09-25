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
        <div className={`fixed h-[12vh] z-[10] ${navBg ? 'bg-[#240b39]' : 'fixed'} transition-all duration-300 w-full`}>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto'>
                <Image src={'/images/logo.png'} alt='Baljeet gunghas' width={220} height={200} className='-ml-8 sm:-ml-5 filter invert brightness-200 contrast-150 object-cover' />
                <div className='flex items-center space-x-5'>
                    <div className='hidden lg:flex items-center space-x-6 text-sm'>
                        {navLinks.slice(0, 6).map((navLink) => {
                            const href = navLink.url.startsWith('#') ? `/${navLink.url}` : navLink.url;
                            return (
                                <Link href={href} key={navLink.id}>
                                    <p className='nav__link'>{navLink.label}</p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className='flex items-center space-x-4'>
                        <button
                            onClick={() => router.push('/contact')}
                            className='md:px-6 md:py-2.5 px-6 py-2 text-blue-700 font-semibold text-xs md:text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer whitespace-nowrap'
                        >
                            Let&apos;s Talk
                        </button>
                    </div>
                    <HiBars3BottomRight onClick={openNav} className='w-8 h-8 cursor-pointer text-white lg:hidden' />
                </div>
            </div>
        </div>
    )
}

export default Nav
