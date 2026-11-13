"use client";

import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            }
            else {
                setIsVisible(false);
            }
        }

        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler)
        }


    }, [])

    const scrollToTopHandler = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return (
        <div className='fixed bottom-4 right-4 z-40'>
            {isVisible && (
                <button
                    onClick={scrollToTopHandler}
                    className='group w-12 h-12 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 hover:border-slate-600 flex items-center justify-center focus:outline-none cursor-pointer transition-all duration-300 shadow-lg hover:shadow-xl'
                >
                    <FaArrowUp className='w-5 h-5 group-hover:-translate-y-1 transition-transform' />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop
