import SectionHeading from '@/Components/Healper/SectionHeading'
import { performanceWins } from '@/Data/data'
import React from 'react'
import { FaArrowUp, FaChartLine, FaCoins, FaTachometerAlt } from 'react-icons/fa'

const EngineringImpact = () => {
    return (
        <div id='impact' className='scroll-mt-16 pt-16 pb-16 bg-[#050709]'>
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Engineering Impact</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Quantifiable improvements across performance, business metrics, and infrastructure
                </p>
            </div>

            <div className='w-[80%] mx-auto mt-12'>
                {/* Performance Wins Table */}
                <div className='bg-[#0f0715] border border-blue-900 rounded-lg overflow-hidden'>
                    <div className='overflow-x-auto'>
                        <table className='w-full text-sm'>
                            <thead>
                                <tr className='bg-[#1a0f26] border-b border-blue-900'>
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
                                        className='border-b border-blue-900 hover:bg-[#1a0f26] transition-colors'
                                    >
                                        <td className='px-6 py-4'>
                                            <span className='bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full font-semibold'>
                                                {win.category}
                                            </span>
                                        </td>
                                        <td className='px-6 py-4 text-gray-300'>{win.metric}</td>
                                        <td className='px-6 py-4 text-center text-gray-400'>{win.before}</td>
                                        <td className='px-6 py-4 text-center text-emerald-300 font-bold'>{win.after}</td>
                                        <td className='px-6 py-4 text-center'>
                                            <div className='flex items-center justify-center gap-2'>
                                                <FaArrowUp className='text-emerald-400 w-4 h-4' />
                                                <span className='font-bold text-emerald-300'>{win.improvement}</span>
                                            </div>
                                        </td>
                                        <td className='px-6 py-4 text-gray-400 text-sm'>{win.impact}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Impact Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
                    {/* API Performance */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="100"
                        className='bg-gradient-to-br from-blue-900 to-blue-950 border border-blue-800 rounded-lg p-8'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-blue-800 rounded-lg flex items-center justify-center'>
                                <FaTachometerAlt className='text-blue-300 w-6 h-6' />
                            </div>
                            <h4 className='text-lg font-bold text-white'>Performance</h4>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-3xl font-bold text-blue-300'>62%</p>
                                <p className='text-sm text-gray-400'>API Latency Reduction</p>
                                <p className='text-xs text-gray-500 mt-1'>800ms → 300ms average</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-emerald-300'>94%</p>
                                <p className='text-sm text-gray-400'>Query Optimization</p>
                                <p className='text-xs text-gray-500 mt-1'>2.5s → 100ms queries</p>
                            </div>
                        </div>
                    </div>

                    {/* Business Impact */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="150"
                        className='bg-gradient-to-br from-emerald-900 to-emerald-950 border border-emerald-800 rounded-lg p-8'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-emerald-800 rounded-lg flex items-center justify-center'>
                                <FaChartLine className='text-emerald-300 w-6 h-6' />
                            </div>
                            <h4 className='text-lg font-bold text-white'>Business</h4>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-3xl font-bold text-emerald-300'>8%</p>
                                <p className='text-sm text-gray-400'>Conversion Rate ↑</p>
                                <p className='text-xs text-gray-500 mt-1'>From performance improvements</p>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-purple-300'>12%</p>
                                <p className='text-sm text-gray-400'>User Retention ↑</p>
                                <p className='text-xs text-gray-500 mt-1'>30-day retention improved</p>
                            </div>
                        </div>
                    </div>

                    {/* Cost & Scale */}
                    <div
                        data-aos="zoom-in"
                        data-aos-delay="200"
                        className='bg-gradient-to-br from-orange-900 to-orange-950 border border-orange-800 rounded-lg p-8'
                    >
                        <div className='flex items-center gap-3 mb-4'>
                            <div className='w-12 h-12 bg-orange-800 rounded-lg flex items-center justify-center'>
                                <FaCoins className='text-orange-300 w-6 h-6' />
                            </div>
                            <h4 className='text-lg font-bold text-white'>Scale</h4>
                        </div>
                        <div className='space-y-3'>
                            <div>
                                <p className='text-2xl font-bold text-orange-300'>$15k/mo</p>
                                <p className='text-sm text-gray-400'>Infrastructure Savings</p>
                                <p className='text-xs text-gray-500 mt-1'>Through optimization</p>
                            </div>
                            <div>
                                <p className='text-3xl font-bold text-blue-300'>100k+</p>
                                <p className='text-sm text-gray-400'>Concurrent Users</p>
                                <p className='text-xs text-gray-500 mt-1'>Scaled from 500</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Key Learnings */}
                <div className='mt-12 bg-[#1a0f26] border border-purple-900 rounded-lg p-8'>
                    <h3 className='text-xl font-bold text-white mb-6'>Key Engineering Learnings</h3>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-purple-400 rounded-full'></div>
                            <div>
                                <p className='font-bold text-white mb-1'>Scalability requires architecture thinking</p>
                                <p className='text-sm text-gray-400'>Monolithic apps don't scale; system redesign was crucial</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-blue-400 rounded-full'></div>
                            <div>
                                <p className='font-bold text-white mb-1'>Caching is powerful</p>
                                <p className='text-sm text-gray-400'>Redis solved 60% of performance issues</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-emerald-400 rounded-full'></div>
                            <div>
                                <p className='font-bold text-white mb-1'>Database design matters</p>
                                <p className='text-sm text-gray-400'>Good schema + indexing = 10x query speed</p>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <div className='w-1 bg-orange-400 rounded-full'></div>
                            <div>
                                <p className='font-bold text-white mb-1'>Monitoring is critical</p>
                                <p className='text-sm text-gray-400'>Can't optimize what you don't measure</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EngineringImpact
