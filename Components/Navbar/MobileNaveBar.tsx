import { navLinks } from '@/Constant/constant'
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
            <div className={`${navOpen} fixed inset-0 z-[1008] bg-black opacity-70 w-full h-screen`} onClick={closeNav}>
                <div className={`${navOpen} text-white transform transition-all duration-500 delay-300  fixed justify-center flex flex-col h-full w-[80%] sm:w-[60%] bg-[#0f0715] space-y-6 z-[100009] `}>
                    {navLinks.map((navLink) => {
                        return (
                            <Link href={navLink.url} key={navLink.id}>
                                <p className='nav__link text-[20px] ml-12 border-b-[1.5px] pb-2 border-white sm:text-[30px] '>{navLink.label}</p>
                            </Link>
                        )
                    })}
                {/* {close button} */}
                <CgClose onClick={closeNav} className='absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm:h-8 w-6 h-6 text-white ' />
                </div>
            </div>
        </>
    )
}

export default MobileNaveBar
