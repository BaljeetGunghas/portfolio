import SectionHeading from '@/Components/Healper/SectionHeading'
import { systemDesignHighlights } from '@/Data/data'
import React from 'react'
import { FaServer, FaDatabase, FaCode, FaNetworkWired } from 'react-icons/fa'

const SystemDesign = () => {
    const icons = [FaServer, FaDatabase, FaCode, FaNetworkWired]

    return (
        <div id='architecture' className='scroll-mt-16 pt-16 pb-16 bg-[#050715]'>
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">System Architecture</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Key architectural decisions and system design patterns that enabled scale
                </p>
            </div>

            <div className='w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                {systemDesignHighlights.map((highlight, index) => {
                    const IconComponent = icons[index % icons.length]
                    return (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            data-aos-duration="800"
                            className='bg-[#0f0715] border border-blue-900 hover:border-blue-600 rounded-lg p-8 transition-all duration-300 hover:shadow-lg'
                        >
                            <div className='flex items-start gap-4'>
                                <div className='w-14 h-14 bg-blue-900 rounded-lg flex items-center justify-center flex-shrink-0'>
                                    <IconComponent className='text-blue-400 w-7 h-7' />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-xl font-bold text-white mb-2'>{highlight.title}</h3>
                                    <p className='text-gray-400 text-sm leading-relaxed mb-4'>{highlight.description}</p>
                                    <div className='bg-[#1a0f26] rounded p-3 border border-blue-900'>
                                        <p className='text-xs font-semibold text-blue-300 uppercase tracking-wide mb-1'>Impact</p>
                                        <p className='text-sm font-bold text-blue-300'>{highlight.impact}</p>
                                        <p className='text-xs text-gray-500 mt-1'>Project: {highlight.project}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

            {/* Architecture Decision Framework */}
            <div className='w-[80%] mx-auto mt-16'>
                <h3 className='text-2xl font-bold text-white mb-8 text-center'>Architecture Decision Framework</h3>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        className='bg-[#1a0f26] border border-purple-900 rounded-lg p-6 text-center'
                    >
                        <h4 className='text-purple-300 font-bold mb-2'>Understand</h4>
                        <p className='text-sm text-gray-400'>Deep problem analysis and requirement gathering</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="150"
                        className='bg-[#1a0f26] border border-blue-900 rounded-lg p-6 text-center'
                    >
                        <h4 className='text-blue-300 font-bold mb-2'>Design</h4>
                        <p className='text-sm text-gray-400'>Evaluate trade-offs and choose appropriate patterns</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className='bg-[#1a0f26] border border-emerald-900 rounded-lg p-6 text-center'
                    >
                        <h4 className='text-emerald-300 font-bold mb-2'>Implement</h4>
                        <p className='text-sm text-gray-400'>Execute with quality and performance focus</p>
                    </div>
                    <div
                        data-aos="fade-up"
                        data-aos-delay="250"
                        className='bg-[#1a0f26] border border-orange-900 rounded-lg p-6 text-center'
                    >
                        <h4 className='text-orange-300 font-bold mb-2'>Measure</h4>
                        <p className='text-sm text-gray-400'>Monitor impact and continuously optimize</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SystemDesign
