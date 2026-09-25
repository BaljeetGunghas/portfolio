import SectionHeading from '@/Components/Healper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaCheck, FaCode, FaDatabase, FaServer } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='scroll-mt-16 pt-16 pb-16 bg-[#050709] '>
        <SectionHeading data-aos="fade-down" data-aos-duration="1000">About Me</SectionHeading>
        <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mt-20'>
            {/* Left Content */}
            <div data-aos="fade-right" data-aos-duration="1000">
                <h2 className='text-bg text-[26px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-100 mb-6'>
                    {aboutInfo.title}
                </h2>
                <p className='mt-4 text-base text-gray-400 leading-relaxed mb-8'>
                    {aboutInfo.description}
                </p>

                {/* Engineering Pillars */}
                <div className='space-y-5 mb-10'>
                    <div className='flex items-start space-x-4' data-aos="fade-up" data-aos-delay="100">
                        <div className='w-8 h-8 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                            <FaCode className='text-blue-400 text-sm' />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-gray-200'>Full-Stack Expertise</h4>
                            <p className='text-sm text-gray-400 mt-1'>React, Node.js, TypeScript across 4+ years of production development</p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4' data-aos="fade-up" data-aos-delay="200">
                        <div className='w-8 h-8 bg-emerald-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                            <FaDatabase className='text-emerald-400 text-sm' />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-gray-200'>System Design & Architecture</h4>
                            <p className='text-sm text-gray-400 mt-1'>Architecting systems for 100k+ concurrent users, database optimization, scaling patterns</p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4' data-aos="fade-up" data-aos-delay="300">
                        <div className='w-8 h-8 bg-purple-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                            <FaServer className='text-purple-400 text-sm' />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-gray-200'>Performance Optimization</h4>
                            <p className='text-sm text-gray-400 mt-1'>62% API latency reduction, 94% query optimization, 8% conversion rate improvement</p>
                        </div>
                    </div>

                    <div className='flex items-start space-x-4' data-aos="fade-up" data-aos-delay="400">
                        <div className='w-8 h-8 bg-yellow-900 rounded-lg flex items-center justify-center flex-shrink-0 mt-1'>
                            <FaCheck className='text-yellow-400 text-sm' />
                        </div>
                        <div>
                            <h4 className='text-lg font-bold text-gray-200'>Technical Leadership</h4>
                            <p className='text-sm text-gray-400 mt-1'>Mentored 3+ engineers, established code quality standards, architectural decision-making</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Content - Stats Grid */}
            <div className='grid grid-cols-2 gap-8 items-start'>
                {/* Years of Experience */}
                <div data-aos="zoom-in" data-aos-delay="100" className='bg-gradient-to-br from-blue-900 to-blue-950 p-8 rounded-xl border border-blue-800 hover:border-blue-600 transition-all'>
                    <p className='text-4xl md:text-5xl font-bold text-blue-300 mb-3'>{aboutInfo.yearsExp}</p>
                    <p className='text-sm text-gray-300 font-semibold'>Years of Professional</p>
                    <p className='text-xs text-gray-400'>Experience</p>
                </div>

                {/* Production Apps */}
                <div data-aos="zoom-in" data-aos-delay="150" className='bg-gradient-to-br from-purple-900 to-purple-950 p-8 rounded-xl border border-purple-800 hover:border-purple-600 transition-all'>
                    <p className='text-4xl md:text-5xl font-bold text-purple-300 mb-3'>{aboutInfo.appsShipped}</p>
                    <p className='text-sm text-gray-300 font-semibold'>Production Apps</p>
                    <p className='text-xs text-gray-400'>Shipped</p>
                </div>

                {/* Users Served */}
                <div data-aos="zoom-in" data-aos-delay="200" className='bg-gradient-to-br from-emerald-900 to-emerald-950 p-8 rounded-xl border border-emerald-800 hover:border-emerald-600 transition-all'>
                    <p className='text-4xl md:text-5xl font-bold text-emerald-300 mb-3'>{aboutInfo.usersServed}</p>
                    <p className='text-sm text-gray-300 font-semibold'>Users Served</p>
                    <p className='text-xs text-gray-400'>At Scale</p>
                </div>

                {/* Performance Improvement */}
                <div data-aos="zoom-in" data-aos-delay="250" className='bg-gradient-to-br from-orange-900 to-orange-950 p-8 rounded-xl border border-orange-800 hover:border-orange-600 transition-all'>
                    <p className='text-4xl md:text-5xl font-bold text-orange-300 mb-3'>{aboutInfo.performanceWins}</p>
                    <p className='text-sm text-gray-300 font-semibold'>Performance</p>
                    <p className='text-xs text-gray-400'>Improvement</p>
                </div>
            </div>
        </div>
    </div>
)

}

export default About
