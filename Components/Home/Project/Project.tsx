import SectionHeading from '@/Components/Healper/SectionHeading'
import { caseStudyData } from '@/Data/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaUsers, FaChartLine, FaClock, FaGithub } from 'react-icons/fa'

const Project = () => {
    return (
        <div id='project' className='scroll-mt-16 pt-10 md:pt-20 pb-10 md:pb-20 bg-slate-950'>
            <div className='max-w-7xl mx-auto px-6 md:px-12'>
                <div className='text-center mb-6 md:mb-8'>
                    <SectionHeading data-aos="fade-down" data-aos-duration="1000">Featured Case Studies</SectionHeading>
                    <p className='text-center text-slate-400 mt-4 md:mt-6 max-w-2xl mx-auto text-sm md:text-base font-light'>
                        Detailed breakdowns of significant projects showcasing problem-solving, technical depth, and business impact
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-12'>
                {caseStudyData.map((caseStudy, index) => (
                    <div
                        key={caseStudy.id}
                        data-aos="fade-up"
                        data-aos-delay={index * 150}
                        data-aos-duration="800"
                        className='group border border-slate-800 rounded-lg overflow-hidden hover:border-slate-700 bg-slate-900/40 hover:bg-slate-900/60 backdrop-blur-sm transition-all duration-300 flex flex-col h-full'
                    >
                        {/* Image */}
                        <div className='relative h-48 md:h-56 overflow-hidden bg-slate-800'>
                            <Link href={caseStudy.url} target='_blank'>
                                <Image
                                    src={caseStudy.image}
                                    alt={caseStudy.title}
                                    width={400}
                                    height={300}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer'
                                />
                            </Link>
                        </div>

                        {/* Content */}
                        <div className='p-6 flex flex-col flex-grow'>
                            {/* Title */}
                            <h3 className='text-xl font-bold text-white mb-3'>
                                {caseStudy.title}
                            </h3>

                            {/* Meta Info */}
                            <div className='flex flex-wrap gap-3 mb-4 text-xs text-slate-400'>
                                <div className='flex items-center gap-1'>
                                    <FaClock className='text-slate-500' />
                                    {caseStudy.duration}
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaUsers className='text-slate-500' />
                                    {caseStudy.users}
                                </div>
                                <div className='flex items-center gap-1'>
                                    <FaChartLine className='text-slate-500' />
                                    {caseStudy.role}
                                </div>
                            </div>

                            {/* Problem & Solution */}
                            <p className='text-slate-400 text-xs mb-3 leading-relaxed font-light'>
                                <span className='font-semibold text-slate-200'>Problem:</span> {caseStudy.problem}
                            </p>
                            <p className='text-slate-400 text-xs mb-4 leading-relaxed font-light'>
                                <span className='font-semibold text-slate-200'>Solution:</span> {caseStudy.solution}
                            </p>

                            {/* Key Metrics */}
                            <div className='bg-slate-900/50 rounded-lg p-3 mb-4 border border-slate-800'>
                                <p className='text-white text-xs font-semibold mb-2'>Impact:</p>
                                <div className='grid grid-cols-2 gap-2'>
                                    {Object.entries(caseStudy.keyMetrics).slice(0, 4).map(([key, value]) => (
                                        <div key={key} className='text-xs'>
                                            <p className='text-slate-200 font-bold text-sm'>{value}</p>
                                            <p className='text-slate-500 text-xs'>{key}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div className='mb-4'>
                                <p className='text-white text-xs font-semibold mb-2'>Stack:</p>
                                <div className='flex flex-wrap gap-1.5'>
                                    {caseStudy.techStack.slice(0, 4).map((tech) => (
                                        <span
                                            key={tech}
                                            className='bg-slate-800 text-slate-300 text-xs px-2 py-1 rounded border border-slate-700'
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {caseStudy.techStack.length > 4 && (
                                        <span className='text-slate-500 text-xs px-2 py-1'>
                                            +{caseStudy.techStack.length - 4}
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* CTA Buttons */}
                            <div className='flex gap-2 flex-wrap mt-auto pt-4 border-t border-slate-800'>
                                <Link href={caseStudy.url} target='_blank' className='flex-1 min-w-max'>
                                    <button className='w-full px-4 py-2 bg-white text-slate-950 text-xs font-semibold rounded hover:bg-slate-100 transition-all duration-200'>
                                        View Demo
                                    </button>
                                </Link>
                                <Link href={caseStudy.githubUrl} target='_blank' className='flex-1 min-w-max px-4 py-2 border border-slate-700 text-slate-300 text-xs font-semibold rounded hover:border-slate-600 hover:bg-slate-900/30 transition-all duration-200 flex items-center justify-center gap-1'>
                                    <FaGithub className='w-3 h-3' />
                                    GitHub
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
                </div>

                {/* View All Case Studies CTA */}
                <div className='text-center mt-12'>
                    <p className='text-slate-400 mb-4 font-light'>Want to dive deeper into these projects?</p>
                    <a
                        href="https://calendly.com/baljeetgunghas5"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='inline-block px-8 py-3 bg-white text-slate-950 font-semibold rounded-lg hover:bg-slate-100 transition-all duration-200'
                    >
                        Schedule a Call to Discuss
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Project
