"use client";
import { navLinks } from '@/Constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from "react-icons/hi2";
import ContactFormModel from '../Home/Contact/ContactFormModel';

// define props type 

type Props = {
    openNav: () => void
}


const Nav = ({ openNav }: Props) => {
    const [navBg, setNavebg] = useState<boolean>(false);
    const [isHireModelOpen , setIsHireModelOpen] = useState<boolean>(false);


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
        <div className={`fixed  h-[12vh] z-[10] ${navBg ? 'bg-[#240b39]' : 'fixed'}  transition-all duration-300 w-full `}>
            <div className='flex items-center h-full justify-between w-[95%] sm:w-[90%] xl:w-[80%] mx-auto '>
                <Image src={'/images/logo.png'} alt='Baljeet gunghas' width={220} height={200} className='-ml-8 sm:-ml-5 filter invert brightness-200 contrast-150 object-cover ' />
                <div className='flex items-center space-x-5 '>
                    <div className='hidden lg:flex items-center space-x-8 '>
                        {navLinks.map((navLink) => {
                            return (
                                <Link href={navLink.url} key={navLink.id}>
                                    <p className='nav__link'>{navLink.label}</p>
                                </Link>
                            )
                        })}
                    </div>
                    <div className=' flex items-center space-x-4' >
                        <button onClick={()=>setIsHireModelOpen(true)} className='md:px-10 md:py-3 px-8 py-3 text-blue-700 font-semibold sm:text-base text-sm bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg cursor-pointer  '>
                            Hire ME
                        </button>
                    </div>
                    <HiBars3BottomRight onClick={openNav} className=' w-8 h-8 cursor-pointer text-white lg:hidden ' />
                </div>
            </div>

            {isHireModelOpen && <ContactFormModel onClose={setIsHireModelOpen} />}
        </div>
    )
}

export default Nav
