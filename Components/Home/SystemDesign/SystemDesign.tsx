import SectionHeading from '@/Components/Healper/SectionHeading'
import { systemDesignHighlights } from '@/Data/data'
import React from 'react'
import { FaServer, FaDatabase, FaCode, FaNetworkWired } from 'react-icons/fa'

const SystemDesign = () => {
    const icons = [FaServer, FaDatabase, FaCode, FaNetworkWired]

    return (
        <div id='architecture' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-8 md:mb-12'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">System Architecture</SectionHeading>
                    <p className='text-center text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Key architectural decisions and system design patterns that enabled scale
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mt-12'>
                {systemDesignHighlights.map((highlight, index) => {
                    const IconComponent = icons[index % icons.length]
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                            className='group border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 transition-all duration-300 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm'
                        >
                            <div className='flex flex-col sm:flex-row items-start gap-4 md:gap-6'>
                                <div className='w-12 h-12 md:w-14 md:h-14 bg-slate-800 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-700 transition-colors'>
                                    <IconComponent className='text-slate-400 w-6 h-6 md:w-7 md:h-7 group-hover:text-slate-300 transition-colors' />
                                </div>
                                <div className='flex-1 min-w-0'>
                                    <h3 className='text-lg md:text-xl font-bold text-white mb-2'>{highlight.title}</h3>
                                    <p className='text-slate-400 text-xs md:text-sm leading-relaxed mb-4 font-light'>{highlight.description}</p>
                                    <div className='bg-slate-900/50 rounded p-3 border border-slate-800'>
                                        <p className='text-xs font-semibold text-slate-300 uppercase tracking-wide mb-1'>Impact</p>
                                        <p className='text-sm font-bold text-slate-200'>{highlight.impact}</p>
                                        <p className='text-xs text-slate-500 mt-1'>Project: {highlight.project}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

                {/* Architecture Decision Framework */}
                <div className='mt-16 md:mt-20'>
                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center'>Architecture Decision Framework</h3>
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6'>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="100"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 text-center bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-slate-200 font-bold mb-3 text-lg'>Understand</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Deep problem analysis and requirement gathering</p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="150"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 text-center bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-slate-200 font-bold mb-3 text-lg'>Design</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Evaluate trade-offs and choose appropriate patterns</p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="200"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 text-center bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-slate-200 font-bold mb-3 text-lg'>Implement</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Execute with quality and performance focus</p>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="250"
                            className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 text-center bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                        >
                            <h4 className='text-slate-200 font-bold mb-3 text-lg'>Measure</h4>
                            <p className='text-xs md:text-sm text-slate-400 font-light'>Monitor impact and continuously optimize</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemDesign
