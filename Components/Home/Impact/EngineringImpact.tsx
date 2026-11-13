import SectionHeading from '@/Components/Healper/SectionHeading'
import { performanceWins } from '@/Data/data'
import React from 'react'
import { FaArrowUp, FaChartLine, FaCoins, FaTachometerAlt } from 'react-icons/fa'

const EngineringImpact = () => {
    return (
        <div id='impact' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-8 md:mb-12'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Engineering Impact</SectionHeading>
                    <p className='text-center text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Quantifiable improvements across performance, business metrics, and infrastructure
                    </p>
                </div>

                {/* Performance Wins Table */}
                <div className='border border-slate-800 rounded-lg overflow-hidden bg-slate-900/40 backdrop-blur-sm'>
                    <div className='overflow-x-auto'>
                        <table className='w-full text-xs md:text-sm'>
                            <thead>
                                <tr className='bg-slate-900/60 border-b border-slate-800'>
                                    <th className='px-6 py-4 text-left text-white font-bold'>Category</th>
                                    <th className='px-6 py-4 text-left text-white font-bold'>Metric</th>
                                    <th className='px-6 py-4 text-center text-white font-bold'>Before</th>
                                    <th className='px-6 py-4 text-center text-white font-bold'>After</th>
                                    <th className='px-6 py-4 text-center text-emerald-300 font-bold'>Improvement</th>
                                    <th className='px-6 py-4 text-left text-white font-bold'>Business Impact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {performanceWins.map((win, index) => (
                                    <tr
                                        key={index}
                                        data-aos="fade-up"
                                        data-aos-delay={index * 50}
                                        className='border-b border-slate-800 hover:bg-slate-900/50 transition-colors'
                                    >
                                        <td className='px-4 md:px-6 py-4'>
                                            <span className='bg-slate-800 text-slate-300 text-xs px-2 md:px-3 py-1 rounded-full font-semibold'>
                                                {win.category}
                                            </span>
                                        </td>
                                        <td className='px-4 md:px-6 py-4 text-slate-300 text-xs md:text-sm'>{win.metric}</td>
                                        <td className='px-4 md:px-6 py-4 text-center text-slate-400 text-xs md:text-sm'>{win.before}</td>
                                        <td className='px-4 md:px-6 py-4 text-center text-slate-200 font-bold text-xs md:text-sm'>{win.after}</td>
                                        <td className='px-4 md:px-6 py-4 text-center'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <FaArrowUp className='text-slate-400 w-3 h-3 md:w-4 md:h-4' />
                                                <span className='font-bold text-slate-300 text-xs md:text-sm'>{win.improvement}</span>
                                            </div>
                                        </td>
                                        <td className='px-4 md:px-6 py-4 text-slate-400 text-xs md:text-sm font-light'>{win.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Impact Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16'>
                    {/* API Performance */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors'>
                                <FaTachometerAlt className='text-slate-400 w-6 h-6' />
                            </div>
                            <h4 className='text-base md:text-lg font-bold text-white'>Performance</h4>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-2xl md:text-3xl font-bold text-slate-200'>62%</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>API Latency Reduction</p>
                                <p className='text-xs text-slate-500 mt-1'>800ms &rarr; 300ms average</p>
                            </div>
                            <div>
                                <p className='text-xl md:text-2xl font-bold text-slate-200'>94%</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Query Optimization</p>
                                <p className='text-xs text-slate-500 mt-1'>2.5s &rarr; 100ms queries</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="150"
                        className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors'>
                                <FaChartLine className='text-slate-400 w-6 h-6' />
                            </div>
                            <h4 className='text-base md:text-lg font-bold text-white'>Business</h4>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-2xl md:text-3xl font-bold text-slate-200'>8%</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Conversion Rate ↑</p>
                                <p className='text-xs text-slate-500 mt-1'>From performance improvements</p>
                            </div>
                            <div>
                                <p className='text-xl md:text-2xl font-bold text-slate-200'>12%</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>User Retention ↑</p>
                                <p className='text-xs text-slate-500 mt-1'>30-day retention improved</p>
                            </div>
                        </div>
                    </div>

                    {/* Cost & Scale */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className='border border-slate-800 hover:border-slate-700 rounded-lg p-6 md:p-8 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-slate-700 transition-colors'>
                                <FaCoins className='text-slate-400 w-6 h-6' />
                            </div>
                            <h4 className='text-base md:text-lg font-bold text-white'>Scale</h4>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-xl md:text-2xl font-bold text-slate-200'>$15k/mo</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Infrastructure Savings</p>
                                <p className='text-xs text-slate-500 mt-1'>Through optimization</p>
                            </div>
                            <div>
                                <p className='text-2xl md:text-3xl font-bold text-slate-200'>100k+</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Concurrent Users</p>
                                <p className='text-xs text-slate-500 mt-1'>Scaled from 500</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Learnings */}
                <div className='mt-16 md:mt-20 border border-slate-800 rounded-lg p-6 md:p-8 bg-slate-900/40 backdrop-blur-sm'>
                    <h3 className='text-xl md:text-2xl font-bold text-white mb-6 md:mb-8'>Key Engineering Learnings</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-slate-600 rounded-full flex-shrink-0'></div>
                            <div>
                                <p className='font-bold text-white mb-1 text-sm md:text-base'>Scalability requires architecture thinking</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Monolithic apps don&apos;t scale; system redesign was crucial</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-slate-600 rounded-full flex-shrink-0'></div>
                            <div>
                                <p className='font-bold text-white mb-1 text-sm md:text-base'>Caching is powerful</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Redis solved 60% of performance issues</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-slate-600 rounded-full flex-shrink-0'></div>
                            <div>
                                <p className='font-bold text-white mb-1 text-sm md:text-base'>Database design matters</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Good schema + indexing = 10x query speed</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-slate-600 rounded-full flex-shrink-0'></div>
                            <div>
                                <p className='font-bold text-white mb-1 text-sm md:text-base'>Monitoring is critical</p>
                                <p className='text-xs md:text-sm text-slate-400 font-light'>Can&apos;t optimize what you don&apos;t measure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EngineringImpact
