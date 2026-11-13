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
            {/* Backdrop */}
            <div
                onClick={closeNav}
                className={`fixed inset-0 bg-black/60 ${navOpen} transition-opacity duration-300 ${showNav ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} z-40`}
            />

            {/* Mobile Menu */}
            <div className={`${navOpen} text-white transform transition-all duration-500 fixed flex flex-col h-full w-[80%] sm:w-[60%] bg-slate-950 border-r border-slate-800 z-50`}>
                {/* Close Button */}
                <div className='flex justify-between items-center p-6 border-b border-slate-800'>
                    <div className='flex flex-col leading-none'>
                        <span className='text-2xl font-black text-white tracking-tighter'>
                            Baljeet
                        </span>
                        <span className='text-xs font-bold text-slate-500 tracking-widest'>
                            GUNGHAS
                        </span>
                    </div>
                    <CgClose
                        onClick={closeNav}
                        className='w-6 h-6 cursor-pointer text-slate-400 hover:text-white transition-colors'
                    />
                </div>

                {/* Navigation Links */}
                <nav className='flex-1 flex flex-col gap-0 p-6'>
                    {navLinks.map((navLink) => {
                        return (
                            <Link href={navLink.url} key={navLink.id} onClick={closeNav}>
                                <p className='nav__link text-base sm:text-lg py-4 px-4 text-slate-300 hover:text-white hover:bg-slate-900/50 border-b border-slate-800/50 transition-all duration-200 font-medium'>
                                    {navLink.label}
                                </p>
                            </Link>
                        )
                    })}
                </nav>

                {/* Footer Action */}
                <div className='p-6 border-t border-slate-800'>
                    <button className='w-full px-4 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-colors text-sm'>
                        Get In Touch
                    </button>
                </div>
            </div>
        </>
    )
}

export default MobileNaveBar
