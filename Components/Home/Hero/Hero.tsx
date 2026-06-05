import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload, FaGithub, FaLinkedin, FaTrophy, FaUsers, FaChartLine, FaCode } from 'react-icons/fa'

const Hero = () => {
    return (
        <div className='w-full pt-[2rem] md:pt-[8rem] pb-8 md:pb-0 min-h-screen bg-[#0f0715] overflow-hidden relative'>
            <div className='flex justify-center flex-col w-11/12 md:w-4/5 h-full mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-6 md:gap-12'>
                    {/* Text Content */}
                    <div data-aos='fade-right' data-aos-duration="1000">
                        {/* Badge */}
                        <div className='mb-4 md:mb-6 inline-block'>
                            <span className='text-xs bg-blue-900 bg-opacity-50 text-blue-200 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-blue-700'>
                                Senior Software Engineer • 4+ Years
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 text-gray-100 font-bold leading-tight'>
                            {BaseInfo.tagline}
                        </h1>

                        {/* Subheadline */}
                        <h2
                            data-aos='fade-up'
                            data-aos-delay="150"
                            data-aos-duration="1000"
                            className='text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed mb-6 max-w-[40rem]'
                        >
                            {BaseInfo.description}
                        </h2>

                        {/* Impact Metrics - For High-Paying Roles */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10 py-4 md:py-6'>
                            <div data-aos='fade-up' data-aos-delay="200" className='bg-blue-950 bg-opacity-40 border border-blue-900 rounded-lg p-3 md:p-4 hover:bg-opacity-60 transition'>
                                <div className='flex items-center gap-2 mb-1.5'>
                                    <FaTrophy className='text-yellow-500 w-3 h-3 md:w-4 md:h-4' />
                                    <div className='text-xl md:text-2xl lg:text-3xl font-bold text-blue-400'>4+</div>
                                </div>
                                <p className='text-xs text-gray-400'>Years Senior</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="250" className='bg-emerald-950 bg-opacity-40 border border-emerald-900 rounded-lg p-3 md:p-4 hover:bg-opacity-60 transition'>
                                <div className='flex items-center gap-2 mb-1.5'>
                                    <FaUsers className='text-emerald-400 w-3 h-3 md:w-4 md:h-4' />
                                    <div className='text-xl md:text-2xl lg:text-3xl font-bold text-emerald-400'>100k+</div>
                                </div>
                                <p className='text-xs text-gray-400'>Users</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="300" className='bg-purple-950 bg-opacity-40 border border-purple-900 rounded-lg p-3 md:p-4 hover:bg-opacity-60 transition'>
                                <div className='flex items-center gap-2 mb-1.5'>
                                    <FaChartLine className='text-purple-400 w-3 h-3 md:w-4 md:h-4' />
                                    <div className='text-xl md:text-2xl lg:text-3xl font-bold text-purple-400'>62%</div>
                                </div>
                                <p className='text-xs text-gray-400'>Perf Gain</p>
                            </div>
                            <div data-aos='fade-up' data-aos-delay="350" className='bg-orange-950 bg-opacity-40 border border-orange-900 rounded-lg p-3 md:p-4 hover:bg-opacity-60 transition'>
                                <div className='flex items-center gap-2 mb-1.5'>
                                    <FaCode className='text-orange-400 w-3 h-3 md:w-4 md:h-4' />
                                    <div className='text-xl md:text-2xl lg:text-3xl font-bold text-orange-400'>17+</div>
                                </div>
                                <p className='text-xs text-gray-400'>Projects</p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-wrap items-center gap-2 md:gap-4'>
                            <a
                                href={'BALJEETSINGHRESUME.pdf'}
                                download
                                data-aos='fade-up'
                                data-aos-delay="500"
                                data-aos-duration="1000"
                            >
                                <button className='px-4 md:px-6 py-2 md:py-3 text-white font-semibold text-xs md:text-sm transition-all duration-200 cursor-pointer rounded-lg bg-blue-700 hover:bg-blue-950 flex items-center gap-1.5 md:gap-2 whitespace-nowrap'>
                                    <span>Resume</span>
                                    <FaDownload className='w-3 h-3 md:w-4 md:h-4' />
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
                                <button className='px-4 md:px-6 py-2 md:py-3 text-blue-400 font-semibold text-xs md:text-sm border-2 border-blue-700 hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-200 cursor-pointer rounded-lg flex items-center gap-1.5 md:gap-2 whitespace-nowrap'>
                                    <span>GitHub</span>
                                    <FaGithub className='w-3 h-3 md:w-4 md:h-4' />
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
                                <button className='px-4 md:px-6 py-2 md:py-3 text-blue-400 font-semibold text-xs md:text-sm border-2 border-blue-700 hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-200 cursor-pointer rounded-lg flex items-center gap-1.5 md:gap-2 whitespace-nowrap'>
                                    <span>LinkedIn</span>
                                    <FaLinkedin className='w-3 h-3 md:w-4 md:h-4' />
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
