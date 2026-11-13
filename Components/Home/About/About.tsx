import SectionHeading from '@/Components/Healper/SectionHeading'
import { aboutInfo } from '@/Data/data'
import React from 'react'
import { FaCheck, FaCode, FaDatabase, FaServer } from 'react-icons/fa'

const About = () => {
  return (
    <div id='about' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
        <div className='max-w-7xl mx-auto px-6 md:px-12'>
            <SectionHeading data-aos="fade-down" data-aos-duration="1000">About Me</SectionHeading>

            <div className='mt-8 md:mt-12'>
                {/* Top - Description + Stats Together */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-12'>
                    {/* Left - Description */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4'>
                            {aboutInfo.title}
                        </h2>
                        <p className='text-sm md:text-base text-slate-400 leading-relaxed font-light'>
                            {aboutInfo.description}
                        </p>
                    </div>

                    {/* Right - Large Stats */}
                    <div className='grid grid-cols-2 gap-4 md:gap-6' data-aos="fade-up" data-aos-delay="200">
                        {[
                            { value: aboutInfo.yearsExp, label: 'Years', delay: '100' },
                            { value: aboutInfo.appsShipped, label: 'Apps', delay: '150' },
                            { value: aboutInfo.usersServed, label: 'Users', delay: '200' },
                            { value: aboutInfo.performanceWins, label: 'Perf Gain', delay: '250' },
                        ].map((stat, idx) => (
                            <div key={idx} className='p-5 md:p-6 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300 text-center' data-aos="zoom-in" data-aos-delay={stat.delay}>
                                <p className='text-3xl md:text-4xl font-bold text-white mb-1'>{stat.value}</p>
                                <p className='text-xs md:text-sm text-slate-400'>{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom - Expertise Areas */}
                <div data-aos="fade-up" data-aos-delay="300">
                    <h3 className='text-lg md:text-xl font-bold text-white mb-6'>What I Do</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        {[
                            { icon: FaCode, title: 'Full-Stack', desc: 'React, Node.js, TypeScript' },
                            { icon: FaDatabase, title: 'System Design', desc: '100k+ concurrent users' },
                            { icon: FaServer, title: 'Performance', desc: '62% API latency reduction' },
                            { icon: FaCheck, title: 'Leadership', desc: 'Mentored 3+ engineers' },
                        ].map((item, idx) => {
                            const Icon = item.icon;
                            return (
                                <div key={idx} className='p-4 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300' data-aos="fade-up" data-aos-delay={300 + (idx * 50)}>
                                    <div className='flex flex-col items-center text-center'>
                                        <div className='w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center mb-3'>
                                            <Icon className='text-slate-300 text-lg' />
                                        </div>
                                        <h4 className='text-sm font-bold text-white mb-1'>{item.title}</h4>
                                        <p className='text-xs text-slate-400'>{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default About

