import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full pt-[4rem] md:pt-[12rem] h-screen bg-[#0f0715] overflow-hidden relative'>
            <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/* Text Content */}
                    <div data-aos='fade-right' data-aos-duration="1000">
                        <h1 className='text-2xl md:text-3xl lg:text-4xl mb-5 text-gray-300 font-semibold'>
                            I am {BaseInfo.name}
                        </h1>

                        <h2
                            data-aos='fade-up'
                            data-aos-delay="150"
                            data-aos-duration="1000"
                            className='text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold md:leading-[3em] lg:leading-[3.5rem] xl:leading-[4rem] text-white'
                        >
                            {BaseInfo.position}
                        </h2>

                        <p
                            data-aos='fade-up'
                            data-aos-delay="300"
                            data-aos-duration="1000"
                            className='mt-6 text-sm md:text-base text-white text-opacity-60 max-w-[40rem]'
                        >
                            {BaseInfo.description}
                        </p>

                        <a
                            href={'BALJEETSINGHRESUME.pdf'}
                            download
                        >
                            <button
                                data-aos='fade-up'
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className='p-4 md:px-8 md:py-2.5 py-1.5 text-white font-semibold text-sm md:text-lg transition-all duration-200 cursor-pointer rounded-lg mt-8 bg-blue-700 hover:bg-blue-950 flex items-center space-x-2'
                            >
                                <span>Download CV</span>
                                <FaDownload />
                            </button>
                        </a>
                    </div>

                    {/* Profile Image */}
                    <div
                        data-aos='zoom-in'
                        data-aos-delay="600"
                        data-aos-duration="1200"
                        className=' mx-auto  lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-x-hidden '
                    >
                        <Image
                            src={BaseInfo.profilePic}
                            alt={BaseInfo.name}
                            width={500}
                            height={500}
                        // className='object-cover w-full h-full rounded-[3rem]'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero
