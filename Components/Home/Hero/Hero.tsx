'use client'

import { BaseInfo } from '@/Data/data'
import Image from 'next/image'
import React from 'react'
import { FaDownload, FaGithub, FaLinkedin, FaTrophy, FaUsers, FaChartLine, FaCode, FaArrowRight } from 'react-icons/fa'

const Hero = () => {

    const metrics = [
        { icon: FaTrophy, value: '4+', label: 'Years Senior' },
        { icon: FaUsers, value: '100k+', label: 'Users Served' },
        { icon: FaChartLine, value: '62%', label: 'Perf Improvement' },
        { icon: FaCode, value: '17+', label: 'Projects Shipped' },
    ];

    return (
        <div className='w-full bg-slate-950 overflow-hidden relative z-0' style={{ paddingTop: 'var(--navbar-height-mobile)' }}>

            {/* Subtle background elements */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                {/* Top right glow */}
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl'></div>
                {/* Bottom left glow */}
                <div className='absolute -bottom-40 -left-40 w-96 h-96 bg-slate-700/20 rounded-full blur-3xl'></div>
            </div>

            {/* Main Content */}
            <div className='relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 justify-items-between w-full py-12 md:py-0 min-h-screen md:h-screen md:flex md:items-center'>

                    {/* Left Content */}
                    <div className='flex flex-col justify-center' data-aos='fade-right' data-aos-duration="800">

                        {/* Badge */}
                        <div className='mb-4 inline-block'
                            data-aos='fade-down'
                            data-aos-delay="100"
                        >
                            <span className='text-xs font-medium text-slate-400 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-900/50 backdrop-blur-sm'>
                                ✨ Senior Software Engineer • 4+ Years
                            </span>
                        </div>

                        {/* Main Headline - Clean & Elegant */}
                        <h1
                            className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight text-white tracking-tight'
                            data-aos='fade-up'
                            data-aos-delay="200"
                        >
                            Architecting
                            <br />
                            <span className='text-slate-400'>High-Performance</span>
                            <br />
                            Systems
                        </h1>

                        {/* Subheadline */}
                        <p
                            className='text-sm md:text-base text-slate-400 leading-relaxed max-w-xl mb-6 md:mb-8 font-light'
                            data-aos='fade-up'
                            data-aos-delay="300"
                        >
                            {BaseInfo.description}
                        </p>

                        {/* Metrics - Clean Grid */}
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mb-6 md:mb-8'
                            data-aos='fade-up'
                            data-aos-delay="400"
                        >
                            {metrics.map((metric, idx) => {
                                const Icon = metric.icon;
                                return (
                                    <div
                                        key={idx}
                                        className='group p-3 md:p-4 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                                    >
                                        <div className='flex items-center gap-2 mb-2'>
                                            <Icon className='w-4 h-4 text-slate-500 group-hover:text-slate-300 transition-colors' />
                                        </div>
                                        <div className='text-xl md:text-2xl font-bold text-white mb-0.5'>
                                            {metric.value}
                                        </div>
                                        <p className='text-xs text-slate-500 group-hover:text-slate-400 transition-colors'>
                                            {metric.label}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>

                        {/* CTA Buttons */}
                        <div className='flex flex-col sm:flex-row gap-3 items-start sm:items-center'
                            data-aos='fade-up'
                            data-aos-delay="500"
                        >
                            {/* Primary Button */}
                            <a
                                href={'/BALJEETSINGHRESUME.pdf'}
                                download
                                className='group w-full sm:w-auto'
                            >
                                <button className='w-full sm:w-auto px-5 md:px-6 py-2 md:py-3 text-sm bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-sm hover:shadow-md'>
                                    <FaDownload className='w-4 h-4' />
                                    <span>Download Resume</span>
                                </button>
                            </a>

                            {/* Secondary Button */}
                            <a
                                href="#project"
                                className='group w-full sm:w-auto'
                            >
                                <button className='w-full sm:w-auto px-5 md:px-6 py-2 md:py-3 text-sm border border-slate-700 hover:border-slate-600 text-white font-semibold rounded-lg bg-transparent hover:bg-slate-900/30 transition-all duration-300 flex items-center justify-center gap-2'>
                                    <span>Explore My Work</span>
                                    <FaArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                                </button>
                            </a>
                        </div>

                        {/* Social Links */}
                        <div className='flex gap-3 sm:gap-4 md:gap-3 mt-6 md:mt-8 items-center'
                            data-aos='fade-up'
                            data-aos-delay="600"
                        >
                            <a
                                href="https://github.com/BaljeetGunghas"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900/80 flex items-center justify-center transition-all duration-300 flex-shrink-0'
                            >
                                <FaGithub className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-white transition-colors' />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/dev-baljeet-gunghas-b6698421b/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='group w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/50 hover:bg-slate-900/80 flex items-center justify-center transition-all duration-300 flex-shrink-0'
                            >
                                <FaLinkedin className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-slate-400 group-hover:text-white transition-colors' />
                            </a>
                        </div>
                    </div>

                    {/* Right - Profile Image */}
                    <div className='hidden lg:flex items-center justify-center min-h-screen'
                        data-aos='zoom-in'
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        <div className='relative group w-full h-full flex items-center justify-center py-12'>
                            {/* Image container */}
                            <div className='relative w-full max-w-sm h-auto overflow-hidden rounded-xl border border-slate-800 hover:border-slate-700 transition-all duration-200 bg-slate-900/50 backdrop-blur-sm'>
                                <Image
                                    src={BaseInfo.profilePic}
                                    alt={BaseInfo.name}
                                    width={150}
                                    height={180}
                                    className='w-100 h-100 object-cover group-hover:scale-105 transition-transform duration-300'
                                    priority
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 70vw"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:flex flex-col items-center gap-3 text-slate-600 hover:text-slate-400 transition-colors'
                data-aos='fade-up'
                data-aos-delay="700"
            >
                <span className='text-xs font-medium uppercase tracking-wide'>Scroll to explore</span>
                <svg className='w-5 h-5 animate-bounce' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 14l-7 7m0 0l-7-7m7 7V3' />
                </svg>
            </div>
        </div>
    );
}

export default Hero
