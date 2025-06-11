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
        <div className='fixed bottom-4 animate-pulse right-4'>
            {isVisible && (
                <button onClick={scrollToTopHandler} className='bg-blue-900 text-white w-12 h-12 rounded-full flex items-center justify-center focus:outline-none  cursor-pointer'>
                    <FaArrowUp />
                </button>
            )}
        </div>
    )
}

export default ScrollToTop
