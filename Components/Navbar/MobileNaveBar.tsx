import { navLinks } from '@/Constant/constant'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CgClose } from 'react-icons/cg'


// define Props type 
type Props = {
    showNav: boolean;
    closeNav: () => void
}


const MobileNaveBar = ({ showNav, closeNav }: Props) => {
    const navOpen = showNav ? "translate-x-0" : "translate-x-[-100%]";
    return (
        <>
            <div
                onClick={closeNav}
                className={`fixed inset-0 bg-black ${navOpen} transition-opacity duration-300 ${showNav ? 'opacity-70 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    } z-40`}
            />
           
            <div className={`${navOpen} text-white transform transition-all duration-500 delay-300  fixed justify-center flex   flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-50  `}>
                {navLinks.map((navLink) => {
                    return (
                        <Link href={navLink.url} key={navLink.id} onClick={closeNav}>
                            <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] '>{navLink.label}</p>
                        </Link>
                    )
                })}
                {/* {close button} */}
                <Image src={'/images/logo1.png'} alt='Baljeet gunghas' width={120} height={100} className='absolute top-[-0.25rem] left-[0.7rem] sm:ml-0 filter invert brightness-200 contrast-150' />
                <CgClose onClick={closeNav} className='absolute top-[1rem] right-[2rem] sm:w-8 sm:h-8 w-6 h-6 text-white ' />
                {/* </div> */}
            </div>
        </>
    )
}

export default MobileNaveBar
