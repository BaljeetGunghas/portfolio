import SectionHeading from '@/Components/Healper/SectionHeading'
import { caseStudyData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUsers, FaChartLine, FaClock, FaGithub } from 'react-icons/fa'

const Project = () => {
    return (
        <div id='project' className='scroll-mt-16 pt-16 pb-16 bg-[#050709]'>
            <div className='text-center mb-8'>
                <SectionHeading data-aos="fade-down" data-aos-duration="1000">Featured Case Studies</SectionHeading>
                <p className='text-center text-gray-400 mt-6 max-w-2xl mx-auto'>
                    Detailed breakdowns of significant projects showcasing problem-solving, technical depth, and business impact
                </p>
            </div>

            <div className='w-[80%] mx-auto mt-12 space-y-12'>
                {caseStudyData.map((caseStudy, index) => (
                    <div
                        key={caseStudy.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        data-aos-duration="800"
                        className='bg-[#0f0715] border border-blue-900 rounded-xl overflow-hidden hover:border-blue-600 transition-all duration-300'
                    >
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                            {/* Image */}
                            <div className='relative h-64 md:h-80 overflow-hidden'>
                                <Link href={caseStudy.url} target='_blank'>
                                    <Image
                                        src={caseStudy.image}
                                        alt={caseStudy.title}
                                        width={400}
                                        height={300}
                                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer'
                                    />
                                </Link>
                            </div>

                            {/* Content */}
                            <div className='p-6 md:p-8 flex flex-col justify-between'>
                                {/* Header */}
                                <div>
                                    <h3 className='text-2xl md:text-3xl font-bold text-white mb-2'>
                                        {caseStudy.title}
                                    </h3>
                                    <div className='flex flex-wrap gap-4 mb-6 text-sm text-gray-400'>
                                        <div className='flex items-center gap-1'>
                                            <FaClock className='text-blue-400' />
                                            {caseStudy.duration}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <FaUsers className='text-emerald-400' />
                                            {caseStudy.users}
                                        </div>
                                        <div className='flex items-center gap-1'>
                                            <FaChartLine className='text-purple-400' />
                                            {caseStudy.role}
                                        </div>
                                    </div>

                                    {/* Problem & Solution Summary */}
                                    <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                                        <span className='font-semibold text-white'>Problem:</span> {caseStudy.problem}
                                    </p>
                                    <p className='text-gray-300 text-sm mb-4 leading-relaxed'>
                                        <span className='font-semibold text-white'>Solution:</span> {caseStudy.solution}
                                    </p>

                                    {/* Key Metrics */}
                                    <div className='bg-[#1a0f26] rounded-lg p-4 mb-6 border border-blue-900'>
                                        <p className='text-white text-sm font-semibold mb-3'>Key Impact:</p>
                                        <div className='grid grid-cols-2 gap-3'>
                                            {Object.entries(caseStudy.keyMetrics).slice(0, 4).map(([key, value]) => (
                                                <div key={key} className='text-xs'>
                                                    <p className='text-blue-400 font-bold'>{value}</p>
                                                    <p className='text-gray-500'>{key}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className='mb-6'>
                                        <p className='text-white text-sm font-semibold mb-2'>Tech Stack:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {caseStudy.techStack.slice(0, 5).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className='bg-blue-900 text-blue-200 text-xs px-3 py-1 rounded-full'
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                            {caseStudy.techStack.length > 5 && (
                                                <span className='text-gray-500 text-xs px-3 py-1'>
                                                    +{caseStudy.techStack.length - 5} more
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>

                                {/* CTA */}
                                <div className='flex gap-3 flex-wrap'>
                                    <Link href={caseStudy.url} target='_blank'>
                                        <button className='flex-1 min-w-max px-6 py-2 bg-blue-700 text-white text-sm font-semibold rounded-lg hover:bg-blue-800 transition-all duration-200'>
                                            View Live Demo
                                        </button>
                                    </Link>
                                    <Link href={caseStudy.githubUrl} target='_blank' className='flex-1 min-w-max px-6 py-2 border border-blue-700 text-blue-400 text-sm font-semibold rounded-lg hover:bg-blue-900 hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center gap-2'>
                                        <FaGithub className='w-4 h-4' />
                                        GitHub
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Case Studies CTA */}
            <div className='text-center mt-12'>
                <p className='text-gray-400 mb-4'>Want to dive deeper into these projects?</p>
                <a
                    href="https://calendly.com/baljeetgunghas5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='inline-block px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-200'
                >
                    Schedule a Call to Discuss
                </a>
            </div>
        </div>
    )
}

export default Project
