import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload, FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full pt-[4rem] md:pt-[12rem] h-screen bg-[#0f0715] overflow-hidden relative'>
            <div className='flex justify-center flex-col w-4/5 h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-12'>
                    {/* Text Content */}
                    <div data-aos='fade-right' data-aos-duration="1000">
                        {/* Badge */}
                        <div className='mb-6 inline-block'>
                            <span className='text-xs md:text-sm bg-blue-900 bg-opacity-50 text-blue-200 px-4 py-2 rounded-full border border-blue-700'>
                                Senior Software Engineer • 4+ Years Experience
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className='text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6 text-gray-100 font-bold leading-tight'>
                            {BaseInfo.tagline}
                        </h1>

                        {/* Subheadline */}
                        <h2
                            data-aos='fade-up'
                            data-aos-delay="150"
                            data-aos-duration="1000"
                            className='text-base md:text-lg text-gray-300 leading-relaxed mb-6 max-w-[40rem]'
                        >
                            {BaseInfo.description}
                        </h2>

                        {/* Quick Stats */}
                        <div className='grid grid-cols-2 gap-4 mb-8 py-6 border-y border-gray-700'>
                            <div data-aos='fade-up' data-aos-delay="200">
                                <div className='text-2xl md:text-3xl font-bold text-blue-400'>4+</div>
                                <p className='text-sm text-gray-400'>Years Experience</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="250">
                                <div className='text-2xl md:text-3xl font-bold text-blue-400'>100k+</div>
                                <p className='text-sm text-gray-400'>Users Served</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="300">
                                <div className='text-2xl md:text-3xl font-bold text-blue-400'>4</div>
                                <p className='text-sm text-gray-400'>Apps Shipped</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="350">
                                <div className='text-2xl md:text-3xl font-bold text-blue-400'>62%</div>
                                <p className='text-sm text-gray-400'>Perf Improvement</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-wrap items-center gap-4'>
                            <a
                                href={'BALJEETSINGHRESUME.pdf'}
                                download
                                data-aos='fade-up'
                                data-aos-delay="500"
                                data-aos-duration="1000"
                            >
                                <button className='px-6 md:px-8 py-3 text-white font-semibold text-sm md:text-base transition-all duration-200 cursor-pointer rounded-lg bg-blue-700 hover:bg-blue-950 flex items-center space-x-2'>
                                    <span>Download Resume</span>
                                    <FaDownload />
                                </button>
                            </a>

                            <a
                                href="https://github.com/BaljeetGunghas"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos='fade-up'
                                data-aos-delay="600"
                                data-aos-duration="1000"
                            >
                                <button className='px-6 md:px-8 py-3 text-blue-400 font-semibold text-sm md:text-base border-2 border-blue-700 hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-200 cursor-pointer rounded-lg flex items-center space-x-2'>
                                    <span>View GitHub</span>
                                    <FaGithub />
                                </button>
                            </a>

                            <a
                                href="https://www.linkedin.com/in/dev-baljeet-gunghas-b6698421b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos='fade-up'
                                data-aos-delay="700"
                                data-aos-duration="1000"
                            >
                                <button className='px-6 md:px-8 py-3 text-blue-400 font-semibold text-sm md:text-base border-2 border-blue-700 hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-200 cursor-pointer rounded-lg flex items-center space-x-2'>
                                    <span>LinkedIn</span>
                                    <FaLinkedin />
                                </button>
                            </a>
                        </div>
                    </div>

                    {/* Profile Image */}
                    <div
                        data-aos='zoom-in'
                        data-aos-delay="600"
                        data-aos-duration="1200"
                        className='mx-auto lg:block rounded-[3rem] border-[3.5px] border-blue-950 overflow-hidden shadow-2xl'
                    >
                        <Image
                            src={BaseInfo.profilePic}
                            alt={BaseInfo.name}
                            width={500}
                            height={500}
                            className='object-cover'
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero
